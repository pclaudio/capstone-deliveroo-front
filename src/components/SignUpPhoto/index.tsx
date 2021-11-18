import { ChangeEvent, useState } from "react";
import { AxiosResponse } from "axios";
import { postPhoto } from "../../services/apiImgur";
import { toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import { useFetch } from "../../providers/Fetch";
import { useStep } from "../../providers/Step";
import { useSignUp } from "../../providers/SignUp";
import { AxiosErrorResponse, PhotoProps } from "../../globalTypes";
import {
  Container,
  ContainerWrapp,
  H66WireFrame,
  MainContainer,
} from "../SignUpWireFrame/styles";
import Button from "../Button";
import { HiChevronLeft } from "react-icons/hi";
import { CircularProgress } from "@mui/material";
import { PhotoContainer,DivButton } from "./styles";

const SignUpPhoto = (): JSX.Element => {
  const { isFetching, handleStartFetching, handleFinishFetching } = useFetch();

  const { handleStepDecrementation } = useStep();

  const { handleSignUpPhoto } = useSignUp();

  const [photo, setPhoto] = useState<PhotoProps>({} as PhotoProps);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target?.files) {
      handleStartFetching();

      const photo = new FormData();
      photo.append("image", event.target.files[0]);

      postPhoto(photo)
        .then(({ data: { data } }: AxiosResponse) => {
          setPhoto({
            id: data.id,
            deletehash: data.deletehash,
            link: data.link,
          });
          handleFinishFetching();
        })
        .catch((error: AxiosErrorResponse) => {
          toast.error(error.response?.data.data.error, toastOptions);
          handleFinishFetching();
          event.target.value = "";
        });
    }
  };

  const handleSignUpPhotoSubmit = (): void => {
    handleSignUpPhoto(photo);
  };

  return (
    <MainContainer>
      <Container>
        <Button
          short
          className="marginButton"
          onClick={handleStepDecrementation}
        >
          <HiChevronLeft />
        </Button>

        <ContainerWrapp>
          <h1>Upload Your Photo Profile</h1>

          <H66WireFrame>
            This data will be displayed in your account profile for security
          </H66WireFrame>

          <div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handlePhotoChange}
            />
          </div>

          {photo?.link && (
            <PhotoContainer>
              <img src={photo.link} alt="User" />
            </PhotoContainer>
          )}
        </ContainerWrapp>
      </Container>
            <DivButton>
      {isFetching ? (
        <Button disable>
          <CircularProgress size={28} />
        </Button>
      ) : (
        <Button className="Buttonzin" onClick={handleSignUpPhotoSubmit}>Next</Button>
      )}
      </DivButton>
    </MainContainer>
  );
};

export default SignUpPhoto;
