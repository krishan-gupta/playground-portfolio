import React from 'react';
import { Link, useRoute } from '../../router';
import { getProjectBySlug, projects } from '../../data/projects';
import { TechText } from '../../components/TechText/TechText';
import './ProjectDetail.css';

export function ProjectDetailPage({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: '1.5rem 0' }}>The requested laboratory project "{slug}" could not be located.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Find index for Prev/Next
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="detail-page-wrapper">
      <div className="container">
        {/* Navigation back */}
        <div className="detail-nav-back">
          <Link to="/projects" className="back-link">
            ← Back to All Projects
          </Link>
        </div>

        {/* Hero Card */}
        <section className="detail-hero-card">
          <div className="detail-meta-row">
            <span className="section-label">{project.category.toUpperCase()} // ARTIFACT</span>
            {project.featured && <span className="featured-badge">FEATURED</span>}
          </div>

          <h1 className="detail-title">
            <TechText text={project.title} glitchOnMount={true} />
          </h1>

          <div className="detail-sub-meta">
            <div>Role: <span className="detail-role">{project.role}</span></div>
            <div>Date: <span>{project.date}</span></div>
          </div>

          {/* Action buttons */}
          <div className="detail-links-row">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                <span>Open Live Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                <span>Source Repository</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="detail-tags-row">
            {project.tags.map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </section>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="detail-metrics-grid">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="detail-metric-card">
                <div className="detail-metric-val">{m.value}</div>
                <div className="detail-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Grid */}
        <div className="case-study-grid">
          <div className="case-study-sections">
            <section className="case-section">
              <h2 className="case-section-title">01 // Architectural Overview</h2>
              <p className="case-section-text">{project.overview}</p>
            </section>

            <section className="case-section">
              <h2 className="case-section-title">02 // The Engineering Challenge</h2>
              <p className="case-section-text">{project.problem}</p>
            </section>

            <section className="case-section">
              <h2 className="case-section-title">03 // Technical Approach & Synthesis</h2>
              <p className="case-section-text">{project.approach}</p>
            </section>

            <section className="case-section">
              <h2 className="case-section-title">04 // Verification & Outcomes</h2>
              <p className="case-section-text">{project.result}</p>
            </section>
          </div>

          {/* Side Gallery & Artifacts */}
          <aside className="case-gallery">
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--accent-2)' }}>
              Artifacts & Schematics
            </h3>

            {(project.gallery || [
              { label: 'System Topology Schematic', caption: 'Logical flow of state mutations and data streams.' }
            ]).map((item, idx) => (
              <div key={idx} className="gallery-card">
                <div className="gallery-preview-box">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>VIEWPORT SCHEMATIC</span>
                </div>
                <div className="gallery-title">{item.label}</div>
                <div className="gallery-caption">{item.caption}</div>
              </div>
            ))}
          </aside>
        </div>

        {/* Pagination Prev / Next */}
        <div className="project-pagination-footer">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="pagination-item">
              <span className="pagination-dir">← PREVIOUS ARTIFACT</span>
              <span className="pagination-title">{prevProject.title}</span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className="pagination-item pagination-next">
              <span className="pagination-dir">NEXT ARTIFACT →</span>
              <span className="pagination-title">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
