import { useAvailable } from "../../providers/AvailableProvider";
import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";
import { useListMarket } from "../../providers/ListMarket";
import { AddAvailable, InforProduct } from "../Available";

function CardListProduct() {
  const { listProducts, setListProducts } = useListMarket();
  const { ShowDetailProduct } = useDetails();
  const { moveToCart } = useCart();
  const { GetProductComent } = useAvailable();
  return (
    <div className="container">
      <span onClick={() => setListProducts([])}>Voltar</span>

      {listProducts.map((item) => {
        return (
          <div key={item.id} className="showProduct">
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <button onClick={() => ShowDetailProduct(item.id)}>Ver Mais</button>
            <button onClick={() => moveToCart(item)}>Adcionar ao Carrim</button>
            <hr />
            <button onClick={() => GetProductComent(item.id)}>
              Ver Avaliações
            </button>
            <button>Avaliar</button>
            <InforProduct />
            <AddAvailable />

            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default CardListProduct;
