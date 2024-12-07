import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you're using React Router
import styles from "./MobileNav.module.css";
import logo from "../../assets/images/v4hypelogo.png";
import menuIcon from "../../assets/images/ci_menu-alt-01.png";
import closeIcon from "../../assets/images/close.png";

const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className={styles.navbar}>
        <img src={logo} alt="Logo" className={styles.logo} />
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
          <Link to="/" className={styles.menuItem}>
            Home
          </Link>
          <Link to="/google-ads" className={styles.menuItem}>
            Google Ads
          </Link>
          <Link to="/services" className={styles.menuItem}>
            React Web Development
          </Link>
          <Link to="/blogs" className={styles.menuItem}>
            Blog
          </Link>
          <div className={styles.getInTouchButton}>Get in touch</div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
