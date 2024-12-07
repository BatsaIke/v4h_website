import React from "react";
import styles from "./WordPressAds.module.css";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import icon5 from "../../../assets/images/icon5.png";
import icon6 from "../../../assets/images/icon6.png";

const WordPressAds: React.FC = () => {
  const features = [
    {
      icon: icon1,
      text: "1-second loading time or less on mobile & desktop",
    },
    {
      icon: icon2,
      text: "99-100 PageSpeed Insights score",
    },
    {
      icon: icon3,
      text: "SEO boost (Google favours low loading times and responsiveness)",
    },
    {
      icon: icon4,
      text: "Unlimited design and UI/UX possibilities",
    },
    {
      icon: icon5,
      text: "Increased conversion rates in PPC campaigns",
    },
    {
      icon: icon6,
      text: "More organic traffic",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          We’re done with WordPress and other traditional platforms; we decided to enhance our partners’ web presence with REACT Websites.
        </h1>
        <p className={styles.subTitle}>
          You’ll quickly forget about low-quality platforms and never want to go back.
        </p>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.iconWrapper}>
              <img src={feature.icon} alt={`Feature ${index + 1}`} className={styles.icon} />
            </div>
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordPressAds;
