import React from 'react';
import styles from "./NavBar.module.css"
import img from "../../../assets/logo.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.navbarBrand}><img className={styles.logo} src={img} /></a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/services" className={styles.navLink}>Services</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </li>
        </ul>
        <div className={styles.navbarButtons}>

          <button className={`${styles.btn} ${styles.btnSecondary}`}>Log In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
