import React from "react";
import Header from "./Header/Header";
import styles from "./Services.module.css";
import WordPressAds from "./WordpressAds/WordPressAds";
import OurServices from "./OurServices/OurServices";
import GetInTouch from "./GetInTouch/GetInTouch";
import DedicatedSection from "./DedicatedSection/DedicatedSection";

const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      {/* Header Section */}
      <Header />

      {/* WordPress Ads Section */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 0', background: '#f8f8f8' }}>
        <WordPressAds />
      </div>

      {/* Dedicated Section */}
      <DedicatedSection/>
   

      {/* Our Services Section */}
      <OurServices />

      {/* Get In Touch Section */}
      <GetInTouch />
    </div>
  );
};

export default Services;
