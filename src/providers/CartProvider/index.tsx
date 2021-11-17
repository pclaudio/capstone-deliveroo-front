import { createContext, useContext, useState } from "react";
import { CartContextData, IChildren, IProducts } from "./type";

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
export const CartProvider = ({ children }: IChildren) => {
  const [listCart, setListCart] = useState<IProducts[]>([] as IProducts[]);

  const moveToCart = (item: any) => {
    item.amount = 1;
    setListCart([...listCart, item]);
  };
  const removeToCart = (item: any) => {
    const newCart = listCart.filter((itemInCart) => itemInCart.id !== item.id);
    setListCart(newCart);
  };
  const addItem = (item: any) => {};
  const subItem = (item: any) => {};
  return (
    <CartContext.Provider
      value={{ listCart, moveToCart, removeToCart, addItem, subItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
