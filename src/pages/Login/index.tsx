import { useAuthentication } from "../../providers/Authentication";
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
  LoginContainer,
  MainLoginContainer,
  Logo,
  H6,
  Icon,
  H66,
  CircularProgress,
} from "./styles";

const Login = (): JSX.Element => {
  const { isFetching, handleLogin } = useAuthentication();

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
    <MainLoginContainer>
      <div id="box">
        <Logo src={logo} />
      </div>

      <h3>Login To Your Account</h3>

      <LoginContainer>
        <div id="loginContent">
          <form
            autoComplete="off"
            className="inputsContainer"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <div className="inputsContainer">
              <div className="inputContainer">
                <Input
                  type="text"
                  placeholder="Email *"
                  name="email"
                  register={register}
                />
                <label className="errorLabel">{errors.email?.message}</label>
              </div>

              <div className="inputContainer">
                <Input
                  type="password"
                  placeholder="Password *"
                  name="password"
                  register={register}
                />
                <label className="errorLabel">{errors.password?.message}</label>
              </div>
            </div>

            <H6>Or Continue With</H6>

            <div className="loginFaceGoogle">
              <Button className="faceGoogle">
                <Icon src={face} /> Facebook
              </Button>

              <Button className="faceGoogle">
                <Icon src={google} /> Google
              </Button>
            </div>

            <H66>Forgot Your Password?</H66>

            {isFetching ? (
              <Button type="submit" disable>
                <CircularProgress size={28} />
              </Button>
            ) : (
              <Button type="submit">Logar</Button>
            )}
            <H66>don’t have an account?</H66>
          </form>
        </div>
      </LoginContainer>
    </MainLoginContainer>
  );
};

export default Login;
