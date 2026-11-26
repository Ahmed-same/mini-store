import { Link, useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="empty">
        <p>Product not found.</p>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="details">
      <Link to="/">← Back</Link>
      <div className="details-body">
        <div className="details-img"><img src={product.image} alt={product.name} /></div>
        <div>
          <span className="tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="rating">⭐ {product.rating}</p>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

