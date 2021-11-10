import styled, { css } from "styled-components";

interface ContainerProps {
  isErrored: boolean;
  isRight: boolean;
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
  color: grey;
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
      display: flex;
      flex-direction: row-reverse;
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
    background: linear-gradient(
      135deg,
      rgba(83, 232, 139, 1) 35%,
      rgba(21, 190, 119, 1) 100%
    );
    border: none;
  }
`;
