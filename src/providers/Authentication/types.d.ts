import { UserProps } from "../../globalTypes";

export interface AuthenticationProviderProps {
  token: string;
  user: UserProps;
  isFetching: boolean;
  getIsAuthenticated: () => boolean;
  handleLogin: (user: UserProps) => voi;
  handleLogout: () => void;
}

export interface ErrorResponseProps {
  response: {
    data: string;
  };
}
