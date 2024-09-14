

import { baseAPI, baseURL } from ".";
 

export const initializeOrderAPI = async (payload:any) => {
  try {
    const response = await baseAPI.post(`orders/initialize`,payload);
    return response?.data;
  } catch (error) {
    return error;
  }
};

