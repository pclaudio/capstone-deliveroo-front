import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disable?: boolean;
  medium?: boolean;
  short?: boolean;
}

interface ContainerProps {
  disable: boolean;
  medium: boolean;
  short: boolean;
}
