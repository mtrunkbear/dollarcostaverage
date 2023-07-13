'use client'
import { useContext } from "react";
import { Form } from "../../components/Form";
import { FormDataContext } from "../../contexts/formDataContext";
import dynamic from 'next/dynamic'

const Chart = dynamic(
  () => import('../../components/Chart'),
  { ssr: false }
)

export default function Prices() {
  const { formData } = useContext(FormDataContext);
  return (
    <div className="app-content">
      <div className="panel">
        <Form type={"sharpe"} />
        <div className="chart-container">
          <Chart
            symbol={formData.symbol}
            amount={formData.value}
            period1={formData.period1}
            period2={formData.period2}
            interval={formData.interval}
            type={"prices"}
          />
        </div>
      </div>
    </div>
  );
}
