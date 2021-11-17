import { useHistory } from "react-router";
import Button from "../../components/Button";
import logo from "../../assets/img/testeLogo.svg";
import {
  MainLoginContainer,
  Logo,
  ButtonCountainer,
  H3
} from "./styles";

const Home = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectToHome1 = (): void => {
    history.push("/landingpage");
  };


  return (<MainLoginContainer>
    <div id="box">
      <Logo src={logo} />
    </div>

    <H3>Welcome to Deliveroo</H3>
    <ButtonCountainer>
    <Button className="button1" onClick={handleRedirectToHome1}> next </Button>
    </ButtonCountainer>
  </MainLoginContainer>
);
};

export default Home;
