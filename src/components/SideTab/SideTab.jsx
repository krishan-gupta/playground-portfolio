import React from 'react';
import './SideTab.css';

export function SideTab() {
  return (
    <aside className="side-tab-container" aria-label="Availability Status">
      <a href="#contact" className="side-tab-pill">
        <span className="side-tab-status-dot" />
        <span className="side-tab-text">AVAILABLE FOR OPPORTUNITIES</span>
      </a>
    </aside>
  );
}
