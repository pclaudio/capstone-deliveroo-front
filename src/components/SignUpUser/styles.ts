import styled from "styled-components";
import bgimg from "../../assets/img/Pattern.svg";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    ),
    url(${bgimg});

  #box {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  h3 {
    text-align: center;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 30vh;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 280px;
`;

export const ContainerWrapp = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const Form = styled.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckContainer = styled.div`
  width: 275px;

  div {
    display: flex;

    svg {
      font-size: 20px;
      color: rgba(21, 190, 119, 1);
    }
  }

  H6 {
    width: 80%;
    vertical-align: middle;
    line-height: 21px;
    font-size: 13px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkLogin = styled(Link)`
  font-weight: normal;
  font-size: 12px;
  margin: 10px auto 15px;
  background: var(--primary-color);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const H6 = styled.h6`
  font-weight: 900;

  svg {
    font-size: 20px;
  }
`;
