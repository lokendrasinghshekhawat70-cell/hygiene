import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} loading="lazy" />
          {product.tag && <span className="product-badge">{product.tag}</span>}
        </div>
      </Link>

      <span className="category">
        {product.category}
      </span>

      <Link to={`/products/${product.id}`} className="product-title-link">
        <h3>{product.name}</h3>
      </Link>

      <div className="rating">
        ★★★★★
      </div>

      <div className="product-bottom">
        <strong>₹{product.price}</strong>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (onAddToCart) onAddToCart(product);
          }}
          aria-label={`Add ${product.name} to cart`}
        >
          Add +
        </button>
      </div>
    </div>
  );
}
