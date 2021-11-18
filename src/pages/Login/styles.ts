import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import bgimg from "../../assets/img/Pattern.svg";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";
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

export const Icon = styled.img`
  width: 32px;
  margin-right: 10px;
`;

export const H66 = styled(Link)`
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
  margin: 0 auto 15px;
`;

export const Logo = styled.img`
  display: block;
  width: 30vh;
  margin: 0 auto;
`;

export const BgImg = styled.img`
  display: block;
  position: absolute;
  color: var(--primary-color);
  width: 100vw;
`;

export const ContainerWrapp = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 300px;
`;

export const SocialContainer = styled.div`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    background: var(--white);
    border: 1px solid #d9d9d9;
    color: black;

    &:nth-child(1) {
      margin-right: 4px;
    }

    &:nth-child(2) {
      margin-left: 4px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CircularProgress = muiStyled(
  MuiCircularProgress
)<CircularProgressProps>(({ theme }) => ({
  color: "rgba(83, 232, 139)",
}));
