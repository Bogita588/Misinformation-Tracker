import React from 'react';
import data from '../../data/kenya_fake_news_data_2025.json';
import styles from './summaryCard.module.css';

export default function SummaryCard({ title }) {
  let value = '';

  switch (title) {
    case 'Flagged Accounts': {
      const flaggedSources = [
        ...new Set(
          data
            .filter(item =>
              item.detection_score >= 80 ||
              item.is_ai_generated ||
              item.content_type === 'misinformation' ||
              item.fact_checked_by
            )
            .map(item => item.source)
        ),
      ];
      value = flaggedSources.length;
      break;
    }

    case 'AI-Generated Posts':
      value = data.filter(item => item.is_ai_generated).length;
      break;

    case 'Top Fake Topics': {
      const categoryCount = {};
      data.forEach(item => {
        categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
      });
      value = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0][0];
      break;
    }

    case 'Total Fake Posts':
      value = data.length;
      break;

    default:
      value = 'N/A';
  }

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 17l6-6 4 4 8-8M13 7h8v8"
          />
        </svg>
      </div>
      <div className={styles.textSection}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}
