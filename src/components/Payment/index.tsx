import { useState } from "react";
import { useCart } from "../../providers/CartProvider";
import { usePerfil } from "../../providers/PerfilProvider";
import SignUpPayment from "../SignUpPayment";

const Payment = () => {
  const [pay, setPay] = useState<boolean>(false);
  const { count } = useCart();
  const { payment, address } = usePerfil();

  return (
    <div>
      <h1>Finalizando a Compra</h1>

      <h3>
        Valor do Carrinho é <b>{count.toFixed(2)}</b>
      </h3>
      <div>
        <h4>
          Forma de Pagamento:
          <b>{payment && payment.map((item) => item.payment)}</b>
        </h4>
        <button onClick={() => setPay(!pay)}>Mudar Forma de Pagamento</button>
        {pay && (
          <>
            <SignUpPayment />
          </>
        )}
      </div>

      <div>
        <h2>Endereço para entrega</h2>
        {address.map((item) => {
          return (
            <div key={item.id}>
              <p>
                Cidade: <b>{item.city}</b>
              </p>
              <p>
                Bairro: <b>{item.district}</b>
              </p>
              <p>
                Estado: <b>{item.state}</b>
              </p>
              <p>
                Rua: <b>{item.address1}</b>
              </p>
              <p>
                numero: <b>{item.number}</b>
              </p>
              <p>
                Codigo Postal: <b>{item.cep}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Payment;
