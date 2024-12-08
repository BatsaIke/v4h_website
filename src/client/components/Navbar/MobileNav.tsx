import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNav.module.css";
import logo from "../../assets/images/v4hypelogo.png";
import menuIcon from "../../assets/images/ci_menu-alt-01.png";
import closeIcon from "../../assets/images/close.png";

const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu after a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className={styles.navbar}>
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu Icon" />
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`${styles.menuOverlay} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.menuContent}>
          <Link to="/" className={styles.menuItem} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/google-ads" className={styles.menuItem} onClick={closeMenu}>
            Google Ads
          </Link>
          <Link to="/services" className={styles.menuItem} onClick={closeMenu}>
            React Web Development
          </Link>
          <Link to="/blogs" className={styles.menuItem} onClick={closeMenu}>
            Blog
          </Link>
          <div
            className={styles.getInTouchButton}
            onClick={closeMenu} // Optional if it's a clickable button
          >
            Get in touch
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
