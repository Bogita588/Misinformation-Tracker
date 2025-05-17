import React, { useState } from 'react';
import styles from './dataexplorer.module.css';
import data from '../../data/kenya_fake_news_data_2025.json'; // adjust path as needed

export default function DataExplorer() {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🧠 Data Explorer</h1>
      <p className={styles.subtitle}>Browse and analyze detailed misinformation records.</p>

      {/* 🔎 Search and Filters */}
      <div className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📊 Data Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Platform</th>
              <th>Score</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.platform}</td>
                <td>{item.detection_score}</td>
                <td>{item.category}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && <p className={styles.noResults}>No results found.</p>}
      </div>

      {/* 📈 Chart Area (Placeholder for now) */}
      <div className={styles.chartsSection}>
        <div className={styles.chartBox}>📊 Category Distribution (Chart Placeholder)</div>
        <div className={styles.chartBox}>📈 Misinformation Over Time (Chart Placeholder)</div>
      </div>
    </div>
  );
}
