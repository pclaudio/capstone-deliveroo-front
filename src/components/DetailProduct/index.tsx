import { useCart } from "../../providers/CartProvider";
import { useDetails } from "../../providers/DetailsProvider";

function DetailProduct() {
  const { detail, setDetail } = useDetails();
  const { moveToCart } = useCart();

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
            <button onClick={() => moveToCart(item)}>add To Cart</button>
            <button onClick={() => setDetail([])}>Voltar</button>
          </>
        );
      })}
    </div>
  );
}
export default DetailProduct;
