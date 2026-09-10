import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import VideoSection from "../components/VideoSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { products, categories } from "../data/products";

import Shop from "../components/Shop";

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. 🎬 Video Hero */}
      <Hero />

      {/* 2. 🛍️ Product Shopping Section with WhatsApp Enquire */}
      <Shop />

      {/* 3. 📂 Categories (4 Core Categories) */}
      <section className="categories-section" id="categories">
        <div className="section-header text-center">
          <span className="section-tag">CARE IN EVERY STAGE ♡</span>
          <h2>Explore <span>Categories</span></h2>
          <p>Healthy Women | Happy Families | A Cleaner Tomorrow</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 4. 📇 Official Brand Banner Showcase */}
      <section className="banner-showcase-section">
        <div className="banner-card-wrapper">
          <img 
            src="/images/deevora-banner.jpg" 
            alt="Deevora Hygiene - Azhiva Care in Every Stage"
            className="brand-visiting-banner" 
          />
        </div>
      </section>

      {/* 5. 🎥 Video Showcase */}
      <VideoSection />

      {/* 6. ⭐ Why Choose Us */}
      <WhyChooseUs />

      {/* 7. ❤️ Customer Reviews */}
      <Testimonials />
    </div>
  );
}
