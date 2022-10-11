import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

const Cart = ({ form }) => {
  const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="carritoVacio">
        <div className="vacioContainer">
          <h1>The cart is empty</h1>
          <Link className="a" to="/">
            Go shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleClick = () => {
    const order = {
      buyer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      items: items.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: p.qty,
      })),
      total: totalPrice(),
    };

    const db = getFirestore();
    const orderCollections = collection(db, "orders");
    addDoc(orderCollections, order).then(({ id }) => console.log(id));

    if (order != null) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: `Orden generada correctamente`,
      });
    }
  };

  return (
    <div className="cartContainer">
      <h2>Step 2</h2>
      <h2>Generate order</h2>
      <div className="cart">
        {items.map((item) => (
          <div className="cartItem" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="item">
              <p>Name: {item.name}</p>
              <p>Amount: {item.qty}</p>
              <p>Price: {item.price}</p>
              <p>Subtotal: ${item.price * item.qty}</p>
            </div>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          </div>
        ))}

        <div className="clearCart">
          <h1>Total price: {totalPrice()}</h1>
          <button onClick={handleClick}>Generate order</button>
          <button
            onClick={() => {
              clearItems();
            }}
          >
            Empty cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
