import { createContext, useContext, useState } from "react";
import { NodeProps } from "../../globalTypes";
import { useLocalStorage } from "../LocalStorage";
import { TokenProviderProps } from "./types";

const TokenContext = createContext<TokenProviderProps>(
  {} as TokenProviderProps
);

export const TokenProvider = ({ children }: NodeProps): JSX.Element => {
  const { getLocalStorageToken, setlocalStorageToken } = useLocalStorage();

  const [token, setToken] = useState<string>(getLocalStorageToken());

  const handleSetToken = (token: string): void => {
    setlocalStorageToken(token);
    setToken(token);
  };

  return (
    <TokenContext.Provider value={{ token, handleSetToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = (): TokenProviderProps => useContext(TokenContext);
