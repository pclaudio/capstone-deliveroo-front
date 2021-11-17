import { useCart } from "../../providers/CartProvider";

function Cart() {
  const { listCart, removeToCart } = useCart();
  return (
    <div>
      <h2>Carrinho</h2>
      {listCart &&
        listCart.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span>{item.price}</span>
              <p>
                Quantidade <span>{item.amount}</span>
              </p>
              <button onClick={() => removeToCart(item)}>Remover</button>
            </div>
          );
        })}
    </div>
  );
}
export default Cart;
