import React from "react";
import styles from "./BlogPost.module.css";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import { Link } from "react-router-dom";

const BlogPost: React.FC = () => {
  return (
    <div className={styles.blogPost}>
      {/* Blog Cards */}
      <div className={styles.blogCards}>
        <div className={styles.card}>
          <img src={blog1} alt="Automatizarea marketingului" className={styles.cardImage} />
          <div className={styles.cardOverlay}>
            <h3 className={styles.cardTitle}>Automatizarea marketingului</h3>
            <span className={styles.cardDate}>16 February 2024</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={blog2} alt="Inteligența artificială în business" className={styles.cardImage} />
          <div className={styles.cardOverlay}>
            <h3 className={styles.cardTitle}>Inteligența artificială în business</h3>
            <span className={styles.cardDate}>16 February 2024</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={blog3} alt="Oportunități și provocări pentru afaceri" className={styles.cardImage} />
          <div className={styles.cardOverlay}>
            <h3 className={styles.cardTitle}>Oportunități și provocări pentru afaceri</h3>
            <span className={styles.cardDate}>16 February 2024</span>
          </div>
        </div>
      </div>
      {/* See All Blog Posts Button */}
      <div className={styles.seeAll}>
  <Link to="/blogs" className={styles.seeAllLink}>
    <span>See All Blog Posts</span>
    <div className={styles.arrowContainer}>
      <div className={styles.arrow}></div>
    </div>
  </Link>
</div>
    </div>
  );
};

export default BlogPost;
