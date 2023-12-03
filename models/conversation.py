from datetime import datetime
from pydantic import BaseModel, Field


class MessageIn(BaseModel):
    conversation_id: int = Field()
    content: str = Field()
    timestamp: datetime | None = None

class MessageOut(MessageIn):
    message_id: int = Field()


class ConversationIn(BaseModel):
    name: str = Field()
    created_at: datetime | None = Field(default=datetime.now())
    updated_at: datetime | None = Field()


class ConversationOut(ConversationIn):
    conversation_id: int = Field()

    class Config:
        from_attributes = True

class UserConversation(BaseModel):
    user_id: int = Field()
    conversation_id: int = Field()