import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (qty) => {
    setAdd(add);
  };

  return (
    <div className="cardDetail">
      <img src={item.img} alt={item.name} />
      <div className="detail">
        <h2>{item.name}</h2>
        <li>Memoria RAM: {item.ram}</li>
        <li>Almacenamiento: {item.almacenamiento}</li>
      </div>
      <div className="price">
        <li>Precio: ${item.price}</li>
        {add ? (
          <div>¡Añadido!</div>
          ) : (
            <ItemCount item={item} stock={item.stock} initial={1} addItem={addItem} onAdd={onAdd}/>
            )}
        <button className="addToCart">
          <Link to={"/cart"}>terminar compra</Link>
        </button>
      </div>
      <p className="description">{item.desc}</p>
    </div>
  );
};
export default ItemDetail;
