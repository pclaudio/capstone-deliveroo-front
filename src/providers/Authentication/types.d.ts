import { UserProps } from "../../globalTypes";

export interface AuthenticationProviderProps {
  token: string;
  user: UserProps;
  getIsAuthenticated: () => boolean;
  handleLogin: (user: UserProps) => voi;
  handleLogout: () => void;
}
