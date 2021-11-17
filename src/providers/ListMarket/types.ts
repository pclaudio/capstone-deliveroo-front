import { ReactNode } from "react";

export interface ListContextData {
  listProducts: IListProducts[];
  list: IResponseLogin[];
  ProductsMarket: (id: number) => void;
  setListProducts: (item: any) => void;
}
export interface IListProducts {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}
export interface IResponseLogin {
  email: string;
  password: string;
  name: string;
  age: number;
  category: string;
  image: string;
  background: string;
  location: string;
  store: boolean;
  id: number;
  price?: number;
}
export interface IChildren {
  children: ReactNode;
}
