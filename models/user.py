import enum
from pydantic import BaseModel, Field


class Role(str, enum.Enum):
    admin = "admin"
    default = "default"


class UserIn(BaseModel):
    username: str = Field()
    password: str = Field()
    role: Role = Field()


class UserOut(UserIn):
    user_id: int = Field()
    
    class Config:
        from_attributes = True