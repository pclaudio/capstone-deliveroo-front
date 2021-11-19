import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { ThemeProps } from "../../globalTypes";

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
    <>
      <form autoComplete="" onSubmit={handleSubmit(handleSignUpThemeSubmit)}>
        <div>
          <input type="radio" value="Light" {...register("theme")} />
          <label>Light</label>
        </div>

        <div>
          <input type="radio" value="Dark" {...register("theme")} />
          <label>Dark</label>
        </div>

        <p>{errors.theme?.message}</p>

        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default SignUpTheme;
