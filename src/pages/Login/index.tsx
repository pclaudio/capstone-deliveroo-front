import {userData} from "../../provider/index"
import {LoginContainer, MainLoginContainer, Logo, H6, BgImg, Icon, H66} from "./style"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import logo from "../../assets/testeLogo.svg"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import bgimg from "../../assets/Svgfoodbackground.svg"
import face from "../../assets/facebook.png"
import google from "../../assets/google.png"

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required("*Digite um email"),
        password: yup.string().required("*Digite uma senha"),
    })

    const {
        register,
        formState: {errors},
    } = useForm<userData>({resolver: yupResolver(schema)})

    return (
        <MainLoginContainer>
            <BgImg src={bgimg}/>
            <div id="box">
            <Logo src={logo}/>
            </div>
            <h3>Login To Your Account</h3>
            <LoginContainer>
                <div id="loginContent">
                    <form
                        autoComplete="off"
                        className="inputsContainer"
                    >
                        <div className="inputsContainer">
                            <div className="inputContainer">
                                <Input
                                    {...register("email")}
                                    type="text"
                                    placeholder="Email"
                                />
                                <label className="errorLabel">
                                    {errors.email?.message}
                                </label>
                            </div>

                            <div className="inputContainer">
                                <Input
                                    {...register("password")}
                                    type="password"
                                    placeholder="Senha"
                                />
                                <label className="errorLabel">
                                    {errors.password?.message}
                                </label>
                            </div>
                            <H6>
                                Or Continue With
                            </H6>
                        </div>
                        <div>
                            <Button className="faceGoogle"><Icon src={face} /> Facebook</Button>
                            <Button className="faceGoogle"><Icon src={google} /> Google</Button>
                        </div>
                        <H66>Forgot Your Password?</H66>
                        <Button type="submit">
                            Logar
                        </Button>
                    </form>
                </div>
            </LoginContainer>
        </MainLoginContainer>
    )
}

export default Login
