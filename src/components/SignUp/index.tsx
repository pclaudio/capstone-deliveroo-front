import { useForm } from "react-hook-form";
import { useSign } from "../../Context/SignUpProvider";

interface ISignUpData {
  username: string;
  email: string;
  password: string;
}

const SingUp = () => {
  const { register, handleSubmit } = useForm();

  const { signup } = useSign();
  const onSubmit = (userData: ISignUpData) => {
    signup(userData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username" {...register("name")} />
        <input placeholder="E-mail" type="email" {...register("email")} />
        <input placeholder="Senha" type="password" {...register("password")} />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
export default SingUp;
