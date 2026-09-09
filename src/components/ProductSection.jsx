import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductSection({ limit = 4, showHeader = true, title = "Essential Products." }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hand Hygiene", "Oral Hygiene", "Personal Care", "Home Hygiene"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="products-section" id="products">
      {showHeader && (
        <div className="products-heading">
          <div>
            <p className="section-label">HYGIENE SHOP</p>
            <h2>{title}</h2>
          </div>

          <p>
            Simple, laboratory-tested products that help you and your family maintain
            better personal cleanliness every day.
          </p>
        </div>
      )}

      <div className="category-filter-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {limit && (
        <div className="products-button">
          <Link to="/products" className="primary-btn">
            View All Products ({products.length}) →
          </Link>
        </div>
      )}
    </section>
  );
}
