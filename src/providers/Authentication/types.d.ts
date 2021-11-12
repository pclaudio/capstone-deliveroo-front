import { UserProps } from "../../globalTypes";

export interface AuthenticationProviderProps {
  step: number;
  token: string;
  user: UserProps;
  getIsAuthenticated: () => boolean;
  handleLogin: (user: UserProps) => voi;
  handleLogout: () => void;
  nextStep: () => void;
}
