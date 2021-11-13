import { ButtonProps } from "./types";
import { Container } from "./styles";

const Button = ({ children, disable, medium, full, ...rest }: ButtonProps) => {
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

export default Button;
