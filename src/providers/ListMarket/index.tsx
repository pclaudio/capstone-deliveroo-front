import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useToken } from "../Token";
import {
  IChildren,
  IListProducts,
  IResponseLogin,
  ListContextData,
} from "./types";

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export const ListProvider = ({ children }: IChildren) => {
  const [listProducts, setListProducts] = useState<IListProducts[]>(
    [] as IListProducts[]
  );
  const [list, setList] = useState<IResponseLogin[]>([] as IResponseLogin[]);

  const { token } = useToken();
  useEffect(() => {
    axios
      .get("https://json-capstone.herokuapp.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setList([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const ProductsMarket = async (id: number) => {
    await axios
      .get(`https://json-capstone.herokuapp.com/users/${id}?_embed=products`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setListProducts([...data.products]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ListContext.Provider
      value={{ setListProducts, listProducts, ProductsMarket, list }}
    >
      {children}
    </ListContext.Provider>
  );
};
export const useListMarket = () => useContext(ListContext);
