import _ from "lodash";
import { createContext, useContext } from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { NodeProps, UserProps } from "../../globalTypes";
import { LocalStorageProviderProps } from "./types";

const LocalStorageContext = createContext<LocalStorageProviderProps>(
  {} as LocalStorageProviderProps
);

export const LocalStorageProvider = ({ children }: NodeProps): JSX.Element => {
  enum LocalStorageItem {
    TOKEN = "@MP/token",
    USER = "@MP/user",
  }

  const clearLocalStorage = (): void => {
    localStorage.removeItem(LocalStorageItem.TOKEN);
    localStorage.removeItem(LocalStorageItem.USER);
  };

  const getLocalStorageToken = (): string => {
    const localStorageToken: string =
      localStorage.getItem(LocalStorageItem.TOKEN) || "";

    const expiration: number =
      (!!localStorageToken && jwt_decode<JwtPayload>(localStorageToken).exp) ||
      0;

    const isExpired = Date.now() >= expiration * 1000;

    if (isExpired) {
      clearLocalStorage();
      return "";
    }

    return localStorageToken;
  };

  const getLocalStorageUser = (): UserProps => {
    const localStorageUser: string =
      localStorage.getItem(LocalStorageItem.USER) || "";

    return !!localStorageUser
      ? JSON.parse(localStorageUser)
      : ({} as UserProps);
  };

  const setlocalStorageToken = (token: string): void => {
    localStorage.setItem(LocalStorageItem.TOKEN, token);
  };

  const setlocalStorageUser = (user: UserProps): void => {
    !_.isEmpty(user) &&
      localStorage.setItem(LocalStorageItem.USER, JSON.stringify(user));
  };

  return (
    <LocalStorageContext.Provider
      value={{
        clearLocalStorage,
        getLocalStorageToken,
        getLocalStorageUser,
        setlocalStorageToken,
        setlocalStorageUser,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = (): LocalStorageProviderProps =>
  useContext(LocalStorageContext);
