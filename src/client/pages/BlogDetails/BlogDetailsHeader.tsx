import React from 'react';
import styles from './BlogDetailsHeader.module.css';

interface BlogDetailsHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const BlogDetailsHeader: React.FC<BlogDetailsHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically set background
    >
      <div className={styles.overlay} />
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default BlogDetailsHeader;
