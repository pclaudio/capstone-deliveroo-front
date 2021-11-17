import {
  AddressProps,
  PaymentProps,
  PhotoProps,
  ThemeProps,
  UserProfileProps,
  UserProps,
} from "../../globalTypes";

export interface SignUpProviderProps {
  handleSignUpUser: (user: UserProps) => void;
  handleSignUpProfile: (profile: UserProfileProps) => void;
  handleSignUpPayment: (payment: PaymentProps) => void;
  handleSignUpTheme: (theme: ThemeProps) => void;
  handleSignUpPhoto: (photo: PhotoProps) => void;
  handleSignUpAddress: (address: AddressProps) => void;
}
