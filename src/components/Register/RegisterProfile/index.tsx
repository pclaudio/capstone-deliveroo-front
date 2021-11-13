import { useForm } from "react-hook-form";
import { useSign } from "../../../providers/SignUpProvider";

interface ISignProf {
  firstName: string;
  lastName: string;
  phone: string;
  userId: number;
}

const RegisterProfile = () => {
  const { register, handleSubmit } = useForm();

  const { addProfile } = useSign();
  const onSubmit = (data: ISignProf) => {
    addProfile(data);
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
        <button type="submit">Continuar</button>
      </form>
    </>
  );
};

export default RegisterProfile;
