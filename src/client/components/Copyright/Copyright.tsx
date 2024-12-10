import React from "react";
import styles from "./Copyright.module.css"; // Optional: Use CSS for styling

const Copyright: React.FC = () => {
  return (
    <div className={styles.copyrightContainer}>
      <div className={styles.textContainer}>
        <span>© 2024 Viral4Hype / A</span>
        <span className={styles.lowercaseText}>LL RIGHTS RESERVED.</span>
      </div>
    </div>
  );
};

export default Copyright;
