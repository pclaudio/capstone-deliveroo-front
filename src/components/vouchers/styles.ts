import styled from "styled-components";
import { VouchTeste } from "./types";

export const VoucherContainer = styled.div<VouchTeste>`
  margin-top: 30px;
  width: 325px;
  height: 122px;
  background-color: black;
  background-image: url(${({ imgMocked }) => imgMocked});
  border-radius: 17px;
`;

export const VoucherWrapp = styled.div`
  display: flex;
`;

export const DivGrow = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    margin-top: 20px;
    width: 100px;
    height: 32px;
    border-radius: 6;
  }
`;
