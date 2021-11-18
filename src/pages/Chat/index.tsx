import Menu from "../../components/Menu";
import back from "../../assets/img/Back.svg"
import ivan from "../../assets/img/Ivan.jpg"
import jerlysson from "../../assets/img/Jerlysson.png"
import smilly from "../../assets/img/Smilly.jpg"
import claudio from "../../assets/img/Claudio.png"

import {
  MainLoginContainer,
  ButtonCountainer,
  ChatsContainer,
  Img,
  Img1,
  Nome,
  Msg,
  H1
} from "./styles";
import { useHistory } from "react-router-dom";

const Marketplace = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectToMarketplace = (): void => {
    history.push("/marketplace");
  };
  return (
    <>
      <MainLoginContainer id="box">
      <ButtonCountainer>
        <button className="button2"onClick={handleRedirectToMarketplace}><img src={back} alt="back" /></button>
      </ButtonCountainer>
        <Menu />
        <H1>Chat</H1>
      </MainLoginContainer>
      <ChatsContainer>
        <button className="chat"><Img src={ivan} alt="" /><Nome>Ivan</Nome> <Msg>your code has been delivered</Msg></button>
        <button className="chat"><Img src={jerlysson} alt="" /><Nome>Jerlysson</Nome> <Msg>your code has been delivered</Msg></button>
        <button className="chat"><Img1 src={smilly} alt="" /><Nome>Smilly</Nome> <Msg>your code has been delivered</Msg></button>
        <button className="chat"><Img src={claudio} alt="" /><Nome>Claudio</Nome> <Msg>your code has been delivered</Msg></button>
      </ChatsContainer>
    </>
  );
}

export default Marketplace;
