import { useAuthentication } from "../../providers/Authentication";
import Menu from "../../components/Menu";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <>
      <Menu />
      <button onClick={handleLogoutClick}>Sair</button>
    </>
  );
};

export default Marketplace;
