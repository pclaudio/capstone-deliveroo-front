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
  const [windowFeed, setWindowFeed] = useState<boolean>(false);
  const { token } = useToken();

  const GetProductComent = (id: number) => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/products/${id}?_embed=comments`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        setFeedProduct([]);
        setFeedProduct([...data.comments]);
        console.log(data.comments);
      })
      .catch((err) => console.log(err));
  };
  const PostProductComent = (data: IFeedAvailable) => {
    axios
      .post("https://json-capstone.herokuapp.com/comments", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setFeedProduct([...feedProduct, data]))
      .catch((err) => console.log(err));
  };

  return (
    <AvailableContext.Provider
      value={{
        PostProductComent,
        windowFeed,
        setWindowFeed,
        setFeedProduct,
        feedProduct,
        GetProductComent,
      }}
    >
      {children}
    </AvailableContext.Provider>
  );
};

export const useAvailable = () => useContext(AvailableContext);
