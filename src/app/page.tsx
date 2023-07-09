"use client";
import { useContext } from "react";
import { Form } from "../components/Form";
import { DataContext } from "../contexts/dataContext";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

export default function Home() {
  const { contextData } = useContext(DataContext);
  const value = parseInt(contextData?.value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const interval =
    contextData?.interval === "1d"
      ? "day"
      : contextData?.interval === "1wk"
      ? "week"
      : contextData?.interval === "1mo"
      ? "month"
      : null;

  return (
    <main>
      <div className="app-content">
        <div className="subtitle">
          <p>
            With a savings of {value} dollars per {interval}
          </p>
        </div>

        <div className="panel">
          <Form type={"dca"} />

          <div className="chart-container">
            <Chart
              symbol={contextData?.symbol}
              amount={contextData?.value}
              period1={contextData?.period1}
              period2={contextData?.period2}
              interval={contextData?.interval}
              type={"dca"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
