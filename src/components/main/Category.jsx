import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryItemList from "./CategoryItemList";

const Category = () => {
  const { brand } = useParams();
  const [filter, setFilter] = useState([]);

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
      const item = data.filter((p) => p.brand == brand)
      setFilter(item);
    });
  };
  return (
    <div>
      <div className="categoryContainer">
       <CategoryItemList filter={filter}/>
      </div>
    </div>
  );
};
export default Category;
