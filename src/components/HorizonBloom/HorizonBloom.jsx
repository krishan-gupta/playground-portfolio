import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import './HorizonBloom.css';

function hexToRgb(hex, fallback = { r: 240, g: 138, b: 60 }) {
  if (!hex) return fallback;
  let h = String(hex).replace('#', '');
  if (h.length === 3) h = h.replace(/./g, c => c + c);
  const n = parseInt(h.slice(0, 6), 16);
  if (Number.isNaN(n)) return fallback;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export const HorizonBloom = forwardRef(function HorizonBloom(
  {
    colors = ['#F59A48', '#5A2C00'],
    backgroundColor = '#0a0908',
    horizon = 0.78,
    curvature = 1.0,
    sunPosition = 0.1,
    sunrise = 0.65,
    flare = 0.6,
    rim = 1.0,
    atmosphere = 0.55,
    thickness = 0.8,
    stars = 0.5,
    airglow = 0.35,
    clouds = 0.35,
    bloom = 0.35,
    grain = 0.25,
    aurora = 0.0,
    autoAurora = false,
    speed = 1.0,
    drift = 0.5,
    parallax = 0.5,
    intro = true,
    paused = false,
    dpr: propDpr,
    interactive = true,
    compact = false,
    className = '',
    children
  },
  ref
) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animStateRef = useRef({
    introProgress: intro ? 0 : 1,
    time: 0,
    pointerX: 0,
    pointerY: 0,
    targetPointerX: 0,
    targetPointerY: 0
  });

  const replay = useCallback(() => {
    animStateRef.current.introProgress = 0;
  }, []);

  useImperativeHandle(ref, () => ({
    replay
  }), [replay]);

  const pausedRef = useRef(paused);
  const loopIdRef = useRef(null);
  const resumeLoopRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    pausedRef.current = paused;
    if (!paused && resumeLoopRef.current && !loopIdRef.current) {
      resumeLoopRef.current();
    }
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const effectiveDpr = propDpr || (window.innerWidth < 768 ? 1.5 : 2.0);

    let width = 0;
    let height = 0;

    // Initialize stars (preserve if already populated to prevent jump)
    const initStars = (w, h) => {
      if (starsRef.current.length > 0) return;
      const count = Math.floor(180 * stars);
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({
          x: Math.random() * w,
          y: Math.random() * (h * horizon), // stars only above planet
          size: Math.random() * 1.6 + 0.3,
          baseAlpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
      starsRef.current = list;
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * effectiveDpr);
      canvas.height = Math.floor(height * effectiveDpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(effectiveDpr, 0, 0, effectiveDpr, 0, 0);
      initStars(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!interactive || prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / height - 0.5) * 2;
      animStateRef.current.targetPointerX = x;
      animStateRef.current.targetPointerY = y;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let lastTime = performance.now();

    const render = (now) => {
      if (pausedRef.current || prefersReducedMotion) {
        loopIdRef.current = null;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      animStateRef.current.time += dt * speed;

      const state = animStateRef.current;

      // Smooth pointer parallax
      state.pointerX += (state.targetPointerX - state.pointerX) * 0.05;
      state.pointerY += (state.targetPointerY - state.pointerY) * 0.05;

      // Intro sunrise transition
      if (intro && state.introProgress < 1.0) {
        state.introProgress = Math.min(state.introProgress + dt * 0.7, 1.0);
      }

      const currentSunrise = intro ? (0.2 + 0.8 * state.introProgress) * sunrise : sunrise;

      // Clear with base sky color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // 1. Render Starfield
      const starList = starsRef.current;
      if (stars > 0 && starList) {
        ctx.save();
        for (let i = 0; i < starList.length; i++) {
          const star = starList[i];
          const twinkle = Math.sin(state.time * star.twinkleSpeed * 60 + star.phase);
          const alpha = Math.max(0.05, Math.min(1.0, star.baseAlpha + twinkle * 0.25));

          ctx.beginPath();
          ctx.arc(star.x + state.pointerX * parallax * 4, star.y + state.pointerY * parallax * 4, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 239, 232, ${alpha * 0.85})`;
          ctx.fill();
        }
        ctx.restore();
      }

      // Parallax offsets
      const offsetX = state.pointerX * parallax * 25;
      const offsetY = state.pointerY * parallax * 15;

      // Planet geometry
      // Horizon position (default 72% down the screen, compact is higher)
      const horizonRatio = compact ? 0.6 : horizon;
      const planetY = height * horizonRatio + offsetY;
      const planetRadius = width * (1.1 / curvature);
      const planetCenterX = width * 0.5 + offsetX;
      const planetCenterY = planetY + planetRadius;

      const c0 = hexToRgb(colors[0], { r: 240, g: 138, b: 60 });
      const c1 = hexToRgb(colors[1], { r: 74, g: 36, b: 0 });

      // Sun coordinate on the horizon arc
      // sunPosition: 0 is center, positive is right of center (0.1 is just right of center)
      const sunAngleOffset = sunPosition * 0.55;
      const sunX = planetCenterX + Math.sin(sunAngleOffset) * planetRadius;
      const sunY = planetCenterY - Math.cos(sunAngleOffset) * planetRadius;

      // 2. Airglow & upper atmosphere diffusion (subtle, delicate dark-amber halo)
      if (atmosphere > 0) {
        ctx.save();
        const atmoRadius = width * (compact ? 0.38 : 0.52);
        const atmoGrad = ctx.createRadialGradient(
          sunX,
          sunY + 10,
          5,
          sunX,
          sunY,
          atmoRadius
        );
        atmoGrad.addColorStop(0, `rgba(${c0.r}, ${c0.g}, ${c0.b}, ${0.32 * currentSunrise * atmosphere})`);
        atmoGrad.addColorStop(0.35, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${0.16 * currentSunrise * atmosphere})`);
        atmoGrad.addColorStop(0.7, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${0.04 * currentSunrise * atmosphere})`);
        atmoGrad.addColorStop(1, 'rgba(10, 9, 8, 0)');

        ctx.fillStyle = atmoGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // 3. Clouds & subtle atmospheric ripples
      if (clouds > 0) {
        ctx.save();
        ctx.globalAlpha = 0.08 * clouds * currentSunrise;
        const driftX = (state.time * 6 * drift) % width;
        const cloudGrad = ctx.createLinearGradient(0, planetY - 60, 0, planetY + 15);
        cloudGrad.addColorStop(0, 'rgba(255, 179, 71, 0)');
        cloudGrad.addColorStop(0.6, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0.25)`);
        cloudGrad.addColorStop(1, 'rgba(10, 9, 8, 0)');
        ctx.fillStyle = cloudGrad;
        ctx.fillRect(0, planetY - 70, width, 90);
        ctx.restore();
      }

      // 4. Sun Flare & Corona burst where light breaks over the horizon (subtle small halo)
      if (flare > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // Broad sun flare glow (small, subtle halo)
        const flareRadius = width * (compact ? 0.15 : 0.22) * flare * currentSunrise;
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, flareRadius);
        sunGlow.addColorStop(0, 'rgba(255, 252, 245, 0.95)');
        sunGlow.addColorStop(0.12, `rgba(${c0.r}, ${c0.g}, ${c0.b}, ${0.65 * currentSunrise})`);
        sunGlow.addColorStop(0.45, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${0.22 * currentSunrise})`);
        sunGlow.addColorStop(1, 'rgba(10, 9, 8, 0)');

        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, flareRadius, 0, Math.PI * 2);
        ctx.fill();

        // Anamorphic horizontal lens flare streak (delicate, crisp)
        const streakWidth = width * 0.32 * flare * currentSunrise;
        const streakHeight = 2.5 * thickness;
        const streakGrad = ctx.createLinearGradient(sunX - streakWidth * 0.5, sunY, sunX + streakWidth * 0.5, sunY);
        streakGrad.addColorStop(0, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0)`);
        streakGrad.addColorStop(0.4, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0.35)`);
        streakGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.85)');
        streakGrad.addColorStop(0.6, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0.35)`);
        streakGrad.addColorStop(1, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0)`);

        ctx.fillStyle = streakGrad;
        ctx.fillRect(sunX - streakWidth * 0.5, sunY - streakHeight * 0.5, streakWidth, streakHeight);
        ctx.restore();
      }

      // 6. The Curved Planet Body
      // Fill the entire planet below the arc with near-black occluding body
      ctx.save();
      ctx.beginPath();
      ctx.arc(planetCenterX, planetCenterY, planetRadius, 0, Math.PI * 2);
      // Create subtle dark gradient on the dark planet face
      const planetFaceGrad = ctx.createRadialGradient(
        sunX,
        sunY,
        10,
        planetCenterX,
        planetCenterY,
        planetRadius
      );
      planetFaceGrad.addColorStop(0, 'rgba(20, 16, 12, 0.98)');
      planetFaceGrad.addColorStop(0.15, 'rgba(12, 10, 8, 0.99)');
      planetFaceGrad.addColorStop(0.5, backgroundColor);
      planetFaceGrad.addColorStop(1, backgroundColor);

      ctx.fillStyle = planetFaceGrad;
      ctx.fill();
      ctx.restore();

      // 7. Razor-thin intense bright rim light along that edge
      if (rim > 0) {
        ctx.save();
        // Layer A: Soft outer rim glow
        ctx.beginPath();
        ctx.arc(planetCenterX, planetCenterY, planetRadius, Math.PI * 1.15, Math.PI * 1.85);
        ctx.strokeStyle = colors[0] || '#F08A3C';
        ctx.lineWidth = 2.4 * thickness;
        ctx.shadowColor = colors[0] || '#F08A3C';
        ctx.shadowBlur = 12 * bloom * currentSunrise;
        ctx.globalAlpha = 0.85 * rim * currentSunrise;
        ctx.stroke();

        // Layer B: Intense razor-thin white-gold core line
        ctx.beginPath();
        ctx.arc(planetCenterX, planetCenterY, planetRadius, Math.PI * 1.15, Math.PI * 1.85);
        ctx.strokeStyle = 'rgba(255, 250, 240, 0.95)';
        ctx.lineWidth = 1.0 * thickness;
        ctx.shadowColor = colors[0] || '#F59A48';
        ctx.shadowBlur = 8 * bloom * currentSunrise;
        ctx.globalAlpha = 0.95 * rim * currentSunrise;
        ctx.stroke();

        // Layer C: Visible sun glow burst breaking right over the rim
        if (flare > 0) {
          const coreRadius = Math.max(16, width * 0.055) * flare * currentSunrise;
          const sunPointGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, coreRadius);
          sunPointGlow.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
          sunPointGlow.addColorStop(0.18, 'rgba(255, 240, 200, 0.92)');
          sunPointGlow.addColorStop(0.45, `rgba(${c0.r}, ${c0.g}, ${c0.b}, ${0.65 * currentSunrise})`);
          sunPointGlow.addColorStop(0.75, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${0.25 * currentSunrise})`);
          sunPointGlow.addColorStop(1, 'rgba(10, 9, 8, 0)');

          ctx.fillStyle = sunPointGlow;
          ctx.beginPath();
          ctx.arc(sunX, sunY, coreRadius, 0, Math.PI * 2);
          ctx.fill();

          // Anamorphic horizontal lens streak right at the sun break point
          const streakW = width * 0.42 * flare * currentSunrise;
          const streakH = 3 * thickness;
          const streakGrad = ctx.createLinearGradient(sunX - streakW * 0.5, sunY, sunX + streakW * 0.5, sunY);
          streakGrad.addColorStop(0, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0)`);
          streakGrad.addColorStop(0.35, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0.5)`);
          streakGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
          streakGrad.addColorStop(0.65, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0.5)`);
          streakGrad.addColorStop(1, `rgba(${c0.r}, ${c0.g}, ${c0.b}, 0)`);

          ctx.fillStyle = streakGrad;
          ctx.fillRect(sunX - streakW * 0.5, sunY - streakH * 0.5, streakW, streakH);
        }
        ctx.restore();
      }

      // 8. Subtle procedural film grain
      if (grain > 0) {
        // Light canvas noise pattern
        ctx.save();
        ctx.globalAlpha = 0.03 * grain;
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 40; i++) {
          const gx = Math.random() * width;
          const gy = Math.random() * height;
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
        ctx.restore();
      }

      if (!pausedRef.current && !prefersReducedMotion) {
        loopIdRef.current = requestAnimationFrame(render);
      } else {
        loopIdRef.current = null;
      }
    };

    resumeLoopRef.current = () => {
      if (loopIdRef.current) return;
      lastTime = performance.now();
      loopIdRef.current = requestAnimationFrame(render);
    };

    if (!pausedRef.current && !prefersReducedMotion) {
      loopIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (loopIdRef.current) {
        cancelAnimationFrame(loopIdRef.current);
        loopIdRef.current = null;
      }
    };
  }, [
    colors,
    backgroundColor,
    horizon,
    curvature,
    sunPosition,
    sunrise,
    flare,
    rim,
    atmosphere,
    thickness,
    stars,
    airglow,
    clouds,
    bloom,
    grain,
    aurora,
    autoAurora,
    speed,
    drift,
    parallax,
    intro,
    propDpr,
    interactive,
    compact
  ]);

  return (
    <div
      ref={containerRef}
      className={`horizon-bloom-container ${compact ? 'horizon-bloom-compact' : ''} ${className}`}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="horizon-bloom-canvas" />

      {/* Children elements (e.g. hero content) laid over the scene */}
      {children && <div className="horizon-bloom-children">{children}</div>}

      {/* Seamless gradient blend into following section */}
      <div className="horizon-bloom-bottom-blend" aria-hidden="true" />
    </div>
  );
});
