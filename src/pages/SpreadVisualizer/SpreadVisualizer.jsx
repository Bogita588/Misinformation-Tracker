import React from 'react';
import data from '../../data/kenya_fake_news_data_2025.json';
import styles from './SpreadVisualizer.module.css';

export default function SpreadVisualizer() {
  // Limit to 4 recent items for dashboard
  const recentPosts = data
    .flatMap(item =>
      item.spread_path.map(path => ({
        title: item.title,
        platform: path.platform,
        time: new Date(path.time),
        source: item.source
      }))
    )
    .sort((a, b) => b.time - a.time)
    .slice(0, 4); // Show only the 4 most recent

  return (
    <div className={styles.timeline}>
      {recentPosts.map((post, index) => (
        <div key={index} className={styles.event}>
          <div className={styles.time}>{post.time.toLocaleString()}</div>
          <div className={styles.details}>
            <strong>{post.platform}</strong> - <em>{post.source}</em>
            <p>{post.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
