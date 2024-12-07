import React from "react";
import styles from "./Hero.module.css";
import frame1 from "../../assets/frame1.jpg";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      {/* Navbar */}
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <div className={styles.stepsBackground}>
            <h1 className={styles.title}>
              Viral 4 Hype is the partner every business needs in{" "}
              <span className={styles.highlight}>Digital Growth</span>
            </h1>
          </div>
          <p className={styles.description}>
            We are a company that focuses on fast execution, efficiency, and
            results. We seek to establish long-term partnerships that will be
            the foundation of success stories.
          </p>

          <div className={styles.callToAction}>
            <button className={styles.bookCall}>Book a call</button>
            <span className={styles.freeConsultation}>
              Free consultation call
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={frame1} // Replace with the actual image URL from your assets
            alt="Working on laptop"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
