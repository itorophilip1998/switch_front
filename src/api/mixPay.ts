import { FxRate } from "@/types/mixpayTypes";
import { useQuery } from "@tanstack/react-query";
import { baseAPI } from ".";
import axios, { AxiosError, AxiosResponse } from "axios";

const mixPayBaseURL = process.env.NEXT_PUBLIC_MIXPAY_API;
const currencyConverterKey = process.env.NEXT_PUBLIC_CURRENCY_FREAKS_API_KEY;
const currencyBaseAPI: string | undefined =
  process.env.NEXT_PUBLIC_CONVERT_API_URL;

const mixPayInstance = axios.create({
  baseURL: currencyBaseAPI,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${currencyConverterKey}`,
  },
});

interface Payload {
  orderId: string;
  payeeId: string;
}

interface MixPayResponse {
  // Define the structure of your response data here
  data: any;
}

const fetchMixPayResult = async (payload: Payload): Promise<MixPayResponse> => {
  const { orderId, payeeId } = payload;
  const response = await axios.get<MixPayResponse>(
    `${mixPayBaseURL}?orderId=${orderId}&payeeId=${payeeId}`
  );
  return response.data;
};

export const useMixPayAPI = (payload: Payload, enabled: boolean) => {
  return useQuery<MixPayResponse, Error>({
    queryKey: ["useMixPayAPI", payload],
    queryFn: () => fetchMixPayResult(payload),
    refetchInterval: 3000,
    enabled: enabled,
  });
};

export const useCountryCodeAPI = () => {
  return useQuery<MixPayResponse, Error>({
    queryKey: ["useCountryCodeAPI"],
    queryFn: async () => {
      const response = await axios.get<MixPayResponse>("https://ipapi.co/json");
      return response.data;
    },
  });
};

export function useGetFXRateAPI() {
  return useQuery<AxiosResponse<any>, Error, FxRate[]>({
    queryKey: ["useGetFXRating"],
    queryFn: () => baseAPI.get("/fx-rates"),
    select: ({ data }) => data?.data,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });
}

 
