import { Input } from "./Components/Input";
import { FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Profile from "./Img/Profile.svg";

interface UserData {
  email: string;
  password: string;
}

const App = () => {
  const logo = require("./Img/Profile.svg");
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
        teste={true}
        register={register}
        name="email"
        icon={FiLock}
        label="Email"
        placeholder="Seu melhor email"
        error={errors.email?.message}
      />
      <Input
        teste={false}
        register={register}
        name="password"
        icon={FiLock}
        type="password"
        label="Senha"
        placeholder="Uma senha bem segura"
        error={errors.password?.message}
      />
      <Input
        img={Profile}
        teste={false}
        name="password"
        type="password"
        label="Senha"
        placeholder="Uma senha bem segura"
        error={errors.password?.message}
        onChange={(e) => console.log(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
