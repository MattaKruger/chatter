from db.database import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

MARIA_DB_STRING = "mariadb+mariadbconnector://root:Sonypro1!@localhost:3306/chatty"

engine = create_engine(MARIA_DB_STRING)

SessionLocal = sessionmaker(autocommit=True, autoflush=True, bind=engine, echo=True)
Base = declarative_base()
