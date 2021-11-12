const RegisterPayment = () => {
  function onChangeValue(event: any) {
    console.log(event.target.value);
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
    </>
  );
};
export default RegisterPayment;
