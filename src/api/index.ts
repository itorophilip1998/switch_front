import axios from "axios";
import CryptoJS from "crypto-js";

const token =
  typeof window !== "undefined"
    ? window.localStorage.getItem("token") || ""
    : "";

export const baseURL = process.env.NEXT_PUBLIC_API_URL || "";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "";

export const encryptToken = (text: string): string => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};

export const decryptToken = (cipherText: string): string => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const Header = {
  headers: {
    Authorization: `Bearer ${decryptToken(token)}`,
  },
};

// create an instance of the axios server
export const baseAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token ? decryptToken(token) : null}`,
  },
});
