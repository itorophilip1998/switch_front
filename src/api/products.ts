import axios, { AxiosResponse } from "axios";
import { baseURL, baseAPI } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { IPResponse, LocationResponse } from "@/types/mixpayTypes";

export const useProductAPI = (payload: string | number | null) => {
  return useQuery<AxiosResponse<any>, Error>({
    queryKey: ["useProductAPI", payload],
    queryFn: () => baseAPI.get(`products?${payload}`),
    refetchInterval: 5000,
    enabled: !!payload,
    select: ({ data }) => data,
  });
};

export const currenCyConverter = createAsyncThunk(
  "product/getProducts",
  async (payload: any) => {
    const response = await axios.get(`$products?${payload ?? ""}`);
    return response?.data;
  }
);

export const getCategories = async () => {
  try {
    const response = await axios.get("products");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const useSingleProductAPI = (id: string | number | null) => {
  return useQuery<AxiosResponse<any>, Error>({
    queryKey: ["useSingleProductAPI", id],
    queryFn: () => baseAPI.get(`products/${id}/info`),
    refetchInterval: 5000,
    enabled: !!id,
  });
};

export const useIpAddressAPI = () => {
  return useQuery<AxiosResponse<IPResponse>, Error>({
    queryKey: ["useIpAddressAPI"],
    queryFn: () => axios.get(`https://api.ipify.org?format=json`),
    refetchInterval: 5000,
    select: (response) => response?.data?.ip,
  });
};

export const useLocationAPI = (ipAddress: any) => {
  return useQuery<LocationResponse, Error>({
    queryKey: ["useLocationAPI", ipAddress],
    queryFn: async (): Promise<LocationResponse> => {
      const response: AxiosResponse<{ data: LocationResponse }> =
        await baseAPI.get(`/location?ipAddress=${ipAddress}`);
      return response.data.data; // Extract the nested data part
    },
    refetchInterval: 5000,
    enabled: !!ipAddress,
  });
};