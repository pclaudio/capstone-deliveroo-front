import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IChildren } from "../CartProvider/type";
import { useToken } from "../Token";
import { AvailableData, IFeedAvailable } from "./types";

export const AvailableContext = createContext<AvailableData>(
  {} as AvailableData
);

export const AvailableProvider = ({ children }: IChildren) => {
  const [feedProduct, setFeedProduct] = useState<IFeedAvailable[]>(
    [] as IFeedAvailable[]
  );
  const { token } = useToken();
  const GetProductComent = (id: number) => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/products/${id}?_embed=comments`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setFeedProduct([data.comments]))
      .catch((err) => console.log(err));
  };

  return (
    <AvailableContext.Provider value={{ feedProduct, GetProductComent }}>
      {children}
    </AvailableContext.Provider>
  );
};

export const useAvailable = () => useContext(AvailableContext);
