import { UserProps } from "../../globalTypes";

export interface LocalStorageProviderProps {
  clearLocalStorage: () => void;
  getLocalStorageToken: () => string;
  getLocalStorageUser: () => UserProps;
  setlocalStorageToken: (token: string) => void;
  setlocalStorageUser: (user: UserProps) => void;
}
