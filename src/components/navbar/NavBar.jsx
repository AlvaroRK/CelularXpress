import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="brand">
        <Link to={"/"}>CelularXpress</Link>
      </div>

      <ul className="pages">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="cart">
        <button>
          <a href="./">Login</a>
        </button>
        <CartWidget />
        <p>0</p>
      </div>
    </nav>
  );
};
export default NavBar;
