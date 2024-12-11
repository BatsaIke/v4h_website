import React from "react";
import styles from "./DedicatedSection.module.css";

const DedicatedSection: React.FC = () => {
  return (
    <div className={styles.dedicatedSection}>
      <div className={styles.verticalBarsContainer}>
        {/* Left Vertical Bars */}
        <div className={styles.verticalBar}>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        {/* Right Vertical Bars */}
        <div className={styles.verticalBar}>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      {/* Wrapper for the horizontal bar and text */}
      <div className={styles.contentWrapper}>
        <div className={styles.horizontalBar}></div>
        <div className={styles.description}>
          Over the last four years, we have achieved an average
          <span style={{ color: "#F26622", fontSize:'32px', fontWeight:'600', lineHeight:'40px' }}> ROAS of 10 </span>
          in various markets.
          <div style={{ textAlign: "right", width: "100%" }}>
            <svg
              className={styles.arc}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path d="M0,10 Q100,-10 200,10" 
      fill="none"
      stroke="#F26622"
      strokeWidth="2"
    />
            </svg>
          </div>
        </div>
        <div className={styles.horizontalBar}></div>
      </div>
    </div>
  );
};

export default DedicatedSection;
