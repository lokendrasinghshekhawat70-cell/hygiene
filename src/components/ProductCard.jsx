import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setAdded(true);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAdded(false), 1800);
  };

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

      {product.tagline && (
        <p className="product-card-tagline">{product.tagline}</p>
      )}

      <div className="rating">
        {"★".repeat(product.rating || 5)}
      </div>

      <div className="product-bottom">
        <div className="card-price-group">
          <strong>₹{product.price}</strong>
          {product.originalPrice && (
            <span className="card-strike-price">₹{product.originalPrice}</span>
          )}
        </div>

        <button 
          onClick={handleAdd}
          className={added ? "added" : ""}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? "✓ Added" : "Add +"}
        </button>
      </div>
    </div>
  );
}
