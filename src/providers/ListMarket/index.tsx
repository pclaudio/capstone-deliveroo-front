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

  const MarketPlace = async () => {
    await axios
      .get(`https://json-capstone.herokuapp.com/users/?store=true`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setList([...res.data]);
      })
      .catch((err) => console.log(err));
  };

  const ProductsMarket = async (id: number) => {
    await axios
      .get(`https://json-capstone.herokuapp.com/users/${id}?_embed=products`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setListProducts([...data.products]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    MarketPlace();

    // eslint-disable-next-line
  }, []);

  return (
    <ListContext.Provider
      value={{
        MarketPlace,
        setListProducts,
        listProducts,
        ProductsMarket,
        list,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
export const useListMarket = () => useContext(ListContext);
