import { useListMarket } from "../../providers/ListMarket";
import { 
  Button,
} from "./styles";
import "./style.css";


function CardListMarket() {
  const { ProductsMarket, list } = useListMarket();

  return (
    <div className="container">
      {list.map((item) => {
        return (
          <div key={item.id} className="cardMarket">
            <Button onClick={() => ProductsMarket(item.id)}> <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <span>{item.price}</span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default CardListMarket;
