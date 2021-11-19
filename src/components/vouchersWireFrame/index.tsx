import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import Button from "../Button";
import {
  CircularProgress,
  Container,
  ContainerWrapp,
  MainContainer,
} from "./styles";
import { WireFrameProps } from "./types";
import { useFetch } from "../../providers/Fetch";
import { useHistory } from "react-router-dom";

export default function Wireframe({
  isLarge,
  isFlex,
  func,
  form,
  children,
  btnText = "Next",
}: WireFrameProps) {
  const { isFetching } = useFetch();

  const history = useHistory();

  const handleProfile = (): void => {
    history.push("/Profile");
  };

  return (
    <MainContainer>
      <Container>
        <Button short className="marginButton" onClick={handleProfile}>
          <HiChevronLeft />
        </Button>

        <ContainerWrapp isFlex={isFlex}>{children}</ContainerWrapp>
      </Container>

      {isFetching ? (
        <Button type="submit" className="marginButtonBotton" disable>
          <CircularProgress size={28} />
        </Button>
      ) : (
        <Button
          isLarge={isLarge}
          form={form}
          onClick={func}
          className="marginButtonBotton"
          type="submit"
        >
          {btnText}
        </Button>
      )}
    </MainContainer>
  );
}
