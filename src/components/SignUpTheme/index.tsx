import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { ThemeProps } from "../../globalTypes";
import Wireframe from "../SignUpWireFrame";
import { H66WireFrame } from "../SignUpWireFrame/styles";
import { Error, FormTheme } from "./styles";

const SignUpTheme = (): JSX.Element => {
  const { handleSignUpTheme } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ThemeProps>({
    resolver: yupResolver(schema),
  });

  const handleSignUpThemeSubmit = (theme: ThemeProps): void => {
    handleSignUpTheme(theme);
  };

  return (
    <Wireframe form="form4">
      <h1>Theme Choise</h1>
      <H66WireFrame>
        This data will be displayed in your account profile for security
      </H66WireFrame>
      <FormTheme
        id="form4"
        autoComplete=""
        onSubmit={handleSubmit(handleSignUpThemeSubmit)}
      >
        <input id="light" type="radio" value="Light" {...register("theme")} />
        <label className="theme light" htmlFor="light">
          <div className="lightBox">
            <h2 className="lightText">light</h2>
          </div>
        </label>
        <input id="dark" type="radio" value="Dark" {...register("theme")} />
        <label className="theme dark" htmlFor="dark">
          <div className="darkBox">
            <h2 className="darkText">Dark</h2>
          </div>
        </label>
      </FormTheme>
      <Error>{errors.theme?.message}</Error>
    </Wireframe>
  );
};

export default SignUpTheme;
