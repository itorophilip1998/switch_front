import React from "react";
// @ts-ignore

import axios from "axios";
import { roundNumberToNDP } from "@/utils/roundNumberToNDP";
import {
  currencySymbols,
  PREFERRED_CURRENCIES,
  TOP_CURRENCIES,
} from "./currenciesList";
import { ConvertRate } from "@/types/mixpayTypes";

export interface ConversionResponse {
  date: string;
  base: string;
  rates: Rates;
}

type Rates = {
  [key: string]: number;
};



export const useUSDToOthers = (amount: number = 0) => {
  const [estimatedPrices, setEstimatedPrices] = React.useState<ConvertRate[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const url = process.env.NEXT_PUBLIC_CONVERT_API_URL;
  const key = process.env.NEXT_PUBLIC_CURRENCY_FREAKS_API_KEY;

  const onConvertCurrency = async () => {
    if (amount !== 0) {
      setIsLoading(true);
      try {
        const response = await axios.get<ConversionResponse>(
          `${url}?apikey=${key}&symbols=${PREFERRED_CURRENCIES.toString()}`
        );
        if (response.status === 200 || response.status === 206) {
          const { rates } = response.data;
          const remapped = Object.entries(rates).map((rate) => {
            //@ts-ignore
            const currency = currencySymbols[rate[0]] ?? {
              currency: "",
              iconUrl: "",
            };
            amount = isNaN(amount) ? 0 : amount;
            const convertedAmount = rate[1] * amount;
            return {
              symbol: rate[0],
              value: roundNumberToNDP(convertedAmount, 4),
              currency: currency?.currency,
              iconUrl: currency?.iconUrl,
              dollarConversionRate: rate[1],
            };
          });

          remapped.sort((a, b) => {
            return b.symbol.toLowerCase() < a.symbol.toLowerCase() ? -1 : 1;
          });

          setEstimatedPrices(remapped);
          const topCurrencies = remapped.filter((a) =>
            TOP_CURRENCIES.includes(a.symbol.toUpperCase())
          );
          const otherCurrencies = remapped.filter(
            (a) => !TOP_CURRENCIES.includes(a.symbol.toUpperCase())
          );
          otherCurrencies.sort((a, b) => {
            return a.symbol.toLowerCase() < b.symbol.toLowerCase() ? -1 : 1;
          });
          setEstimatedPrices([...topCurrencies, ...otherCurrencies]);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  React.useEffect(() => {
    onConvertCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return { isLoading, estimatedPrices };
};
