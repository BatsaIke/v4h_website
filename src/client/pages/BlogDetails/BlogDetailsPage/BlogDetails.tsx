import React from "react";
import styles from "./BlogDetails.module.css";

interface Section {
  title?: string;
  content: string;
  image?: string;
}

interface BlogDetailsProps {
  sections: Section[];
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return <p>No sections available.</p>; // Fallback for empty sections
  }

  return (
    <div className={styles.detailsContainer}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.title && (
            <h3 className={styles.sectionTitle}>{section.title}</h3>
          )}
          <p className={styles.sectionContent}>{section.content}</p>
          {section.image && (
            <img
              src={section.image}
              alt={section.title || "Blog Section"}
              className={styles.image}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
