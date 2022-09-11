import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const minusClick = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const plusClick = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  if (counter === stock) {
    console.log("stock maximo");
  }

  return (
    <>
      <div className="counter">
        <button onClick={minusClick} className="minus">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <p type="text" value={counter} className="numberCount">
          {counter}/{stock}
        </p>
        <button onClick={plusClick} className="plus">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
      <button className="addToCart">Añadir al carrito</button>
    </>
  );
};
export default ItemCount;
