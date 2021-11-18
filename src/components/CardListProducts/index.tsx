import { useAvailable } from "../../providers/AvailableProvider";
import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";
import { useListMarket } from "../../providers/ListMarket";

function CardListProduct() {
  const { listProducts, setListProducts } = useListMarket();
  const { ShowDetailProduct } = useDetails();
  const { moveToCart } = useCart();
  const { GetProductComent } = useAvailable();

  const showFeed = (id: number) => {
    ShowDetailProduct(id);
    GetProductComent(id);
  };
  return (
    <div className="container">
      <span onClick={() => setListProducts([])}>Voltar</span>

      {listProducts.map((item) => {
        return (
          <div key={item.id} className="showProduct">
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <button onClick={() => showFeed(item.id)}>Ver Mais</button>
            <button onClick={() => moveToCart(item)}>Adcionar ao Carrim</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default CardListProduct;
