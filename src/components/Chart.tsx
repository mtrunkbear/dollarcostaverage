import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import {ChartProps} from "../common/types"
import useChartData from "@/hooks/useChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const Chart: React.FC<ChartProps> = ({symbol, period1, period2, interval, type, amount}) => {
  const chartData = useChartData({symbol, period1, period2, interval, amount, type});
  
  const valuePeriod2 = chartData[chartData.length - 1].y;
  const valueWithPrice = valuePeriod2.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const valueWithoutPrice = valuePeriod2.toString().slice(0, 5);
  const valueWithReturns = valueWithoutPrice + "%";

  const actualValue =
    type === "dca" || type === "prices"
      ? valueWithPrice
      : type === "priceReturns"
      ? valueWithReturns
      : valueWithoutPrice;

  const textTitle =
    type === "dca"
      ? "Accumulated value of the instrument (in dollars):"
      : type === "sharpe"
      ? "Instrument Sharpe Ratio:"
      : type === "prices"
      ? "Instrument Price Chart:"
      : "Instrument Returns by Period:";

  const animation = chartData.length > 1000 ? false : true;

  const options = {
    interaction: { mode: "nearest", intersect: false },
    maintainAspectRatio: false,
    animation: animation,
    scales: {
      x: {
        ticks: {
          color: "white",
          font: { size: 12 },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: { size: 12 },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 15 },
        },
      },
      title: {
        display: true,
        text: textTitle,
        padding: {
          top: 20,
          bottom: 5,
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          modifierKey: "ctrl",
        },
        zoom: {
          drag: {
            enabled: true,
            backgroundColor: "rgba(150,180,0,0.3)",
          },
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
  };


  const labels = chartData.map((item: any) => item.x);
  const data = {
    labels,
    datasets: [
      {
        label: `${symbol} ${actualValue.toString()}`,
        data: chartData,
        fill: type === "dca",
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 99, 0, 1)",
        pointStyle: "circle",
        pointRadius: 1,
        pointHoverRadius: 10,
        tension: 0.2,
      },
    ],
  };

  return <Line options={options as any} data={data} />;
};

export default Chart;
