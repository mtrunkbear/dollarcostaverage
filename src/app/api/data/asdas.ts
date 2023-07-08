import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log({ params: new URL(request.url) });
  const id = searchParams.get("id");
  console.log({ id });

   return NextResponse.json({data:id })
}
