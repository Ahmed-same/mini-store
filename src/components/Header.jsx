import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="header">
      <Link to="/" className="logo">🛍️ Mini Store</Link>
      <nav>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart {count > 0 && <span className="badge">{count}</span>}
        </NavLink>
      </nav>
    </header>
  );
}
