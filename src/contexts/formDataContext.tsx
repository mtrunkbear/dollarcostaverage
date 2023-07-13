'use client'
import { createContext, useState } from "react";

export const FormDataContext = createContext({} as any);

var today = new Date();

const todayYear = today.getFullYear();
const todayMonth =
  today.getMonth() + 1 >= 10
    ? today.getMonth() + 1
    : "0" + (today.getMonth() + 1);
const todayDay =
  today.getDate() >= 10 ? today.getDate() : "0" + today.getDate();
const todayDate = todayYear + "-" + todayMonth + "-" + todayDay;

export const FormDataContextProvider = (props: any) => {
  const [formData, setFormData] = useState({
    symbol: "BTC-USD",
    value: 100,
    period1: "2010-02-01",
    period2: todayDate,
    interval: '1mo',
  });


  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>{props.children}</FormDataContext.Provider>
  );
};
 export default FormDataContextProvider;