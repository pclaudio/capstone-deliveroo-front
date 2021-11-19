import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { ProfileProps } from "../../globalTypes";
import Wireframe from "../SignUpWireFrame";
import { FormWireFrame, H66WireFrame } from "../SignUpWireFrame/styles";
import Input from "../Input";

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
    <Wireframe form="form2">
      <h1>Fill in your bio to get started</h1>

      <H66WireFrame>
        This data will be displayed in your account profile for security
      </H66WireFrame>

      <FormWireFrame
        id="form2"
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUpProfileSubmit)}
      >
        <Input
          type="text"
          name="firstName"
          placeholder="First Name *"
          register={register}
          error={errors.firstName?.message}
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          register={register}
          error={errors.lastName?.message}
        />

        <Input
          type="tel"
          placeholder="Mobile Number *"
          name="mobileNumber"
          register={register}
          error={errors.mobileNumber?.message}
        />
      </FormWireFrame>
    </Wireframe>
  );
}

export default SignUpProfile;
