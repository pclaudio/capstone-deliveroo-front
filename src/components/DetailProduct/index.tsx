import { useAvailable } from "../../providers/AvailableProvider";
import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";
import InforProduct from "../Available";

function DetailProduct() {
  const { detail, setDetail } = useDetails();
  const { moveToCart } = useCart();
  const { feedProduct, setFeedProduct, windowFeed, setWindowFeed } =
    useAvailable();

  const exitFeed = () => {
    setDetail([]);
    setFeedProduct([]);
  };
  return (
    <div>
      <h2>Detalhes</h2>
      {detail.map((item) => {
        return (
          <>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <div>
              <button onClick={() => setWindowFeed(!windowFeed)}>
                Visualizar feedbacks
              </button>

              <span>Qntd: {feedProduct.length}</span>
              <span>
                Ultima Nota:
                {feedProduct.length > 0
                  ? feedProduct[feedProduct.length - 1].avaliation
                  : 0}
              </span>
              {windowFeed && InforProduct(item.id)}
            </div>

            <button onClick={() => moveToCart(item)}>add To Cart</button>
            <button onClick={exitFeed}>Voltar</button>
          </>
        );
      })}
    </div>
  );
}
export default DetailProduct;
