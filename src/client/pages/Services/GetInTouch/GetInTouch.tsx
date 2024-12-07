import React from "react";
import styles from "./GetInTouch.module.css";

const GetInTouch: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            We value <span className={styles.highlight}>transparency</span> and want you to fully understand the services we provide.
          </h1>
          <p className={styles.description}>
            You will receive a transparent offer detailing all maintenance costs and any other essential information before we begin working together.
          </p>
        </div>
        <button className={styles.getInTouchButton}>Get in touch</button>
      </div>

      {/* Dotted Backgrounds */}
      <div className={styles.dottedBackground}></div>
      <div className={styles.dottedBackgroundTopRight}></div>
    </div>
  );
};

export default GetInTouch;
