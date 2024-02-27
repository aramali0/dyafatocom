import React from 'react';
import styles from './Footer.module.css'; 
function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <p>&copy; 2024 Dyafatocom. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
