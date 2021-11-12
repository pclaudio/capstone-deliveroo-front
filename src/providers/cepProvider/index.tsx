import axios from "axios";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { Redirect } from "react-router";
import { useAuthentication } from "../Authentication";
import { useSign } from "../SignUpProvider";

interface ILocationProps {
  children: ReactNode;
}

export interface ILocation {
  userId: number;
  number: string;
  complemento: string;
  bairro: string;
  cidade: string;
  logradouro: string;
  estado_info: ILocation_info;
  cep: string;
  cidade_info: ILocation_info;
  estado: string;
}

interface ILocation_info {
  area_km2: string;
  codigo_ibge: string;
  nome?: string;
}

interface LocationData {
  ceps: ILocation;
  cepNumber: string;
  setCepNumber: Dispatch<SetStateAction<string>>;
  setCeps: Dispatch<SetStateAction<ILocation>>;
  handleSearch: (local: string) => void;
  addAddress: (user: ILocation) => void;
  completeAddress: (user: ILocation) => void;
}

const LocateCepContext = createContext<LocationData>({} as LocationData);

export const LocateCepProvider = ({ children }: ILocationProps) => {
  const [ceps, setCeps] = useState({} as ILocation);
  const [cepNumber, setCepNumber] = useState<string>("");
  const [token] = useState(localStorage.getItem("@caps:token"));
  const { id } = useSign();
  const { nextStep } = useAuthentication();

  const handleSearch = async () => {
    if (cepNumber.length === 8) {
      await axios
        .get(`https://api.postmon.com.br/v1/cep/${cepNumber}`)
        .then((response) => {
          setCeps(response.data);
        })
        .catch((err) => console.log("Ops! CEP não encontrado..."));
    } else {
      console.log("CEP inválido! São necessários 8 números");
    }
  };

  useEffect(() => {
    setCepNumber(cepNumber);
  }, []);

  const completeAddress = (data: ILocation) => {
    ceps.number = data.number;
    ceps.complemento = data.complemento;
    setCeps(ceps);
  };

  const addAddress = (user: ILocation) => {
    user.userId = id;
    axios
      .post(`https://json-capstone.herokuapp.com/address`, user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => nextStep())
      .catch((err) => console.log(err));
  };

  return (
    <LocateCepContext.Provider
      value={{
        completeAddress,
        addAddress,
        ceps,
        setCepNumber,
        cepNumber,
        handleSearch,
        setCeps,
      }}
    >
      {children}
    </LocateCepContext.Provider>
  );
};

export const useLocateCep = () => useContext(LocateCepContext);
