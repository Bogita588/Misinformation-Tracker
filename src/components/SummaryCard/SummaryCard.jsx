import React from 'react';
import styles from './SummaryCard.module.css';

export default function SummaryCard({ title, value }) {
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
