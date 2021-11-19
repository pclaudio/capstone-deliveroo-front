import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { PaymentProps } from "../../globalTypes";

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
    <>
      <form autoComplete="" onSubmit={handleSubmit(handleSignUpPaymentSubmit)}>
        <div>
          <input type="radio" value="Paypal" {...register("payment")} />
          <label>Paypal</label>
        </div>

        <div>
          <input type="radio" value="Visa" {...register("payment")} />
          <label>Visa</label>
        </div>

        <div>
          <input type="radio" value="Payonner" {...register("payment")} />
          <label>Payonner</label>
        </div>

        <p>{errors.payment?.message}</p>

        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default SignUpPayment;
