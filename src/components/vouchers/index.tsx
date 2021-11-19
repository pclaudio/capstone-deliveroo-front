import Button from "../Button";
import Wireframe from "../vouchersWireFrame";
import { DivGrow, VoucherContainer, VoucherWrapp } from "./styles";

export const Voucher = () => {
  const imgMocker1 = "https://imgur.com/J8DbcL7.png";
  const imgMocker2 = "https://imgur.com/czcf5OT.png";
  return (
    <Wireframe isFlex btnText="Check out" isLarge>
      <h1>Voucher Promo</h1>
      <VoucherContainer imgMocked={imgMocker1}>
        <VoucherWrapp>
          <DivGrow />
          <DivGrow>
            <h4>Special Deal For November</h4>
            <Button white>Order Now</Button>
          </DivGrow>
        </VoucherWrapp>
      </VoucherContainer>
      <VoucherContainer imgMocked={imgMocker2}>
        <VoucherWrapp>
          <DivGrow />
          <DivGrow>
            <h4>Special Deal For November</h4>
            <Button white>Order Now</Button>
          </DivGrow>
        </VoucherWrapp>
      </VoucherContainer>
    </Wireframe>
  );
};
