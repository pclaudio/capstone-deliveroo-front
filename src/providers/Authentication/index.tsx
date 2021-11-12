import _ from "lodash";
import { createContext, useContext, useState } from "react";
import { AxiosResponse } from "axios";
import { postLogin } from "../../services/api";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { NodeProps, UserProps } from "../../globalTypes";
import { AuthenticationProviderProps } from "./types";

const AuthenticationContext = createContext<AuthenticationProviderProps>(
  {} as AuthenticationProviderProps
);

const getLocalStorageToken = (): string => {
  const localStorageToken: string = localStorage.getItem("@MP/token") || "";

  const expiration: number =
    (!!localStorageToken && jwt_decode<JwtPayload>(localStorageToken).exp) || 0;

  const isExpired = Date.now() >= expiration * 1000;

  if (isExpired) {
    localStorage.removeItem("MP/token");
    localStorage.removeItem("MP/user");
    return "";
  }

  return localStorageToken;
};

const getLocalStorageUser = (): UserProps => {
  const localStorageUser: string = localStorage.getItem("@MP/user") || "";

  return !!localStorageUser ? JSON.parse(localStorageUser) : "";
};

export const AuthenticationProvider = ({
  children,
}: NodeProps): JSX.Element => {
  const [token, setToken] = useState<string>(getLocalStorageToken());

  const [user, setUser] = useState<UserProps>(getLocalStorageUser());

  const getIsAuthenticated = (): boolean => {
    const localStorageToken: string = getLocalStorageToken();
    const localStorageUser: UserProps = getLocalStorageUser();

    return !!localStorageToken && !_.isEmpty(localStorageUser);
  };

  const setTokenAndUser = (response: AxiosResponse): void => {
    localStorage.setItem("@MP/token", response.data.accessToken);
    localStorage.setItem("@MP/user", JSON.stringify(response.data.user));
    setToken(response.data.accessToken);
    setUser(response.data.user);
  };

  const handleLogin = (userLogin: UserProps): void => {
    postLogin(userLogin)
      .then((response: AxiosResponse) => setTokenAndUser(response))
      .catch((error: AxiosResponse) => console.log(error));
  };

  const handleLogout = (): void => {
    localStorage.removeItem("@MP/token");
    localStorage.removeItem("@MP/user");
    setToken("");
    setUser({} as UserProps);
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, user, getIsAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
