import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { ProfileProps } from "../../globalTypes";

const SignUpProfile = (): JSX.Element => {
  const { handleSignUpProfile } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileProps>({
    resolver: yupResolver(schema),
  });

  const handleSignUpProfileSubmit = (profile: ProfileProps): void => {
    handleSignUpProfile(profile);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUpProfileSubmit)}
      >
        <input
          type="text"
          placeholder="First Name *"
          {...register("firstName")}
        />
        <p>{errors.firstName?.message}</p>

        <input
          type="text"
          placeholder="Last Name *"
          {...register("lastName")}
        />
        <p>{errors.lastName?.message}</p>

        <input
          type="tel"
          placeholder="Mobile Number"
          {...register("mobileNumber")}
        />
        <p>{errors.mobileNumber?.message}</p>

        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default SignUpProfile;
