import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">✦</span>
        Hygien<span>ica</span>
      </Link>

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
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </div>

      <div className="nav-action-wrapper">
        <Link to="/products" className="nav-button" onClick={closeMenu}>
          Explore Shop →
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
  );
}
