import React from 'react';
import { Link } from '../../router';
import { TechText } from '../../components/TechText/TechText';

export function NotFoundPage() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '560px' }}>
        <span className="section-label" style={{ color: 'var(--accent)' }}>
          ERROR // 404
        </span>
        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', margin: '1rem 0' }}>
          <TechText text="Signal Lost" glitchOnMount={true} />
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
          The requested coordinate does not exist on this horizon. The requested page or route may have decayed or moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
}
