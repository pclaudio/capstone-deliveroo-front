import { UserProps } from "../../globalTypes";

export interface AuthenticationProviderProps {
  getIsAuthenticated: () => boolean;
  handleLogin: (user: UserProps) => voi;
  handleLogout: () => void;
}
