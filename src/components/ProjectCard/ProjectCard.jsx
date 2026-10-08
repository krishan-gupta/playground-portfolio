import React, { useRef, useState } from 'react';
import { Link } from '../../router';
import './ProjectCard.css';

export function ProjectCard({ project, viewMode = 'grid' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (viewMode === 'list') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle = isHovered && viewMode === 'grid'
    ? {
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`,
        transition: 'transform 0.08s ease-out'
      }
    : {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.3s ease-out'
      };

  return (
    <article
      ref={cardRef}
      className={`folder-card ${viewMode === 'list' ? 'folder-card-list' : ''} ${project.featured ? 'folder-card-featured' : ''}`}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Folder Tab Cutout */}
      <div className="folder-tab-bar">
        <div className="folder-tab">
          <span className="folder-tab-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span className="folder-tab-category">{project.category.toUpperCase()}</span>
        </div>
        <div className="folder-tab-meta">
          {project.featured && <span className="featured-badge">FEATURED</span>}
          <span className="folder-date">{project.date}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="folder-content">
        <div className="folder-header">
          <h3 className="folder-title">
            <Link to={`/projects/${project.slug}`} className="folder-title-link">
              {project.title}
            </Link>
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span className="folder-role">{project.role}</span>
            {project.status && (
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-2)',
                background: 'rgba(255, 122, 26, 0.08)',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 122, 26, 0.2)'
              }}>
                {project.status}
              </span>
            )}
          </div>
        </div>

        <p className="folder-summary">{project.summary}</p>

        {/* Tech Chips */}
        <div className="folder-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag-chip tag-chip-more">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Action Footers */}
        <div className="folder-actions">
          <Link to={`/projects/${project.slug}`} className="btn-detail">
            <span>Project Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <div className="folder-external-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl === 'TBD' ? '#' : project.githubUrl}
                target={project.githubUrl === 'TBD' ? undefined : '_blank'}
                rel={project.githubUrl === 'TBD' ? undefined : 'noreferrer'}
                onClick={(e) => {
                  if (project.githubUrl === 'TBD') {
                    e.preventDefault();
                    alert(`Source repository for "${project.title}" is currently TBD.`);
                  }
                }}
                className="icon-link-btn"
                aria-label={`GitHub repo for ${project.title}`}
                title={project.githubUrl === 'TBD' ? 'Source: TBD' : 'Source Code'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl === 'TBD' ? '#' : project.liveUrl}
                target={project.liveUrl === 'TBD' ? undefined : '_blank'}
                rel={project.liveUrl === 'TBD' ? undefined : 'noreferrer'}
                onClick={(e) => {
                  if (project.liveUrl === 'TBD') {
                    e.preventDefault();
                    alert(`Live link for "${project.title}" is currently TBD.`);
                  }
                }}
                className="icon-link-btn"
                aria-label={`Live demo for ${project.title}`}
                title={project.liveUrl === 'TBD' ? 'Demo: TBD' : 'Live Demo'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
