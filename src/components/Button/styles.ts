import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.button<ContainerProps>`
  height: ${(props) => (props.medium ? 40 : 57)}px;
  width: ${(props) => (props.full ? "100%" : "157px")};
  border: none;
  border-radius: 15px;
  background: ${(props) =>
    props.disable ? "var(--grey-100)" : "var(--primary-color)"};
  color: ${(props) => (props.disable ? "var(--grey-300)" : "white")};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin: 0 auto;

  &:hover {
    background: var(--hover-color);
    font-weight: 700;
    color: black;
  }
`;
