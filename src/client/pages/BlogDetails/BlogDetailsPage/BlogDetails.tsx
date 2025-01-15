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
  const renderContent = (content: string) => {
    // Check if content contains numbered/bulleted items and render accordingly
    const lines = content.trim().split("\n").filter((line) => line);

    if (lines.every((line) => line.match(/^\d+\./))) {
      // Render numbered list
      return (
        <ol className={styles.orderedList}>
          {lines.map((line, index) => (
            <li key={index} className={styles.listItem}>
              {line.replace(/^\d+\.\s*/, "")}
            </li>
          ))}
        </ol>
      );
    }

    if (lines.every((line) => line.match(/^- /))) {
      // Render bulleted list
      return (
        <ul className={styles.bulletedList}>
          {lines.map((line, index) => (
            <li key={index} className={styles.listItem}>
              {line.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }

    // Default to rendering as plain paragraph
    return <p className={styles.sectionContent}>{content}</p>;
  };

  return (
    <div className={styles.detailsContainer}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}
          {renderContent(section.content)}
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
