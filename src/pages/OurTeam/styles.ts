import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import bgimg from "../../assets/img/Pattern.svg";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(255, 255, 255, 1)
    ),
    url(${bgimg});
  #box {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
`;

export const P = styled.p`
  text-align: center;
  font-size: 12px;
  width: 150px;
`;

export const Logo = styled.img`
    width: 30vh;
`;

export const P2 = styled.p `
    font-size: 12px;
    width: 150px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: inherit;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ButtonCountainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  position: fixed;
  left: 10px;
  .button1{
    margin-top:10px;
  }
  .button2{
    margin-top: 50px;
    width: 85px;
    height: 25px;
    border: none;
    background-color: transparent;
  }
`;

export const H3 = styled.h3`
  margin-top: 25px;
`;

export const Iconz = styled.img`
  display: block;
  width: 3vh;
`;

export const Foto = styled.img`
  border-radius: 30px;
  display: block;
  width: 20vh;
  margin: 0 auto;
`;

export const CircularProgress = muiStyled(
  MuiCircularProgress
)<CircularProgressProps>(({ theme }) => ({
  color: "rgba(83, 232, 139)",
}));
