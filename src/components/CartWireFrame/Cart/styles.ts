import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";
import bgimg from "../../../assets/img/Pattern.svg";

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
    justify-content: center;
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
  align-items: center;
`;

export const TotalContainer = styled.div`
  width: 350px;
  height: 205px;
  background-image: var(--primary-color);
  margin-bottom: 20px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    width: 300px;
    margin-bottom: 10px;
  }
`;

export const TextContainer = styled.div`
  margin-top: 15px;
  width: 300px;

  div {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;

    &:nth-last-child(1) {
      margin-top: 25px;

      h6 {
        font-size: 20px;
      }
    }
  }
`;

export const H66Cart = styled.h6`
  font-weight: normal;
  font-size: 15px;
  color: white;
`;

export const CircularProgress = muiStyled(
  MuiCircularProgress
)<CircularProgressProps>(({ theme }) => ({
  color: "rgba(83, 232, 139)",
}));
