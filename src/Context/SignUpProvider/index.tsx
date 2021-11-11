import { createContext, useContext, ReactNode, useState } from "react";

import axios from "axios";

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
  signup: (data: ISignUpData) => void;
  signupProfile: (data: ISignProf) => void;
}
export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  // const[auth,setAuth]= useState<string>(localStorage.getItem("@caps:token") || "")
  const [userId, setUserId] = useState(0);

  const signup = (user: ISignUpData) => {
    axios
      .post("https://json-capstone.herokuapp.com/register", user)
      .then(({ data }) => {
        setUserId(data.user.id);
        console.log(data.user);
      })
      .catch((err) => console.log(err));
  };

  const signupProfile = (user: ISignProf) => {
    user.userId = userId;
    axios
      .post(`https://json-capstone.herokuapp.com/profiles`, user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ signup, signupProfile }}>
      {children}
    </UserContext.Provider>
  );
};
export const useSign = () => useContext(UserContext);
