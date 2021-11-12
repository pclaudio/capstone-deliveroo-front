import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { UserProps } from "../globalTypes";

const getHeaders = (): AxiosRequestConfig => {
  const token: string = localStorage.getItem("@MP/token") || "";

  return !!token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : ({} as AxiosRequestConfig);
};

const api: AxiosInstance = axios.create({
  baseURL: "https://json-capstone.herokuapp.com",
  responseType: "json",
});

const genericGet = ({ url = "" }: AxiosRequestConfig): Promise<any> => {
  const headers: AxiosRequestConfig = getHeaders();

  return api.get(url, headers);
};

const genericPost = ({ url = "", data }: AxiosRequestConfig): Promise<any> => {
  const headers: AxiosRequestConfig = getHeaders();

  return api.post(url, data, headers);
};

const genericPatch = ({ url = "", data }: AxiosRequestConfig): Promise<any> => {
  const headers: AxiosRequestConfig = getHeaders();

  return api.patch(url, data, headers);
};

export const postLogin = (data: UserProps): Promise<any> => {
  const url = "/login";

  return genericPost({ url, data });
};
