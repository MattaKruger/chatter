from datetime import datetime
from pydantic import BaseModel, Field


class MessageBase(BaseModel):
    conversation_id: int = Field()
    content: str = Field()
    timestamp: datetime | None = Field(default=datetime.now())


class MessageIn(MessageBase):
    conversation_id: int = Field()
    user_id: int = Field()
    content: str = Field()
    timestamp: datetime = Field(default=datetime.now())


class MessageOut(MessageBase):
    message_id: int = Field()

