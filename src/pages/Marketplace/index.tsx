import { useAuthentication } from "../../providers/Authentication";
import Menu from "../../components/Menu";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <>
      <h1>Marketplace</h1>
      <button onClick={handleLogoutClick}>Sair</button>
      <Menu />
    </>
  );
};

export default Marketplace;
