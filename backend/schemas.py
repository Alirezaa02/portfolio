from pydantic import BaseModel, EmailStr
from typing import Optional


# ── Auth ─────────────────────────────────────────────
class SignupRequest(BaseModel):
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


# ── Projects ─────────────────────────────────────────
class ProjectBase(BaseModel):
    slug:        str
    title:       str
    description: str
    overview:    Optional[str] = ""
    role:        Optional[str] = ""
    year:        Optional[str] = ""
    tech:        Optional[str] = ""   # comma-separated string


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    title:       Optional[str] = None
    description: Optional[str] = None
    overview:    Optional[str] = None
    role:        Optional[str] = None
    year:        Optional[str] = None
    tech:        Optional[str] = None


class ProjectOut(ProjectBase):
    id: int
    model_config = {"from_attributes": True}


# ── Experience ────────────────────────────────────────
class ExperienceBase(BaseModel):
    role:     str
    company:  str
    location: Optional[str] = ""
    period:   Optional[str] = ""
    summary:  Optional[str] = ""
    bullets:  Optional[str] = ""   # newline-separated
    tech:     Optional[str] = ""   # comma-separated
    order:    Optional[int] = 0


class ExperienceCreate(ExperienceBase):
    pass


class ExperienceUpdate(BaseModel):
    role:     Optional[str] = None
    company:  Optional[str] = None
    location: Optional[str] = None
    period:   Optional[str] = None
    summary:  Optional[str] = None
    bullets:  Optional[str] = None
    tech:     Optional[str] = None
    order:    Optional[int] = None


class ExperienceOut(ExperienceBase):
    id: int
    model_config = {"from_attributes": True}


# ── Skills ────────────────────────────────────────────
class SkillBase(BaseModel):
    name:     str
    level:    Optional[int] = 0
    category: Optional[str] = ""
    order:    Optional[int] = 0


class SkillCreate(SkillBase):
    pass


class SkillUpdate(BaseModel):
    name:     Optional[str] = None
    level:    Optional[int] = None
    category: Optional[str] = None
    order:    Optional[int] = None


class SkillOut(SkillBase):
    id: int
    model_config = {"from_attributes": True}
