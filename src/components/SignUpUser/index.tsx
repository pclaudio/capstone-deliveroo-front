import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { UserProps } from "../../globalTypes";
import { AiFillCheckCircle } from "react-icons/ai";

import {
  Form,
  Logo,
  MainContainer,
  Container,
  ContainerWrapp,
  CheckContainer,
  ButtonContainer,
  LinkLogin,
} from "./styles";
import logo from "../../assets/img/testeLogo.svg";
import Input from "../Input";
import Button from "../Button";

const SignUpUser = (): JSX.Element => {
  const { handleSignUpUser } = useSignUp();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: yupResolver(schema),
  });

  const handleSignUpUserSubmit = (user: UserProps): void => {
    handleSignUpUser(user);
    setValue("password", "");
  };

  return (
    <MainContainer>
      <div>
        <div id="box">
          <Logo src={logo} />
        </div>
        <h3>Sign Up For Free </h3>
      </div>
      <Container>
        <ContainerWrapp>
          <Form
            id="form1"
            autoComplete="off"
            onSubmit={handleSubmit(handleSignUpUserSubmit)}
          >
            <Input
              type="text"
              placeholder="Username *"
              register={register}
              name="username"
              img={require("../../assets/img/User.svg").default}
              error={errors.username?.message}
            />

            <Input
              type="email"
              placeholder="Email *"
              register={register}
              name="email"
              img={require("../../assets/img/Message.svg").default}
              error={errors.email?.message}
            />

            <Input
              type="password"
              placeholder="Password *"
              register={register}
              name="password"
              img={require("../../assets/img/Lock.svg").default}
              error={errors.password?.message}
            />
          </Form>
        </ContainerWrapp>
      </Container>
      <CheckContainer>
        <div>
          <AiFillCheckCircle />
          <h6>Keep Me Signed In</h6>
        </div>
        <div>
          <AiFillCheckCircle />
          <h6>Email me About Special Pricing</h6>
        </div>
      </CheckContainer>
      <ButtonContainer>
        <Button type="submit" form="form1">
          Criar Conta
        </Button>
        <LinkLogin to="/login">already have an account?</LinkLogin>
      </ButtonContainer>
    </MainContainer>
  );
};
export default SignUpUser;
