import { useHistory } from "react-router";
import Button from "../../components/Button";
import logo2 from "../../assets/img/Illustartion.svg";
import { MainLoginContainer, Logo, ButtonCountainer, H3, P } from "./styles";

const LandingPage = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectToLogin = (): void => {
    history.push("/login");
  };

  const handleRedirectToSignUp = (): void => {
    history.push("/signup");
  };

  const handleRedirectToOurTeam = (): void => {
    history.push("/ourteam");
  };

  return (
    <MainLoginContainer>
      <div id="box">
        <Logo src={logo2} />
      </div>

      <H3>The best way to shop groceries online</H3>

      <P>
        Here you will find the best markets with the best deals without leaving
        your home!
      </P>

      <ButtonCountainer>
        <Button className="button1" onClick={handleRedirectToLogin}>
          Login
        </Button>

        <Button className="button1" onClick={handleRedirectToSignUp}>
          Create Account
        </Button>

        <Button className="button2" onClick={handleRedirectToOurTeam}>
          Our Team
        </Button>
      </ButtonCountainer>
    </MainLoginContainer>
  );
};

export default LandingPage;
