import React, { useState, useEffect } from 'react';
import { Link } from '../../router';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [timeStr, setTimeStr] = useState('');

  // Live IST (Chennai) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeInIST = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setTimeStr(timeInIST);
      } catch (err) {
        setTimeStr(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      {/* Laser Horizon Light Beam */}
      <div className="footer-laser-line" />

      <div className="container footer-container">
        <div className="footer-hud-grid">
          {/* Left Block: Identity & Telemetry */}
          <div className="footer-hud-block footer-identity-block">
            <div className="footer-brand-row">
              <Link to="/" className="footer-hud-logo">
                <span className="logo-box">
                  <span className="logo-char">KG</span>
                </span>
                <span className="logo-name">
                  KRISHAN <span className="logo-sub">GUPTA</span>
                </span>
              </Link>
              <div className="footer-status-tag">
                <span className="status-indicator-ping">
                  <span className="ping-ring" />
                  <span className="ping-dot" />
                </span>
                <span className="status-tag-text">OPEN FOR OPPORTUNITIES</span>
              </div>
            </div>

            <div className="footer-telemetry-row">
              <span className="telemetry-coord">12.8406° N, 80.1534° E</span>
              <span className="telemetry-sep">/</span>
              <span className="telemetry-campus">VIT CHENNAI</span>
              <span className="telemetry-sep">/</span>
              <span className="telemetry-clock" title="Indian Standard Time (Chennai)">
                IST <span className="clock-digits">{timeStr || '--:--:--'}</span>
              </span>
            </div>
          </div>

          {/* Center Block: Fast Navigation Deck */}
          <div className="footer-hud-block footer-nav-block">
            <nav className="footer-capsule-nav">
              <Link to="/" className="capsule-link">
                <span className="capsule-key">01</span>
                <span className="capsule-label">Overview</span>
              </Link>
              <Link to="/projects" className="capsule-link">
                <span className="capsule-key">02</span>
                <span className="capsule-label">Projects</span>
              </Link>
              <Link to="/resume" className="capsule-link">
                <span className="capsule-key">03</span>
                <span className="capsule-label">Resume</span>
              </Link>
              <a href="/#contact" className="capsule-link">
                <span className="capsule-key">04</span>
                <span className="capsule-label">Contact</span>
              </a>
            </nav>
          </div>

          {/* Right Block: Copyright & Engine Info */}
          <div className="footer-hud-block footer-action-block">
            <div className="footer-copyright-row">
              <span className="copyright-text">© {currentYear} Krishan Gupta</span>
              <span className="copyright-sep">·</span>
              <span className="engine-tag">ORBIT // 2029</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
