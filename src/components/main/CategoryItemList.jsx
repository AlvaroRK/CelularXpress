import { Link } from "react-router-dom";
import Item from "./Item";

const CategoryItemList = ({ filter }) => {
  return (
    <div className="cardCategoryContainer">
      {filter.map((s) => (
        <Link to={`/products/item/${s.id}`} key={s.id} className="cardCategory">
        <Item {...s} />
      </Link>
      ))}
    </div>
  );
};
export default CategoryItemList;
