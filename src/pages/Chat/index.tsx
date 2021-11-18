import Menu from "../../components/Menu";

import {
  MainLoginContainer,
  H1
} from "./styles";

const Marketplace = (): JSX.Element => {
  return (
      <MainLoginContainer id="box">
        <H1>Chat</H1>
        <Menu />
      </MainLoginContainer>
  );
};

export default Marketplace;
