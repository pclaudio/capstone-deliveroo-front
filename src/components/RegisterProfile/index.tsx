import { useForm } from "react-hook-form";
import { useSign } from "../../Context/SignUpProvider";

interface ISignProf {
  firstName: string;
  lastName: string;
  phone: string;
  userId: number;
}

const RegisterProfile = () => {
  const { register, handleSubmit } = useForm();

  const { signupProfile } = useSign();
  const onSubmit = (data: ISignProf) => {
    signupProfile(data);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro Pessoais</h3>
        <input
          type="text"
          placeholder="Primeiro Nome"
          {...register("firstName")}
        />
        <input placeholder="Ultimo Nome" type="tex" {...register("lastName")} />
        <input placeholder="Contato" type="tel" {...register("phone")} />
        <button type="submit">Criar Conta</button>
      </form>
    </>
  );
};

export default RegisterProfile;
