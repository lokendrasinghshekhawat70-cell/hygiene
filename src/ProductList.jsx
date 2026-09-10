import React from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Azhiva Sanitary Pads",
    category: "Women Hygiene",
    image: "/products/sanitary-pad.png",
    description: "Soft, safe and comfortable sanitary pads for everyday protection.",
    features: ["Ultra Thin", "Better Protection", "Comfort Fit"],
  },
  {
    id: 2,
    name: "Azhiva Baby Diaper",
    category: "Baby Care",
    image: "/products/baby-diaper.png",
    description: "Soft and highly absorbent diapers for your little ones.",
    features: ["Soft & Gentle", "Leak Guard", "Super Absorbent"],
  },
  {
    id: 3,
    name: "Azhiva Wet Wipes",
    category: "Personal Care",
    image: "/products/wet-wipes.png",
    description: "Gentle wet wipes enriched with Aloe Vera for fresh care.",
    features: ["Gentle on Skin", "pH Balanced", "Aloe Vera"],
  },
  {
    id: 4,
    name: "Azhiva Period Pain Relief Roll On",
    category: "Period Care",
    image: "/products/period-rollon.png",
    description: "Fast and soothing care for period pain, anytime and anywhere.",
    features: ["Fast Relief", "Natural Ingredients", "Easy to Carry"],
  },
];

function ProductList() {
  return (
    <section className="products-section" id="products">

      <div className="products-heading">
        <span>OUR PRODUCTS</span>
        <h2>Premium Hygiene Care</h2>
        <p>
          Quality hygiene products designed for comfort, protection
          and a healthier lifestyle.
        </p>
      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="category">{product.category}</span>
            </div>

            <div className="product-content">

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="features">
                {product.features.map((feature, i) => (
                  <span key={i}>✓ {feature}</span>
                ))}
              </div>

              <a href={`/products/${product.id || index + 1}`} className="product-btn" style={{ textDecoration: "none" }}>
                View Product
                <span>→</span>
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ProductList;
