import { useEffect, useState } from "react";
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const response = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
};
export default useCurrencyInfo;
//!  i am getting the currency basic  info and just run the Api with that currency..
//? that Api will just return the currency info and it's current conversion rate...
