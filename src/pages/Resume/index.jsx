import React, { useEffect } from 'react';
import { useRoute } from '../../router';
import { getTrackById, defaultTrackId } from '../../data/tracks';
import { getExperiencesForTrack, education } from '../../data/resume';
import { certifications, isroParticipation } from '../../data/certifications';
import { CertTimeline } from './CertTimeline';
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      if (hash.startsWith('#cert-') || hash.startsWith('#isro-')) {
        const certId = hash.replace('#cert-', '').replace('#', '');
        const targetCert = certifications.find((c) => c.id === certId);
        if (targetCert && !targetCert.tracks.includes(currentTrackId)) {
          navigate(`/resume/${targetCert.tracks[0]}${hash}`, { replace: true });
          return;
        }
        setTimeout(() => {
          const el = document.getElementById(`cert-${certId}`) || document.getElementById(certId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 250);
      }
    }
  }, [currentTrackId, navigate]);

  const handleTrackChange = (newTrackId) => {
    navigate(`/resume/${newTrackId}`);
  };

  const handlePdfDownload = () => {
    alert(`Resume PDF for track "${currentTrack.label}" is currently TBD. Real PDF will be available soon.`);
  };

  return (
    <div className="resume-page-wrapper">
      {/* Top Header with Calmer Horizon Bloom */}
      <section className="resume-hero">
        <HorizonBloom
          compact={true}
          interactive={false}
          intro={false}
          sunrise={0.7}
          flare={0.4}
          stars={0.3}
          atmosphere={0.6}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">SPECIALIZATION // RESUME</span>
          <h1 className="sr-only">Resume</h1>
          <div className="page-title-tech" aria-hidden="true">
            <TechText
              text="Resume"
              fontFamily="Outfit, sans-serif"
              fontWeight={800}
              fontSize={96}
              letterSpacing={-0.04}
              color="#f5efe8"
              accentColor="#ff7a1a"
              reveal="letter"
              specks={8}
              labels={false}
              sweep={false}
            />
          </div>
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
              <button onClick={handlePdfDownload} className="btn btn-primary btn-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download {currentTrack.label} PDF (TBD)</span>
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
          <h2 className="resume-sec-title">Experience & Leadership</h2>
          {trackExperiences.length > 0 ? (
            trackExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No experiences tagged for this track.</p>
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

        {/* Hackathons & Space Competitions */}
        <section id="hackathons-competitions" className="resume-section">
          <h2 className="resume-sec-title">Hackathons & Space Competitions</h2>
          <div id="cert-isro-hackathon-2026" className="isro-showcase-card">
            <div className="isro-card-inner">
              <div className="isro-media">
                <a
                  href={isroParticipation.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="isro-img-btn"
                  title="View ISRO Certificate"
                >
                  <img src={isroParticipation.image} alt={isroParticipation.title} loading="lazy" />
                </a>
              </div>
              <div className="isro-body">
                <div className="isro-meta">
                  <span className="isro-issuer">{isroParticipation.issuer}</span>
                  <span className="isro-chip-type">National Space Hackathon Participation</span>
                  <span className="cert-verified">Verified</span>
                </div>
                <h3 className="isro-title">{isroParticipation.title}</h3>
                <p className="isro-date">{isroParticipation.date}</p>
                <p className="isro-desc">{isroParticipation.description}</p>
                <ul className="cert-skills">
                  {isroParticipation.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="isro-actions">
                  {isroParticipation.credentialUrl && isroParticipation.credentialUrl.startsWith('http') && (
                    <a
                      className="cert-btn cert-btn--primary"
                      href={isroParticipation.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Participation &#8599;
                    </a>
                  )}
                  {((isroParticipation.certificateUrl && isroParticipation.certificateUrl.startsWith('http')) || isroParticipation.image) && (
                    <a
                      className="cert-btn"
                      href={isroParticipation.certificateUrl || isroParticipation.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="resume-section">
          <h2 className="resume-sec-title">Certifications & Validations</h2>
          <CertTimeline certs={certifications} track={currentTrackId} />
        </section>
      </div>
    </div>
  );
}
