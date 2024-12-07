import React from "react";
import styles from "./OurServices.module.css";
import icon1 from "../../../assets/images/i1.png";
import icon2 from "../../../assets/images/i3.png";
import icon3 from "../../../assets/images/i2.png";
import icon4 from "../../../assets/images/i4.png";

const OurServices: React.FC = () => {
  const services = [
    {
      icon: icon1,
      text: "On-page SEO (meta titles & descriptions, attributes, alt descriptions, etc).",
    },
    {
      icon: icon2,
      text: "Integration of any third-party platform you use (Google Tag, Analytics Tag, etc).",
    },
    {
      icon: icon3,
      text: "Copywriting upon request.",
    },
    {
      icon: icon4,
      text: "A custom design for every project we develop.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our services include</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.service}>
            <div className={styles.iconWrapper}>
              <img src={service.icon} alt={`Service Icon ${index + 1}`} className={styles.icon} />
            </div>
            <p className={styles.serviceText}>{service.text}</p>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        We offer website or app hosting upon request, though we highly recommend that we manage this for you.
      </p>
    </div>
  );
};

export default OurServices;
