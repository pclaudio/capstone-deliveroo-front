import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useToken } from "../Token";
import { DetailContextData, IChildren, IListProducts } from "./types";

export const DetailContext = createContext<DetailContextData>(
  {} as DetailContextData
);

export const DetailsProvider = ({ children }: IChildren) => {
  const { token } = useToken();
  const [detail, setDetail] = useState<IListProducts[]>([] as IListProducts[]);

  const ShowDetailProduct = async (id: number) => {
    await axios
      .get(`https://json-capstone.herokuapp.com/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setDetail([data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <DetailContext.Provider value={{ setDetail, detail, ShowDetailProduct }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetails = () => useContext(DetailContext);
