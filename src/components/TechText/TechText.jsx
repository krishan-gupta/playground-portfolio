import React, { useState, useRef, useEffect } from 'react';
import './TechText.css';

function TechLetter({ char, index, isTitle = false }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, startOffsetX: 0, startOffsetY: 0 });
  const springFrameRef = useRef(null);

  const handlePointerDown = (e) => {
    // Stop propagation so canvas click / aurora is NOT triggered
    e.stopPropagation();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startOffsetX: offset.x,
      startOffsetY: offset.y
    };
    if (springFrameRef.current) cancelAnimationFrame(springFrameRef.current);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setOffset({
      x: dragStartRef.current.startOffsetX + dx,
      y: dragStartRef.current.startOffsetY + dy
    });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    setIsDragging(false);

    // Spring physics back to (0, 0)
    let currentX = offset.x;
    let currentY = offset.y;
    let vx = 0;
    let vy = 0;
    const stiffness = 0.22;
    const damping = 0.72;

    const animateSpring = () => {
      const ax = -stiffness * currentX;
      const ay = -stiffness * currentY;
      vx = (vx + ax) * damping;
      vy = (vy + ay) * damping;
      currentX += vx;
      currentY += vy;

      if (Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1 && Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) {
        setOffset({ x: 0, y: 0 });
      } else {
        setOffset({ x: currentX, y: currentY });
        springFrameRef.current = requestAnimationFrame(animateSpring);
      }
    };

    springFrameRef.current = requestAnimationFrame(animateSpring);
  };

  if (char === ' ') {
    return <span className="tech-space">&nbsp;</span>;
  }

  const isShifted = offset.x !== 0 || offset.y !== 0;

  return (
    <span
      className={`tech-letter-wrap ${isHovered ? 'tech-hovered' : ''} ${isDragging ? 'tech-dragging' : ''} ${isShifted ? 'tech-shifted' : ''}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        '--delay': `${index * 40}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      title="Drag letter"
    >
      <span className="tech-char-face">{char}</span>

      {/* Dashed vector outline active on hover or touch */}
      <span className="tech-char-outline" aria-hidden="true">
        {char}
      </span>
    </span>
  );
}

export function TechText({ text, as: Tag = 'span', className = '', isHeroTitle = false }) {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (isReduced) {
    return <Tag className={`tech-text-static ${className}`}>{text}</Tag>;
  }

  const words = text.split(' ');

  return (
    <span className={`tech-text-container ${isHeroTitle ? 'tech-text-hero' : ''} ${className}`}>
      {/* Visually hidden text for SEO & screen readers */}
      <span className="sr-only">{text}</span>

      <span className="tech-text-visual" aria-hidden="true">
        {words.map((word, wIdx) => (
          <span key={wIdx} className="tech-word">
            {word.split('').map((char, cIdx) => (
              <TechLetter
                key={cIdx}
                char={char}
                index={wIdx * 10 + cIdx}
                isTitle={isHeroTitle}
              />
            ))}
            {wIdx < words.length - 1 && <span className="tech-space">&nbsp;</span>}
          </span>
        ))}
      </span>
    </span>
  );
}
