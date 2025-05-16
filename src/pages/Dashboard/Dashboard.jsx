import React from 'react';
import styles from './dashboard.module.css';

import SummaryCard from '../../components/SummaryCard/SummaryCard';
import ChatCard from '../../components/ChatCard/ChatCard';
import MediaItem from '../../components/MediaItem/MediaItem';
import SpreadVisualizer from '../../pages/SpreadVisualizer/SpreadVisualizer';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard Overview</h1>

      {/* 🔹 Summary Cards */}
      <div className={styles.summaryGrid}>
        <SummaryCard title="Top Fake Topics" value="AI Elections" />
        <SummaryCard title="Flagged Accounts" value="112" />
        <SummaryCard title="Platforms Used" value="Facebook, TikTok" />
      </div>

      {/* 🔸 Charts and Media Tracker */}
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ChatCard type="line" title="Misinformation Over Time" />
          <ChatCard type="pie" title="Category Distribution" />
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.sectionTitle}>Flagged Media</h2>
          <div className={styles.mediaList}>
            <MediaItem />
            <MediaItem />
            <MediaItem />
          </div>
        </div>
      </div>

      {/* 🔻 Spread Timeline */}
      <h2 className={styles.sectionTitle}>Spread Timeline</h2>
      <div className={styles.timelineContainer}>
        <SpreadVisualizer />
      </div>
    </div>
  );
}
