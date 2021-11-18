import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useSignUp } from "../../providers/SignUp";
import { useFetch } from "../../providers/Fetch";
import { AxiosResponse } from "axios";
import { getAddressByCep } from "../../services/apiCep";
import { toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import { AddressProps, AxiosErrorResponse } from "../../globalTypes";
import Wireframe from "../SignUpWireFrame";
import Input from "../Input";
import "./styles";
import { FormAdress } from "./styles";
import { H66WireFrame } from "../SignUpWireFrame/styles";

const emptyAddress: AddressProps = {
  cep: "",
  address1: "",
  district: "",
  city: "",
  state: "",
};

const SignUpAddress = (): JSX.Element => {
  const { handleSignUpAddress } = useSignUp();

  const { handleStartFetching, handleFinishFetching } = useFetch();

  const [address, setAddress] = useState<AddressProps>(emptyAddress);

  const {
    clearErrors,
    getValues,
    handleSubmit,
    register,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm<AddressProps>({
    resolver: yupResolver(schema),
  });

  const cep = register("cep");

  useEffect(() => {
    if (address?.cep !== "") {
      setValue("address1", address.address1);
      setValue("district", address.district);
      setValue("city", address.city);
      setValue("state", address.state);

      getValues("address1") !== "" && clearErrors("address1");
      getValues("district") !== "" && clearErrors("district");
      getValues("city") !== "" && clearErrors("city");
      getValues("state") !== "" && clearErrors("state");
    }

    // eslint-disable-next-line
  }, [address]);

  const handleGetAddressByCep = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    cep.onChange(event);

    if (event.target.value.length === 8) {
      handleStartFetching();

      getAddressByCep(event.target.value)
        .then(({ data }: AxiosResponse) => {
          setAddress({
            cep: data.cep,
            address1: data.logradouro,
            district: data.bairro,
            city: data.cidade,
            state: data.estado,
          });
          setFocus("address2");
          handleFinishFetching();
        })
        .catch((error: AxiosErrorResponse) => {
          toast.error(error.response?.data, toastOptions);
          handleFinishFetching();
        });
    }
  };

  const handleSignUpAddressSubmit = (address: AddressProps): void => {
    handleSignUpAddress(address);
  };

  return (
    <Wireframe form="form5">
      <h1>Fill in your bio to get started</h1>

      <H66WireFrame>
        This data will be displayed in your account profile for security
      </H66WireFrame>

      <FormAdress
        id="form5"
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUpAddressSubmit)}
      >
        <Input
          error={errors.cep?.message}
          placeholder="CEP *"
          maxLength={8}
          name={cep.name}
          onBlur={cep.onBlur}
          onChange={handleGetAddressByCep}
          register={register}
        />

        <Input
          error={errors.address1?.message}
          readOnly
          placeholder="Address 1 *"
          name="address1"
          register={register}
        />

        <Input
          error={errors.address2?.message}
          placeholder="Address 2"
          name="address2"
          register={register}
        />

        <Input
          error={errors.number?.message}
          placeholder="Number *"
          name="number"
          register={register}
        />

        <Input
          error={errors.district?.message}
          readOnly
          placeholder="District *"
          value={address.district}
          name="district"
          register={register}
        />

        <Input
          error={errors.city?.message}
          readOnly
          placeholder="City *"
          value={address.city}
          name="city"
          register={register}
        />

        <Input
          error={errors.state?.message}
          readOnly
          placeholder="State *"
          value={address.state}
          name="state"
          register={register}
        />
      </FormAdress>
    </Wireframe>
  );
};

export default SignUpAddress;
