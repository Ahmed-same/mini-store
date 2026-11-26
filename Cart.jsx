import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, changeQty, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="empty">
        <p>Your cart is empty.</p>
        <Link to="/">Start shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your cart</h1>
      {items.map((i) => (
        <div className="cart-row" key={i.id}>
          <span className="cart-emoji">{i.emoji}</span>
          <span className="cart-name">{i.name}</span>
          <div className="qty">
            <button onClick={() => changeQty(i.id, -1)}>-</button>
            <span>{i.qty}</span>
            <button onClick={() => changeQty(i.id, 1)}>+</button>
          </div>
          <strong>${i.qty * i.price}</strong>
          <button className="link" onClick={() => removeFromCart(i.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total: ${total}</h2>
        <button className="secondary" onClick={clearCart}>Clear cart</button>
      </div>
    </div>
  );
}
