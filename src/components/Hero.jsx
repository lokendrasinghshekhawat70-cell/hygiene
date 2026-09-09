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
        <span>PREMIUM HYGIENE</span>

        <h1>
          Pure Hygiene.
          <br />
          Better Living.
        </h1>

        <p>
          Premium hygiene products designed for a cleaner and healthier lifestyle.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="hero-btn-solid">
            Shop Products
          </Link>
          <a href="#categories" className="outline">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
