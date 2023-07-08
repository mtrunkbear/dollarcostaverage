'use client'
import { useContext } from "react";
import { Form } from "../../components/Form";
import { DataContext } from "../../contexts/dataContext";
import dynamic from 'next/dynamic'
const Chart = dynamic(
  () => import('../../components/Chart'),
  { ssr: false }
)

export default function Prices() {
  const { contextData } = useContext(DataContext);
  return (
    <div className="app-content">
      <div className="panel">
        <Form type={"sharpe"} />
        <div className="chart-container">
          <Chart
            symbol={contextData.symbol}
            amount={contextData.value}
            period1={contextData.period1}
            period2={contextData.period2}
            interval={contextData.interval}
            type={"priceReturns"}
          />
        </div>
      </div>
    </div>
  );
}
