import React, { useState, useEffect } from 'react';
import './SlingTop.css';

export function SlingTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlinging, setIsSlinging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSling = () => {
    setIsSlinging(true);

    // Sling recoil delay before launching scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 150);

    setTimeout(() => {
      setIsSlinging(false);
    }, 600);
  };

  if (!isVisible) return null;

  return (
    <button
      className={`sling-button ${isSlinging ? 'sling-launching' : ''}`}
      onClick={handleSling}
      aria-label="Launch back to top"
      title="Back to Top"
    >
      <div className="sling-bands" aria-hidden="true">
        <span className="sling-band band-left" />
        <span className="sling-band band-right" />
      </div>
      <div className="sling-projectile">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </div>
      <span className="sling-label">TOP</span>
    </button>
  );
}
