import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import {
  ProfileRegisterContainer,
  RegisterProfileContainer,
  RegisterProfileWrapp,
} from "./styles";
import Button from "../Button";
import { useAuthentication } from "../../providers/Authentication";

interface Props {
  form?: string;
  children: any;
  func?: any;
}

export default function Wireframe({ func, form, children }: Props) {
  const { previousStep } = useAuthentication();
  return (
    <ProfileRegisterContainer>
      <RegisterProfileContainer>
        <Button short className="marginButton" onClick={previousStep}>
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
