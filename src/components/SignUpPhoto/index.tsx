import { ChangeEvent, useState } from "react";
import { AxiosResponse } from "axios";
import { postPhoto } from "../../services/apiImgur";
import { toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import { useFetch } from "../../providers/Fetch";
import { useSignUp } from "../../providers/SignUp";
import { AxiosErrorResponse, PhotoProps } from "../../globalTypes";

const SignUpPhoto = (): JSX.Element => {
  const { isFetching, handleStartFetching, handleFinishFetching } = useFetch();

  const { handleSignUpPhoto } = useSignUp();

  const [photo, setPhoto] = useState<PhotoProps>({} as PhotoProps);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target?.files) {
      handleStartFetching();

      const photo = new FormData();
      photo.append("image", event.target.files[0]);

      postPhoto(photo)
        .then(({ data: { id, deletehash, link } }: AxiosResponse) => {
          setPhoto({ id, deletehash, link });
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
    <>
      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handlePhotoChange}
        />
      </div>

      <button disabled={isFetching} onClick={handleSignUpPhotoSubmit}>
        Next
      </button>
    </>
  );
}

export default SignUpPhoto;
