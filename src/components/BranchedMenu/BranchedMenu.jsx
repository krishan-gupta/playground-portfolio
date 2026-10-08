import React, { useRef, useEffect } from 'react';
import { tracks } from '../../data/tracks';
import { Link } from '../../router';
import './BranchedMenu.css';

export function BranchedMenu({ activeTrackId, onSelectTrack, isCompact = false }) {
  const containerRef = useRef(null);

  return (
    <div className={`branched-menu-wrapper ${isCompact ? 'branched-menu-compact' : ''}`} ref={containerRef}>
      {/* Root Node */}
      <div className="branched-root-node">
        <div className="branched-root-badge">
          <span className="branched-pulse-dot" />
          <span className="branched-root-label">RESUME BRANCHES</span>
        </div>
        <span className="branched-root-hint">Select a specialization track:</span>
      </div>

      {/* SVG Connecting Branch Lines (Desktop/Tablet) */}
      <div className="branched-lines-container" aria-hidden="true">
        <svg className="branched-lines-svg" viewBox="0 0 1000 48" preserveAspectRatio="none">
          {/* Main horizontal bus */}
          <line x1="80" y1="4" x2="920" y2="4" className="branch-bus-line" />
          {/* Central feeder line from root */}
          <line x1="500" y1="0" x2="500" y2="4" className="branch-feeder-line" />
          {/* Drops to each track */}
          {tracks.map((track, i) => {
            const x = 100 + (800 / (tracks.length - 1)) * i;
            const isActive = track.id === activeTrackId;
            return (
              <g key={track.id} className={isActive ? 'branch-line-active' : ''}>
                <line x1={x} y1="4" x2={x} y2="48" className="branch-drop-line" />
                <circle cx={x} cy="4" r="3" className="branch-node-dot" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Track Nodes */}
      <div className="branched-tracks-grid" role="tablist" aria-label="Resume Tracks">
        {tracks.map((track, index) => {
          const isActive = track.id === activeTrackId;
          return (
            <Link
              key={track.id}
              to={`/resume/${track.id}`}
              onClick={(e) => {
                if (onSelectTrack) {
                  e.preventDefault();
                  onSelectTrack(track.id);
                }
              }}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              className={`branched-track-item ${isActive ? 'branched-track-active' : ''}`}
              style={{ '--item-index': index }}
            >
              <div className="branched-track-header">
                <span className="branched-track-index">0{index + 1}</span>
                <span className="branched-track-badge">{track.badge}</span>
              </div>
              <div className="branched-track-title">{track.label}</div>
              <div className="branched-track-indicator">
                <span className="indicator-line" />
                <span className="indicator-status">{isActive ? 'ACTIVE TRACK' : 'EXPLORE'}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
