import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories as categoryData } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const allCategories = ["All", ...categoryData.map((c) => c.name)];

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter by category & search
  let filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort logic
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="products-page">
      <div className="page-hero">
        <span className="section-tag">PREMIUM COLLECTION</span>
        <h1>Hygiene <span>Products</span></h1>
        <p>Explore our certified medical and home hygiene essentials designed for everyday pure living.</p>
      </div>

      <div className="catalog-container">
        {/* Controls Bar */}
        <div className="catalog-controls">
          <div className="search-bar">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search products (e.g. sanitizer, floor cleaner, wipes)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && <button onClick={() => setSearchTerm("")}>✕</button>}
          </div>

          <div className="sort-box">
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">Popularity / Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="category-filter-pills">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid or Empty state */}
        {filtered.length > 0 ? (
          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-icon">🍃</p>
            <h3>No products found</h3>
            <p>Try clearing your search or picking another category.</p>
            <button
              className="primary-btn"
              onClick={() => {
                setSearchTerm("");
                handleCategoryChange("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
