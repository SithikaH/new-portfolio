import { NextResponse } from "next/server";

export async function GET() {
  try {
    let fastApiHealthUrl = process.env.FASTAPI_HEALTH_URL || process.env.FASTAPI_URL || "http://127.0.0.1:8000/";
    if (fastApiHealthUrl.endsWith("/ask")) {
      fastApiHealthUrl = fastApiHealthUrl.replace(/\/ask\/?$/, "/");
    }
    if (!fastApiHealthUrl.endsWith("/")) {
      fastApiHealthUrl += "/";
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(fastApiHealthUrl, {
      method: "GET",
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      return NextResponse.json({ status: "online" });
    }
    return NextResponse.json({ status: "offline" }, { status: 503 });
  } catch {
    return NextResponse.json({ status: "offline" }, { status: 503 });
  }
}
