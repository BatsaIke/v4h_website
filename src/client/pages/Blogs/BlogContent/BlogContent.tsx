import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogContent.module.css";
import blogImage1 from "./images/blogimage.jpg";
import blogImage2 from "./images/blogimagge2.jpg";
import blogImage3 from "./images/blogimagge3.jpg";
import blogImage4 from "./images/blogimagge4.jpg";
import blogImage5 from "./images/blogimagge5.jpg";
import blogImage6 from "./images/blogimagge6.jpg";
import blogImage7 from "./images/blogimagge7.jpg";
import blogImage8 from "./images/blogimagge8.jpg";

const BlogContent: React.FC = () => {
  const navigate = useNavigate();

  const articles = [
    { id: "1", title: "Top 5 Tendințe în Marketing Digital pentru 2024", date: "16 February 2024", image: blogImage1 },
    { id: "2", title: "Inteligența artificială în business", date: "16 February 2024", image: blogImage2 },
    { id: "3", title: "Automatizarea marketingului", date: "16 February 2024", image: blogImage3 },
    { id: "4", title: "Migrarea în cloud: Avantaje și riscuri pentru afacerea ta", date: "16 February 2024", image: blogImage4 },
    { id: "5", title: "Oportunități și provocări pentru afaceri", date: "16 February 2024", image: blogImage5 },
    { id: "6", title: "Strategii pentru marketing video de succes", date: "16 February 2024", image: blogImage6 },
    { id: "7", title: "Impactul sustenabilității în branding", date: "16 February 2024", image: blogImage7 },
    { id: "8", title: "Tehnologii emergente în marketing digital", date: "16 February 2024", image: blogImage8 },
  ];

  return (
    <div className={styles.blogContent}>
      {/* Category Filter */}
      <div className={styles.filterBar}>
        {["All articles", "Case Studies", "Business", "PPC", "SEO"].map(
          (category) => (
            <div key={category} className={styles.filter}>
              {category}
            </div>
          )
        )}
      </div>

      {/* Article Grid */}
      <div className={styles.articleGrid}>
        {articles.map((article) => (
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
