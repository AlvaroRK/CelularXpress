const Item = ({ img, brand, name, price, stock }) => {
  return (
    <div className="card">
      <h3 className="card-brand">{brand}</h3>
      <img className="card-img" src={img} alt="" />
      <a className="card-name">{name}</a>
      <h3 className="card-price">${price}</h3>
      <h3 className="card-stock">Stock available: {stock}</h3>
    </div>
  );
};
export default Item;
