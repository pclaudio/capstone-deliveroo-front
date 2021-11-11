import { Input } from "./Components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsSearch } from "react-icons/bs";

interface UserData {
  email: string;
  password: string;
}

const App = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: UserData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Login</h1>

      <Input
        isRight={false}
        register={register}
        name="email"
        img={require("./Img/Message.svg").default}
        label="Email"
        placeholder="Seu melhor email"
        error={errors.email?.message}
      />
      <Input
        isRight={false}
        register={register}
        name="password"
        img={require("./Img/Lock.svg").default}
        type="password"
        label="Senha"
        placeholder="Uma senha bem segura"
        error={errors.password?.message}
      />
      <Input
        isGlass
        icon={BsSearch}
        // img={require("./Img/User.svg").default}
        isRight={false}
        name="password"
        label="Nome"
        placeholder="Seu Nome"
        onChange={(e) => console.log(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
