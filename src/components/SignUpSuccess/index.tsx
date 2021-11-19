import { useHistory } from "react-router-dom";

const SignUpSuccess = () => {
  const history = useHistory();

  const handleLoginRedirect = (): void => {
    history.push("/login");
  };

  return (
    <>
      <h2>Congrats!</h2>
      <h3>Your Profile Is Ready To Use</h3>
      <button onClick={handleLoginRedirect}>Login</button>
    </>
  );
}

export default SignUpSuccess;
