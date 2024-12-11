import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import frame1 from "../../assets/frame1.jpg";
import { Book_A_Call } from "../../utils/constants";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [fullText, setFullText] = useState("Digital Growth and React Development");

  useEffect(() => {
    const updateTextForMobile = () => {
      if (window.innerWidth <= 768) {
        // Update fullText for mobile view
        setFullText("Digital Marketing and REACT Web Development");
      } else {
        // Revert to default for larger screens
        setFullText("Digital Growth and React Development");
      }
    };

    // Set the correct text on load
    updateTextForMobile();

    // Update text dynamically on resize
    window.addEventListener("resize", updateTextForMobile);
    return () => window.removeEventListener("resize", updateTextForMobile);
  }, []);

  useEffect(() => {
    let index = 0;
    setDisplayText(""); // Reset displayText when fullText changes
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index)); // Typing effect
        index++;
      } else {
        clearInterval(interval); // Stop when finished
      }
    }, 100); // Adjust typing speed

    return () => clearInterval(interval); // Cleanup
  }, [fullText]);

  const splitText = displayText.split(" and "); // Split text dynamically

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
                {splitText[0]} {/* Digital Marketing */}
                {splitText[1] && (
                  <>
                    {" "}
                    and
                    <br />
                    {splitText[1]} {/* REACT Web Development */}
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
            <button className={styles.bookCall} onClick={handleBookCall}>
              Book a call
            </button>
            <button className={styles.freeConsultation} onClick={handleFreeConsultation}>
              Free consultation call
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={frame1}
            alt="Working on laptop"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};
 
export default Hero;
