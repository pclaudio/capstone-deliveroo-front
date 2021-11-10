import { createContext, useContext, ReactNode } from "react";
import axios from "axios";

interface IChildren {
  children: ReactNode;
}
interface ISignUpData {
  username: string;
  email: string;
  password: string;
}

interface UserContextData {
  signup: (data: ISignUpData) => void;
}
export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  // const[auth,setAuth]= useState<string>(localStorage.getItem("@caps:token") || "")

  const signup = (user: ISignUpData) => {
    axios
      .post("https://json-capstone.herokuapp.com/register", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ signup }}>{children}</UserContext.Provider>
  );
};
export const useSign = () => useContext(UserContext);
