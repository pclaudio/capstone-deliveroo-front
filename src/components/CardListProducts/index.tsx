import { useCart } from "../../providers/CartProvider";
import { useListMarket } from "../../providers/ListMarket";
import promo from "../../assets/img/Grocery.svg";
import back from "../../assets/img/Back.svg";
function CardListProduct() {
  const { listProducts, setListProducts } = useListMarket();
  const { moveToCart } = useCart();
  return (
    <div className="container">
      <img className="imgFundo" src={promo} alt="" />
      <div className="backButton">
        <img src={back} alt="" onClick={() => setListProducts([])} />
      </div>
      <div className="countainerProduct">
        {listProducts.map((item) => {
          return (
            <div className="showProduct">
              <div
                key={item.id}
                className="Product"
                onClick={() => moveToCart(item)}
              >
                <h3 className="pzin">{item.name}</h3>
                <img src={item.image} alt={item.name} />
                <h3 className="pzin">R$ {item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardListProduct;
