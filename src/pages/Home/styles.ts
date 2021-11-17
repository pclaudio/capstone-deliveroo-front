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
    margin-top: 140px;
  }
`;
export const ButtonCountainer = styled.div`
  position: fixed;
  bottom: 90px;
`
export const H3 = styled.h3`
  margin-top: 60px;
`

export const Logo = styled.img`
  display: block;
  width: 40vh;
  margin: 0 auto;
`;

export const CircularProgress = muiStyled(
  MuiCircularProgress
)<CircularProgressProps>(({ theme }) => ({
  color: "rgba(83, 232, 139)",
}));
