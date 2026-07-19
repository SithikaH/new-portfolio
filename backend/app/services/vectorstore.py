from pathlib import Path
from langchain_chroma import Chroma
from app.services.embeddings import embeddings

BASE_DIR = Path(__file__).resolve().parent.parent
VECTOR_DB_PATH = str(BASE_DIR / "chroma_db")


def get_vectorstore():
    return Chroma(
        persist_directory=VECTOR_DB_PATH,
        embedding_function=embeddings,
    )