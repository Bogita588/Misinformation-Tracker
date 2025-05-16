import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>M-Tracker</div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
          Dashboard
        </NavLink>
        <NavLink to="/data-explorer" className={({ isActive }) => isActive ? styles.active : ''}>
          Data Explorer
        </NavLink>
        <NavLink to="/media-tracker" className={({ isActive }) => isActive ? styles.active : ''}>
          Media Tracker
        </NavLink>
        <NavLink to="/spread-visualizer" className={({ isActive }) => isActive ? styles.active : ''}>
          Spread Visualizer
        </NavLink>
        <NavLink to="/map-view" className={({ isActive }) => isActive ? styles.active : ''}>
          Map View
        </NavLink>
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
      </nav>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}
