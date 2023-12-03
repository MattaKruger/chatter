import json
import random
import os
import pika

from datetime import datetime

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request, WebSocket, Depends, Body
from fastapi.openapi.utils import get_openapi

from db.database import get_db
from sqlalchemy import insert, select, join
from openai import OpenAI
from sqlalchemy.orm import Session

from db.models import t_conversation, t_user, t_user_conversation, t_messages, t_agent

from models.agent import AgentIn, AgentOut
from models.file import FileOut
from models.conversation import ConversationIn, ConversationOut
from models.message import MessageIn
from models.user import UserIn, UserOut, Role

from tools.store_message import store_message

from langchain.prompts.chat import ChatPromptValue
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from langchain.prompts import PromptTemplate, SystemMessagePromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate
from langchain.chat_models.openai import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.output_parsers import PydanticOutputParser

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI()
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

chat = ChatOpenAI(temperature=0, model="gpt-3.5-turbo", max_tokens=250)

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
connections: list[WebSocket] = []

channel = connection.channel()
channel.exchange_declare(exchange='messages', exchange_type='fanout')


conversation = []
@app.websocket("/ws")
async def llm_chat(websocket: WebSocket):
    await websocket.accept()
    while True:
        message = await websocket.receive_json()
        user_message = HumanMessage(content=message['content'])

        conversation.append(user_message)

        response = chat(conversation)
        conversation.append(response)
        await websocket.send_json(response.content)


@app.get("/file_list", response_model=list[FileOut])
def get_all_files():
    files = []
    with os.scandir('sources/') as entries:
        for entry in entries:
            print(entry)
            files.append(FileOut(id=random.randint(1, 100), name=entry.name))
        return files


@app.post("/create_conversation")
def create_conversation(conversation: ConversationIn, db: Session = Depends(get_db)):
    insert_conversation = t_conversation.insert().values(name=conversation.name, created_at=datetime.now())
    db.execute(insert_conversation)
    db.commit()
    # select_statement = t_conversation.select().where(t_conversation.c.conversation_id == conversation_id)
    # return db.execute(select_statement).fetchone()


@app.post("/update_conversation")
def update_conversation(user_id: int, conversation_id: int, messages: MessageIn, db: Session = Depends(get_db)):
    query = t_conversation.select().where(t_conversation.c.conversation_id == conversation_id)
    conversation = db.execute(query)
    db.commit()
    if conversation:
        message = t_messages.insert().values(user_id=user_id, conversation_id=conversation_id, content=messages.content)
        db.execute(message)
    db.commit()


@app.get("/get_conversation", response_model=ConversationOut)
def get_conversation(conversation_id: int, db: Session = Depends(get_db)):
    select_statement = t_conversation.select().where(t_conversation.c.conversation_id == conversation_id)
    result = db.execute(select_statement).fetchone()
    db.commit()
    return ConversationOut.model_validate(result)


@app.get("/messages")
def get_messages(conversation_id: int, db: Session = Depends(get_db)):
    join_condition = join(t_user_conversation, t_messages).select().where(
        (t_user_conversation.c.user_id == t_messages.c.sender_id) &
        (t_user_conversation.c.conversation_id == t_messages.c.conversation_id)
    )
    columns = [t_messages, t_user.c.username.label('sender_username')]
    conversation = select(columns).select_from(join_condition).where(
        t_user_conversation.c.conversation_id == conversation_id
    )


@app.post("/create_user")
def create_user(user: UserIn, db: Session = Depends(get_db)):
    insert_user = insert(t_user).values(username=user.username, password=user.password, role=user.role)
    result = db.execute(insert_user)
    db.commit()


@app.get("/get_users", response_model=list[UserOut])
def get_user(db: Session = Depends(get_db)):
    select_statement = t_user.select()
    result = db.execute(select_statement).fetchall()
    db.commit()
    return [UserOut.model_validate(row) for row in result]
        

@app.post("/create_agent")
def create_agent(agent: AgentIn, db: Session = Depends(get_db)):
    insert_agent = insert(t_agent).values(name=agent.name, prompt=agent.prompt, model=agent.model)
    db.execute(insert_agent)
    db.commit()


@app.post("/get_agents", response_model=list[AgentOut])
def get_agents(db: Session = Depends(get_db)):
    agents = t_agent.select()
    result = db.execute(agents).fetchall()
    db.commit()
    return [AgentOut.model_validate(row) for row in result]


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Custom title",
        version="2.5.0",
        summary="This is a very custom OpenAPI schema",
        description="Here's a longer description of the custom **OpenAPI** schema",
        routes=app.routes,
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi