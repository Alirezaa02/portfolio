from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from auth import get_current_user
import models, schemas

router = APIRouter(prefix="/skills", tags=["skills"])


@router.get("/", response_model=list[schemas.SkillOut])
def list_skills(db: Session = Depends(get_db)):
    return db.query(models.Skill).order_by(models.Skill.order).all()


@router.post("/", response_model=schemas.SkillOut, status_code=201)
def create_skill(
    body: schemas.SkillCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    skill = models.Skill(**body.model_dump())
    db.add(skill)
    db.commit()
    db.refresh(skill)
    return skill


@router.put("/{skill_id}", response_model=schemas.SkillOut)
def update_skill(
    skill_id: int,
    body: schemas.SkillUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    for field, value in body.model_dump(exclude_none=True).items():
        setattr(skill, field, value)
    db.commit()
    db.refresh(skill)
    return skill


@router.delete("/{skill_id}", status_code=204)
def delete_skill(
    skill_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    db.delete(skill)
    db.commit()
