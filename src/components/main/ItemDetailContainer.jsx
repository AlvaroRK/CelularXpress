import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getItem();
    }, 2000);
  }, []);

  const getItem = () => {
    const URL = `http://127.0.0.1:5500/public/catalogue.json`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.find((i) => i.id == id));
        setItems(data.find((i) => i.id == id));
      });
  };
  return (
    <div className="cardDetailContainer">
      <ItemDetail items={items} />
    </div>
  );
};
export default ItemDetailContainer;
