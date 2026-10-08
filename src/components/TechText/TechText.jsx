import React, { useState, useEffect, useRef } from 'react';
import './TechText.css';

const GLYPHS = '0123456789ABCDEF!<>_{}[]+=*^~%#';

export function TechText({
  text,
  tag: Tag = 'span',
  speed = 35,
  triggerOnHover = true,
  className = '',
  glitchOnMount = true
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const intervalRef = useRef(null);

  const startDecode = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      return;
    }

    setIsDecoding(true);
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
      });

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setIsDecoding(false);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    if (glitchOnMount) {
      startDecode();
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <Tag
      className={`tech-text ${isDecoding ? 'tech-text-decoding' : ''} ${className}`}
      onMouseEnter={triggerOnHover ? startDecode : undefined}
      title={text}
    >
      {displayText}
    </Tag>
  );
}
