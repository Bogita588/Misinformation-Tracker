import React from 'react';
import data from '../../data/kenya_fake_news_data_2025.json';
import styles from './mediaItem.module.css';

export default function MediaItem() {
  // Filter flagged posts based on detection score, AI generation, misinformation content, or being fact-checked
  const flaggedItems = data.filter(
    item =>
      item.detection_score >= 80 ||
      item.is_ai_generated ||
      item.content_type === 'misinformation' ||
      item.fact_checked_by
  );

  // Display only the top 3 flagged items (sorted by detection score)
  const topFlagged = flaggedItems
    .sort((a, b) => b.detection_score - a.detection_score)
    .slice(0, 3);

  return (
    <>
      {topFlagged.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.thumbnail}>
            {/* Fallback icon for platform */}
            <img
              src={`/platform-icons/${item.platform.toLowerCase()}.svg`}
              alt={`${item.platform} icon`}
              className={styles.icon}
              onError={(e) => {
                e.target.src = '/platform-icons/default.svg';
              }}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.details}>
              <strong>Source:</strong> {item.source} &nbsp;|&nbsp;
              <strong>Platform:</strong> {item.platform}
            </p>
            <p className={styles.meta}>
              <strong>Score:</strong> {item.detection_score}% &nbsp;|&nbsp;
              <strong>Fact-Checked By:</strong> {item.fact_checked_by || 'N/A'}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
