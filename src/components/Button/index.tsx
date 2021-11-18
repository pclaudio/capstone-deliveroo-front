import { ButtonProps } from "./types";
import { Container } from "./styles";

const Button = ({
  children,
  disable,
  medium,
  short,
  white,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      disable={!!disable}
      medium={!!medium}
      short={!!short}
      white={!!white}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
