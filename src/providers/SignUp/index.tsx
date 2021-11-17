import { createContext, useContext } from "react";
import { useToken } from "../Token";
import { useUser } from "../User";
import { useFetch } from "../Fetch";
import { useStep } from "../Step";
import {
  postUser,
  postUserAddress,
  postUserPayment,
  postUserPhoto,
  postUserProfile,
  postUserTheme,
} from "../../services/api";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import {
  AddressProps,
  AxiosErrorResponse,
  NodeProps,
  PaymentProps,
  PhotoProps,
  ProfileProps,
  ThemeProps,
  UserProps,
} from "../../globalTypes";
import { SignUpProviderProps } from "./types";

const SignUpContext = createContext<SignUpProviderProps>(
  {} as SignUpProviderProps
);

export const SignUpProvider = ({ children }: NodeProps): JSX.Element => {
  const { handleSetToken } = useToken();

  const { user, handleSetUser } = useUser();

  const { handleStartFetching, handleFinishFetching } = useFetch();

  const { handleStepIncrementation } = useStep();

  const handleSignUpUser = (user: UserProps): void => {
    handleStartFetching();

    postUser(user)
      .then(({ data }: AxiosResponse) => {
        handleSetToken(data.accessToken);
        handleSetUser(data.user);
        handleFinishFetching();
        handleStepIncrementation();
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  const handleSignUpProfile = (profile: ProfileProps): void => {
    handleStartFetching();

    postUserProfile({ ...profile, userId: user.id || 0 })
      .then(({ data }: AxiosResponse) => {
        handleFinishFetching();
        handleStepIncrementation();
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  const handleSignUpPayment = (payment: PaymentProps): void => {
    handleStartFetching();

    postUserPayment({ ...payment, userId: user.id || 0 })
      .then(({ data }: AxiosResponse) => {
        handleFinishFetching();
        handleStepIncrementation();
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  const handleSignUpTheme = (theme: ThemeProps): void => {
    handleStartFetching();

    postUserTheme({ ...theme, userId: user.id || 0 })
      .then(({ data }: AxiosResponse) => {
        handleFinishFetching();
        handleStepIncrementation();
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  const handleSignUpPhoto = (photo: PhotoProps): void => {
    if (photo?.link) {
      handleStartFetching();

      postUserPhoto({ ...photo, userId: user.id || 0 })
        .then(({ data }: AxiosResponse) => {
          handleFinishFetching();
          handleStepIncrementation();
        })
        .catch((error: AxiosErrorResponse) => {
          toast.error(error.response?.data, toastOptions);
          handleFinishFetching();
        });
    } else {
      handleStepIncrementation();
    }
  };

  const handleSignUpAddress = (address: AddressProps): void => {
    handleStartFetching();

    postUserAddress({ ...address, userId: user.id || 0 })
      .then(({ data }: AxiosResponse) => {
        handleFinishFetching();
        handleStepIncrementation();
      })
      .catch((error: AxiosErrorResponse) => {
        toast.error(error.response?.data, toastOptions);
        handleFinishFetching();
      });
  };

  return (
    <SignUpContext.Provider
      value={{
        handleSignUpUser,
        handleSignUpProfile,
        handleSignUpPayment,
        handleSignUpTheme,
        handleSignUpPhoto,
        handleSignUpAddress,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
