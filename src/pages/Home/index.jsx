import React, { useState, useRef } from 'react';
import { Link } from '../../router';
import { HorizonBloom } from '../../components/HorizonBloom/HorizonBloom';
import { TechText } from '../../components/TechText/TechText';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { getFeaturedProjects } from '../../data/projects';
import { skillCategories, additionalTech, csFundamentals, areasOfInterest } from '../../data/resume';
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
        {count.toLocaleString()}
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
  const horizonRef = useRef(null);

  const [aboutRef] = useReveal();
  const [skillsRef] = useReveal();
  const [featuredRef] = useReveal();
  const [achievementsRef] = useReveal();
  const [contactRef] = useReveal();

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
      {/* 6.2 Home: Hero */}
      <section id="hero" className="hero-section">
        {/* Horizon Bloom: ReactBits Pro Sunrise breaking over planet edge */}
        <HorizonBloom
          ref={horizonRef}
          colors={['#FF9A3D', '#8A3A00']}
          backgroundColor="#0a0908"
          horizon={0.72}
          curvature={0.7}
          sunPosition={0.08}
          sunrise={1.0}
          flare={1.0}
          rim={1.0}
          atmosphere={1.0}
          thickness={1.0}
          stars={0.5}
          airglow={0.5}
          clouds={0.5}
          bloom={0.5}
          grain={0.25}
          aurora={0}
          autoAurora={false}
          parallax={0.5}
          intro={true}
          interactive={true}
        >
          {/* Corner mono captions */}
          <div className="hero-caption hero-caption-tl" aria-hidden="true">
            SYS.LOC // CHENNAI<br />
            BATCH // MAY 2029
          </div>
          <div className="hero-caption hero-caption-tr" aria-hidden="true">
            STATUS // OPEN TO INTERNSHIPS<br />
            AFFIL // VIT CHENNAI
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">PORTFOLIO // MULTI-TRACK</span>
            </div>

            <div className="hero-title-box" onClick={(e) => e.stopPropagation()}>
              <h1 style={{ margin: 0, padding: 0 }}>
                <TechText text="Krishan Gupta" isHeroTitle={true} />
              </h1>
            </div>

            <p className="hero-subtitle">
              B.Tech CSE (AI & ML) student at VIT Chennai, building practical tools and exploring AI applications.
            </p>

            <div className="hero-buttons" onClick={(e) => e.stopPropagation()}>
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
          </div>

          {/* Scroll cue pinned near the bottom inside the dark planet area */}
          <a
            href="#about"
            className="hero-scroll-cue"
            aria-label="Scroll down to About section"
            onClick={(e) => e.stopPropagation()}
          >
            <span>EXPLORE BELOW</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </HorizonBloom>
      </section>

      {/* 6.3 About The Journey */}
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
                  <span className="portrait-label">PORTRAIT [TBD]</span>
                  <span className="portrait-sublabel">Photo to be updated</span>
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <p className="about-lead">
                I'm a second-year B.Tech Computer Science student (AI & ML specialization) at VIT Chennai, graduating in May 2029. I like building practical tools and exploring applications of AI, and I take part in competitive hackathons.
              </p>
              <p className="about-bio">
                On campus I lead and build: I'm Management Lead at NEXUS VIT, Technical Specialist at CloudOps VITC and Web Developer at AWS Cloud Club VIT Chennai. My profile is moving from frontend work toward AI/ML and research, with a goal of landing a paid internship and building a strong research and patents record.
              </p>

              {/* Real stat tiles from section 13 */}
              <div className="about-stats-row">
                <StatTile target={1100} suffix="+" label="Nexus Forum Attendees Coordinated" />
                <StatTile target={300} suffix="+" label="AWS Student Builder Sign-ups Driven" />
                <StatTile target={4} suffix="" label="Certifications & Job Simulations" />
                <StatTile target={1} suffix="" label="Patent Application (Transferred)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Skills Matrix */}
      <section id="skills" className="section" ref={skillsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">02 // Core Capabilities</span>
            <h2 className="section-title">
              Technical <span className="text-gradient">Skill Matrix</span>
            </h2>
            <p className="section-description">
              Core technologies, frameworks, and tools used across campus leadership, IoT builds, and machine learning projects.
            </p>
          </div>

          {/* 4 Category Cards */}
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skill Strips */}
          <div className="skills-aux-wrapper">
            <div className="aux-strip-card">
              <span className="aux-strip-label">ALSO USED IN PROJECTS</span>
              <div className="aux-strip-chips">
                {additionalTech.map((item) => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="aux-strip-card">
              <span className="aux-strip-label">CS FUNDAMENTALS</span>
              <div className="aux-strip-chips">
                {csFundamentals.map((item) => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="aux-strip-card">
              <span className="aux-strip-label">AREAS OF INTEREST</span>
              <div className="aux-strip-chips">
                {areasOfInterest.map((item) => (
                  <span key={item} className="tag-chip" style={{ color: 'var(--accent-2)', borderColor: 'rgba(255, 122, 26, 0.3)' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Top 3 Projects */}
      <section id="featured" className="section" ref={featuredRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">03 // Featured Work</span>
            <h2 className="section-title">
              Selected <span className="text-gradient">Projects & Prototypes</span>
            </h2>
            <p className="section-description">
              Key builds spanning campus laundry platforms, embedded acoustic ML and privacy-first mobile vision.
            </p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} viewMode="grid" />
            ))}
          </div>

          <div className="featured-actions-row">
            <Link to="/projects" className="btn btn-secondary">
              <span>View all projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6.6 Patents and Certifications */}
      <section id="achievements" className="section" ref={achievementsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">04 // RECOGNITION</span>
            <h2 className="section-title">
              <span className="text-gradient">Patents & Certifications</span>
            </h2>
          </div>

          <div className="patents-certifications-grid">
            {/* Column 1: Patents & Research */}
            <div className="achievement-column">
              <h3 className="achievement-column-title">Patents & Research</h3>
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

            {/* Column 2: Certifications */}
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

      {/* 6.7 Contact Section */}
      <section id="contact" className="section" ref={contactRef}>
        <div className="container">
          <div className="contact-card-wrapper">
            <div className="contact-info">
              <span className="section-label">05 // Transmission</span>
              <h2 className="contact-heading">
                Let's build something <span className="text-gradient">together?</span>
              </h2>
              <p className="contact-subtext">
                Open to internships, research collaboration and project work.
              </p>

              <div className="contact-quick-links">
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">✉</span>
                  <a href="mailto:work.krishan.gupta@gmail.com" style={{ color: 'var(--text)' }}>
                    work.krishan.gupta@gmail.com
                  </a>
                </div>
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">📍</span>
                  <span>Chennai, India</span>
                </div>
                <div className="contact-quick-item">
                  <span className="contact-quick-icon">⚡</span>
                  <span>Response Time: TBD</span>
                </div>
              </div>
            </div>

            <div className="contact-form-side">
              {formSubmitted ? (
                <div className="form-success-banner">
                  Message transmission received! Thank you for getting in touch.
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
                      placeholder="Discussing internship opportunities, research collaborations, or technical projects..."
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
