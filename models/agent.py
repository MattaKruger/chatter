import datetime
from pydantic import BaseModel, Field
from db.models import GptModels


class AgentIn(BaseModel):
    name: str = Field()
    prompt: str = Field()
    model: GptModels = Field()

    class Config:
        from_attributes = True


class AgentOut(AgentIn):
    agent_id: int = Field()

    class Config:
        from_attributes = True
    

class Message(BaseModel):
    content: str
    user: bool


class Chat(BaseModel):
    messages: list[Message]
    created_at: datetime.datetime


    class Config:
        from_attributes = True