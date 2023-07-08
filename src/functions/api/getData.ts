import axios from "axios";

export const getData = async (
  symbol: string,
  period1: Date,
  period2: Date,
  interval: string
) => {
  const response = await axios.get("http://localhost:3000/api/data/" + symbol, {
    params: { period1, period2, interval },
  });

  return response;
};
