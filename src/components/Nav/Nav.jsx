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
            <a href="#contact" className="btn btn-primary mobile-cta" onClick={() => setMobileMenuOpen(false)}>
              Contact & Inquiries
            </a>
            <div className="mobile-socials-row">
              <a href="https://linkedin.com/in/krishangupta" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/krishangt" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="mailto:work.krishan.gupta@gmail.com" className="mobile-social-link" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
