import React from 'react';
import styles from './ChatCard.module.css';

export default function ChartCard({ type, title }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartPlaceholder}>
        {/* Replace this with actual chart logic */}
        <p>{type === 'line' ? 'Line Chart' : 'Pie Chart'} goes here</p>
      </div>
    </div>
  );
}
