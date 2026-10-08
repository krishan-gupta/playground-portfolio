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
                <span className="logo-char">P</span>
              </span>
              <span className="logo-name">
                PORTFOLIO<span className="logo-sub">.LAB</span>
              </span>
            </Link>
            <p className="footer-bio">
              Architecting resilient distributed systems, interactive WebGL/WebGPU visual experiences, and robust AI/ML inference infrastructure.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Overview & Work</Link></li>
              <li><Link to="/projects">Projects Library</Link></li>
              <li><Link to="/resume">Resume Branches</Link></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Specialization</h4>
            <ul className="footer-links">
              <li><Link to="/resume/developer">Software Engineering</Link></li>
              <li><Link to="/resume/researcher">AI/ML Research</Link></li>
              <li><Link to="/resume/aiml">ML Systems & LLMOps</Link></li>
              <li><Link to="/resume/cloud-devops">Cloud & Infrastructure</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Handcrafted with precision. All rights reserved.
          </p>
          <div className="footer-meta-pill">
            <span className="status-ping" />
            <span>BUILT WITH REACT & NATIVE CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
