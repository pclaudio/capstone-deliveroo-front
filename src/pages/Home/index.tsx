import { useHistory } from "react-router";

const Home = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectToLogin = (): void => {
    history.push("/login");
  };

  const handleRedirectToSignUp = (): void => {
    history.push("/signup");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleRedirectToLogin}>Entre</button>
      <button onClick={handleRedirectToSignUp}>Cadastre-se</button>
    </>
  );
};

export default Home;
