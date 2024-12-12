import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import serviceHeader from '../../../assets/images/serivrPage.jpg';
import { Book_A_Call } from '../../../utils/constants'; // Import the constant

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is 768px or less
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  const handleBookCall = () => {
    window.open(Book_A_Call, "_blank"); // Open the Calendly link in a new tab
  };

  return (
    <div className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>
            A fast and modern web experience is now affordable for any company.
          </h1>
          <p className={styles.subHeading}>
            {isMobile
              ? "We use the latest technology to grow your business, protect your data and make your information visible for your targeted audience"
              : "In today’s world, the ultimate differentiator in the digital ecosystem for a company is the speed and quality of its website."}
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <button className={styles.bookCallButton} onClick={handleBookCall}>
            Book a call
          </button>
          <span className={styles.consultationText}>Free consultation call</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
