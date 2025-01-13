import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Book a free call with us</div>
       
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Get in touch</button>
      </div>
    </div>
  );
};

export default CallToAction;
