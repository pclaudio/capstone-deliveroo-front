import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface CartContextData {
  count: number;
  setCount: (num: number) => void;
  listCart: IProducts[];
  moveToCart: (item: any) => void;
  removeToCart: (item: any) => void;
  addItem: (item: any) => void;
  subItem: (item: any) => void;
}
export interface IProducts {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  amount: number;
}
