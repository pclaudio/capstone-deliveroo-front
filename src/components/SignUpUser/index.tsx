import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { UserProps } from "../../globalTypes";

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
    <>
      <form autoComplete="off" onSubmit={handleSubmit(handleSignUpUserSubmit)}>
        <input type="text" placeholder="Username *" {...register("username")} />
        <p>{errors.username?.message}</p>

        <input type="email" placeholder="Email *" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password *"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Create Account</button>
      </form>
    </>
  );
};
export default SignUpUser;
