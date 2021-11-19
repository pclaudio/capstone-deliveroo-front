import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.button<ContainerProps>`
  height: ${(props) => (props.medium ? 40 : 57)}px;
  width: 157px;
  border: none;
  border-radius: 15px;
  background: var(--primary-color);
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin: 0 auto;

  &:hover {
    background: var(--hover-color);
    font-weight: 700;
    color: black;
  }

  ${(props) =>
    props.isLarge &&
    css`
      width: 315px;
    `}

  ${(props) =>
    props.short &&
    css`
      width: 57px;
      background: rgba(249, 168, 77, 0.3);
      color: #da6317;

      &:hover {
        background: rgba(249, 168, 77, 0.8);
        font-weight: 700;
        color: black;
      }
    `}

  ${(props) =>
    props.white &&
    css`
      width: 70px;
      background: white;
      color: var(--primary-color-50);
      border: 1px solid var(--primary-color-50);

      &:hover {
        background: var(--hover-color);
        font-weight: 700;
        color: black;
      }
    `}

    ${(props) =>
    props.BTNcart &&
    css`
      width: 26px;
      height: 26px;
      background: var(--primary-color);
      color: white;
      border: 1px solid var(--primary-color-50);
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        background: var(--hover-color);
        font-weight: 700;
        color: black;
      }
    `}
`;
