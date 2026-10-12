import React, { useEffect, useRef, useState, useCallback } from 'react';
import './SlingTop.css';

const GAP = 4;
const SLOP = { fine: 4, coarse: 8 };
const FINGER_MAX = 3000;
const HAND_MAX = 6000;
const CANCEL = 0.5;
const POWER_CAP = 1.5;
const DOT_MS = 320;
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export function SlingTop({
  size = 50,
  strokeWidth = 2.5,
  armAt = 38,
  maxPull = 95,
  launchSpeed = 2200,
  flight = 115,
  particles = 14,
  spread = 55,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [held, setHeld] = useState(false);
  const [armed, setArmed] = useState(false);
  const [sent, setSent] = useState(false);

  // Geometry
  const R = maxPull;
  const ARM = Math.min(armAt, 0.8 * R);
  const wellR = size / 2 + GAP + strokeWidth;
  const padR = size / 2 - strokeWidth / 2;
  const arcR = wellR;
  const H = Math.round(wellR + strokeWidth + 4);
  const DOT = Math.max(5, Math.round(size / 8));
  const count = Math.max(0, Math.round(particles));

  // Refs
  const rootRef = useRef(null);
  const padRef = useRef(null);
  const moveRef = useRef(null);
  const fxRef = useRef(null);
  const bandRef = useRef(null);
  const hotRef = useRef(null);
  const arcRef = useRef(null);
  const iconRef = useRef(null);
  const dotRefs = useRef([]);

  const posRef = useRef({ x: 0, y: 0 });
  const dir = useRef({ ux: 0, uy: -1 });
  const grip = useRef(null);
  const power = useRef(0);
  const armedRef = useRef(false);
  const dotPending = useRef(false);
  const dotTimer = useRef(null);
  const springRaf = useRef(null);
  const skipClick = useRef(false);

  // Visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update visual state (rubber bands, progress arc, arrow icon aim)
  const setPadPos = useCallback((x, y) => {
    posRef.current = { x, y };
    if (moveRef.current) {
      moveRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    const band = bandRef.current;
    const hot = hotRef.current;
    const arc = arcRef.current;
    const fx = fxRef.current;
    if (!band || !hot || !arc || !fx) return;

    const { ux, uy } = dir.current;
    const proj = x * ux + y * uy;
    const p = clamp(proj / ARM, 0, 1);
    const dist = Math.hypot(x, y);

    let d = '';
    if (dist > 0.5) {
      const a = Math.atan2(y, x);
      const b = Math.acos(clamp((wellR - padR) / dist, -1, 1));
      d = [a + b, a - b]
        .map(t => {
          const cx = Math.cos(t);
          const cy = Math.sin(t);
          return `M${(wellR * cx).toFixed(2)},${(wellR * cy).toFixed(2)}L${(x + padR * cx).toFixed(2)},${(y + padR * cy).toFixed(2)}`;
        })
        .join('');
    }

    band.setAttribute('d', d);
    hot.setAttribute('d', d);
    hot.style.opacity = String(p);
    fx.style.opacity = String(clamp(proj / 6, 0, 1));
    arc.setAttribute('stroke-dasharray', `${p} ${1 - p}`);
    arc.setAttribute('stroke-dashoffset', String(p / 2));
    arc.style.opacity = p > 0.01 ? '1' : '0';

    // Aim the arrow icon in launch direction
    if (grip.current && iconRef.current) {
      const angle = (Math.atan2(-uy, -ux) * 180) / Math.PI + 90;
      iconRef.current.style.transition = 'none';
      iconRef.current.style.transform = `rotate(${angle * clamp(dist / 12, 0, 1)}deg)`;
    }

    arc.setAttribute('transform', `rotate(${(Math.atan2(-uy, -ux) * 180) / Math.PI})`);

    if (dotPending.current && proj <= size / 4) {
      launchDot();
    }
  }, [ARM, wellR, padR, size]);

  const relaxIcon = () => {
    if (iconRef.current) {
      iconRef.current.style.transition = 'transform 360ms cubic-bezier(0.23, 1, 0.32, 1)';
      iconRef.current.style.transform = 'rotate(0deg)';
    }
  };

  const launchDot = () => {
    dotPending.current = false;
    if (dotTimer.current) clearTimeout(dotTimer.current);
    relaxIcon();
    const { ux, uy } = dir.current;
    const base = Math.atan2(-uy, -ux);
    const cone = (spread * Math.PI) / 180;
    const push = 0.85 + 0.35 * power.current;

    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      const lead = i === 0;
      const angle = base + (lead ? 0 : (Math.random() + Math.random() - 1) * (cone / 2));
      const cx = Math.cos(angle);
      const cy = Math.sin(angle);
      const reach = (lead ? flight : flight * (0.3 + Math.random())) * push;
      const drift = lead ? 0 : (Math.random() - 0.5) * flight * 0.4;
      const scale = lead ? 1 : 0.3 + Math.random() * 0.6;
      const shrink = lead ? 0.6 : scale * (0.2 + Math.random() * 0.4);
      const duration = lead ? DOT_MS : DOT_MS * (0.7 + Math.random());
      const delay = lead ? 0 : Math.random() * 60;
      const to = wellR + reach;

      dot.animate(
        [
          { transform: `translate(${cx * wellR}px, ${cy * wellR}px) scale(${scale})` },
          { transform: `translate(${cx * to - cy * drift}px, ${cy * to + cx * drift}px) scale(${shrink})` }
        ],
        { duration, delay, easing: EASE_OUT, fill: 'none' }
      );
      dot.animate(
        [
          { opacity: 1, offset: 0 },
          { opacity: 1, offset: 0.55 },
          { opacity: 0, offset: 1 }
        ],
        { duration, delay, easing: 'linear', fill: 'none' }
      );
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Spring recoil physics
  const settle = (v0) => {
    if (springRaf.current) cancelAnimationFrame(springRaf.current);

    let x = posRef.current.x;
    let y = posRef.current.y;
    let vx = v0.x;
    let vy = v0.y;
    let lastTime = performance.now();

    const stiffness = 320;
    const damping = 22;
    const mass = 1;

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;

      const ax = (-stiffness * x - damping * vx) / mass;
      const ay = (-stiffness * y - damping * vy) / mass;

      vx += ax * dt;
      vy += ay * dt;
      x += vx * dt;
      y += vy * dt;

      setPadPos(x, y);

      if (Math.hypot(x, y) < 0.3 && Math.hypot(vx, vy) < 4) {
        setPadPos(0, 0);
        springRaf.current = null;
        return;
      }

      springRaf.current = requestAnimationFrame(step);
    };

    springRaf.current = requestAnimationFrame(step);
  };

  const onPointerDown = (e) => {
    if (e.button !== 0 || grip.current) return;
    const el = rootRef.current;
    if (!el) return;
    if (springRaf.current) cancelAnimationFrame(springRaf.current);

    const rect = el.getBoundingClientRect();
    const scale = rect.width / (el.offsetWidth || rect.width) || 1;
    const { x, y } = posRef.current;
    const dNow = Math.hypot(x, y);
    const dClamped = Math.min(dNow, 0.95 * R);
    const rawNow = dNow > 0.5 ? (R * dClamped) / (R - dClamped) : 0;

    grip.current = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      scale,
      moved: false,
      hist: [],
      rawOrigin: dNow > 0.5 ? { x: (rawNow * x) / dNow, y: (rawNow * y) / dNow } : { x: 0, y: 0 },
      slop: e.pointerType === 'touch' ? SLOP.coarse : SLOP.fine
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setHeld(true);
  };

  const onPointerMove = (e) => {
    const g = grip.current;
    if (!g || g.id !== e.pointerId) return;

    const dx = (e.clientX - g.startX) / g.scale;
    const dy = (e.clientY - g.startY) / g.scale;
    const rx = g.rawOrigin.x + dx;
    const ry = g.rawOrigin.y + dy;

    if (!g.moved && Math.hypot(dx, dy) > g.slop) {
      g.moved = true;
    }

    const raw = Math.hypot(rx, ry);
    if (raw < 0.01) return;

    const d = (R * raw) / (R + raw);
    const ux = rx / raw;
    const uy = ry / raw;
    dir.current = { ux, uy };

    setPadPos(d * ux, d * uy);

    const t = performance.now();
    g.hist.push({ x: d * ux, y: d * uy, t });
    while (g.hist.length > 4 || t - g.hist[0].t > 80) g.hist.shift();

    const isArmed = d >= ARM;
    if (isArmed !== armedRef.current) {
      armedRef.current = isArmed;
      setArmed(isArmed);
      if (isArmed && navigator.vibrate) {
        try { navigator.vibrate(12); } catch {}
      }
    }
  };

  const release = (pointerId, cancelled) => {
    const g = grip.current;
    if (!g || g.id !== pointerId) return;
    grip.current = null;
    skipClick.current = true;

    try {
      padRef.current?.releasePointerCapture(pointerId);
    } catch {}

    const { x, y } = posRef.current;
    const d = Math.hypot(x, y);
    const p = d / ARM;
    const { ux, uy } = dir.current;

    let vx = 0;
    let vy = 0;
    if (!cancelled && g.hist.length > 1) {
      const a = g.hist[0];
      const b = g.hist[g.hist.length - 1];
      const dt = b.t - a.t;
      if (dt > 0 && performance.now() - b.t < 50) {
        vx = ((b.x - a.x) / dt) * 1000;
        vy = ((b.y - a.y) / dt) * 1000;
      }
    }

    const fm = Math.hypot(vx, vy);
    if (fm > FINGER_MAX) {
      vx *= FINGER_MAX / fm;
      vy *= FINGER_MAX / fm;
    }

    if (!g.moved) {
      relaxIcon();
      if (!cancelled) {
        scrollToTop();
        settle({ x: 0, y: -450 });
      }
    } else {
      const fire = armedRef.current && !cancelled;
      const launch = fire ? launchSpeed * Math.min(p, POWER_CAP) : CANCEL * launchSpeed * Math.min(p, 1);
      let v0x = vx - ux * launch;
      let v0y = vy - uy * launch;
      const m = Math.hypot(v0x, v0y);
      if (m > HAND_MAX) {
        v0x *= HAND_MAX / m;
        v0y *= HAND_MAX / m;
      }

      if (!fire) relaxIcon();
      if (fire) {
        scrollToTop();
        setSent(true);
        setTimeout(() => setSent(false), 240);
        power.current = clamp((Math.min(p, POWER_CAP) - 1) / (POWER_CAP - 1), 0, 1);
        dotPending.current = true;
        dotTimer.current = setTimeout(launchDot, 120);
        if (navigator.vibrate) {
          try { navigator.vibrate(25); } catch {}
        }
      }
      settle({ x: v0x, y: v0y });
    }

    armedRef.current = false;
    setHeld(false);
    setArmed(false);
  };

  const onClick = () => {
    if (skipClick.current) {
      skipClick.current = false;
      return;
    }
    scrollToTop();
    settle({ x: 0, y: -450 });
  };

  useEffect(() => {
    return () => {
      if (springRaf.current) cancelAnimationFrame(springRaf.current);
      if (dotTimer.current) clearTimeout(dotTimer.current);
    };
  }, []);

  return (
    <aside
      ref={rootRef}
      className={`sling-scroll-top ${isVisible ? 'visible' : ''} ${className}`}
      data-armed={armed ? '' : undefined}
      data-held={held ? '' : undefined}
      data-sent={sent ? '' : undefined}
      style={{
        '--sl-size': `${size}px`,
        '--sl-svg': `${2 * H}px`,
        '--sl-stroke': `${strokeWidth}px`,
        '--sl-dot': `${DOT}px`
      }}
      aria-label="Scroll back to top"
    >
      <div className="sling-well-wrapper">
        <svg
          className="sling-svg"
          viewBox={`${-H} ${-H} ${2 * H} ${2 * H}`}
          aria-hidden="true"
        >
          <circle className="sling-well" r={wellR} />
          <g ref={fxRef} className="sling-tension" style={{ opacity: 0 }}>
            <path ref={bandRef} className="sling-band" />
            <path ref={hotRef} className="sling-band sling-band--hot" />
          </g>
          <circle
            ref={arcRef}
            className="sling-arc"
            r={arcR}
            pathLength="1"
            strokeDasharray="0 1"
            style={{ opacity: 0 }}
          />
        </svg>

        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            ref={el => {
              dotRefs.current[i] = el;
            }}
            className="sling-dot"
            aria-hidden="true"
          />
        ))}

        <div ref={moveRef} className="sling-move">
          <button
            ref={padRef}
            type="button"
            className="sling-pad"
            aria-label="Launch to top of page"
            title="Pull down to sling to top"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={e => release(e.pointerId, false)}
            onPointerCancel={e => release(e.pointerId, true)}
            onLostPointerCapture={e => release(e.pointerId, true)}
            onClick={onClick}
          >
            <span ref={iconRef} className="sling-icon">
              <svg
                width={Math.round(size * 0.42)}
                height={Math.round(size * 0.42)}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <span className="sling-label">TOP</span>
    </aside>
  );
}
