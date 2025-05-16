import React from 'react';
import styles from './mediatracker.module.css';

export default function MediaTracker() {
  return (
    <main className={styles.mediaTracker}>
      <h1 className={styles.title}>Media Tracker</h1>
      <p className={styles.subtitle}>
        Review flagged AI-generated and manipulated media items.
      </p>

      <section className={styles.mediaList}>
        {/* Replace this placeholder with real MediaItem components */}
        <div className={styles.placeholder}>No media items to display yet.</div>
      </section>
    </main>
  );
}
