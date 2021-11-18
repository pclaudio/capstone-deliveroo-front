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

const emptyAddress: AddressProps = {
  cep: "",
  address1: "",
  district: "",
  city: "",
  state: "",
};

const SignUpAddress = (): JSX.Element => {
  const { handleSignUpAddress } = useSignUp();

  const { isFetching, handleStartFetching, handleFinishFetching } = useFetch();

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
          console.log(data);
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
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUpAddressSubmit)}
      >
        <div>
          <input
            placeholder="CEP *"
            maxLength={8}
            name={cep.name}
            ref={cep.ref}
            onBlur={cep.onBlur}
            onChange={handleGetAddressByCep}
          />
          <p>{errors.cep?.message}</p>
        </div>

        <div>
          <input readOnly placeholder="Address 1 *" {...register("address1")} />
          <p>{errors.address1?.message}</p>
        </div>

        <div>
          <input placeholder="Address 2" {...register("address2")} />
          <p>{errors.address2?.message}</p>
        </div>

        <div>
          <input placeholder="Number *" {...register("number")} />
          <p>{errors.number?.message}</p>
        </div>

        <div>
          <input readOnly placeholder="District *" value={address.district} />
          <p>{errors.district?.message}</p>
        </div>

        <div>
          <input readOnly placeholder="City *" value={address.city} />
          <p>{errors.city?.message}</p>
        </div>

        <div>
          <input readOnly placeholder="State *" value={address.state} />
          <p>{errors.state?.message}</p>
        </div>

        <button type="submit" disabled={isFetching}>
          Next
        </button>
      </form>
    </>
  );
};

export default SignUpAddress;
