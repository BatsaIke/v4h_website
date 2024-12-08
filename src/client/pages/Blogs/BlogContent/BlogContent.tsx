import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogContent.module.css";
import { blogArticles } from "../BlogData"; // Import blog data

const BlogContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All articles");

  // Extract unique categories dynamically
  const categories = [
    "All articles",
    ...new Set(blogArticles.map((article) => article.category)),
  ];

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "All articles"
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className={styles.blogContent}>
      {/* Category Filter */}
      <div className={styles.filterBar}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${styles.filter} ${
              selectedCategory === category ? styles.activeFilter : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Article Grid */}
      <div className={styles.articleGrid}>
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className={styles.article}
            onClick={() => navigate(`/blogs/${article.id}`)} // Navigate to the blog details page
          >
            <div className={styles.imageContainer}>
              <img
                src={article.image}
                alt={article.title}
                className={styles.articleImage}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.articleText}>
                <h3>{article.title}</h3>
                <p>{article.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className={styles.loadMore}>
        <button>Load more</button>
      </div>
    </div>
  );
};

export default BlogContent;
