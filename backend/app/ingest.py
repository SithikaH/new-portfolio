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
    import shutil

    print("Loading documents...")

    docs = load_documents()

    print(f"Loaded {len(docs)} pages")

    chunks = split_documents(docs)

    print(f"Created {len(chunks)} chunks")

    # Clear existing vector database if present
    if Path(VECTOR_DB_PATH).exists():
        print("Resetting existing vector database...")
        try:
            shutil.rmtree(VECTOR_DB_PATH)
        except Exception as e:
            print(f"Could not remove folder directly ({e}), clearing collection via Chroma API...")
            try:
                vstore = Chroma(persist_directory=VECTOR_DB_PATH, embedding_function=embeddings)
                vstore.delete_collection()
            except Exception as collection_err:
                print(f"Collection reset warning: {collection_err}")

    Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=VECTOR_DB_PATH,
    )

    print("Vector database created successfully!")


if __name__ == "__main__":
    ingest()