import React, { useState, useEffect } from "react";
import styles from "./ReactAdsSession.module.css";
import googleads from "../../../assets/images/Untitled (11).png";
import googleads2 from "../../../assets/images/googleads2.jpg";
import arrorup from "../../../assets/images/solar_arrow-right-up-linear.png";
import checkIcon from "../../../assets/images/prime_check-circle.png";

const ReactAdsSession: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGoogleAdsClick = () => {
    if (isMobile) {
      window.location.href = "/google-ads";
    }
  };

  const handleReactAdsClick = () => {
    window.location.href = "/react-web-development"; // Navigate to /services
  };

  return (
    <div className={styles.reactAdsSession}>
      {/* First section */}
      <div className={styles.section}>
        <img
          className={styles.image}
          src={googleads}
          alt="Google Ads"
        />
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.tag}>GOOGLE ADS</div>
            <h2 className={styles.title}>
              Our main pillar of producing value is Google Ads.
            </h2>
          </div>
          <p className={styles.description}>
            Since 2021 we have developed other digital marketing services that
            enable companies to take a full approach to digital marketing, as
            SEO, PPC, and Social Media are all interconnected and should work
            towards the same goal: producing value.
          </p>
          <div
            className={styles.readMore}
            onClick={handleGoogleAdsClick}
          >
            {isMobile ? (
              <span>Read more</span>
            ) : (
              <span>Read more about our digital marketing services</span>
            )}
            {!isMobile && (
              <img src={arrorup} alt="Arrow Up" className={styles.arrowIcon} />
            )}
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.tag}>REACT WEB DEVELOPMENT</div>
            <h2 className={styles.title}>
              Another key service we offer is REACT Web Development, through
              which we build top-quality web projects for our partners.
            </h2>
          </div>
          <p className={styles.description}>
            Any project developed in REACT is superior to any other platform,
            as everything is custom-built and made for maximum efficiency.
            <br />
            The low loading time and high scores in PageSpeed Insights help
            reduce CPC on PPC platforms and boost SEO performance.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
              <span>
                Projects developed by us are optimized for 99.9% of existing
                device resolutions
              </span>
            </div>
            <div className={styles.feature}>
              <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
              <span>
                Achieve loading times on mobile of around 1 second or less
              </span>
            </div>
            <div className={styles.feature}>
              <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
              <span>
                Ensure a PageSpeed Insights score of nearly 100 out of 100
              </span>
            </div>
          </div>
          <div
            className={styles.readMore}
            onClick={handleReactAdsClick} // Corrected to navigate to /services
          >
            {isMobile ? (
              <span>Read more</span>
            ) : (
              <span>Read more about our React web development services</span>
            )}
            {!isMobile && (
              <img src={arrorup} alt="Arrow Up" className={styles.arrowIcon} />
            )}
          </div>
        </div>
        <img
          className={styles.image}
          src={googleads2}
          alt="React Development"
        />
      </div>
    </div>
  );
};

export default ReactAdsSession;
