from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
import models, schemas
from auth import hash_password, verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/signup", response_model=schemas.TokenResponse, status_code=201)
def signup(body: schemas.SignupRequest, db: Session = Depends(get_db)):
    if db.query(models.User).filter(models.User.email == body.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")

    user = models.User(email=body.email, password=hash_password(body.password))
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_access_token({"sub": user.email})
    return {"access_token": token}


@router.post("/login", response_model=schemas.TokenResponse)
def login(body: schemas.LoginRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == body.email).first()
    if not user or not verify_password(body.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token({"sub": user.email})
    return {"access_token": token}


@router.post("/admin/reset", status_code=200)
def admin_reset(body: schemas.SignupRequest, db: Session = Depends(get_db)):
    """Reset admin password. Only works if the secret key matches."""
    SECRET = "alireza-reset-2024"
    if body.password != SECRET:
        raise HTTPException(status_code=403, detail="Invalid reset key")
    admin = db.query(models.User).filter(models.User.is_admin == True).first()
    if not admin:
        raise HTTPException(status_code=404, detail="No admin account found")
    admin.password = hash_password(body.email)  # email field used as new password
    db.commit()
    return {"message": "Admin password updated. You can now log in with the new password."}


