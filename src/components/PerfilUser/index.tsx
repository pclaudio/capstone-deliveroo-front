import { useAuthentication } from "../../providers/Authentication";
import { usePerfil } from "../../providers/PerfilProvider";
import Button from "../Button";
import edit from "../../assets/img/Edit.svg";
import Menu from "../Menu";
import {
  Imagem,
  Container,
  ContainerMaster,
  H1,
  Edit,
  Voucher,
  Favorito,
} from "./styles";

const PerfilUser = () => {
  const { handleLogout } = useAuthentication();

  const handleLogoutClick = (): void => {
    handleLogout();
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
        <Voucher>component do voucher aqui </Voucher>

        <H1 className="fav"> Favorite </H1>
        <Favorito> imagem do favorito aqui mockado </Favorito>
        <Button className="logout" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Container>
      <Menu />
    </ContainerMaster>
  );
};
export default PerfilUser;
