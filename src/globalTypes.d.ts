import { ReactNode } from "react";

export interface NodeProps {
  children: ReactNode;
}

export interface ProfileProps {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  userId?: number;
}

export interface PaymentProps {
  payment: string;
  userId?: number;
}

export interface ThemeProps {
  theme: string;
  userId?: number;
}

export interface PhotoProps {
  id: string;
  deletehash: string;
  link: string;
  userId?: number;
}

export interface AddressProps {
  cep: string;
  address1: string;
  address2?: string;
  number?: string;
  district: string;
  city: string;
  state: string;
  userId?: number;
}
export interface UserProps {
  id?: number;
  username?: string;
  email: string;
  password: string;
  profile?: ProfileProps;
  payment?: PaymentProps;
  theme?: ThemeProps;
  photo?: PhotoProps;
  address?: AddressProps;
}

export interface AxiosErrorResponse {
  response: {
    data: any;
  };
}
