import CardListMarket from "../../components/CardListMarket";
import CardListProduct from "../../components/CardListProducts";
import Cart from "../../components/Cart";
import DetailProduct from "../../components/DetailProduct";
import { useAuthentication } from "../../providers/Authentication";
import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";
import { useListMarket } from "../../providers/ListMarket";
import "./style.css";
import promo from "../../assets/img/Promo.svg"
import Input from "../../components/Input";
import configFilter from "../../assets/img/Filter.svg"
import {
  MainLoginContainer,
  Filter,
  H1,
  DivFilter,
  Promo,
  Grocery,
  ShowMore,
  Nearest,
  Menu,
  Main
} from "./styles";

const Marketplace = (): JSX.Element => {
  const { handleLogout } = useAuthentication();
  const { list, listProducts } = useListMarket();
  const { listCart } = useCart();
  const { detail } = useDetails();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  return (
    <Main>
      <MainLoginContainer id="box">
        <H1>Find Your Favorite Product</H1>
        <DivFilter>
         <Input   
            className="buscaColorida"
            type="text"
            placeholder="What do you want to order?"
            name="filter"
          />
        <Filter src={configFilter} alt="" />
        </DivFilter>
        </MainLoginContainer>
        <Promo src={promo} alt=""/>
        <Nearest>
        <Grocery>
        <H1 className="nearest">Nearest grocery</H1>
        <ShowMore>view more</ShowMore>
        </Grocery>
        <div>
        {list.length > 0 ? <CardListMarket /> : ""}
        <br />

        {listProducts.length > 0 ? <CardListProduct /> : ""}
        <br />

        {detail.length > 0 ? <DetailProduct /> : ""}
        <br />

        {listCart.length > 0 ? <Cart /> : ""}
      </div>
        </Nearest>
        <Nearest>
        <Grocery>
        <H1 className="nearest">Popular grocery</H1>
        <ShowMore>view more</ShowMore>
        </Grocery>
        <div>
        {list.length > 0 ? <CardListMarket /> : ""}
        <br />

        {listProducts.length > 0 ? <CardListProduct /> : ""}
        <br />

        {detail.length > 0 ? <DetailProduct /> : ""}
        <br />

        {listCart.length > 0 ? <Cart /> : ""}
      </div>
        </Nearest>
      <Menu>aqui vem o menu</Menu>

      </Main>
  );
};

export default Marketplace;
