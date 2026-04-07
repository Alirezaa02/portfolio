from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
import models
from routers import auth, projects, experience, skills

# Create all tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Alireza Saeb — Portfolio API")

import os

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:4173",
    os.getenv("FRONTEND_URL", ""),          # set this on Render
    "https://portfolio-demo-ten-topaz.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o for o in ALLOWED_ORIGINS if o],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(projects.router)
app.include_router(experience.router)
app.include_router(skills.router)


@app.get("/")
def root():
    return {"message": "Portfolio API is running"}
