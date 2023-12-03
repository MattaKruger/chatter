from pydantic import BaseModel, Field


class FileOut(BaseModel):
    id: int
    name: str
