import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <div className="logo-icon">🍞</div>
        <h1 className="logo-text">Backeri</h1>
      </div>

      {/* Center: Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
