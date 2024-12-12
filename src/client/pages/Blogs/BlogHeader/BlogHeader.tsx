import React from "react";
import styles from "./BlogHeader.module.css";
import blogImage from "../../../assets/images/blogimage.jpg"; // Replace with the actual image path

const BlogHeader: React.FC = () => {
  return (
    <div className={styles.blogHeader}>
      <div className={styles.textContainer}>
        <div className={styles.tag}>
          <span>NEWS AND INSIGHTS</span>
        </div>
        <div className={styles.titleContainer}>
          <h1>
            Here’s our latest article about{" "}
           <br/> <span className={styles.highlight}>business</span>
          </h1>
          <p className={styles.description}>
            Discover the latest trends and strategies in digital marketing and IT
            technology on our blog. From innovative automation and SEO solutions
            to case studies and practical tips for growing your business, we help
            you stay ahead of the curve.
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <a href="/blog/top-5-marketing-trends-2024" className={styles.imageLink}>
          <div className={styles.imageOverlay}></div>
          <img src={blogImage} alt="Top Blog" className={styles.blogImage} />
          <div className={styles.imageText}>
            <h2>Top 5 Tendințe în Marketing Digital pentru 2024</h2>
            <p>16 February 2024</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogHeader;
