import { createContext, useContext, useState } from "react";
import { NodeProps } from "../../globalTypes";
import { MenuProviderProps } from "./types";
import { useHistory } from "react-router-dom";

const MenuContext = createContext<MenuProviderProps>({} as MenuProviderProps);

export const MenuProvider = ({ children }: NodeProps): JSX.Element => {
  const [homeMenu, setHomeMenu] = useState<boolean>(true);
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const [chatMenu, setChatMenu] = useState<boolean>(false);

  const history = useHistory();

  const handleHome = (): void => {
    setHomeMenu(true);
    setProfileMenu(false);
    setCartMenu(false);
    setChatMenu(false);
    history.push("/marketplace");
  };
  const handleProfile = (): void => {
    setHomeMenu(false);
    setProfileMenu(true);
    setCartMenu(false);
    setChatMenu(false);
    history.push("/profile");
  };
  const handleCart = (): void => {
    setHomeMenu(false);
    setProfileMenu(false);
    setCartMenu(true);
    setChatMenu(false);
    history.push("/cart");
  };
  const handleChat = (): void => {
    setHomeMenu(false);
    setProfileMenu(false);
    setCartMenu(false);
    setChatMenu(true);
    history.push("/chat");
  };

  return (
    <MenuContext.Provider
      value={{
        homeMenu,
        profileMenu,
        cartMenu,
        chatMenu,
        handleHome,
        handleProfile,
        handleCart,
        handleChat,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuProviderProps => useContext(MenuContext);
