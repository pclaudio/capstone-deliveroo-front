import { Container, Menu1, ButtonMenu } from "./styles";
import Home from "../../assets/img/Home.svg";
import Profile from "../../assets/img/Profile.svg";
import Chat from "../../assets/img/Chat.svg";
import Cart from "../../assets/img/Buy.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const history = useHistory();
  const [home, setHome] = useState(false);
  const [perfil, setPerfil] = useState(false);

  const handleRedirectToMarketplace = (): void => {
    setHome(!home);
    setPerfil(!perfil);
    history.push("/marketplace");
  };
  const handleRedirectToProfile = (): void => {
    setPerfil(!perfil);
    history.push("/marketplace");
  };
  const handleRedirectToCart = (): void => {
    history.push("/cart");
  };
  const handleRedirectToChat = (): void => {
    history.push("/chat");
  };
  return (
    <Container>
      <div className="GrowerButton">
        <ButtonMenu growth={home} onClick={handleRedirectToMarketplace}>
          <Menu1 src={Home} /> Home
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu growth={perfil} onClick={handleRedirectToProfile}>
          <Menu1 src={Profile} /> Profile
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu>
          <Menu1 src={Cart} onClick={handleRedirectToCart} /> Cart
        </ButtonMenu>
      </div>
      <div className="GrowerButton">
        <ButtonMenu>
          <Menu1 src={Chat} onClick={handleRedirectToChat} /> Chat
        </ButtonMenu>
      </div>
    </Container>
  );
};

export default Menu;
