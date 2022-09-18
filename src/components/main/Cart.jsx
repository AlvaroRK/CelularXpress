import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  return (
    <div>
      {
        items.map((item) => (
            <div key={item.id}>
            <h3>
               Cantidad {item.qty}
               Nombre {item.name}
            </h3>
            <button onClick={() => {removeItem(item.id)}}>Borrar producto</button>
            <button onClick={() => (clearItems)}>Vaciar carrito</button> 
        </div>
        ))
      }
    </div>
  );
};
export default Cart;
