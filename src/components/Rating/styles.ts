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
    margin: 25px 0;

    &:nth-child(1) {
      margin-right: 5px;
      width: 210px;
    }

    &:nth-child(2) {
      margin-left: 5px;
      width: 85px;
    }
  }
`;

export const MktPhoto = styled.img`
  display: block;
  width: 30vh;
  margin: 0 auto;
  border-radius: 50%;
  border: 5px solid var(--primary-color-50);
`;

export const H66Rate = styled.h6`
  font-weight: normal;
  font-size: 12px;
  margin: 10px auto 15px;
  color: back;
  margin: 20px 10px;
`;

export const Container = styled.div`
  svg {
    font-size: 40px;
    margin-right: 10px;
    cursor: pointer;

    &:nth-last-child(1) {
      margin-right: 0px;
    }
  }
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
