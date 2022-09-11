const Item = ({ img, brand, name, price, stock }) => {
  return (
    <>
      <h3 className="card-brand">{brand}</h3>
      <img className="card-img" src={img} alt="" />
      <h4 className="card-name">{name}</h4>
      <h3 className="card-price">${price}</h3>
      <h3 className="card-stock">Stock available: {stock}</h3>
    </>
  );
};
export default Item;
