import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export function Home() {
  const featured = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <>
      <section className="hero">
        <h1>Welcome to Mini Store</h1>
        <p>Electronics, fashion, home and sports picks at simple prices.</p>
        <Link to="/products" className="btn">Shop all products</Link>
      </section>
      <h2 className="section-title">Top rated</h2>
      <div className="grid">
        {featured.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}

export function About() {
  return (
    <div className="panel">
      <h1>About</h1>
      <p>Mini Store is a small demo shop built with React. It has a product list with search, filters and sorting, a product page, and a cart that is saved in the browser.</p>
      <p>Everything runs in the browser, so no real orders are placed.</p>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="panel">
      <h1>Contact</h1>
      {sent ? (
        <p className="ok">Thanks, your message was received.</p>
      ) : (
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
