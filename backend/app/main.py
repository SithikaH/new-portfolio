from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import (
    QuestionRequest,
    QuestionResponse,
)

from app.rag import ask

app = FastAPI(
    title="Portfolio AI Backend"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Portfolio AI Backend Running"
    }


@app.post("/ask", response_model=QuestionResponse)
def ask_question(request: QuestionRequest):

    answer = ask(request.question)

    return {
        "answer": answer
    }