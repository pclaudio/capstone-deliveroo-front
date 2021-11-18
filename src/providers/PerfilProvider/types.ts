import { ReactNode } from "react";

export interface PerfilContextData {
  getAddress: () => void;
  getProfile: () => void;
  getPhoto: () => void;
  getTheme: () => void;
  getPayment: () => void;
  address: IAddress[];
  profile: IProfile[];
  photo: IPhoto[];
  theme: ITheme[];
  payment: IPayment[];
}
export interface IAddress {
  address1: string;
  address2: string;
  cep: string;
  city: string;
  district: string;
  id: 1;
  number: string;
  state: string;
}
export interface IProfile {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  id?: number;
}
export interface IPhoto {
  link: string;
}
export interface ITheme {
  theme: string;
}
export interface IPayment {
  payment: string;
}
export interface IChildren {
  children: ReactNode;
}