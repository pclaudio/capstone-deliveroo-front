import Button from "../../Button";
import { useCart } from "../../../providers/CartProvider";
import {
  CartContainer,
  H66Cat,
  H66Name,
  H66Price,
  InfoContainer,
  QTDContainer,
} from "./styles";

export const Card = () => {
  const { listCart,  addItem, subItem } = useCart();
  return (
    <>
      {listCart &&
        listCart.map((item) => {
          return (
    <CartContainer key={item.id}>
      <img src={item.image} alt={item.name} />
      <InfoContainer>
        <H66Name>{item.name}</H66Name>
        <H66Cat>categoria</H66Cat>
        <H66Price>{item.price}</H66Price>
      </InfoContainer>
      <QTDContainer>
        <Button BTNcart onClick={() => subItem(item)}>-</Button>
        <h2>{item.amount}</h2>
        <Button BTNcart onClick={() => addItem(item)}>+</Button>
      </QTDContainer>
    </CartContainer>
              );
            })}
    </>
  );
}
