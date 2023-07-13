"use client";
import { useContext } from "react";
import { Form } from "../components/Form";
import { FormDataContext } from "../contexts/formDataContext";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

export default function Home() {
  const { formData } = useContext(FormDataContext);
  const value = parseInt(formData?.value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const interval =
    formData?.interval === "1d"
      ? "day"
      : formData?.interval === "1wk"
      ? "week"
      : formData?.interval === "1mo"
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

          <div className="chart-container" >
            <Chart
              symbol={formData?.symbol}
              amount={formData?.value}
              period1={formData?.period1}
              period2={formData?.period2}
              interval={formData?.interval}
              type={"dca"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
