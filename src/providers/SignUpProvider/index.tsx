import { createContext, useContext, ReactNode, useState } from "react";
import axios from "axios";
import { useAuthentication } from "../Authentication";

interface IChildren {
  children: ReactNode;
}
interface ISignUpData {
  username: string;
  email: string;
  password: string;
}
interface ISignProf {
  firstName: string;
  lastName: string;
  phone: string;
  userId: number;
}
interface IPay {
  photo?: string;
  payment?: string;
  theme?: string;
  userId: number;
}
interface UserContextData {
  id: number;
  signup: (data: ISignUpData) => void;
  addProfile: (data: ISignProf) => void;
  addPayment: (data: string) => void;
  addPhoto: (data: string) => void;
  addTheme: (data: string) => void;
}
export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [id, setId] = useState(0);
  const [token] = useState(localStorage.getItem("@caps:token"));

  const { nextStep } = useAuthentication();

  const signup = async (user: ISignUpData) => {
    await axios
      .post("https://json-capstone.herokuapp.com/register", user)
      .then(({ data }) => {
        setId(data.user.id);
        localStorage.setItem("@caps:token", data.accessToken);
        nextStep();
      })
      .catch((err) => console.log(err));
  };

  const addProfile = async (user: ISignProf) => {
    user.userId = id;
    await axios
      .post(`https://json-capstone.herokuapp.com/profiles`, user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  const addPayment = async (user: string) => {
    const userData: IPay = { payment: user, userId: id };
    await axios
      .post(`https://json-capstone.herokuapp.com/payments`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  const addPhoto = async (user: string) => {
    const userData: IPay = { photo: user, userId: id };
    await axios
      .post(`https://json-capstone.herokuapp.com/photos`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  const addTheme = async (user: string) => {
    const userData: IPay = { photo: user, userId: id };
    await axios
      .post(`https://json-capstone.herokuapp.com/themes`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{ addPhoto, addTheme, addPayment, id, signup, addProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useSign = () => useContext(UserContext);
