import RegisterUser from "./RegisterUser";
import GetAddress from "./RegisterAddress";
import RegisterPayment from "./RegisterPayment";
import RegisterPhoto from "./RegisterPhoto";
import RegisterProfile from "./RegisterProfile";
import RegisterTheme from "./RegisterTheme";
import { useAuthentication } from "../../providers/Authentication";
import RegisterSucess from "./RegisterSucess";

const Register = (): JSX.Element => {
  const { step } = useAuthentication();
  return (
    <>
      {step === 0 ? (
        <RegisterUser />
      ) : step === 1 ? (
        <RegisterProfile />
      ) : step === 2 ? (
        <RegisterPayment />
      ) : step === 3 ? (
        <RegisterTheme />
      ) : step === 4 ? (
        <RegisterPhoto />
      ) : step === 5 ? (
        <GetAddress />
      ) : step === 6 ? (
        <RegisterSucess />
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
