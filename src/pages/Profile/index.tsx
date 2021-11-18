import PerfilUser from "../../components/PerfilUser";
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
      {/* <div>
        {list.length > 0 ? <CardListMarket /> : ""}
        <br />
        {listProducts.length > 0 ? <CardListProduct /> : ""}
        <br />
        {detail.length > 0 ? <DetailProduct /> : ""}
        <br />
        {listCart.length > 0 ? <Cart /> : ""}
      </div> */}
      <PerfilUser />
    </>
  );
};

export default Marketplace;