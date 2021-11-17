import { useListMarket } from "../../providers/ListMarket";

function CardListMarket(item: any) {
  const { ProductsMarket } = useListMarket();

  return (
    <div key={item.id} className="cardMarket">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={() => ProductsMarket(item.id)}>visitar</button>
    </div>
  );
}
export default CardListMarket;
