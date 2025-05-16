import React from 'react';
import data from '../../data/kenya_fake_news_data_2025.json';
import styles from './ImpactView.module.css';

export default function ImpactView() {
  const platformStats = {};

  data.forEach(item => {
    const platform = item.platform;
    if (!platformStats[platform]) {
      platformStats[platform] = {
        count: 0,
        totalScore: 0,
      };
    }
    platformStats[platform].count += 1;
    platformStats[platform].totalScore += item.detection_score;
  });

  const entries = Object.entries(platformStats).map(([platform, { count, totalScore }]) => ({
    platform,
    count,
    avgScore: (totalScore / count).toFixed(1),
  }));

  return (
    <div className={styles.impactCard}>
      <h2 className={styles.title}>Platform Impact Overview</h2>
      <ul className={styles.list}>
        {entries.map(({ platform, count, avgScore }) => (
          <li key={platform} className={styles.item}>
            <span className={styles.platform}>{platform}</span>
            <span className={styles.metric}>{count} posts</span>
            <span className={styles.score}>Avg Score: {avgScore}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
