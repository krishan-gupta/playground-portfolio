import React from 'react';
import './ExperienceCard.css';

export function ExperienceCard({ experience }) {
  return (
    <article className="experience-card card">
      <div className="experience-main">
        {/* Header */}
        <div className="experience-header">
          <div>
            <h3 className="experience-role">{experience.role}</h3>
            <div className="experience-company-line">
              <span className="experience-company">{experience.company}</span>
              <span className="experience-dot">•</span>
              <span className="experience-location">{experience.location}</span>
            </div>
          </div>
          <span className="experience-period">{experience.period}</span>
        </div>

        {/* Bullets */}
        <ul className="experience-bullets">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="experience-bullet">
              <span className="bullet-marker">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <div className="experience-tech-row">
          {experience.tech.map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Side Impact Panel */}
      {experience.impact && experience.impact.length > 0 && (
        <aside className="experience-impact-panel" aria-label="Key Impact Metrics">
          <div className="impact-panel-label">MEASURABLE IMPACT</div>
          <div className="impact-metrics-list">
            {experience.impact.map((metric, idx) => (
              <div key={idx} className="impact-metric-item">
                <span className="impact-metric-value">{metric.value}</span>
                <span className="impact-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
