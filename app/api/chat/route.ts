import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question string is required" },
        { status: 400 }
      );
    }

    // Proxy request to Python FastAPI RAG backend
    let fastApiUrl = process.env.FASTAPI_URL || "http://127.0.0.1:8000/ask";
    if (!fastApiUrl.endsWith("/ask")) {
      fastApiUrl = fastApiUrl.replace(/\/+$/, "") + "/ask";
    }

    const response = await fetch(fastApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("FastAPI error:", errorText);
      return NextResponse.json(
        { error: "Failed to get response from AI backend." },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ answer: data.answer });
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      { error: "Error connecting to AI backend. Please ensure the Python server is running." },
      { status: 500 }
    );
  }
}
