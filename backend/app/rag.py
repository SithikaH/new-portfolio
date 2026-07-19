from langchain_core.prompts import ChatPromptTemplate

from app.services.llm import llm
from app.services.retriever import retriever


PROMPT = ChatPromptTemplate.from_template(
"""
You are Portfolio AI.

You answer questions ONLY using the provided context.

If the answer is not in the context, say:

"I don't have that information in my knowledge base."

Always be concise.

Context:
{context}

Question:
{question}
"""
)


def ask(question: str):

    docs = retriever.invoke(question)

    context = "\n\n".join(
        doc.page_content
        for doc in docs
    )

    chain = PROMPT | llm

    response = chain.invoke({
        "context": context,
        "question": question,
    })

    return response.content