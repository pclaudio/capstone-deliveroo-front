import { Link } from "react-router-dom";

const RegisterSucess = () => {
  return (
    <div>
      <h1>Aqui Comfirma Cadastro da conta</h1>
      <br />
      <Link to="/login">
        <button>Mandar pro login</button>
      </Link>
      ;
    </div>
  );
};
export default RegisterSucess;
