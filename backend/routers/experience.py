from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from auth import get_current_user
import models, schemas

router = APIRouter(prefix="/experience", tags=["experience"])


@router.get("/", response_model=list[schemas.ExperienceOut])
def list_experience(db: Session = Depends(get_db)):
    return db.query(models.Experience).order_by(models.Experience.order).all()


@router.post("/", response_model=schemas.ExperienceOut, status_code=201)
def create_experience(
    body: schemas.ExperienceCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    exp = models.Experience(**body.model_dump())
    db.add(exp)
    db.commit()
    db.refresh(exp)
    return exp


@router.put("/{exp_id}", response_model=schemas.ExperienceOut)
def update_experience(
    exp_id: int,
    body: schemas.ExperienceUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    exp = db.query(models.Experience).filter(models.Experience.id == exp_id).first()
    if not exp:
        raise HTTPException(status_code=404, detail="Experience not found")
    for field, value in body.model_dump(exclude_none=True).items():
        setattr(exp, field, value)
    db.commit()
    db.refresh(exp)
    return exp


@router.delete("/{exp_id}", status_code=204)
def delete_experience(
    exp_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    exp = db.query(models.Experience).filter(models.Experience.id == exp_id).first()
    if not exp:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(exp)
    db.commit()
