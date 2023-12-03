from sqlalchemy import create_engine
from .session import engine
from db.session import SessionLocal


def get_db():
    conn = engine.connect()
    try:
        yield conn
    finally:
        conn.close()