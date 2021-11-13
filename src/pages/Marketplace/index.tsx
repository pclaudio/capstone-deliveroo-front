import { useAuthentication } from "../../providers/Authentication";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <>
      <h1>Marketplace</h1>
      <button onClick={handleLogoutClick}>Sair</button>
    </>
  );
};

export default Marketplace;
