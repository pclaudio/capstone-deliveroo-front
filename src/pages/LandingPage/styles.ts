import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
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
  );
`;

export const P = styled.p`
  text-align: center;
  font-size: 12px;
  width: 150px;
  margin-top: 27px;
`;

export const ButtonCountainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  position: fixed;
  bottom: 90px;

  .button1 {
    margin-top: 10px;
  }

  .button2 {
    margin-top: 50px;
    width: 85px;
    height: 25px;
  }
`;

export const H3 = styled.h3`
  margin-top: 25px;
`;

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
