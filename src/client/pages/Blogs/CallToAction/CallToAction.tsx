import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Book a free call with us</div>
        <div className={styles.description}>
          Dacă ai nevoie de ajutor pentru a integra aceste tendințe în strategia
          ta de marketing, echipa noastră de experți în marketing digital este
          gata să te ajute.
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.inputField}
        />
        <button className={styles.button}>Get in touch</button>
      </div>
    </div>
  );
};

export default CallToAction;
