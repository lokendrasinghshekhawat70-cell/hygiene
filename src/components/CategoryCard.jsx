import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <div className="category-card-top">
        <span className="category-icon">{category.icon}</span>
        <span className="category-count">{category.count}</span>
      </div>

      <div className="category-preview-img">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>

      <div className="category-info">
        <h3>{category.name}</h3>
        {category.tagline && (
          <span className="category-tagline-badge">{category.tagline}</span>
        )}
        <p>{category.description}</p>
        <span className="category-action">
          Explore Category <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
