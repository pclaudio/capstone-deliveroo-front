import { useForm } from "react-hook-form";
import { useSign } from "../../../Context/SignUpProvider";

interface ISignUpData {
  username: string;
  email: string;
  password: string;
}

const RegisterUser = () => {
  const { register, handleSubmit } = useForm();

  const { signup } = useSign();
  const onSubmit = (userData: ISignUpData) => {
    signup(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>pagina de Cadastro</h3>
        <input type="text" placeholder="Username" {...register("username")} />
        <input placeholder="E-mail" type="email" {...register("email")} />
        <input placeholder="Senha" type="password" {...register("password")} />
        <button type="submit">Criar Conta</button>
      </form>
    </>
  );
};
export default RegisterUser;
