import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/products/hygiene-poster.jpg"
      >
        <source src="/videos/hygiene-hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span>CARE IN EVERY STAGE ♡</span>

        <h1>
          Pure Hygiene.
          <br />
          For A Healthier You.
        </h1>

        <p>
          Healthy Women | Happy Families | A Cleaner Tomorrow. Discover our certified Azhiva Sanitary Pads, Baby Diapers, Refreshing Wet Wipes, and Period Pain Relief Roll On.
        </p>

        <div className="hero-buttons">
          <Link to="/products">
            <button>Shop Azhiva Products</button>
          </Link>
          <a href="#categories">
            <button className="outline">Explore Categories</button>
          </a>
        </div>
      </div>
    </section>
  );
}
