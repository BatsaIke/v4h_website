import React from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogContent from "./BlogContent/BlogContent";
import CallToAction from "./CallToAction/CallToAction";

const Blogs: React.FC = () => { 
  return (
    <>
      <BlogHeader />
      <BlogContent/> 
      <CallToAction/>
    </>
  );  
};

export default Blogs;
