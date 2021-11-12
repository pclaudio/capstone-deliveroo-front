import RegisterUser from "./RegisterUser";
import GetAddress from "./RegisterAddress";
import RegisterPayment from "./RegisterPayment";
import RegisterPhoto from "./RegisterPhoto";
import RegisterProfile from "./RegisterProfile";
import RegisterTheme from "./RegisterTheme";

const Register = () => {
  return (
    <>
      <RegisterUser />
      <hr />
      <RegisterProfile />
      <hr />
      <RegisterPayment />
      <hr />
      <RegisterTheme />
      <hr />
      <RegisterPhoto />
      <hr />
      <GetAddress />
    </>
  );
};

export default Register;
