import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useToken } from "../Token";
import { useUser } from "../User";
import {
  IAddress,
  IChildren,
  IPayment,
  IPhoto,
  IProfile,
  ITheme,
  PerfilContextData,
} from "./types";

export const PerfilContext = createContext<PerfilContextData>(
  {} as PerfilContextData
);
export const PerfilProvider = ({ children }: IChildren) => {
  const { user } = useUser();
  const { token } = useToken();
  const [profile, setProfile] = useState<IProfile[]>([] as IProfile[]);
  const [address, setAddress] = useState<IAddress[]>([] as IAddress[]);
  const [photo, setPhoto] = useState<IPhoto[]>([] as IPhoto[]);
  const [theme, setTheme] = useState<ITheme[]>([] as ITheme[]);
  const [payment, setPayment] = useState<IPayment[]>([] as IPayment[]);

  const getAddress = () => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/users/${user.id}?_embed=addresses`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setAddress([...data.addresses]))
      .catch((err) => console.log(err));
  };
  const getProfile = () => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/users/${user.id}?_embed=profiles`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setProfile([...data.profiles]))
      .catch((err) => console.log(err));
  };
  const getPhoto = () => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/users/${user.id}?_embed=photos`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setPhoto([...data.photos]))
      .catch((err) => console.log(err));
  };
  const getTheme = () => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/users/${user.id}?_embed=themes`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setTheme([...data.themes]))
      .catch((err) => console.log(err));
  };

  const getPayment = () => {
    axios
      .get(
        `https://json-capstone.herokuapp.com/users/${user.id}?_embed=payments`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => setPayment([...data.payments]))
      .catch((err) => console.log(err));
  };

  return (
    <PerfilContext.Provider
      value={{
        theme,
        getTheme,
        payment,
        getPayment,
        photo,
        getPhoto,
        profile,
        address,
        getProfile,
        getAddress,
      }}
    >
      {children}
    </PerfilContext.Provider>
  );
};

export const usePerfil = () => useContext(PerfilContext);
