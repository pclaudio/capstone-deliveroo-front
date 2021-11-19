import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disable?: boolean;
  medium?: boolean;
  short?: boolean;
  white?: boolean;
  isLarge?: boolean;
}

export interface ContainerProps {
  disable: boolean;
  medium: boolean;
  short: boolean;
  white?: boolean;
  isLarge?: boolean;
}
