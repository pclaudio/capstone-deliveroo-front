import { ReactNode } from "react";
import { LocateCepProvider } from "./cepProvider";
import { UserProvider } from "./SignUpProvider";

interface IChildren {
  children: ReactNode;
}

export const Contexts = ({ children }: IChildren) => {
  return (
    <UserProvider>
      <LocateCepProvider>{children}</LocateCepProvider>
    </UserProvider>
  );
};
