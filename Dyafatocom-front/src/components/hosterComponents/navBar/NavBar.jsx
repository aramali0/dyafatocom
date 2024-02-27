import React, { useState } from 'react';
import styles from "./NavBar.module.css"
import img from "../../../assets/logo.png"
import img2 from "../../../assets/profile.jpg"

function Navbar() {
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle showing user details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  return (
    <nav className={styles.navbar}  >
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
        <div className={styles.navbarProfile}>
          <img 
            src={img2} 
            alt="profile image" 
            className={styles.profileImage} 
            onClick={toggleDetails} 
          />
          {/* Conditionally render user details */}
          {showDetails && (
            <div className={styles.userDetails}>
              <button onClick={toggleDetails} className={styles.closeButton}>X</button>
              <img 
                src={img2} 
                alt="profile image" 
                className={styles.profileImage} 
              />
              <p>Name: John Doe</p>
              <p>Email: johndoe@example.com</p>
              <button onClick={handleLogout} className={styles.button}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
