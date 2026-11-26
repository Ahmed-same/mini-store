import { useMemo, useState } from "react";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // derived data: recomputed only when inputs change
  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [search, category, sort]);

  return (
    <>
      <div className="toolbar">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: default</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      <div className="chips">
        {categories.map((c) => (
          <button key={c} className={c === category ? "chip active" : "chip"} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="empty">No results found.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </>
  );
}
