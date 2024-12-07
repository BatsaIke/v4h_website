import React from "react";
import classNames from "classnames";
import styles from "./DedicatedSection.module.css";

interface DedicatedSectionProps {
  text: string; // Main description text
  highlightText?: string; // Highlighted text inside the orange ROAS container
  className?: string; // Optional className for additional custom styling
  wrapperStyle?: React.CSSProperties; // Custom style for contentWrapper
  showArc?: boolean; // Whether to show the arc underline
}

const DedicatedSection: React.FC<DedicatedSectionProps> = ({
  text,
  highlightText,
  className,
  wrapperStyle,
  showArc = false, // Default to not showing the arc
}) => {
  return (
    <div className={classNames(styles.dedicatedSection, className)}>
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
      <div className={styles.contentWrapper} style={wrapperStyle}>
        <div className={styles.horizontalBar}></div>
        <div className={styles.description}>
          {text} {/* Main dynamic text */}
          {highlightText && (
            <div className={styles.roasContainer}>
              <span className={styles.roasText}>{highlightText}</span>
            </div>
          )}
          {showArc && (
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
          )}
        </div>
        <div className={styles.horizontalBar}></div>
      </div>
    </div>
  );
};

export default DedicatedSection;
