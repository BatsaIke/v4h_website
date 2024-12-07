import React from "react";
import styles from "./AdsService.module.css";
import adsimage from '../../../assets/images/adsimage.png'
const AdsService: React.FC = () => {
  return (
    <div className={styles.adsService}>
      <div className={styles.text}>
        We specialize in delivering Google Ads services across different
        environments and markets, from Lead Generation to E-commerce campaigns.
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={adsimage}
          alt="Google Ads Service"
        />
      </div>
    </div>
  );
};

export default AdsService;
