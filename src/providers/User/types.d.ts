import { UserProps } from "../../globalTypes";

export interface UserProviderProps {
  user: UserProps;
  handleSetUser: (user: UserProps) => void;
}
