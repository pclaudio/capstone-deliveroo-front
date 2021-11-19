import { useStep } from "../../providers/Step";
import SignUpUser from "../../components/SignUpUser";
import SignUpProfile from "../../components/SignUpProfile";
import SignUpPayment from "../../components/SignUpPayment";
import SignUpTheme from "../../components/SignUpTheme";
import SignUpPhoto from "../../components/SignUpPhoto";
import SignUpAddress from "../../components/SignUpAddress";
import SignUpSuccess from "../../components/SignUpSuccess";

const SignUp = (): JSX.Element => {
  const { step } = useStep();

  return (
    <>
      {step === 0 ? (
        <SignUpUser />
      ) : step === 1 ? (
        <SignUpProfile />
      ) : step === 2 ? (
        <SignUpPayment />
      ) : step === 3 ? (
        <SignUpTheme />
      ) : step === 4 ? (
        <SignUpPhoto />
      ) : step === 5 ? (
        <SignUpAddress />
      ) : (
        step === 6 && <SignUpSuccess />
      )}
    </>
  );
}

export default SignUp;
