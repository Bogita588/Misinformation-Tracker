import React from 'react';
import styles from './MediaItem.module.css';

export default function MediaItem() {
  return (
    <div className={styles.item}>
      <img
        src="https://via.placeholder.com/80"
        alt="Fake media"
        className={styles.thumbnail}
      />
      <div className={styles.details}>
        <h4 className={styles.title}>Fake Image Caption</h4>
        <p className={styles.description}>Posted on TikTok - Jan 10, 2025</p>
      </div>
    </div>
  );
}
