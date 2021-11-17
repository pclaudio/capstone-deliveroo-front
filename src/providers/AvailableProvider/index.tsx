import axios from "axios";
import { createContext, useContext } from "react";
import { IChildren } from "../CartProvider/type";
import { useToken } from "../Token";
import { AvailableData } from "./types";

export const AvailableContext = createContext<AvailableData>(
  {} as AvailableData
);

export const AvailableProvider = ({ children }: IChildren) => {
  const { token } = useToken();
  const GetProductComent = (id: number) => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/products/${id}?_embed=comments`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => console.log(data.comments))
      .catch((err) => console.log(err));
  };

  return (
    <AvailableContext.Provider value={{ GetProductComent }}>
      {children}
    </AvailableContext.Provider>
  );
};

export const useAvailable = () => useContext(AvailableContext);
