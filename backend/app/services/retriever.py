from app.services.vectorstore import get_vectorstore

vectorstore = get_vectorstore()

retriever = vectorstore.as_retriever(
    search_type="similarity",
    search_kwargs={
        "k": 4
    }
)