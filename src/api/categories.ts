import axios, { AxiosResponse } from "axios";
import { baseURL, baseAPI } from ".";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CategoriesResponse, Category } from "@/types/mixpayTypes";

export const useCategoriesAPI = () => {
  return useQuery<any, Error>({
    queryKey: ["useCategoriesAPI"],
    queryFn: () => baseAPI.get("categories"),
    refetchInterval: 5000,
    select: (response) => response?.data,
  });
};
