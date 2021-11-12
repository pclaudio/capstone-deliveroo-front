import { ReactNode, ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disable?: boolean;
  medium?: boolean;
  full?: boolean;
}

export const Button = ({
  children,
  disable,
  medium,
  full,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      disable={!!disable}
      medium={!!medium}
      full={!!full}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};
