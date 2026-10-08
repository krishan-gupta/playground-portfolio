import React, { useState, useEffect } from 'react';
import { useRoute, Link } from '../../router';
import { tracks, getTrackById, defaultTrackId } from '../../data/tracks';
import { getExperiencesForTrack, education } from '../../data/resume';
import { achievementsData } from '../../data/achievements';
import { BranchedMenu } from '../../components/BranchedMenu/BranchedMenu';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import { HorizonBloom } from '../../components/HorizonBloom/HorizonBloom';
import { TechText } from '../../components/TechText/TechText';
import './Resume.css';

export function ResumePage({ track: initialTrack }) {
  const { navigate } = useRoute();
  const currentTrackId = initialTrack || defaultTrackId;
  const currentTrack = getTrackById(currentTrackId);
  const trackExperiences = getExperiencesForTrack(currentTrackId);

  const handleTrackChange = (newTrackId) => {
    navigate(`/resume/${newTrackId}`);
  };

  const handleMockPdfDownload = () => {
    alert(`Downloading ${currentTrack.label} specialized resume PDF (${currentTrack.pdfUrl})`);
  };

  return (
    <div className="resume-page-wrapper">
      {/* Top Hero */}
      <section className="resume-hero">
        <HorizonBloom compact={true} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">SPECIALIZATION // RESUME</span>
          <h1 className="resume-title">
            <TechText text="Resume" glitchOnMount={true} />
            <span className="text-gradient"> Branches</span>
          </h1>
          <p className="resume-subtitle">
            A dynamic branched curriculum vitae tailored to distinct engineering domains and research specializations.
          </p>

          {/* Branched Menu Track Switcher */}
          <BranchedMenu
            activeTrackId={currentTrackId}
            onSelectTrack={handleTrackChange}
          />
        </div>
      </section>

      {/* Main Track Details */}
      <div className="container">
        {/* Track Overview Card */}
        <section className="track-overview-card">
          <div className="track-overview-top">
            <div>
              <span className="section-label">{currentTrack.badge}</span>
              <h2 className="track-headline">{currentTrack.headline}</h2>
            </div>

            <div className="track-actions">
              <button onClick={handleMockPdfDownload} className="btn btn-primary btn-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download {currentTrack.label} PDF</span>
              </button>
            </div>
          </div>

          <p className="track-summary-text">{currentTrack.summary}</p>

          {/* Highlighted Skills */}
          <div style={{ marginTop: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
              SPECIALIZED CAPABILITIES:
            </div>
            <div className="skills-tags-cluster">
              {currentTrack.skillsHighlighted.map((skill) => (
                <span key={skill} className="highlighted-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Track Metrics */}
          {currentTrack.metrics && (
            <div className="track-metrics-bar">
              {currentTrack.metrics.map((m, idx) => (
                <div key={idx} className="track-metric-box">
                  <span className="track-metric-val">{m.value}</span>
                  <span className="track-metric-name">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Professional Experience</h2>
          {trackExperiences.length > 0 ? (
            trackExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))
          ) : (
            <p>No experiences tagged for this track.</p>
          )}
        </section>

        {/* Education Section */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Education & Academic Foundations</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-institution">{edu.institution}</div>
              <div className="education-honors">✦ {edu.honors}</div>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Certifications & Validations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {achievementsData.certifications.map((cert) => (
              <div key={cert.id} className="compact-item-card">
                <div className="compact-item-meta">
                  <span className="compact-item-issuer">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <h4 className="compact-item-title">{cert.title}</h4>
                <p className="compact-item-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
