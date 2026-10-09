import React, { useState, useRef, useEffect } from 'react';
import { Link } from '../../router';
import { HorizonBloom } from '../../components/HorizonBloom/HorizonBloom';
import Meteors from '../../components/Meteors/Meteors';
import { TechText } from '../../components/TechText/TechText';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects, getFeaturedProjects } from '../../data/projects';
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
  const heroRef = useRef(null);
  const [isBloomPaused, setIsBloomPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  const [aboutRef] = useReveal();
  const [skillsRef] = useReveal();
  const [featuredRef] = useReveal();
  const [achievementsRef] = useReveal();
  const [contactRef] = useReveal();

  useEffect(() => {
    const motionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (motionQuery) {
      setReducedMotion(motionQuery.matches);
      const onMotionChange = (e) => setReducedMotion(e.matches);
      motionQuery.addEventListener('change', onMotionChange);
      return () => motionQuery.removeEventListener('change', onMotionChange);
    }
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 1;
      const p = Math.min(Math.max(scrollY / vh, 0), 1);

      if (heroRef.current) {
        heroRef.current.style.setProperty('--p', p.toFixed(4));
        const cueOpacity = Math.max(0, 1 - p / 0.3);
        heroRef.current.style.setProperty('--cue-opacity', cueOpacity.toFixed(4));
        heroRef.current.style.setProperty('--hero-pointer-events', p > 0.9 ? 'none' : 'auto');
        heroRef.current.style.setProperty('--cue-pointer-events', p >= 0.3 ? 'none' : 'auto');
      }

      if (aboutRef.current) {
        const arcOpacity = Math.min(p / 0.45, 1);
        aboutRef.current.style.setProperty('--arc-opacity', arcOpacity.toFixed(4));
      }

      const shouldPause = p >= 0.95;
      setIsBloomPaused((prev) => (prev !== shouldPause ? shouldPause : prev));

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [aboutRef]);

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
      {/* 6.2 Home: Hero (pinned 100svh card under About) */}
      <section id="hero" className="hero-section" ref={heroRef}>
        {/* Horizon Bloom: ReactBits Pro Sunrise breaking over planet edge */}
        <HorizonBloom
          ref={horizonRef}
          colors={['#F59A48', '#5A2C00']}
          backgroundColor="#0a0908"
          horizon={0.78}
          curvature={0.7}
          sunPosition={0.1}
          sunrise={0.65}
          flare={0.6}
          rim={1.0}
          atmosphere={0.55}
          thickness={0.8}
          stars={0.5}
          airglow={0.35}
          clouds={0.35}
          bloom={0.35}
          grain={0.25}
          aurora={0}
          autoAurora={false}
          parallax={0.5}
          intro={true}
          interactive={true}
          paused={isBloomPaused}
        >
          {/* Dark overlay over bloom during scroll-over */}
          <div className="hero-dark-overlay" aria-hidden="true" />

          {/* 6.2b Hero meteor shower (subtle shooting-star streaks in top 78% sky) */}
          <Meteors paused={isBloomPaused} />

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
            <div className="hero-sky-block">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <span className="hero-badge-text">PORTFOLIO // MULTI-TRACK</span>
              </div>

              <h1 className="sr-only">Krishan Gupta</h1>
              {isMobile ? (
                <div className="hero-name-stacked" aria-hidden="true">
                  <div className="hero-name-stacked-line">
                    <TechText
                      text="Krishan"
                      fontFamily="Outfit, sans-serif"
                      fontWeight={800}
                      fontSize={120}
                      letterSpacing={-0.04}
                      color="#f5efe8"
                      accentColor="#ff7a1a"
                      reveal="letter"
                      specks={reducedMotion ? 0 : 15}
                      speed={0.41}
                      sweep={!isBloomPaused && !reducedMotion}
                    />
                  </div>
                  <div className="hero-name-stacked-line">
                    <TechText
                      text="Gupta"
                      fontFamily="Outfit, sans-serif"
                      fontWeight={800}
                      fontSize={120}
                      letterSpacing={-0.04}
                      color="#f5efe8"
                      accentColor="#ff7a1a"
                      reveal="letter"
                      specks={reducedMotion ? 0 : 15}
                      speed={0.41}
                      sweep={!isBloomPaused && !reducedMotion}
                    />
                  </div>
                </div>
              ) : (
                <div className="hero-name" aria-hidden="true">
                  <TechText
                    text="Krishan Gupta"
                    fontFamily="Outfit, sans-serif"
                    fontWeight={800}
                    fontSize={168}
                    letterSpacing={-0.04}
                    color="#f5efe8"
                    accentColor="#ff7a1a"
                    reveal="letter"
                    specks={reducedMotion ? 0 : 15}
                    speed={0.41}
                    sweep={!isBloomPaused && !reducedMotion}
                  />
                </div>
              )}

              <p className="hero-subtitle">
                B.Tech CSE (AI & ML) student at VIT Chennai, building practical tools and exploring AI applications.
              </p>
            </div>

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

      {/* 6.2a Hero to About transition (scroll-over card) & 6.3 About The Journey */}
      <section id="about" className="section about-section" ref={aboutRef}>
        {/* Arc glow at the card's top edge */}
        <div className="about-arc-glow-wrapper" aria-hidden="true">
          <div className="about-arc-bloom-ambient" />
          <div className="about-arc-secondary" />
          <div className="about-arc-primary" />
          <div className="about-arc-core-highlight" />
        </div>

        <div className="container">
          <div className="section-header">
            <span className="section-label">01 // PROFILE</span>
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
                I'm Krishan, a second-year Computer Science student at VIT Chennai, specializing in AI & ML. I like building things people can actually use: a laundry platform designed for 15,000+ students, a noise monitor built on an ESP32, and a hackathon concept for editing text inside photos without leaving your phone.
              </p>
              <p className="about-bio">
                I started in frontend and I'm moving toward AI/ML and research. I'm Management Lead at NEXUS VIT, where I coordinate events like the Striver talk show, and the web developer for AWS Cloud Club VIT Chennai. I'm also a co-inventor on a patent that has already been transferred to industry.
              </p>
              <p className="about-bio">
                I'm looking for internships and research collaborations.
              </p>

              {/* Four stat tiles from section 13.2 */}
              <div className="about-stats-row">
                <StatTile target={projects.length} suffix="" label="Projects" />
                <StatTile target={1} suffix="" label="Patent filed" />
                <StatTile target={achievementsData.certifications.length} suffix="" label="Certificates" />
                <StatTile target={1} suffix="" label="AWS certification passed" />
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

          <div className="patents-certifications-wrapper">
            {/* Row Group 1: Patents & Research (Row-wise, max 2 items per row) */}
            <div className="recognition-group">
              <h3 className="achievement-column-title">Patents & Research</h3>
              <div className="recognition-cards-grid">
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
            </div>

            {/* Row Group 2: Certifications (Row-wise, max 2 items per row) */}
            <div className="recognition-group">
              <h3 className="achievement-column-title">Certifications</h3>
              <div className="recognition-cards-grid">
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
