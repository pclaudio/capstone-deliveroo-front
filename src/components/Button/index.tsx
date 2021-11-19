import { ButtonProps } from "./types";
import { Container } from "./styles";

const Button = ({
  children,
  disable,
  medium,
  short,
  white,
  isLarge,
  BTNcart,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      BTNcart={!!BTNcart}
      disable={!!disable}
      medium={!!medium}
      short={!!short}
      white={!!white}
      isLarge={!!isLarge}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
}

export default Button;
