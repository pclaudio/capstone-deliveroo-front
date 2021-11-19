import { HiChevronLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "../../Button";
import { Card } from "../Card";
import { useCart } from "../../../providers/CartProvider";
import {
  Container,
  ContainerWrapp,
  H66Cart,
  MainContainer,
  TextContainer,
  TotalContainer,
} from "./styles";
export const Cart = () => {
  const history = useHistory();
  const { count } = useCart();

  const handleRedirectToMarketplace = (): void => {
    history.push("/marketplace");
  };
  return (
    <MainContainer>
      <Container>
        <Button short onClick={handleRedirectToMarketplace} className="marginButton">
          <HiChevronLeft />
        </Button>

        <ContainerWrapp>
          <Card />
        </ContainerWrapp>
      </Container>
      <TotalContainer>
        <TextContainer>
          <div>
            <H66Cart>Sub-Total:</H66Cart>
            <H66Cart>13:00</H66Cart>
          </div>
          <div>
            <H66Cart>Delivery Charge:</H66Cart>
            <H66Cart>13:00</H66Cart>
          </div>
          <div>
            <H66Cart>Discount:</H66Cart>
            <H66Cart>13:00</H66Cart>
          </div>
          <div>
            <H66Cart>Total:</H66Cart>
            <H66Cart>{count.toFixed(2)}</H66Cart>
          </div>
        </TextContainer>
        <Button white>Place My Order</Button>
      </TotalContainer>
    </MainContainer>
  );
}
