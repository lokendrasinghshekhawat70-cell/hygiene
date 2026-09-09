import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [addedNotification, setAddedNotification] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="primary-btn">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-details-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="product-main-grid">
        {/* Left: Product Image */}
        <div className="detail-image-box">
          <img src={product.image} alt={product.name} />
          {product.tag && <span className="detail-tag">{product.tag}</span>}
        </div>

        {/* Right: Info & Actions */}
        <div className="detail-info-box">
          <p className="product-category">{product.category.toUpperCase()}</p>
          <h1>{product.name}</h1>

          <div className="rating-row">
            <span className="stars">★★★★★</span>
            <span className="rating-score">{product.rating}</span>
            <span className="reviews-count">({product.reviewsCount} customer reviews)</span>
          </div>

          <div className="price-row">
            <span className="current-price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="strike-price">₹{product.originalPrice}</span>
            )}
            <span className="savings-badge">
              Save ₹{product.originalPrice - product.price}
            </span>
          </div>

          <p className="product-desc">{product.description}</p>

          <div className="features-box">
            <h4>Key Benefits & Highlights:</h4>
            <ul>
              {product.features.map((feat, i) => (
                <li key={i}>
                  <span className="check-bullet">✓</span> {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="usage-guide">
            <strong>Recommended Usage:</strong>
            <p>{product.usage}</p>
          </div>

          {/* Action Row */}
          <div className="purchase-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className="primary-btn add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart • ₹{product.price * quantity}
            </button>
          </div>

          {addedNotification && (
            <div className="cart-toast">
              ✓ Added {quantity} × {product.name} to cart!
            </div>
          )}

          <div className="trust-badges">
            <div>
              <span>🌿</span>
              <small>100% Organic & Non-Toxic</small>
            </div>
            <div>
              <span>⚡</span>
              <small>Fast 24-48hr Dispatch</small>
            </div>
            <div>
              <span>🛡️</span>
              <small>14-Day Satisfaction Guarantee</small>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <div className="section-heading">
            <div>
              <p className="section-label">RECOMMENDED</p>
              <h2>Related <span>Products</span></h2>
            </div>
          </div>
          <div className="products-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
