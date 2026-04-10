from sqlalchemy import Column, Integer, String, Text, Boolean
from database import Base


class User(Base):
    __tablename__ = "users"

    id       = Column(Integer, primary_key=True, index=True)
    email    = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    is_admin = Column(Boolean, default=True)


class Project(Base):
    __tablename__ = "projects"

    id          = Column(Integer, primary_key=True, index=True)
    slug        = Column(String, unique=True, index=True, nullable=False)
    title       = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    overview    = Column(Text, default="")
    role        = Column(String, default="")
    year        = Column(String, default="")
    tech        = Column(String, default="")        # comma-separated
    highlights  = Column(Text, default="")          # newline-separated
    learnings   = Column(Text, default="")          # newline-separated
    github      = Column(String, default="")
    category    = Column(String, default="")


class Experience(Base):
    __tablename__ = "experience"

    id          = Column(Integer, primary_key=True, index=True)
    role        = Column(String, nullable=False)
    company     = Column(String, nullable=False)
    location    = Column(String, default="")
    period      = Column(String, default="")
    summary     = Column(Text, default="")
    bullets     = Column(Text, default="")     # newline-separated
    tech        = Column(String, default="")   # comma-separated
    order       = Column(Integer, default=0)


class Skill(Base):
    __tablename__ = "skills"

    id       = Column(Integer, primary_key=True, index=True)
    name     = Column(String, nullable=False)
    level    = Column(Integer, default=0)      # 0 = tool/practice tag, >0 = language bar
    category = Column(String, default="")      # 'language', 'tool', 'practice'
    order    = Column(Integer, default=0)
