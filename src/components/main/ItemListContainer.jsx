import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
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

  const obtenerCatalogo = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5500/public/catalogue.json"
      );
      const data = await response.json();
      setProd(data);
    } catch (error) {
      console.log("hay un error");
    }
  };
  return (
    <div>
      <ItemCount stock={5} initial={1} />
      <div className="cardsContainer">
        <ItemList prod={prod} />
      </div>
    </div>
  );
};
export default ItemListContainer;
