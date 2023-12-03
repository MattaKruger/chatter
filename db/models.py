import enum
from sqlalchemy import ForeignKey, Table, Column, Integer, String, MetaData, Enum, DateTime, Text
from db.session import engine
from models.user import Role

from .session import Base

metadata = MetaData()

class PromptType(str, enum.Enum):
    system_context = "system_context"
    instruction = "instruction"

class AgentStatus(str, enum.Enum):
    free = "free"
    in_use = "in_use"

class GptModels(str, enum.Enum):
    gpt_4_1106_preview = "gpt-4-1106-preview"
    gpt_4 = "gpt-4"
    gpt_4_32k = "gpt-4-32k"
    gpt_3_5_turbo = "gpt-3.5-turbo-1106"

t_user = Table(
    "user",
    metadata,
    Column("user_id", Integer, primary_key=True, index=True),
    Column("username", String(50)),
    Column("password", String(100)),
    Column("role", Enum(Role))
)

t_agent = Table(
    "agent",
    metadata,
    Column("agent_id", Integer, primary_key=True, index=True),
    Column("name", String(50)),
    Column("prompt", Text),
    Column("model", Enum(GptModels)),
)

t_conversation = Table(
    "conversation",
    metadata,
    Column("conversation_id", Integer, primary_key=True, index=True),
    Column("name", String(50)),
    Column("created_at", DateTime(timezone=True), nullable=True),
    Column("updated_at", DateTime(timezone=True), nullable=True)
)

t_user_conversation = Table(
    "user_conversation",
    metadata,
    Column("user_id", Integer, ForeignKey("user.user_id"), primary_key=True),
    Column("conversation_id", Integer, ForeignKey("conversation.conversation_id"), primary_key=True)
)

t_messages = Table(
    "messages",
    metadata,
    Column("message_id", Integer, primary_key=True, index=True),
    Column("conversation_id", Integer, ForeignKey("conversation.conversation_id")),
    Column("user_id", Integer, ForeignKey("user.user_id")),
    Column("content", Text),
    Column("timestamp", DateTime(timezone=True))
)

metadata.create_all(engine)