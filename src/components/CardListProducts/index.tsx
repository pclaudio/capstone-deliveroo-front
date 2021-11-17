import { useListMarket } from "../../providers/ListMarket";

function CardListProduct() {
  const { listProducts, setListProducts } = useListMarket();
  return (
    <div>
      <span onClick={() => setListProducts([])}>Voltar</span>
      {listProducts.map((item) => {
        return (
          <div key={item.id} className="showProduct">
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <button>Ver Mais</button>
            <button>Adcionar ao Carrim</button>
          </div>
        );
      })}
    </div>
  );
}
export default CardListProduct;
