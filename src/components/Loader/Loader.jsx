import React, { useState, useEffect } from 'react';
import './Loader.css';

export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem('portfolio_intro_loaded');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasLoaded || prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const startTime = performance.now();
    const duration = 1400; // ~1.4 seconds

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        sessionStorage.setItem('portfolio_intro_loaded', 'true');
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-screen ${isFadingOut ? 'loader-fade-out' : ''}`} aria-hidden={isFadingOut}>
      <div className="loader-inner">
        <div className="loader-monogram">
          <span className="monogram-letter">P</span>
          <span className="monogram-spark" />
        </div>
        <div className="loader-terminal">
          <span className="loader-prompt">$</span>
          <span className="loader-text">initializing portfolio kernel...</span>
        </div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-meta">
          <span className="loader-status">HORIZON // 2026</span>
          <span className="loader-pct">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
