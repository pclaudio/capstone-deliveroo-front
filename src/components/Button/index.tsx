import { ButtonProps } from "./types";
import { Container } from "./styles";

const Button = ({ children, disable, medium, short, ...rest }: ButtonProps) => {
  return (
    <Container
      disable={!!disable}
      medium={!!medium}
      short={!!short}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
