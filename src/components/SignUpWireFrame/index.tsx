import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import Button from "../Button";
import { useStep } from "../../providers/Step";
import {
  CircularProgress,
  Container,
  ContainerWrapp,
  MainContainer,
} from "./styles";
import { WireFrameProps } from "./types";
import { useFetch } from "../../providers/Fetch";

export default function Wireframe({
  func,
  form,
  children,
  btnText = "next",
}: WireFrameProps) {
  const { isFetching } = useFetch();
  const { handleStepDecrementation } = useStep();
  return (
    <MainContainer>
      <Container>
        <Button
          short
          className="marginButton"
          onClick={handleStepDecrementation}
        >
          <HiChevronLeft />
        </Button>
        <ContainerWrapp>{children}</ContainerWrapp>
      </Container>
      {isFetching ? (
        <Button type="submit" disable>
          <CircularProgress size={28} />
        </Button>
      ) : (
        <Button
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
