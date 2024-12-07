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
          We develop projects ranging from simple presentation websites & online
          stores to complex web apps.
          <div style={{ textAlign: "right", width: "100%" }}>
            <svg
              className={styles.arc}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q100,30 200,10"
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
