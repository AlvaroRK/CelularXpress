import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="brand">
        <a href="./">CelularXpress</a>
      </div>

      <ul className="pages">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">Products</a>
        </li>
        <li>
          <a href="./">Services</a>
        </li>
        <li>
          <a href="./">Contact</a>
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
