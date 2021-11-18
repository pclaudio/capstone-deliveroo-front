import styled, { css } from "styled-components";

interface ButtonProp {
  growth?: boolean;
}

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  background-color: white;
  height: 6vh;
  width: 85vw;
  display: flex;
  border-radius: 22px;
  border: 1px solid #0000000f;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

  .GrowerButton {
    display: flex;
    justify-content: center;
    color: red;
    flex-grow: 1;
  }
`;

export const Menu1 = styled.img`
  opacity: 0.6;
  width: 20px;

  &:hover {
    opacity: 100%;
  }
`;

export const ButtonMenu = styled.button<ButtonProp>`
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  border: none;
  font-size: 0px;
  background-color: white;
  transition: 0.3s ease;

  ${(props) =>
    props.growth &&
    css`
      transition: 0.3s ease;
      font-size: 12px;
      background-color: #53e88b38;
      width: 80px;
      height: 40px;
      border-radius: 12px;

      &:nth-child(1) {
        margin-left: 1px;
      }

      &:nth-last-child(1) {
        margin-rigth: 1px;
      }
    `}
`;
