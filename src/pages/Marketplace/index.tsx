import CardListMarket from "../../components/CardListMarket";
import CardListProduct from "../../components/CardListProducts";
import Menu from "../../components/Menu";
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
  ShowProduct,
} from "./styles";

const Marketplace = (): JSX.Element => {
  const { list, listProducts } = useListMarket();

  return (
      <MainLoginContainer id="box">
        <H1>Find Your Favorite Product</H1>
        <DivFilter>
         <Input   
            className="buscaColorida"
            type="text"
            placeholder="What do you want to order?"
            name="filter"
            isGlass />
        <Filter src={configFilter} alt="" />
        </DivFilter>
        <Promo src={promo} alt=""/>
        <Nearest>
        <Grocery>
        <H1 className="nearest">Nearest grocery</H1>
        <ShowMore>view more</ShowMore>
        </Grocery>
        <div>
        {list.length > 0 ? <CardListMarket /> : ""}
        <br />
        <ShowProduct>
        {listProducts.length > 0 ? <CardListProduct /> : ""}
        </ShowProduct>
        <br />
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
      </div>
        </Nearest>
        <Menu />
      </MainLoginContainer>
  );
}

export default Marketplace;
