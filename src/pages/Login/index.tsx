import { userData } from "../../providers/index";
import {
  LoginContainer,
  MainLoginContainer,
  Logo,
  H6,
  BgImg,
  Icon,
  H66,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/img/testeLogo.svg";
import bgimg from "../../assets/img/Pattern.svg";
import face from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<userData>({ resolver: yupResolver(schema) });

  return (
    <MainLoginContainer>
      <BgImg src={bgimg} />

      <div id="box">
        <Logo src={logo} />
      </div>

      <h3>Login To Your Account</h3>

      <LoginContainer>
        <div id="loginContent">
          <form autoComplete="off" className="inputsContainer">
            <div className="inputsContainer">
              <div className="inputContainer">
                <Input {...register("email")} type="text" placeholder="Email" />
                <label className="errorLabel">{errors.email?.message}</label>
              </div>

              <div className="inputContainer">
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="Senha"
                />
                <label className="errorLabel">{errors.password?.message}</label>
              </div>

              <H6>Or Continue With</H6>
            </div>

            <div className="loginFaceGoogle">
              <Button className="faceGoogle">
                <Icon src={face} /> Facebook
              </Button>

              <Button className="faceGoogle">
                <Icon src={google} /> Google
              </Button>
            </div>

            <H66>Forgot Your Password?</H66>

            <Button type="submit">Logar</Button>
          </form>
        </div>
      </LoginContainer>
    </MainLoginContainer>
  );
};

export default Login;
