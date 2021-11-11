import styled, { css } from "styled-components";

interface ContainerProps {
  isErrored: boolean;
  isRight: boolean;
  isGlass: boolean;
}
export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: #f00;
    }
  }
`;

export const InputContainer = styled.div<ContainerProps>`
  background: white;
  border-radius: 10px;
  border: 2px solid grey;
  color: #da6317;
  padding: 1rem;
  width: 280px;
  display: flex;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f00;
      svg {
        color: #f00;
      }
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
        color: #da6317;
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
    color: var(--black);
    &::placeholder {
      color: var(--grey);
    }
  }
  svg {
    margin-right: 16px;
    color: #da6317;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
