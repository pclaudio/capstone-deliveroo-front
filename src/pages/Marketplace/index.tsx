import CardListMarket from "../../components/CardListMarket";
import CardListProduct from "../../components/CardListProducts";
import { useAuthentication } from "../../providers/Authentication";
import { useListMarket } from "../../providers/ListMarket";
import "./style.css";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();
  const { list, listProducts } = useListMarket();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <>
      <h1>Marketplace</h1>
      <button onClick={handleLogoutClick}>Sair</button>
      <div className="container">
        {list && list.map((item) => CardListMarket(item))}
        {listProducts.length > 0 ? CardListProduct() : ""}
      </div>
    </>
  );
};

export default Marketplace;
