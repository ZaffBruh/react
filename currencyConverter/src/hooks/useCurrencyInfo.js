import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/ee581edf7ffbcf5b1bc7badc/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Check the entire API response
        setData(res.conversion_rates); // Only set conversion rates
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);
  

  return data; // Return conversion rates
}

export default useCurrencyInfo;
