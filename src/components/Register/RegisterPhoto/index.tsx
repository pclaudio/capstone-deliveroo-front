import { useAuthentication } from "../../../providers/Authentication";

const RegisterPhoto = () => {
  const { nextStep } = useAuthentication();

  return (
    <>
      <h3>Selecionando Foto de Perfil</h3>
      <input type="file" />
      <button onClick={nextStep}>Concluir Cadastro</button>
    </>
  );
};

export default RegisterPhoto;
