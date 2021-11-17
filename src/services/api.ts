import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  AddressProps,
  PaymentProps,
  PhotoProps,
  ProfileProps,
  ThemeProps,
  UserProps,
} from "../globalTypes";

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

export const postUser = (data: UserProps): Promise<any> => {
  const url = "/signup";

  return genericPost({ url, data });
};

export const postUserProfile = (data: ProfileProps): Promise<any> => {
  const url = "/profiles";

  return genericPost({ url, data });
};

export const postUserPayment = (data: PaymentProps): Promise<any> => {
  const url = "/payments";

  return genericPost({ url, data });
};

export const postUserTheme = (data: ThemeProps): Promise<any> => {
  const url = "/themes";

  return genericPost({ url, data });
};

export const postUserPhoto = (data: PhotoProps): Promise<any> => {
  const url = "/photos";

  return genericPost({ url, data });
};

export const postUserAddress = (data: AddressProps): Promise<any> => {
  const url = "/addresses";

  return genericPost({ url, data });
};
