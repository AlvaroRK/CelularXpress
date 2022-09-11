import ItemCount from "../ItemCount";

const ItemDetail = ({ item:{ img, name, ram, almacenamiento, price, stock, desc} }) => {
  return (
    <div className="cardDetail">
        <img src={img} alt="" />
      <div className="detail">
        <h2>{name}</h2>
        <li>Memoria RAM: {ram}</li>
        <li>Almacenamiento: {almacenamiento}</li>
      </div>
      <div className="price">
        <li>Precio: ${price}</li>
        <ItemCount stock={stock} initial={1} />
      </div>
        <p className="description">{desc}</p>
    </div>
  );
};
export default ItemDetail;
