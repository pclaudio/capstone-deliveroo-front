import { ReactNode } from "react";

export interface NodeProps {
  children: ReactNode;
}

export interface UserProps {
  email: string;
  password: string;
}
