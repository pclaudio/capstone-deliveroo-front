import { useAuthentication } from "../../providers/Authentication";
import { useFetch } from "../../providers/Fetch";
import { UserProps } from "../../globalTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import logo from "../../assets/img/testeLogo.svg";
import face from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Container,
  MainContainer,
  Logo,
  H6,
  Icon,
  H66,
  CircularProgress,
  ContainerWrapp,
  Form,
  ButtonContainer,
  SocialContainer,
} from "./styles";

const Login = (): JSX.Element => {
  const { handleLogin } = useAuthentication();

  const { isFetching } = useFetch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = (user: UserProps): void => {
    handleLogin(user);
    setValue("password", "");
  };

  return (
    <MainContainer>
      <div>
        <div id="box">
          <Logo src={logo} />
        </div>
        <h3>Login To Your Account</h3>
      </div>
      <Container>
        <ContainerWrapp>
          <Form
            id="formL"
            autoComplete="off"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
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
      <H6>Or Continue With</H6>

      <SocialContainer>
        <Button className="faceGoogle">
          <Icon src={face} /> Facebook
        </Button>

        <Button className="faceGoogle">
          <Icon src={google} /> Google
        </Button>
      </SocialContainer>

      <ButtonContainer>
        <H66 to="/">Forgot Your Password?</H66>
        {isFetching ? (
          <Button type="submit" disable>
            <CircularProgress size={28} />
          </Button>
        ) : (
          <Button form="formL" type="submit">
            Logar
          </Button>
        )}
        <H66 to="/signup">don’t have an account?</H66>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Login;
