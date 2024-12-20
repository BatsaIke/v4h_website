import React, { useState, useEffect } from "react";
import styles from "./OtherPPC.module.css";
import googleAdsIcon from "../../assets/images/googleadicon.png";
import metaAdIcon from "../../assets/images/metaAds.png";
import tiktokAdIcon from "../../assets/images/tiktokAds.png";

const OtherPPC: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.otherPPC}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Other PPC platforms we recommend to our partners include Meta Ads and
          TikTok Ads, depending on the market and strategy.
        </h2>
        <p className={styles.subtext}>
          Each platform has distinct advantages, and our main focus is on
          collecting valuable data on platforms like Meta Ads, which further
          enhances Google Ads’ user conversion rates. Ultimately, it’s all
          about data and a high-quality web presence.
        </p>
      </div>
      {isMobile ? (
        <div className={styles.imageContainerMobile}>
          <img src={metaAdIcon} alt="Meta Ads" className={styles.icon} />
          <img src={tiktokAdIcon} alt="TikTok Ads" className={styles.icon} />
          <img src={googleAdsIcon} alt="Google Ads" className={styles.icon} />
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <img src={metaAdIcon} alt="Meta Ads" className={styles.icon} />
          <img src={tiktokAdIcon} alt="TikTok Ads" className={styles.icon} />
          <img src={googleAdsIcon} alt="Google Ads" className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default OtherPPC;
