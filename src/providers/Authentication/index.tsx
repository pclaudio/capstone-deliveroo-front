import _ from "lodash";
import { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../Token";
import { useUser } from "../User";
import { useLocalStorage } from "../LocalStorage";
import { useFetch } from "../Fetch";
import { AxiosResponse } from "axios";
import { postLogin } from "../../services/api";
import { toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import { AxiosErrorResponse, NodeProps, UserProps } from "../../globalTypes";
import { AuthenticationProviderProps } from "./types";

const AuthenticationContext = createContext<AuthenticationProviderProps>(
  {} as AuthenticationProviderProps
);

export const AuthenticationProvider = ({
  children,
}: NodeProps): JSX.Element => {
  const { handleSetToken } = useToken();

  const { handleSetUser } = useUser();

  const { clearLocalStorage, getLocalStorageToken, getLocalStorageUser } =
    useLocalStorage();

  const { handleStartFetching, handleFinishFetching } = useFetch();

  const history = useHistory();

  const getIsAuthenticated = (): boolean => {
    const localStorageToken: string = getLocalStorageToken();
    const localStorageUser: UserProps = getLocalStorageUser();

    return !!localStorageToken && !_.isEmpty(localStorageUser);
  };

  const handleLogin = (userLogin: UserProps): void => {
    handleStartFetching();

    postLogin(userLogin)
      .then(({ data }: AxiosResponse) => {
        handleSetToken(data.accessToken);
        handleSetUser(data.user);
        handleFinishFetching();
        history.push("/marketplace");
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  const handleLogout = (): void => {
    handleSetToken("");
    handleSetUser({} as UserProps);
    clearLocalStorage();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        getIsAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = (): AuthenticationProviderProps =>
  useContext(AuthenticationContext);
