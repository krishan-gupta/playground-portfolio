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
        <h1 className="sr-only">Signal Lost</h1>
        <div style={{ position: 'relative', width: 'min(90vw, 480px)', height: '110px', margin: '0.5rem auto 1.5rem' }} aria-hidden="true">
          <TechText
            text="Signal Lost"
            fontFamily="Outfit, sans-serif"
            fontWeight={800}
            fontSize={76}
            color="#f5efe8"
            accentColor="#ff7a1a"
            specks={8}
            labels={false}
            sweep={false}
          />
        </div>
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
