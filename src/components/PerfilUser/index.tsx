import { useAuthentication } from "../../providers/Authentication";
import { usePerfil } from "../../providers/PerfilProvider";
import Button from "../Button";
import edit from "../../assets/img/Edit.svg";
import Menu from "../Menu";
import voucher from "../../assets/img/VoucherIcon.svg"

import {
  Imagem,
  Container,
  ContainerMaster,
  H1,
  Edit,
  Voucher,
  Favorito,
  VoucherImg
} from "./styles";
import { useHistory } from "react-router";

const PerfilUser = () => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
  };

  const history = useHistory();

  const handleVoucher = (): void => {
    history.push("/voucher");
  };
  const { photo, getPhoto, profile, getProfile } = usePerfil();

  const handlePerfil = () => {
    getProfile();
    getPhoto();
  };
  // handlePerfil();
  return (
    <ContainerMaster>
      {photo.map((item, indice) => (
        <Imagem src={item.link} key={indice} />
      ))}
      <Container>

        {profile.map((item) => {
          return (
            <div key={item.id}>
              <H1>
                <b>
                  {item.firstName} {item.lastName}
                </b>
                <Edit src={edit} alt="" />
              </H1>
            </div>
          );
        })}
        <Voucher onClick={handleVoucher}> <VoucherImg src={voucher} alt="" /> click here to see yours vouchers </Voucher>

        <H1 className="fav"> Favorite </H1>
        <Favorito> imagem do favorito aqui mockado </Favorito>
        <Button className="logout" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Container>
      <Menu />
    </ContainerMaster>
  );
}
export default PerfilUser;
