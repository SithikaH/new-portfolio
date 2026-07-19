from pathlib import Path

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma

from app.services.embeddings import embeddings

BASE_DIR = Path(__file__).resolve().parent
KNOWLEDGE_PATH = BASE_DIR / "knowledge"
VECTOR_DB_PATH = str(BASE_DIR / "chroma_db")


def load_documents():
    documents = []

    pdf_files = list(KNOWLEDGE_PATH.glob("*.pdf"))

    for pdf in pdf_files:
        print(f"Loading {pdf.name}")

        loader = PyPDFLoader(str(pdf))
        documents.extend(loader.load())

    return documents


def split_documents(documents):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )

    return splitter.split_documents(documents)


def ingest():

    print("Loading documents...")

    docs = load_documents()

    print(f"Loaded {len(docs)} pages")

    chunks = split_documents(docs)

    print(f"Created {len(chunks)} chunks")

    Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=VECTOR_DB_PATH,
    )

    print("Vector database created successfully!")


if __name__ == "__main__":
    ingest()