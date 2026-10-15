import React, { useRef, useState, useEffect } from 'react';
import './CertTimeline.css';

const sortKey = (c) => (c.date ? new Date(c.date).getTime() || 0 : -1);

function CertCard({ cert, index, onOpenImage }) {
  const [copied, setCopied] = useState(false);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <li className="cert" id={`cert-${cert.id}`} style={{ '--cert-idx': index }}>
      <span className="cert-node" aria-hidden="true" />
      <article className="cert-card" onPointerMove={onMove}>
        <div className="cert-media">
          {cert.image ? (
            <button
              type="button"
              className="cert-img-btn"
              onClick={() => onOpenImage(cert)}
              aria-label={`View ${cert.title} certificate full size`}
            >
              <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
            </button>
          ) : (
            <div className="cert-initial" aria-hidden="true">
              {cert.issuer ? cert.issuer.trim()[0] : 'C'}
            </div>
          )}
        </div>

        <div className="cert-body">
          <div className="cert-meta">
            {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
            {cert.type && <span className="cert-chip-type">{cert.type}</span>}
            {cert.credentialUrl && <span className="cert-verified">Verified</span>}
          </div>

          {cert.title && <h3 className="cert-title">{cert.title}</h3>}
          {cert.date && (
            <p className="cert-date">
              {cert.date}
              {cert.expires && <span className="cert-expires"> · Valid until {cert.expires}</span>}
            </p>
          )}
          {cert.description && <p className="cert-desc">{cert.description}</p>}

          {cert.skills?.length > 0 && (
            <ul className="cert-skills">
              {cert.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}

          {cert.credentialId && (
            <p className="cert-id">
              <span>ID</span> <code>{cert.credentialId}</code>
              <button type="button" onClick={copyId}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </p>
          )}

          {(cert.credentialUrl || cert.certificateUrl || cert.image) && (
            <div className="cert-actions">
              {cert.credentialUrl && (
                <a
                  className="cert-btn cert-btn--primary"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify credential &#8599;
                </a>
              )}
              {(cert.certificateUrl || cert.image) && (
                <a
                  className="cert-btn"
                  href={cert.certificateUrl || cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View certificate
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </li>
  );
}

export function CertTimeline({ certs, track }) {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  const list = (certs || [])
    .filter((c) => !track || c.tracks?.includes(track))
    .sort((a, b) => sortKey(b) - sortKey(a));

  const open = (cert) => {
    setActive(cert);
    if (dialogRef.current) {
      if (typeof dialogRef.current.showModal === 'function') {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.setAttribute('open', '');
      }
    }
  };

  const close = () => {
    if (dialogRef.current) {
      if (typeof dialogRef.current.close === 'function') {
        dialogRef.current.close();
      } else {
        dialogRef.current.removeAttribute('open');
      }
    }
    setActive(null);
  };

  // Keyboard escape listener fallback
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && active) {
        close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <ol className="cert-timeline">
        {list.map((c, idx) => (
          <CertCard key={c.id} cert={c} index={idx} onOpenImage={open} />
        ))}
      </ol>

      <dialog
        ref={dialogRef}
        className="cert-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onClose={() => setActive(null)}
      >
        {active && (
          <>
            <img src={active.image} alt={`${active.title} certificate`} />
            <button
              type="button"
              className="cert-dialog-close"
              onClick={close}
              aria-label="Close"
            >
              &times;
            </button>
          </>
        )}
      </dialog>
    </>
  );
}

export default CertTimeline;
