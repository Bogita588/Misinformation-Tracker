import React from 'react';
import styles from './mapview.module.css';

export default function MapView() {
  return (
    <main className={styles.mapView}>
      <h1>Map View</h1>
      <p>Heatmap showing misinformation incidents by region.</p>
      {/* Map/heatmap component */}
    </main>
  );
}
