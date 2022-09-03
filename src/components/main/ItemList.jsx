import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      {prod.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </>
  );
};
export default ItemList;
