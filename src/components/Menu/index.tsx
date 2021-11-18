import { Container, Menu1, ButtonMenu } from "./styles";
import Home from "../../assets/img/Home.svg";
import Profile from "../../assets/img/Profile.svg";
import Chat from "../../assets/img/Chat.svg";
import Cart from "../../assets/img/Buy.svg";

const Menu = () => {
  return (
    <Container>
      <ButtonMenu>
        <Menu1 src={Home} /> Home
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Profile} /> Profile
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Cart} /> Cart
      </ButtonMenu>
      <ButtonMenu>
        <Menu1 src={Chat} /> Chat
      </ButtonMenu>
    </Container>
  );
};

export default Menu;
