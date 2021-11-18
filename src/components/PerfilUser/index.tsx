import { usePerfil } from "../../providers/PerfilProvider";

const PerfilUser = () => {
  const {
    theme,
    getTheme,
    payment,
    getPayment,
    photo,
    getPhoto,
    profile,
    address,
    getProfile,
    getAddress,
  } = usePerfil();

  const handlePerfil = () => {
    getAddress();
    getProfile();
    getPhoto();
    getPayment();
    getTheme();
  };
  return (
      <>
    <div>
      {photo.map((item) => (
        <img src={item.link} alt=""/>
      ))}
      <h1>Perfil</h1>

      <button onClick={handlePerfil}>Exibir</button>
      {profile.map((item) => {
        return (
          <div key={item.id}>
            <p>
              Nome:
              <b>
                {item.firstName} {item.lastName}
              </b>
            </p>
            <p>
              Telefone:
              <b>{item.mobileNumber}</b>
            </p>
          </div>
        );
      })}
      <hr />
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
      {theme.map((item) => (
        <p>
          Tema Favorito: <b>{item.theme}</b>
        </p>
      ))}
      <hr />
      {payment.map((item) => (
        <p>
          Forma de Pagamento: <b>{item.payment}</b>
        </p>
      ))}
    </div>
    </>
  );
};
export default PerfilUser;