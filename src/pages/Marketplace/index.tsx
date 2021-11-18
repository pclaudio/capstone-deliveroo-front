import CardListMarket from "../../components/CardListMarket";
import CardListProduct from "../../components/CardListProducts";
import Cart from "../../components/Cart";
import DetailProduct from "../../components/DetailProduct";
import PerfilUser from "../../components/PerfilUser";
import { useAuthentication } from "../../providers/Authentication";
import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";
import { useListMarket } from "../../providers/ListMarket";
import "./style.css";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();
  const { list, listProducts } = useListMarket();
  const { listCart } = useCart();
  const { detail } = useDetails();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <>
      <h1>Marketplace</h1>
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
