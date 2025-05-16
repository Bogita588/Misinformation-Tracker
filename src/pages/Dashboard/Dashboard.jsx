import React from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import ChatCard from '../../components/ChatCard/ChatCard';
import MediaItem from '../../components/MediaItem/MediaItem';
import SpreadVisualizer from '../../pages/SpreadVisualizer/SpreadVisualizer';
import ImpactView from '../../components/ImpactView/ImpactView';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* 🔹 Summary Cards */}
      <div className={styles.summaryGrid}>
        <SummaryCard title="Top Fake Topics" />
        <SummaryCard title="Flagged Accounts" />
        <SummaryCard title="AI-Generated Posts" />
        <SummaryCard title="Total Fake Posts" />
      </div>

      {/* 🔻 Charts and Media */}
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ChatCard type="line" title="Misinformation Over Time" />
          <ChatCard type="pie" title="Category Distribution" />
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.sectionTitle}> Top 3 Flagged Media</h2>
          <div className={styles.mediaList}>
            <MediaItem />
            
          </div>
        </div>
      </div>

      {/* 🔻 Spread Timeline & Impact View */}
<div className={styles.timelineRowGrid}>
  <div className={styles.timelineSection}>
    <h2 className={styles.sectionTitle}>Spread Timeline</h2>
    <SpreadVisualizer />
  </div>
  <div className={styles.impactSection}>
    <h2 className={styles.sectionTitle}>Platform Impact Overview</h2>
    <ImpactView />
  </div>
</div>

    </div>
  );
}
