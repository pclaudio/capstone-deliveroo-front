import { useHistory } from "react-router";
import ivan from "../../assets/img/Ivan.jpg";
import smilly from "../../assets/img/Smilly.jpg";
import jerlysson from "../../assets/img/Jerlysson.png";
import claudio from "../../assets/img/Claudio.png";
import back from "../../assets/img/Back.svg";
import mail from "../../assets/img/mail.png";
import github from "../../assets/img/github.png";
import linkein from "../../assets/img/linkedin.png";
import logo from "../../assets/img/ourTeam.svg";
import {
  MainLoginContainer,
  Foto,
  ButtonCountainer,
  P2,
  P,
  Iconz,
  Logo,
} from "./styles";

const OurTeam = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectToLandingPage = (): void => {
    history.push("/landingpage");
  };

  return (
    <MainLoginContainer>
      <Logo src={logo} />

      <h1>Our Team</h1>

      <div id="box">
        <Foto src={ivan} />
        <P>Ivan Rowlands</P>
        <P>Role: Scrum Master</P>

        <P2 className="Contact">
          Contact:
          <a href="mailto:ivan.rowlands.macedo@gmail.com">
            <Iconz src={mail} />
          </a>
          <a href="https://github.com/ivanrowlands">
            <Iconz src={github} />
          </a>
          <a href="https://www.linkedin.com/in/ivan-rowlands-de-macedo-77055b224/">
            <Iconz src={linkein} />
          </a>
        </P2>

        <Foto src={smilly} />
        <P>Smilly Delmondes</P>
        <P>Role: Project Owner</P>

        <P2 className="Contact">
          Contact:
          <a href="mailto:smilly.3d@gmail.com">
            <Iconz src={mail} />
          </a>
          <a href="https://www.linkedin.com/in/smilly-delmondes-307927207/">
            <Iconz src={linkein} />
          </a>
        </P2>

        <Foto src={jerlysson} />
        <P>Jerlysson Eduardo</P>
        <P>Role: Quality Assurance</P>

        <P2 className="Contact">
          Contact:
          <a href="https://github.com/jerlysson">
            <Iconz src={github} />
          </a>
          <a href="https://www.linkedin.com/in/jerlysson-miranda-659216208/">
            <Iconz src={linkein} />
          </a>
        </P2>

        <Foto src={claudio} />
        <P>Cláudio Pereira</P>
        <P>Role: Tech Lead</P>

        <P2 className="Contact">
          Contact:
          <a href="mailto:pclaudio.ans@gmail.com">
            <Iconz src={mail} />
          </a>
          <a href="https://github.com/pclaudio">
            <Iconz src={github} />
          </a>
          <a href="https://www.linkedin.com/in/claudio-oliveira-pereira/">
            <Iconz src={linkein} />
          </a>
        </P2>
      </div>

      <ButtonCountainer>
        <button className="button2" onClick={handleRedirectToLandingPage}>
          <img src={back} alt="back" />
        </button>
      </ButtonCountainer>
    </MainLoginContainer>
  );
};

export default OurTeam;
