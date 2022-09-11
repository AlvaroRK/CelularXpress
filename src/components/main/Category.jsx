import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryItemList from "./CategoryItemList";

const Category = () => {
  const { slug } = useParams();
  const [slugs, setSlugs] = useState({});

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
        console.log(data.filter((i) => i.slug == slug));
        setSlugs(data.filter((i) => i.slug == slug));
      });
  };
  return (
    <div>
      <div className="categoryContainer">
       <CategoryItemList slugs={slugs}/>
      </div>
    </div>
  );
};
export default Category;
