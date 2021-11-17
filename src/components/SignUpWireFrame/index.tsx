import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import {
  ProfileRegisterContainer,
  RegisterProfileContainer,
  RegisterProfileWrapp,
} from "./style";
import Button from "../Button";
import { useStep } from "../../providers/Step";

interface Props {
  form?: string;
  children: any;
  func?: any;
}

export default function Wireframe({ func, form, children }: Props) {
  const { handleStepDecrementation } = useStep();
  return (
    <ProfileRegisterContainer>
      <RegisterProfileContainer>
        <Button
          short
          className="marginButton"
          onClick={handleStepDecrementation}
        >
          <HiChevronLeft />
        </Button>
        <RegisterProfileWrapp>{children}</RegisterProfileWrapp>
      </RegisterProfileContainer>
      <Button
        form={form}
        onClick={func}
        className="marginButtonBotton"
        type="submit"
      >
        Next
      </Button>
    </ProfileRegisterContainer>
  );
}
