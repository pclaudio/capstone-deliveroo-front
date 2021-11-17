import styled from "styled-components";
import bgimg from "../../assets/img/Pattern.svg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 1)
    ),
    url(${bgimg});
  #box {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .marginButtonBotton {
    margin: 25px;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 280px;

  .marginButton {
    margin: 10px;
    svg {
      font-size: 50px;
    }
  }
`;

export const ContainerWrapp = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const FormWireFrame = styled.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H66WireFrame = styled.h6`
  font-weight: normal;
  font-size: 12px;
  margin: 10px auto 15px;
  color: back;
  margin: 20px 10px;
`;
