import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import bgimg from "../../assets/img/Pattern.svg";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(255, 255, 255, 1)
    ),
    url(${bgimg});
  #box {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
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
  .button2{
    position: fixed;
    top: 50px;
    left: 25px;
    width: 85px;
    height: 25px;
    border: none;
    background-color: transparent;
  }
`;

export const Promo = styled.img`
    width: 92%;
`;

export const Filter = styled.img`
    width: 50px;
    margin-left: 10px;
`;

export const Img =styled.img`
    display:flex;
    align-items: center;
    width: 75px;
    margin-left: 10px;
    border-radius: 15px;
`;

export const Img1 =styled.img`
    display:flex;
    align-items: center;
    width:60px;
    margin-left: 10px;
    border-radius: 15px;
`;

export const H1 = styled.h1`
    width: 220px;
    text-align: inherit;
    margin-right: 110px;
    margin-top: 140px;
    margin-bottom: 20px;
`;

export const Nome = styled.p`
    margin: 0 auto 50px;
`;

export const Msg = styled.p`
    position: absolute;
    left: 135px;
`;

export const ChatsContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  .chat{
    display: flex;
    border: 1px solid #0000001f;
    height: 90px;
    width: 300px;
    border-radius: 22px;
    margin: 15px auto;
    background-color: white;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
  }
`;

export const DivFilter = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    .buscaColorida{
        background-color: #f9a84d4f;
    }
`;

export const Grocery =styled.div `
    margin: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    .nearest{
        margin-top: 0px;
        margin-right: 49px;
    }
`;

export const ShowMore = styled.div`
    border: none;
    background: transparent;
    color: #FF7C32;
    font-size: 10px;
`;

export const Nearest = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Menu = styled.div`
    border: 1px solid black;
    position: fixed;
    bottom: 10px;
    width: 300px;
    height: 70px;
    background-color: antiquewhite;
    text-align: center;
    padding: 25px;
    border-radius: 22px;
`;

export const CircularProgress = muiStyled(
  MuiCircularProgress
)<CircularProgressProps>(({ theme }) => ({
  color: "rgba(83, 232, 139)",
}));
