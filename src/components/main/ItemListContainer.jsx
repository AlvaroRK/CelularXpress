import { useEffect, useState } from "react";
import Filter from "./Filter";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 2000);
  }, []);

  const getProducts = () => {
    const db = getFirestore();
    const ItemsCollections = collection(db, "items");
    getDocs(ItemsCollections).then((snapshot) => {
      const data = snapshot.docs.map((d) => d.data());
      console.log(data);
      setProd(data);
    });
  };

  return (
    <div>
      <div className="cardsContainer">
        <Filter />
        <div className="cards">
          <ItemList prod={prod} />
        </div>
      </div>
    </div>
  );
};
export default ItemListContainer;
