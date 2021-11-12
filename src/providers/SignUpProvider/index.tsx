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

interface UserContextData {
  id: number;
  signup: (data: ISignUpData) => void;
  signupProfile: (data: ISignProf) => void;
}
export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [id, setId] = useState(0);
  const { nextStep } = useAuthentication();

  const [token] = useState(localStorage.getItem("@caps:token"));
  const signup = (user: ISignUpData) => {
    axios
      .post("https://json-capstone.herokuapp.com/register", user)
      .then(({ data }) => {
        setId(data.user.id);
        localStorage.setItem("@caps:token", data.accessToken);
        nextStep();
      })
      .catch((err) => console.log(err));
  };
  const signupProfile = (user: ISignProf) => {
    user.userId = id;
    axios
      .post(`https://json-capstone.herokuapp.com/profiles`, user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ id, signup, signupProfile }}>
      {children}
    </UserContext.Provider>
  );
};
export const useSign = () => useContext(UserContext);
