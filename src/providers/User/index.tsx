import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../LocalStorage";
import { NodeProps, UserProps } from "../../globalTypes";
import { UserProviderProps } from "./types";

const UserContext = createContext<UserProviderProps>({} as UserProviderProps);

export const UserProvider = ({ children }: NodeProps): JSX.Element => {
  const { getLocalStorageUser, setlocalStorageUser } = useLocalStorage();

  const [user, setUser] = useState<UserProps>(getLocalStorageUser());

  useEffect(() => {
    setlocalStorageUser(user);

    // eslint-disable-next-line
  }, [user]);

  const handleSetUser = (user: UserProps): void => {
    setUser({ ...user });
  };

  return (
    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
