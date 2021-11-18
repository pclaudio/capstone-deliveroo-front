import { useListMarket } from "../../providers/ListMarket";

function CardListMarket() {
  const { ProductsMarket, list } = useListMarket();

  return (
    <div className="container">
      {list.map((item) => {
        return (
          <div key={item.id} className="cardMarket">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <span>{item.price}</span>
            <button onClick={() => ProductsMarket(item.id)}>visitar</button>
          </div>
        );
      })}
    </div>
  );
}
export default CardListMarket;
