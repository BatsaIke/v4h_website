import React from "react";
import Hero from "../../components/Hero/Hero"; // Adjust the import path based on your folder structure
import DedicatedSection from "./DedicatedSection/DedicatedSection";
import ReactAdsSession from "./ReactAdsSession/ReactAdsSession";
import BookACall from "./BookACall/BookACall";
import BlogPost from '../../components/BlogPost/BlogPost'

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <DedicatedSection
        text="We dedicated our last 4 years to delivering great results to our partners by using out-of-the-ordinary Google Ads tactics that achieved an average"
        highlightText="ROAS of 10."
      />
      <ReactAdsSession/>
      <BookACall/>
      <BlogPost/>
    </div>
  );
};

export default HomePage;
