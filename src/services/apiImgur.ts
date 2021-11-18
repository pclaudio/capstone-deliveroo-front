import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const getHeaders = (): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: "Client-ID b0fb698eb3155b5",
    },
  };
};

const api: AxiosInstance = axios.create({
  baseURL: "https://api.imgur.com/3",
  responseType: "json",
});

const genericPost = ({ url = "", data }: AxiosRequestConfig): Promise<any> => {
  const headers: AxiosRequestConfig = getHeaders();

  return api.post(url, data, headers);
};

export const postPhoto = (data: FormData): Promise<any> => {
  const url = "/image";

  return genericPost({ url, data });
};
