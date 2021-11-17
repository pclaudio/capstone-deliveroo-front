import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const getHeaders = (): AxiosRequestConfig => {
  return {};
};

const api: AxiosInstance = axios.create({
  baseURL: "https://api.postmon.com.br/v1",
  responseType: "json",
});

const genericGet = ({ url = "" }: AxiosRequestConfig): Promise<any> => {
  const headers: AxiosRequestConfig = getHeaders();

  return api.get(url, headers);
};

export const getAddressByCep = (data: string): Promise<any> => {
  const url = `/cep/${data}`;

  return genericGet({ url });
};
