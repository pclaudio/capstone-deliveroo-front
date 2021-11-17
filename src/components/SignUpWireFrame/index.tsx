import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import Button from "../Button";
import { useStep } from "../../providers/Step";
import { Container, ContainerWrapp, MainContainer } from "./styles";
import { WireFrameProps } from "./types";

export default function Wireframe({ func, form, children }: WireFrameProps) {
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
      <Button
        form={form}
        onClick={func}
        className="marginButtonBotton"
        type="submit"
      >
        Next
      </Button>
    </MainContainer>
  );
}
