import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.div`
  text-align: left;

  div {
    span {
      color: #f00;
    }
  }
`;

export const InputContainer = styled.div<ContainerProps>`
  background: #FEFEFF;
  border-radius: 10px;
  border: 2px solid grey;
  color: var(--orange);
  padding: 1rem;
  width: 280px;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--error);
    `}

  ${(props) =>
    props.isRight &&
    css`
      flex-direction: row-reverse;
    `}

    ${(props) =>
    props.isGlass &&
    css`
      background-color: rgba(249, 168, 77, 0.1);
      mix-blend-mode: normal;
      border-radius: 15px;
      border: none;

      input {
        color: var(--orange);
        opacity: 0.4;
        font-weight: normal;
      }
    `}

  input {
    width: 100%;
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: black;

    &::placeholder {
      color: grey;
    }
  }

  svg {
    margin-right: 16px;
    color: var(--orange);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
