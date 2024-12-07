import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textContainer}>
        <div className={styles.tag}>
          <span>GOOGLE ADS</span>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <span>G</span>
            <span className={styles.dynamicText}>oogle Ads</span>
          </div>
          <div className={styles.subtitle}>
            <span>for the win</span>
            <span className={styles.period}>.</span>
          </div>
        </div>
        <p className={styles.description}>
          Our digital marketing approach is centred on Google Ads as the primary
          pillar of value creation.
        </p>
        <div className={styles.buttonGroup}>
          <div className={styles.primaryButton}>
            <span>Book a call</span>
          </div>
          <span className={styles.secondaryButton}>Free consultation call</span>
        </div>
      </div>

      {/* Banner Image */}
      <div className={styles.bannerImage}></div>
    </div>
  );
};

export default Header;
