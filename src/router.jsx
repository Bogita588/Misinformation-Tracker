import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import DataExplorer from './pages/DataExplorer/DataExplorer';
import MediaTracker from './pages/MediaTracker/MediaTracker';
import SpreadVisualizer from './pages/SpreadVisualizer/SpreadVisualizer';
import MapView from './pages/MapView/MapView';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/data-explorer" element={<DataExplorer />} />
      <Route path="/media-tracker" element={<MediaTracker />} />
      <Route path="/spread-visualizer" element={<SpreadVisualizer />} />
      <Route path="/map-view" element={<MapView />} />
      
    </Routes>
  );
}
