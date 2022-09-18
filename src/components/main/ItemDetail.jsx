import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ items, item }) => {
  const [add, setAdd] = useState(false);
  console.log(setAdd);

  const { addItem } = useContext(CartContext);

  return (
    <div className="cardDetail">
      <img src={items.img} alt={items.name} />
      <div className="detail">
        <h2>{items.name}</h2>
        <li>Memoria RAM: {items.ram}</li>
        <li>Almacenamiento: {items.almacenamiento}</li>
      </div>
      <div className="price">
        <li>Precio: ${items.price}</li>
        {add ? 
            <div>¡Añadido!</div>
            : 
            <ItemCount item={item} stock={items.stock} initial={1} addItem={addItem}/>
        }
        <button className="addToCart">
          <Link to={"/cart"}>terminar compra</Link>
        </button>
      </div>
      <p className="description">{items.desc}</p>
    </div>
  );
};
export default ItemDetail;
