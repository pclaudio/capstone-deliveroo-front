import { ReactNode } from "react";
import { UserProvider } from "./SignUpProvider";
interface IChildren {
  children: ReactNode;
}

export const Contexts = ({ children }: IChildren) => {
  return <UserProvider>{children}</UserProvider>;
};
