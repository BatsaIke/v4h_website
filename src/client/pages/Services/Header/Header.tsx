import React from "react";
import styles from "./Header.module.css";
import serviceHeader from '../../../assets/images/serivrPage.jpg'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>
            A fast and modern web experience is now affordable for any company.
          </h1>
          <p className={styles.subHeading}>
            In today’s world, the ultimate differentiator in the digital
            ecosystem for a company is the speed and quality of its website.
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <button className={styles.bookCallButton}>Book a call</button>
          <span className={styles.consultationText}>Free consultation call</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
