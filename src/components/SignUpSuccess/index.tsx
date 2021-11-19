import { useHistory } from "react-router-dom";
import Wireframe from "../SignUpWireFrame";
import { ContainerWrapp } from "../SignUpWireFrame/styles";
import Congrats from "../../assets/img/Congrats.svg";
import { Container } from "./styles";

const SignUpSuccess = () => {
  const history = useHistory();

  const handleLoginRedirect = (): void => {
    history.push("/marketplace");
  };

  return (
    <Wireframe func={handleLoginRedirect} btnText="Try Order">
      <Container>
        <ContainerWrapp>
          <img src={Congrats} alt="sucess img" />
        </ContainerWrapp>

        <div>
          <h2>Congrats!</h2>
          <h3>Your Profile Is Ready To Use</h3>
        </div>
      </Container>
    </Wireframe>
  );
}

export default SignUpSuccess;
