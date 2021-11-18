import Menu from "../../components/Menu";
import { useAuthentication } from "../../providers/Authentication";
import {
  MainLoginContainer,
  H1
} from "./styles";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
      <MainLoginContainer id="box">
        <H1>Perfil</H1>
            <button onClick={handleLogoutClick}> sair </button>
        <Menu />
      </MainLoginContainer>
  );
};

export default Marketplace;
