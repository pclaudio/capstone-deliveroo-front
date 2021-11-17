import { createContext, useContext, useState } from "react";
import { NodeProps } from "../../globalTypes";
import { FetchProviderProps } from "./types";

const FetchContext = createContext<FetchProviderProps>(
  {} as FetchProviderProps
);

export const FetchProvider = ({ children }: NodeProps): JSX.Element => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleStartFetching = (): void => {
    setIsFetching(true);
  };

  const handleFinishFetching = (): void => {
    setIsFetching(false);
  };

  return (
    <FetchContext.Provider
      value={{ isFetching, handleStartFetching, handleFinishFetching }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export const useFetch = (): FetchProviderProps => useContext(FetchContext);
