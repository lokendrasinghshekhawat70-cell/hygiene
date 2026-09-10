import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img 
              src="/images/deevora-logo.png" 
              alt="Deevora Hygiene" 
              className="footer-logo-img" 
            />
            <div>
              <strong className="footer-company-name">Deevora<sup>®</sup> Hygiene</strong>
              <small className="footer-legal-tag">PRIVATE LIMITED</small>
            </div>
          </Link>
          <p className="footer-tagline-text">
            Care in Every Stage ♡ • Healthy Women | Happy Families | A Cleaner Tomorrow. Premium personal care & hygiene solutions.
          </p>
          <div className="footer-gstin">
            <strong>GSTIN:</strong> 23AAMCD9263H1ZE
          </div>
        </div>

        <div className="footer-directors">
          <h4>Managing Directors</h4>
          <div className="director-card">
            <p className="director-name">Digvijay Singh Rathore</p>
            <a href="tel:8800570023" className="director-phone">
              <span>📞</span> 8800570023
            </a>
          </div>
          <div className="director-card" style={{ marginTop: "14px" }}>
            <p className="director-name">Vijendra Kushwah</p>
            <a href="tel:9685024074" className="director-phone">
              <span>📞</span> 9685024074
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Azhiva Products</h4>
          <div className="footer-links">
            <Link to="/products?category=Sanitary%20Pads">Azhiva Sanitary Pads</Link>
            <Link to="/products?category=Diapers">Azhiva Baby Diapers</Link>
            <Link to="/products?category=Wet%20Wipes">Azhiva Wet Wipes</Link>
            <Link to="/products?category=Period%20Pain%20Relief">Period Pain Relief Roll On</Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe for women's wellness guidance, mother-care tips, and new Azhiva launches.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="primary-btn">Join</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        © 2026 Deevora Hygiene Private Limited. All rights reserved. Quality Hygiene Products for a Healthier You.
      </div>
    </footer>
  );
}
