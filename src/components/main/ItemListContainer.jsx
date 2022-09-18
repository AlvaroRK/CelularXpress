import { useEffect, useState } from "react";
import Filter from "./Filter";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      obtenerCatalogo();
      console.log("productos cargados correctamente");
    }, 2000);
    console.log("cargando...");
  }, []);

  const obtenerCatalogo = () => {
    const URL = `http://127.0.0.1:5500/public/catalogue.json`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProd(data)
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
