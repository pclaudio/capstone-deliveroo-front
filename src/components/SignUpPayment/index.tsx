import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { PaymentProps } from "../../globalTypes";
import Wireframe from "../SignUpWireFrame";
import { H66WireFrame } from "../SignUpWireFrame/styles";
import { FormPayment } from "./styles";

const SignUpPayment = (): JSX.Element => {
  const { handleSignUpPayment } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentProps>({
    resolver: yupResolver(schema),
  });

  const handleSignUpPaymentSubmit = (payment: PaymentProps): void => {
    handleSignUpPayment(payment);
  };

  return (
    <Wireframe form="form3">
      <h1>Payment Method</h1>

      <H66WireFrame>
        This data will be displayed in your account profile for security
      </H66WireFrame>

      <FormPayment
        id="form3"
        autoComplete=""
        onSubmit={handleSubmit(handleSignUpPaymentSubmit)}
      >
        <input
          id="paypal"
          type="radio"
          value="Paypal"
          {...register("payment")}
        />
        <label className="drinkcard-cc paypal" htmlFor="paypal"></label>

        <input id="visa" type="radio" value="Visa" {...register("payment")} />
        <label className="drinkcard-cc visa" htmlFor="visa"></label>

        <input
          id="payonner"
          type="radio"
          value="Payonner"
          {...register("payment")}
        />
        <label className="drinkcard-cc payonner" htmlFor="payonner"></label>

        <p>{errors.payment?.message}</p>
      </FormPayment>
    </Wireframe>
  );
};

export default SignUpPayment;
