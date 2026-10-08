import React, { useState } from 'react';
import { Link } from '../../router';
import { HorizonBloom } from '../../components/HorizonBloom/HorizonBloom';
import { TechText } from '../../components/TechText/TechText';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { getFeaturedProjects } from '../../data/projects';
import { skillCategories } from '../../data/resume';
import { achievementsData } from '../../data/achievements';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';
import './Home.css';

function StatTile({ target, suffix = '', label }) {
  const [ref, isRevealed] = useReveal();
  const count = useCountUp(target, 1600, isRevealed);

  return (
    <div ref={ref} className="stat-tile">
      <div className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [aboutRef, aboutRevealed] = useReveal();
  const [skillsRef, skillsRevealed] = useReveal();
  const [featuredRef, featuredRevealed] = useReveal();
  const [achievementsRef, achievementsRevealed] = useReveal();
  const [contactRef, contactRevealed] = useReveal();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="home-page-wrapper">
      {/* 2. Hero Section */}
      <section id="hero" className="hero-section">
        <HorizonBloom />

        {/* Small mono captions in corners */}
        <div className="hero-caption hero-caption-tl" aria-hidden="true">
          SYS.LOC // 37.7749° N, 122.4194° W<br />
          ENV // PRODUCTION_V2
        </div>
        <div className="hero-caption hero-caption-tr" aria-hidden="true">
          SYS.STATUS // NOMINAL<br />
          ORBIT // 2026.04
        </div>

        <div className="container hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">PORTFOLIO // V2.0 MULTI-TRACK</span>
          </div>

          <h1 className="hero-title">
            <TechText text="Lorem Ipsum Dolor Sit" glitchOnMount={true} />
          </h1>

          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/resume" className="btn btn-secondary">
              Resume Tracks
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </Link>
          </div>

          <a href="#about" className="hero-scroll-cue" aria-label="Scroll to content">
            <span>SCROLL DOWN</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="section" ref={aboutRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">01 // Profile</span>
            <h2 className="section-title">
              About <span className="text-gradient">The Journey</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-portrait-wrapper">
              <div className="about-portrait-frame">
                <div className="portrait-glow-ring" />
                <div className="portrait-placeholder-art">
                  <svg className="portrait-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="portrait-label">PORTRAIT PLACEHOLDER</span>
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <p className="about-lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <p className="about-bio">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>

              {/* Stat tiles row */}
              <div className="about-stats-row">
                <StatTile target={6} suffix="+" label="Years Craft" />
                <StatTile target={24} suffix="+" label="Projects Shipped" />
                <StatTile target={99} suffix=".9%" label="System Reliability" />
                <StatTile target={3} suffix="+" label="Research Papers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="section" ref={skillsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">02 // Core Capabilities</span>
            <h2 className="section-title">
              Technical <span className="text-gradient">Skill Matrix</span>
            </h2>
            <p className="section-description">
              Handcrafted architecture spanning real-time browser graphics, distributed backend systems, and cutting-edge machine learning research.
            </p>
          </div>

          <div className="skills-categories-grid">
            {skillCategories.map((category) => (
              <div key={category.id} className="skill-category-card card">
                <div className="skill-category-header">
                  <div className="skill-cat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="skill-cat-title">{category.title}</h3>
                </div>

                <div className="skills-chip-grid">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-chip">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Section */}
      <section id="featured" className="section" ref={featuredRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">03 // Featured Work</span>
            <h2 className="section-title">
              Selected <span className="text-gradient">Innovations</span>
            </h2>
            <p className="section-description">
              Explore key engineering milestones and interactive laboratory systems.
            </p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} viewMode="grid" />
            ))}
          </div>

          <div className="featured-actions-row">
            <Link to="/projects" className="btn btn-secondary">
              <span>View All Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Achievements, Patents and Certifications */}
      <section id="achievements" className="section" ref={achievementsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">04 // Recognition</span>
            <h2 className="section-title">
              Achievements, <span className="text-gradient">Patents & Certifications</span>
            </h2>
          </div>

          <div className="achievements-grid">
            {/* Column 1: Achievements */}
            <div className="achievement-column">
              <h3 className="achievement-column-title">Achievements & Awards</h3>
              {achievementsData.achievements.map((item) => (
                <div key={item.id} className="compact-item-card">
                  <div className="compact-item-meta">
                    <span className="compact-item-issuer">{item.issuer}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="compact-item-title">{item.title}</h4>
                  <p className="compact-item-desc">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Column 2: Patents */}
            <div className="achievement-column">
              <h3 className="achievement-column-title">Patents & IP</h3>
              {achievementsData.patents.map((item) => (
                <div key={item.id} className="compact-item-card">
                  <div className="compact-item-meta">
                    <span className="compact-item-issuer">{item.issuer}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="compact-item-title">{item.title}</h4>
                  <p className="compact-item-desc">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Column 3: Certifications */}
            <div className="achievement-column">
              <h3 className="achievement-column-title">Certifications</h3>
              {achievementsData.certifications.map((item) => (
                <div key={item.id} className="compact-item-card">
                  <div className="compact-item-meta">
                    <span className="compact-item-issuer">{item.issuer}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="compact-item-title">{item.title}</h4>
                  <p className="compact-item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="section" ref={contactRef}>
        <div className="container">
          <div className="contact-card-wrapper">
            <div className="contact-info">
              <span className="section-label">05 // Transmission</span>
              <h2 className="contact-heading">
                Lorem Ipsum <span className="text-gradient">Dolor?</span>
              </h2>
              <p className="contact-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether discussing research opportunities, distributed architecture, or high-craft web engineering.
              </p>

              <div className="contact-quick-links">
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">✉</span>
                  <span>contact@example.com</span>
                </div>
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">📍</span>
                  <span>San Francisco, CA / Remote</span>
                </div>
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">⚡</span>
                  <span>Typical response time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-form-side">
              {formSubmitted ? (
                <div className="form-success-banner">
                  Transmission sent successfully! Thank you for reaching out.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">NAME</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">EMAIL</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">MESSAGE</label>
                    <textarea
                      id="contact-message"
                      required
                      className="form-textarea"
                      placeholder="Discussing upcoming project, research inquiry, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    Transmit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
