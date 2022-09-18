import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };

  const addItem = (item, qty) => {
    console.log(`Has agregado ${qty} ${item}`);
    isInCart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id === item.id) {
              prod.qty += qty;
            }
            return prod;
          })
        )
      : setItems([
          ...items,
          { id: item.id, name: item.name, price: item.price, qty: qty },
        ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
    console.log("Carrito vaciado");
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
      {children}
    </CartContext.Provider>
  );
};
