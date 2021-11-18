import { createContext, useContext, useState } from "react";
import { CartContextData, IChildren, IProducts } from "./type";

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
export const CartProvider = ({ children }: IChildren) => {
  const [listCart, setListCart] = useState<IProducts[]>([] as IProducts[]);
  const [count, setCount] = useState(0);

  const moveToCart = (item: any) => {
    const repeat = listCart.filter((itemInCart) => itemInCart.id === item.id);
    if (repeat.length === 0) {
      item.amount = 1;
      setListCart([...listCart, item]);
      setCount(count + item.price);
    } else {
      item.amount = item.amount + 1;

      setCount(count + item.price);

      setListCart([...listCart]);
    }
  };
  const removeToCart = (item: any) => {
    const valor = item.price * item.amount;
    const newCart = listCart.filter((itemInCart) => itemInCart.id !== item.id);
    setListCart(newCart);
    setCount(count - valor);
  };
  const addItem = (item: any) => {
    item.amount = item.amount + 1;
    setCount(count + item.price);

    setListCart([...listCart]);
  };
  const subItem = (item: any) => {
    if (item.amount !== 1) {
      item.amount = item.amount - 1;
      setCount(count - item.price);
      setListCart([...listCart]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        listCart,
        moveToCart,
        removeToCart,
        addItem,
        subItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
