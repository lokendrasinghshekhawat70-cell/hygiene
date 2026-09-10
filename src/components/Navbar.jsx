import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* 1. TOP INFO BAR: GSTIN & TAGLINE */}
      <div className="navbar-topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span className="gstin-badge">GSTIN: 23AAMCD9263H1ZE</span>
            <span className="topbar-divider">•</span>
            <span className="topbar-tagline">Care in Every Stage ♡ • Healthy Women | Happy Families</span>
          </div>

          <div className="topbar-right">
            <span className="topbar-directors-title">Managing Directors:</span>
            <a href="tel:8800570023" className="topbar-quick-call">
              <span>📞</span> Digvijay Singh Rathore: <strong>8800570023</strong>
            </a>
            <span className="topbar-divider">|</span>
            <a href="tel:9685024074" className="topbar-quick-call">
              <span>📞</span> Vijendra Kushwah: <strong>9685024074</strong>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="navbar">
        {/* BRAND LOGO & NAME */}
        <Link to="/" className="deevora-logo-link" onClick={closeMenu}>
          <div className="logo-symbol-wrapper">
            <img 
              src="/images/deevora-logo.png" 
              alt="Deevora Hygiene Logo" 
              className="deevora-logo-img"
            />
          </div>

          <div className="deevora-brand-text">
            <span className="brand-name">Deevora<sup>®</sup></span>
            <span className="brand-sub">— Hygiene —</span>
            <span className="brand-legal">PRIVATE LIMITED</span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>

          {/* MOBILE SPECIFIC DIRECTORS CALL CARDS */}
          <div className="mobile-directors-card">
            <div className="mobile-directors-header">
              <span>Managing Directors</span>
              <small>Tap to Call</small>
            </div>

            <a href="tel:8800570023" className="mobile-director-call">
              <div className="call-avatar">DS</div>
              <div className="call-info">
                <strong>Digvijay Singh Rathore</strong>
                <span className="call-number">📞 8800570023</span>
              </div>
            </a>

            <a href="tel:9685024074" className="mobile-director-call">
              <div className="call-avatar">VK</div>
              <div className="call-info">
                <strong>Vijendra Kushwah</strong>
                <span className="call-number">📞 9685024074</span>
              </div>
            </a>

            <div className="mobile-gst-footer">
              GSTIN: 23AAMCD9263H1ZE
            </div>
          </div>
        </div>

        {/* PROMINENT DIRECTORS NAME & NUMBERS IN MAIN NAVBAR */}
        <div className="nav-directors-display">
          <div className="directors-label-badge">MANAGING DIRECTORS</div>
          <div className="directors-buttons-row">
            <a href="tel:8800570023" className="director-pill" title="Call Digvijay Singh Rathore">
              <span className="pill-icon">📞</span>
              <div className="pill-text">
                <span className="pill-name">Digvijay Singh Rathore</span>
                <strong className="pill-num">8800570023</strong>
              </div>
            </a>

            <a href="tel:9685024074" className="director-pill" title="Call Vijendra Kushwah">
              <span className="pill-icon">📞</span>
              <div className="pill-text">
                <span className="pill-name">Vijendra Kushwah</span>
                <strong className="pill-num">9685024074</strong>
              </div>
            </a>
          </div>
        </div>

        {/* SHOP ACTION & MOBILE HAMBURGER BUTTON */}
        <div className="nav-action-wrapper">
          <Link to="/products" className="nav-button" onClick={closeMenu}>
            Shop Products →
          </Link>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE QUICK BAR: Always visible numbers under navbar on mobile */}
      <div className="mobile-quick-call-bar">
        <a href="tel:8800570023" className="mobile-quick-btn">
          <span>📞</span> Digvijay: <strong>8800570023</strong>
        </a>
        <a href="tel:9685024074" className="mobile-quick-btn secondary">
          <span>📞</span> Vijendra: <strong>9685024074</strong>
        </a>
      </div>
    </header>
  );
}
