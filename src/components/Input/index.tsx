import { InputProps } from "./types";
import { Container, InputContainer } from "./styles";

const Input = ({
  img,
  isRight = false,
  isGlass = false,
  label,
  icon: Icon,
  register,
  name,
  error = "",
  xl = false,

  ...rest
}: InputProps): JSX.Element => {
  return (
    <Container>
      <div id="errorStack">
        {label} {!!error && <span>{error}</span>}
      </div>

      <InputContainer
        isLarge={!!xl}
        isErrored={!!error}
        isRight={isRight}
        isGlass={!!isGlass}
      >
        {Icon && <Icon />}
        {img && <img src={img} alt="Pontos cinza" />}
        <input {...(register && register(name))} {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;
