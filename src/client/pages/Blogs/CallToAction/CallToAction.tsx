import React from "react";
import styles from "./CallToAction.module.css";
import { Book_A_Call } from "../../../utils/constants"; // Import the URL constant

const CallToAction: React.FC = () => {
  const handleGetInTouch = () => {
    window.open(Book_A_Call, "_blank"); // Open the booking link in a new tab
  };

  return (
    <div className={styles.ctaSection}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Book a free call with us</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleGetInTouch}>
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
