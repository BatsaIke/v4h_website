import React from "react";
import Header from "./Header";
import DedicatedSection from "./DedicatedSection/DedicatedSection";
import AdsService from "./AdsService/AdsService";
import AdsSEO from "./AdsSEO/AdsSEO";
import OtherPPC from "../OtherPPC/OtherPPC";

const GoogleAds: React.FC = () => {
  return (
    <>
      <Header />
      <DedicatedSection/>
      <AdsService/>
      <AdsSEO/>
      <OtherPPC/>
    </>
  );
};

export default GoogleAds;
