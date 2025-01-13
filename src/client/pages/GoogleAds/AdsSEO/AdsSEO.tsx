import React from "react";
import styles from "./AdsSEO.module.css";
import desIcon1 from '../../../assets/images/desIcon1.png';
import desIcon2 from '../../../assets/images/desIxon2.png';
import adsbackground from '../../../assets/images/adsSeobackground.png'
const AdsSEO: React.FC = () => {
  return (
    <div className={styles.adsSEO}>
      <div className={styles.heading}>
        Alongside Google Ads, we have developed other digital marketing services
        that supports our Google Ads strategy.
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <div className={styles.iconWrapper}>
            <img src={desIcon1} alt="SEO Optimization" className={styles.icon} />
          </div>
          <div className={styles.description}>
            SEO optimisation enhances website performance, boosts organic
            traffic, and ultimately lowers PPC campaign costs by improving the
            quality of content and the site’s UI/UX.
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.iconWrapper}>
            <img src={desIcon2} alt="Social Media Activity" className={styles.icon} />
          </div>
          <div className={styles.description}>
            Social Media activity helps companies engage and connect with their
            customers, fostering trust.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSEO;
