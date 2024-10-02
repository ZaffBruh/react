import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [rates, setRates] = useState({});
    const [currencyList, setCurrencyList] = useState([]);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/ee581edf7ffbcf5b1bc7badc/latest/${baseCurrency}`)
            .then((res) => res.json())
            .then((res) => {
                setRates(res.conversion_rates);
                setCurrencyList(Object.keys(res.conversion_rates)); // Set all available currency options
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, [baseCurrency]);

    return { rates, currencyList }; // Return both rates and currency list
}

export default useCurrencyInfo;
