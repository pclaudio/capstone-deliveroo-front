import { Container, Menu1, ButtonMenu } from "./styles";
import Home from "../../assets/img/Home.svg";
import Profile from "../../assets/img/Profile.svg";
import Chat from "../../assets/img/Chat.svg";
import Cart from "../../assets/img/Buy.svg";
import { useHistory } from "react-router-dom";

const Menu = () => {
    const history = useHistory();

    const handleRedirectToMarketplace = (): void => {
      history.push("/marketplace");
    };
    const handleRedirectToProfile = (): void => {
        history.push("/profile");
      };
      const handleRedirectToCart = (): void => {
        history.push("/cart");
      };
      const handleRedirectToChat = (): void => {
        history.push("/chat");
      };
  return (
    <Container>
      <ButtonMenu>
        <Menu1 src={Home} onClick={handleRedirectToMarketplace}/> Home
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Profile} onClick={handleRedirectToProfile}/> Profile
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Cart} onClick={handleRedirectToCart}/> Cart
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Chat} onClick={handleRedirectToChat}/> Chat
      </ButtonMenu>
    </Container>
  );
}

export default Menu;