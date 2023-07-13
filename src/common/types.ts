export interface ChartProps extends ApiParams {
    amount: number;
    type: string;
  }

  export interface ApiParams {
    symbol: string;
    period1: Date;
    period2: Date;
    interval: string;
  }
  