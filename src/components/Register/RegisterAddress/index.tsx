import { useForm } from "react-hook-form";
import { ILocation, useLocateCep } from "../../../Context/cepProvider";

const GetAddress = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch } = useLocateCep();
  const { addAddress, completeAddress } = useLocateCep();

  const { register, handleSubmit } = useForm();

  const setAddress = (data: ILocation) => {
    completeAddress(data);
  };
  return (
    <>
      <h3>Busca de endereço</h3>
      <div>
        <input
          type="number"
          placeholder="Insira o CEP"
          onChange={(event) => setCepNumber(event.target.value)}
        />
        <button disabled={!cepNumber} onClick={() => handleSearch(cepNumber)}>
          Buscar pelo CEP
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(setAddress)}>
          <div>
            <span>Logradouro</span>
            <input readOnly value={ceps.logradouro} />
          </div>
          <div>
            <span>Numero</span>
            <input
              placeholder="ex: Numero da casa"
              type="text"
              {...register("number")}
            />
            <span>Complemento</span>
            <input
              placeholder="complemento"
              type="text"
              {...register("complemento")}
            />
          </div>
          <div>
            <span>Bairro</span>
            <input readOnly value={ceps.bairro} />
          </div>
          <div>
            <span>Cidade</span>
            <input readOnly value={ceps.cidade} />
          </div>
          <div>
            <span>Estado</span>
            <input readOnly value={ceps.estado} />
          </div>
          <button type="submit"> completar Endereço</button>
        </form>
        <button onClick={() => addAddress(ceps)}>Confirmar endereço</button>
      </div>
    </>
  );
};

export default GetAddress;
