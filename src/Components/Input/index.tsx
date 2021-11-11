import { InputHTMLAttributes } from "react";
import { Container, InputContainer } from "./styled";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType;
  register?: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  isRight: boolean;
  isGlass?: boolean;
  img?: string;
}

export const Input = ({
  img,
  isRight,
  isGlass,
  label,
  icon: Icon,
  register,
  name,
  error = "",
  ...rest
}: InputProps) => (
  <Container>
    <div>
      {label} {!!error && <span> - {error}</span>}
    </div>
    <InputContainer isErrored={!!error} isRight={isRight} isGlass={!!isGlass}>
      {Icon && <Icon />}
      {img && <img src={img} alt="Pontos cinza" />}
      {/* <input {...register(name)} {...rest} /> */}
      <input {...(register && register(name))} {...rest} />
    </InputContainer>
  </Container>
);
