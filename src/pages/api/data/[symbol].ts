import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

export default async function handler(req: any, res: any) {
  const { period1, period2, interval, symbol } = req.query;

  if (!period1 || !period2 || !interval || !symbol) {
    return res.status(400).json({ error: "Invalid input parameters" });
  } else {
    try {
      const data = await yahooFinance.historical(symbol, {
        period1,
        period2,
        interval,
      });
      return res.status(200).json(data);
    } catch (error) {
      console.error("The query have an Error" + Object.values(error as any));
    }
  }
}
