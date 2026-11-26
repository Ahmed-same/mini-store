import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-img"><img src={product.image} alt={product.name} loading="lazy" /></Link>
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="rating">⭐ {product.rating}</p>
      <div className="card-bottom">
        <strong>${product.price}</strong>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}

