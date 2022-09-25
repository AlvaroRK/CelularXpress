import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filterContainer">
      <h2>Filter by:</h2>
      <div>
        <h3>Brand</h3>
        <Link to={"/products/samsung"}>Samsung</Link>
        <Link to={"/products/iphone"}>Iphone</Link>
        <Link to={"/products/motorola"}>Motorola</Link>
        <Link to={"/products/huawei"}>Huawei</Link>
      </div>
    </div>
  );
};
export default Filter;
