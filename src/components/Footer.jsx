import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>✦</span> Hygienica
          </Link>
          <p>
            Building better hygiene habits and clean living essentials for a healthier world.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Healthy & Informed</h4>
          <p>Subscribe to receive weekly hygiene tips and exclusive member discounts.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="primary-btn">Join</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        © 2026 Hygienica Inc. All rights reserved. Clean habits. Healthy life.
      </div>
    </footer>
  );
}
