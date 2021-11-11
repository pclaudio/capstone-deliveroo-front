import { useLocateCep } from "../../Context/cepProvider";

const GetAddress = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch } = useLocateCep();
  const { addAddress } = useLocateCep();
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
        <form>
          <div>
            <span>Logradouro</span>
            <input value={ceps.logradouro} />
          </div>
          <div>
            <span>Número</span>
            {ceps.number ? (
              <input value={ceps.number} />
            ) : (
              <input placeholder="Numero da casa, ap ..." />
            )}
            <div>
              <span>Complemento</span>
              {ceps.complemento ? (
                <input value={ceps.complemento} />
              ) : (
                <input
                  type="text"
                  placeholder="Apartamento, bloco, ..."
                  onChange={(event) => console.log(event.target.value)}
                />
              )}
            </div>
          </div>
          <div>
            <span>Bairro</span>
            <input value={ceps.bairro} />
          </div>
          <div>
            <span>Cidade</span>
            <input value={ceps.cidade} />
          </div>
          <div>
            <span>Estado</span>
            <input value={ceps.estado} />
          </div>
        </form>
        <button onClick={() => addAddress(ceps)}>Confirmar endereço</button>
      </div>
    </>
  );
};

export default GetAddress;
