import React from 'react';
import { Link } from '../../router';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-box">
                <span className="logo-char">KG</span>
              </span>
              <span className="logo-name">
                KRISHAN <span className="logo-sub">GUPTA</span>
              </span>
            </Link>
            <p className="footer-bio">
              Student developer working across web, AI/ML and cloud, based in Chennai.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume Tracks</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Specialization Tracks</h4>
            <ul className="footer-links">
              <li><Link to="/resume/developer">Developer</Link></li>
              <li><Link to="/resume/researcher">Researcher</Link></li>
              <li><Link to="/resume/aiml">AI / ML Engineer</Link></li>
              <li><Link to="/resume/cloud-devops">Cloud & Infrastructure</Link></li>
              <li><Link to="/resume/leadership">Leadership</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Krishan Gupta. Built with precision and care.
          </p>
          <div className="footer-meta-pill">
            <span className="status-ping" />
            <span>VIT CHENNAI // 2029</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
