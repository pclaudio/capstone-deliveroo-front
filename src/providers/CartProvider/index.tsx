import { createContext, useContext, useState } from "react";
import { CartContextData, IChildren, IProducts } from "./type";

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
export const CartProvider = ({ children }: IChildren) => {
  const [listCart, setListCart] = useState<IProducts[]>([] as IProducts[]);

  const moveToCart = (item: any) => {
    const repeat = listCart.filter((itemInCart) => itemInCart.id === item.id);
    if (repeat.length === 0) {
      item.amount = 1;
      setListCart([...listCart, item]);
    } else {
      item.amount = item.amount + 1;
      setListCart([...listCart]);
    }
  };
  const removeToCart = (item: any) => {
    const newCart = listCart.filter((itemInCart) => itemInCart.id !== item.id);
    setListCart(newCart);
  };
  const addItem = (item: any) => {
    item.amount = item.amount + 1;
    setListCart([...listCart]);
  };
  const subItem = (item: any) => {
    item.amount = item.amount - 1;
    setListCart([...listCart]);
  };
  return (
    <CartContext.Provider
      value={{ listCart, moveToCart, removeToCart, addItem, subItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
