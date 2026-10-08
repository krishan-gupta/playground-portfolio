import React, { useEffect, useRef } from 'react';
import './HorizonBloom.css';

export function HorizonBloom({ compact = false, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];
    const particleCount = compact ? 25 : 60;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * (window.devicePixelRatio || 1);
      height = canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const displayWidth = width / (window.devicePixelRatio || 1);
      const displayHeight = height / (window.devicePixelRatio || 1);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * displayWidth,
          y: Math.random() * displayHeight,
          size: Math.random() * 1.8 + 0.4,
          speedY: -(Math.random() * 0.35 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.7 + 0.1,
          fading: Math.random() > 0.5 ? 1 : -1,
          fadeSpeed: Math.random() * 0.008 + 0.003
        });
      }
    };

    let time = 0;

    const render = () => {
      time += 0.015;
      const displayWidth = width / (window.devicePixelRatio || 1);
      const displayHeight = height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Arc parameters
      const arcCenterY = displayHeight * (compact ? 1.45 : 1.25);
      const arcRadius = displayWidth * (compact ? 0.95 : 0.75);
      const arcCenterX = displayWidth * 0.5;

      // 1. Broad atmospheric ambient glow
      const ambientGlow = ctx.createRadialGradient(
        arcCenterX,
        displayHeight,
        10,
        arcCenterX,
        displayHeight,
        displayWidth * 0.65
      );
      ambientGlow.addColorStop(0, 'rgba(255, 122, 26, 0.22)');
      ambientGlow.addColorStop(0.35, 'rgba(255, 179, 71, 0.08)');
      ambientGlow.addColorStop(0.7, 'rgba(255, 122, 26, 0.02)');
      ambientGlow.addColorStop(1, 'rgba(10, 9, 8, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // 2. Horizon arc curvature
      ctx.save();
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI, 0, false);
      ctx.strokeStyle = 'rgba(255, 122, 26, 0.4)';
      ctx.lineWidth = compact ? 2 : 3;
      ctx.shadowColor = 'rgba(255, 150, 40, 0.85)';
      ctx.shadowBlur = compact ? 22 : 36;
      ctx.stroke();

      // Second core line for intense white-hot center glow
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI, 0, false);
      ctx.strokeStyle = 'rgba(255, 230, 190, 0.5)';
      ctx.lineWidth = 1;
      ctx.shadowColor = 'rgba(255, 210, 140, 1)';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // 3. Floating ambient micro-particles (stardust / embers)
      if (!isReducedMotion) {
        ctx.save();
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(time + i) * 0.15;
          p.alpha += p.fading * p.fadeSpeed;

          if (p.alpha <= 0.05) {
            p.fading = 1;
          } else if (p.alpha >= 0.85) {
            p.fading = -1;
          }

          if (p.y < 0) {
            p.y = displayHeight;
            p.x = Math.random() * displayWidth;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 179, 71, ${p.alpha})`;
          ctx.shadowColor = 'rgba(255, 122, 26, 0.6)';
          ctx.shadowBlur = 6;
          ctx.fill();
        }
        ctx.restore();
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [compact]);

  return (
    <div className={`horizon-bloom-wrapper ${compact ? 'horizon-compact' : ''} ${className}`}>
      <canvas ref={canvasRef} className="horizon-bloom-canvas" />
      <div className="horizon-bloom-overlay" />
    </div>
  );
}
