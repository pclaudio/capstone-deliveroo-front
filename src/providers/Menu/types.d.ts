export interface MenuProviderProps {
  homeMenu: boolean;
  profileMenu: boolean;
  cartMenu: boolean;
  chatMenu: boolean;
  handleHome: () => void;
  handleProfile: () => void;
  handleCart: () => void;
  handleChat: () => void;
}
