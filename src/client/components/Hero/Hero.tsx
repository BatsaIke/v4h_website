import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import frame1 from "../../assets/frame1.jpg";
import { Book_A_Call } from "../../utils/constants";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Diigital Growth and React Development";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index)); // Typing effect
        index++;
      } else {
        clearInterval(interval); // Stop when finished
      }
    }, 100); // Adjust speed
  
    return () => clearInterval(interval); // Cleanup
  }, []);
  

  const splitText = displayText.split(" and "); // Split "Digital Growth" and "React Development"

  const handleBookCall = () => {
    window.open(Book_A_Call, "_blank"); 
  };

  const handleFreeConsultation = () => {
    window.open(Book_A_Call, "_blank");
  };

  

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <div className={styles.stepsBackground}>
            <h1 className={styles.title}>
              Viral 4 Hype is the partner every business needs in{" "}
              <br />
              <span className={styles.highlight}>
                {splitText[0]} {/* Digital Growth */}
                {splitText[1] && (
                  <>
                    {" "}
                    and
                    <br />
                    {splitText[1]} {/* React Development */}
                  </>
                )}
              </span>
            </h1>
          </div>
          <p className={styles.description}>
            We are a company that focuses on fast execution, efficiency, and
            results. We seek to establish long-term partnerships that will be
            the foundation of success stories.
          </p>

          <div className={styles.callToAction}>
            <button
              className={styles.bookCall}
              onClick={handleBookCall}
            >
              Book a call
            </button>
            <button
              className={styles.freeConsultation}
              onClick={handleFreeConsultation}
            >
              Free consultation call
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={frame1} // Replace with the actual image URL
            alt="Working on laptop"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
