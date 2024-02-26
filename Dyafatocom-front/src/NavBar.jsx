import React from 'react';
import styles from "./NavBAr.module.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Your Logo</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-secondary">Log In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

