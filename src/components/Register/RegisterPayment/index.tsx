import { useAuthentication } from "../../../providers/Authentication";
import { useSign } from "../../../providers/SignUpProvider";

const RegisterPayment = () => {
  const { addPayment } = useSign();
  const { nextStep } = useAuthentication();

  function onChangeValue(event: any) {
    addPayment(event.target.value);
    nextStep();
  }

  return (
    <>
      <h3>Metodo de Pagamento</h3>
      <div onChange={(evt) => onChangeValue(evt)}>
        <span>Paypal</span>
        <input type="radio" value="Paypal" name="pay" />

        <span>Visa</span>
        <input type="radio" value="Visa" name="pay" />

        <span>Payonner</span>
        <input type="radio" value="Payonner" name="pay" />
      </div>
      <button onClick={onChangeValue}>Proximo Passo</button>
    </>
  );
};
export default RegisterPayment;
