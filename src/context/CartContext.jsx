import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };

  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setItems(items.map((prod) => {
            if (prod.id == item.id) {
              prod.qty += qty;
            }
            return prod;
          })
        )
      : setItems([...items,{id: item.id, price: item.price, img: item.img, name: item.name, qty:qty}])
      console.log(items);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: `${qty} ${item.name} successfully added`
      })
      
    }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };


  const totalPrice = () => {
    return items.reduce((prev, act) => prev + act.qty * act.price, 0)
  }
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
