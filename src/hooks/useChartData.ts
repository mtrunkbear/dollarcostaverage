import { useEffect, useState } from "react";
import { getData } from "../functions/api/getData";
import * as Finance from "../functions/finance";
import { formatReturnData } from "../functions/dataManipulation";
import { ChartProps } from "@/common/types";

const useChartData = ({
  symbol,
  period1,
  period2,
  interval,
  amount,
  type,
}: ChartProps) => {
  const [chartData, setChartData] = useState<any>([{ x: NaN, y: "?" }]);

  useEffect(() => {
    const fetchData = async () => {
      const periods =
        interval === "1d"
          ? 7
          : interval === "1wk"
          ? 4
          : interval === "1mo"
          ? 12
          : null;

      const dataSerie = await getData({ symbol, period1, period2, interval });
      const arrayDatos = dataSerie?.data ?? [];
      const prices = arrayDatos.map((item: any) => item.close);
      const date = arrayDatos.map((item: any) => item.date.split("T")[0]);

      if (type === "dca") {
        const dca = Finance.dolarCostAverage(amount, prices, date);
        setChartData(dca);
      } else if (type === "sharpe") {
        const sharp = Finance.sharpeRollingRatio(prices, date, periods);
        setChartData(sharp);
      } else if (type === "priceReturns") {
        const priceReturns = Finance.priceReturns({
          date: date,
          prices: prices,
          mode: "percent",
        });
        setChartData(priceReturns);
      } else {
        const pricesFormatted = formatReturnData({ x: date, y: prices });
        setChartData(pricesFormatted);
      }
    };

    fetchData();
  }, [symbol, period1, period2, interval, amount, type]);

  return chartData;
};

export default useChartData;
