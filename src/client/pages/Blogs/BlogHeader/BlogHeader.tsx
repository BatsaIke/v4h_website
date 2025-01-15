import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogHeader.module.css";
import { blogArticles } from "../BlogData";

const BlogHeader: React.FC = () => {
  const article9 = blogArticles.find((article) => article.id === "9");

  return (
    <div className={styles.blogHeader}>
      <div className={styles.textContainer}>
        <div className={styles.tag}>
          <span>NEWS AND INSIGHTS</span>
        </div>
        <div className={styles.titleContainer}>
          <h1>
            Here’s our latest article about{" "}
            <br /> <span className={styles.highlight}>business</span>
          </h1>
          <p className={styles.description}>
            Discover the latest trends and strategies in digital marketing and IT
            technology on our blog. From innovative automation and SEO solutions
            to case studies and practical tips for growing your business, we help
            you stay ahead of the curve.
          </p>
        </div>
      </div>
      {article9 && ( // Render article 9 if it exists
        <Link to={`/blogs/${article9.id}`} className={styles.link}> {/* Link to the specific blog */}
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <img
              src={article9.image}
              alt={article9.title}
              className={styles.blogImage}
            />
            <div className={styles.imageText}>
              <h2>{article9.title}</h2>
              <p>{article9.date}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BlogHeader;
