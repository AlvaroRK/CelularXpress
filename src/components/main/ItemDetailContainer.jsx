import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 2000);
  }, []);

  const getProducts = () => {
  const db = getFirestore();
  const getItem = collection(db, "items");
  getDocs(getItem).then((res) => {
    const data = res.docs.map((p) => p.data());
    const item = data.find((p) => p.id == id);
    setItem(item);
  });
};

  return (
    <div className="cardDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;


/* const getProducts = () => {
  const db = getFirestore();
  const getItem = collection(db, "items");
  getDocs(getItem).then((res) => {
    // const data = res.docs.map((p) => ({id:p.id, ...data()}));
    // const item = data.find((p) => p.id == id);
    console.log(res.docs.map((p) => ({ idL: p.id, ...p.data() })));
    // setItem(item);
  });
}; */