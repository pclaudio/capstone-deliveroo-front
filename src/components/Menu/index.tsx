import { Container, Menu1, ButtonMenu } from "./styles";
import Home from "../../assets/img/Home.svg";
import Profile from "../../assets/img/Profile.svg";
import Chat from "../../assets/img/Chat.svg";
import Cart from "../../assets/img/Buy.svg";

import { useMenu } from "../../providers/Menu";
const Menu = () => {
  const {
    homeMenu,
    profileMenu,
    cartMenu,
    chatMenu,
    handleHome,
    handleProfile,
    handleCart,
    handleChat,
  } = useMenu();

  return (
    <Container>
      <div className="GrowerButton">
        <ButtonMenu growth={homeMenu} onClick={handleHome}>
          <Menu1 src={Home} /> Home
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu growth={profileMenu} onClick={handleProfile}>
          <Menu1 src={Profile} /> Profile
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu growth={cartMenu} onClick={handleCart}>
          <Menu1 src={Cart} /> Cart
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu growth={chatMenu} onClick={handleChat}>
          <Menu1 src={Chat} /> Chat
        </ButtonMenu>
      </div>
    </Container>
  );
}

export default Menu;
