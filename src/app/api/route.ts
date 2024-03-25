import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(NextResponse.json({ result: "success" }));
      }, 5000);
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
