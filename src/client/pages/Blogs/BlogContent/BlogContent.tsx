import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogContent.module.css";
import { blogArticles } from "../BlogData"; // Import blog data

const BlogContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All articles");
  const [visibleArticles, setVisibleArticles] = useState<number>(8); // Tracks how many articles are visible

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

  // Load More functionality
  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + 8); // Load 8 more articles
  };

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
            onClick={() => {
              setSelectedCategory(category);
              setVisibleArticles(8); // Reset visible articles when category changes
            }}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Article Grid */}
      <div className={styles.articleGrid}>
        {filteredArticles.slice(0, visibleArticles).map((article) => (
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
      {visibleArticles < filteredArticles.length && ( // Show button only if there are more articles
        <div className={styles.loadMore}>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
