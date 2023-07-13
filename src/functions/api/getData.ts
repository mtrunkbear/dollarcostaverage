import { ApiParams } from "@/common/types";
import axios from "axios";

export const getData = async ({ symbol, period1, period2, interval }: ApiParams) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/data/" + symbol,
    {
      params: { period1, period2, interval },
    }
  );

  return response;
};
