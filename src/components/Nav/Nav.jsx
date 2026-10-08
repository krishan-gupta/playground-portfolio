import React, { useState, useEffect } from 'react';
import { Link, useRoute } from '../../router';
import { tracks } from '../../data/tracks';
import './Nav.css';

export function Nav() {
  const { pathname } = useRoute();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setResumeDropdownOpen(false);
  }, [pathname]);

  return (
    <header className={`nav-header ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Monogram Logo: KG */}
        <Link to="/" className="nav-logo" aria-label="Krishan Gupta Home">
          <span className="logo-box">
            <span className="logo-char">KG</span>
            <span className="logo-dot" />
          </span>
          <span className="logo-name">
            KRISHAN <span className="logo-sub">GUPTA</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <Link
            to="/"
            className={`nav-link ${pathname === '/' ? 'nav-link-active' : ''}`}
          >
            Overview
          </Link>

          <Link
            to="/projects"
            className={`nav-link ${pathname.startsWith('/projects') ? 'nav-link-active' : ''}`}
          >
            Projects
          </Link>

          {/* Resume link with track branch dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setResumeDropdownOpen(true)}
            onMouseLeave={() => setResumeDropdownOpen(false)}
          >
            <Link
              to="/resume"
              className={`nav-link nav-link-dropdown ${pathname.startsWith('/resume') ? 'nav-link-active' : ''}`}
            >
              Resume Tracks
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`dropdown-chevron ${resumeDropdownOpen ? 'rotated' : ''}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {resumeDropdownOpen && (
              <div className="nav-dropdown-menu">
                <div className="dropdown-menu-header">Specialization Tracks</div>
                {tracks.map(t => (
                  <Link
                    key={t.id}
                    to={`/resume/${t.id}`}
                    className={`dropdown-item ${pathname === `/resume/${t.id}` ? 'dropdown-item-active' : ''}`}
                  >
                    <span className="dropdown-item-title">{t.label}</span>
                    <span className="dropdown-item-badge">{t.badge}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-sm btn-secondary nav-contact-btn">
            Get In Touch
          </a>

          {/* Mobile hamburger button */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'hamburger-active' : ''}`}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <Link to="/" className="mobile-link">
              01 // Overview
            </Link>
            <Link to="/projects" className="mobile-link">
              02 // Projects Library
            </Link>
            <Link to="/resume" className="mobile-link">
              03 // Resume Tracks
            </Link>
            <div className="mobile-sub-tracks">
              <span className="mobile-tracks-label">SPECIALIZATIONS:</span>
              {tracks.map(t => (
                <Link key={t.id} to={`/resume/${t.id}`} className="mobile-track-link">
                  → {t.label}
                </Link>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary mobile-cta">
              Contact & Inquiries
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
