import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      {prod.map((product) => (
        <Link to={`/products/item/${product.id}`} key={product.id} className="card">
          <Item {...product} />
        </Link>
      ))}
    </>
  );
};
export default ItemList;
