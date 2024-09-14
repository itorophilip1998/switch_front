import { FX_SLUGS } from "../types/mixpayTypes";
import { roundNumberToNDP } from "@/utils/roundNumberToNDP";
import React from "react";
import { useGetFXRateAPI } from "@/api/mixPay";

export const useConvertNairaToUsd = () => {
  const { data: fxRates } = useGetFXRateAPI();
 
  const nairaPayment:any =
     Array.isArray(fxRates) && fxRates?.find((rate) => rate?.slug === FX_SLUGS.NAIRA_PAYMENT);
  
  const onConvertNairaToDollar = React.useCallback(
    (amountInNaira: number) => {
      const rate = nairaPayment?.value as number;  
      return roundNumberToNDP(amountInNaira / rate, 4);
    },
    [nairaPayment?.value]
  );

  return { onConvertNairaToDollar };
};
