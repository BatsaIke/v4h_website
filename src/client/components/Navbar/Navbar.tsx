import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import styles from "./Navbar.module.css";
import v4hypeLogo from "../../assets/images/v4hypelogo.png";
import MobileNav from "./MobileNav";
import { Book_A_Call } from "../../utils/constants"; // Import the centralized link

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get current location

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBookCall = () => {
    window.open(Book_A_Call, "_blank");
  };

  return (
    <>
      {isMobile ? (
        // Mobile Navigation
        <MobileNav />
      ) : (
        // Desktop Navigation
        <div className={styles.navbarWrapper}>
          <div className={styles.navbar}>
            {/* Logo */}
            <Link to="/" className={styles.logoLink}>
              <img
                className={styles.logo}
                alt="Viral 4 Hype Logo"
                src={v4hypeLogo}
              />
            </Link>

            {/* Navigation Links */}
            <div className={styles.navbarLinks}>
              <Link
                to="/"
                className={`${styles.navLink} ${
                  location.pathname === "/" ? styles.activeNavLink : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/google-ads"
                className={`${styles.navLink} ${
                  location.pathname === "/google-ads" ? styles.activeNavLink : ""
                }`}
              >
                Google Ads
              </Link>
              
              <Link
                to="/react-web-development"
                className={`${styles.navLink} ${
                  location.pathname === "/react-web-development" ? styles.activeNavLink : ""
                }`}
              >
                React Web Development
              </Link>
              <Link
                to="/blogs"
                className={`${styles.navLink} ${
                  location.pathname === "/blogs" ? styles.activeNavLink : ""
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Call-to-Action Button */}
            <button
              className={styles.button}
              type="button"
              onClick={handleBookCall}
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
