import React from "react";
import styles from "./BlogPost.module.css";
import { Link } from "react-router-dom";
import { blogArticles } from "../../pages/Blogs/BlogData"; // Import blog data

const BlogPost: React.FC = () => {
  const featuredBlogs = blogArticles.slice(0, 3); // Get the first 3 blogs

  return (
    <div className={styles.blogPost}>
      {/* Latest Blog Title */}
      <div className={styles.blogTitle}>Latest Blog</div>

      {/* Blog Cards */}
      <div className={styles.blogCards}>
        {featuredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={blog.image} alt={blog.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <span className={styles.cardDate}>{blog.date}</span>
              </div>
            </div>
          </Link>
        ))}
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
