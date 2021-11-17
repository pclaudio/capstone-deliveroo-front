import { ReactNode } from "react";

export interface DetailContextData {
  ShowDetailProduct: (id: number) => void;
  detail: IListProducts[];
  setDetail: (product: IListProducts[]) => void;
}
export interface IChildren {
  children: ReactNode;
}
export interface IListProducts {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}
