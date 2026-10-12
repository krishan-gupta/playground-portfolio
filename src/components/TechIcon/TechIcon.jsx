import React from 'react';

export function TechIcon({ name, size = 18, className = '' }) {
  const norm = String(name || '').toLowerCase().trim();

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M11.91 2c-5.26 0-4.94 2.28-4.94 2.28l.01 2.37h5.02v.71H4.95S2 7.02 2 12.3c0 5.27 2.57 5.1 2.57 5.1h1.53v-2.15s-.08-2.57 2.54-2.57h5v-.74s.37-2.61-2.66-2.61H6.04s-2.48.06-2.48-2.41c0-2.48 2.5-2.52 2.5-2.52h5.85s2.34-.05 2.34 2.45v1.27h-2.34v.74h4.72S21 8.95 21 3.97C21-.99 18.25.04 18.25.04L16.7 2h-4.79zm-2.09 1.48a.74.74 0 1 1 0 1.47.74.74 0 0 1 0-1.47z" fill="#387EB8" />
        <path d="M12.09 22c5.26 0 4.94-2.28 4.94-2.28l-.01-2.37h-5.02v-.71h7.05S22 16.98 22 11.7c0-5.27-2.57-5.1-2.57-5.1h-1.53v2.15s.08 2.57-2.54 2.57h-5v.74s-.37 2.61 2.66 2.61h4.94s2.48-.06 2.48 2.41c0 2.48-2.5 2.52-2.5 2.52h-5.85s-2.34.05-2.34-2.45v-1.27h2.34v-.74H7.28S3 15.05 3 20.03C3 24.99 5.75 23.96 5.75 23.96L7.3 22h4.79zm2.09-1.48a.74.74 0 1 1 0-1.47.74.74 0 0 1 0 1.47z" fill="#FFE873" />
      </svg>
    );
  }

  // C++ / C
  if (norm.includes('c++') || norm.includes('c / c++') || norm.includes('c/c++')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L2 7.5v11L12 24l10-5.5v-11L12 2z" fill="#00599C" />
        <path d="M12 4l7.8 4.3v7.4L12 20.2l-7.8-4.5V8.3L12 4z" fill="#004482" />
        <path d="M11.5 9.2a3.8 3.8 0 0 0-2.8-1.2C6.7 8 5.2 9.7 5.2 12s1.5 4 3.5 4c1.1 0 2.1-.5 2.8-1.3l1.1 1.2a5.3 5.3 0 0 1-3.9 1.7C5.7 17.6 3.5 15.2 3.5 12s2.2-5.6 5.2-5.6c1.6 0 3 .6 3.9 1.7l-1.1 1.1zm3.8 2.1v-1.8h1.2v1.8h1.8v1.2h-1.8v1.8h-1.2v-1.8h-1.8v-1.2h1.8zm4.3 0v-1.8h1.2v1.8H22v1.2h-1.2v1.8h-1.2v-1.8h-1.8v-1.2h1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'c') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L2 7.5v11L12 24l10-5.5v-11L12 2z" fill="#659AD2" />
        <path d="M12 4l7.8 4.3v7.4L12 20.2l-7.8-4.5V8.3L12 4z" fill="#00599C" />
        <path d="M15 8.8a4.5 4.5 0 0 0-3.2-1.3C8.8 7.5 6.8 9.5 6.8 12s2 4.5 5 4.5c1.4 0 2.6-.5 3.3-1.4l1.3 1.3A6.3 6.3 0 0 1 11.8 18C7.8 18 4.8 15.2 4.8 12s3-6 7-6c1.8 0 3.3.6 4.4 1.7L15 8.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Java
  if (norm.includes('java') && !norm.includes('script')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M9.1 17.7s-.9.1-1.3.3c-1.3.5.8.9 1.4.9 1.8.1 3.5-.2 5.3-.5.4-.1.9-.2 1.3-.3-.8-.3-2.1-.5-3.2-.5-1.2 0-2.3.1-3.5.1zm-.7 2.1c-1.1.4.6.8 1.2.9 2.1.2 4.2-.1 6.2-.5.5-.1 1.1-.3 1.5-.4-1-.3-2.6-.4-3.8-.4-1.7 0-3.5.2-5.1.4zm5.8-9.4c1.1 1.1.2 2.3.2 2.3s2.4-1.2 1.3-2.8c-1.1-1.6-2.1-2.3-4.2-3.4 0 0 1.6 1.4 2.7 3.9zm-2.8-5.7s2.5 1.7 1.4 4c-.9 1.8-2.6 2.7-2.6 2.7s1.7-.8 2.2-2.3c.7-2-.8-3.4-1-4.4zm3.9 9.9c.7-.6 1.4-1.3 1.2-2.1-.2-.6-.9-.9-1.3-.9.3.4.4.9.2 1.3-.2.5-.9.9-1.6 1.2 0 0 .9.1 1.5.5z" fill="#E76F00" />
        <path d="M12 21.8c3.8 0 6.8-.7 6.8-1.5 0-.4-.7-.7-1.8-.9-.6.2-1.3.4-2 .5-2.2.4-4.5.6-6.8.4-.7 0-1.5-.1-2.2-.2-1.3.3-2.2.7-2.2 1.1 0 .9 3.7 1.6 8.2 1.6z" fill="#5382A1" />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7.5 18.2c.9.5 2 .8 3.1.8 1.8 0 2.8-.8 2.8-2.2v-7h-2.1v6.9c0 .7-.4 1-1.1 1-.5 0-1.1-.2-1.5-.5l-1.2 1zm7.4-.1c1.2.6 2.5 1 3.9 1 2.3 0 3.7-1.1 3.7-2.8 0-1.6-1-2.4-2.8-3.1-1.3-.5-1.9-.9-1.9-1.5 0-.5.4-.9 1.4-.9.9 0 1.8.3 2.5.7l.9-1.3c-.9-.6-2-1-3.4-1-2.1 0-3.5 1.2-3.5 2.7 0 1.5 1 2.4 2.7 3.1 1.4.6 2 .9 2 1.6 0 .6-.6 1-1.6 1-1.1 0-2.2-.4-3-1l-.9 1.3z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M5.5 11.2h5.6V9H3v2.2h2.5v7.6H7.9V11.2h-.4v-.4h-2zm9.4 6.9c1.2.6 2.5 1 3.9 1 2.3 0 3.7-1.1 3.7-2.8 0-1.6-1-2.4-2.8-3.1-1.3-.5-1.9-.9-1.9-1.5 0-.5.4-.9 1.4-.9.9 0 1.8.3 2.5.7l.9-1.3c-.9-.6-2-1-3.4-1-2.1 0-3.5 1.2-3.5 2.7 0 1.5 1 2.4 2.7 3.1 1.4.6 2 .9 2 1.6 0 .6-.6 1-1.6 1-1.1 0-2.2-.4-3-1l-.9 1.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React / React Native
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="12" rx="4.2" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4.2" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4.2" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // HTML / HTML5
  if (norm.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3z" fill="#E34F26" />
        <path d="M12 21.2l6.1-2.3L19.4 3.7H12v17.5z" fill="#EF652A" />
        <path d="M12 7.7h4.4l-.3 3.6H12v3h3.8l-.4 4.5-3.4 1v-3.1l1.8-.5.2-1.9H12V7.7zM7.6 7.7H12v3H8l.4 4.5 3.6 1v3.1l-5.6-1.6-.4-7H7.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // CSS / CSS3
  if (norm.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3z" fill="#1572B6" />
        <path d="M12 21.2l6.1-2.3L19.4 3.7H12v17.5z" fill="#33A9DC" />
        <path d="M12 7.7h4.4l-.3 3.6H12v3h3.8l-.4 4.5-3.4 1v-3.1l1.8-.5.2-1.9H12V7.7zM7.6 7.7H12v3H8l.4 4.5 3.6 1v3.1l-5.6-1.6-.4-7H7.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.4-1.4 3-1.8 4.8-1.2 1 .3 1.8 1.1 2.6 1.9C14.1 13.4 15.8 15 19.5 15c3.6 0 5.8-1.8 6.6-5.4-1.4 1.4-3 1.8-4.8 1.2-1-.3-1.8-1.1-2.6-1.9C17.4 7.6 15.7 6 12 6zM4.5 15C.9 15-1.3 16.8-2.1 20.4c1.4-1.4 3-1.8 4.8-1.2 1 .3 1.8 1.1 2.6 1.9C6.6 22.4 8.3 24 12 24c3.6 0 5.8-1.8 6.6-5.4-1.4 1.4-3 1.8-4.8 1.2-1-.3-1.8-1.1-2.6-1.9-1.3-1.3-3-2.9-6.7-2.9z" fill="#06B6D4" />
      </svg>
    );
  }

  // Vite
  if (norm.includes('vite')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M21.7 3.5L12.5 22.8a.7.7 0 0 1-1.3 0L2.3 3.5a.7.7 0 0 1 .8-.9l8.6 1.9a.7.7 0 0 0 .3 0l8.9-1.9a.7.7 0 0 1 .8.9z" fill="url(#viteGradient)" />
        <path d="M14.7 2.1L8.2 13.8a.4.4 0 0 0 .5.6l3.5-1v5.7l5.2-11.2a.4.4 0 0 0-.5-.6l-2.2.8z" fill="#FFD62E" />
        <defs>
          <linearGradient id="viteGradient" x1="2" y1="3" x2="22" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" fill="#5FA04E" />
        <path d="M12 4.3l7 4v8l-7 4-7-4v-8l7-4z" fill="#333333" />
        <path d="M12 6.8a5.2 5.2 0 0 1 5.2 5.2c0 2.9-2.3 5.2-5.2 5.2S6.8 14.9 6.8 12c0-2.9 2.3-5.2 5.2-5.2z" fill="#5FA04E" />
      </svg>
    );
  }

  // Fastify
  if (norm.includes('fastify')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#181818" stroke="#333" strokeWidth="1" />
        <path d="M13 2L4 14h7l-2 8 11-12h-7l2-8z" fill="#00D26A" />
      </svg>
    );
  }

  // AWS / Cloud
  if (norm.includes('aws') || norm.includes('cloud')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path d="M6.2 13.5c1.8 1.4 4.5 2.2 7.2 2.2 2.4 0 4.6-.6 6.3-1.8.3-.2.5.1.3.4-1.9 1.8-4.5 2.8-7.3 2.8-2.9 0-5.7-1-7.8-2.8-.2-.2 0-.6.3-.5z" fill="#FF9900" />
        <path d="M18.8 13.2c-.4.5-1.4.3-2 .1-.2-.1-.2-.3 0-.4.8-.5 1.7-.3 2.1.2.1.1.1.2-.1.1z" fill="#FF9900" />
        <path d="M6.7 9.8c0-.6.4-1 .9-1h.4c.5 0 .9.4.9 1v1.6H6.7V9.8zm4 0c0-.6.4-1 .9-1h.4c.5 0 .9.4.9 1v1.6h-2.2V9.8zm4 0c0-.6.4-1 .9-1h.4c.5 0 .9.4.9 1v1.6h-2.2V9.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes('firebase')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4.2 17.5l7-12.8a.7.7 0 0 1 1.2.1l2.5 5.2L4.2 17.5z" fill="#FFA000" />
        <path d="M14.9 10l-2.4-4.8a.7.7 0 0 0-1.2 0L3.5 19.3l11.4-9.3z" fill="#FFCA28" />
        <path d="M3.5 19.3L11.7 23a.7.7 0 0 0 .6 0l8.2-4.6-7-14.7a.7.7 0 0 0-1.3 0L3.5 19.3z" fill="#F57C00" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M22.5 11c-.3 0-1.2.1-1.7.5-.4-.7-1.1-1.2-2.1-1.2-.4 0-.8.1-1.2.3-.3-.9-1.2-1.6-2.2-1.6h-4.3v4h11.5z" fill="#2496ED" />
        <path d="M2.5 13.5C3.3 18 7.3 21 12 21c5.2 0 9.5-3.8 10-9H1.8c.2.5.4 1 .7 1.5z" fill="#2496ED" />
        <rect x="5.5" y="8" width="2" height="2" rx=".3" fill="#2496ED" />
        <rect x="8" y="8" width="2" height="2" rx=".3" fill="#2496ED" />
        <rect x="10.5" y="8" width="2" height="2" rx=".3" fill="#2496ED" />
        <rect x="8" y="5.5" width="2" height="2" rx=".3" fill="#2496ED" />
        <rect x="10.5" y="5.5" width="2" height="2" rx=".3" fill="#2496ED" />
      </svg>
    );
  }

  // Git
  if (norm === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M22.4 10.9L13.1 1.6a2 2 0 0 0-2.8 0L8.6 3.3l3.6 3.6a2.4 2.4 0 0 1 3 3l3.5 3.5a2.4 2.4 0 1 1-1.4 1.4l-3.2-3.2v4.8a2.4 2.4 0 1 1-2 0V9.8a2.4 2.4 0 0 1-1.3-3.1L7.2 4.7 1.6 10.3a2 2 0 0 0 0 2.8l9.3 9.3a2 2 0 0 0 2.8 0l8.7-8.7a2 2 0 0 0 0-2.8z" fill="#F05032" />
      </svg>
    );
  }

  // GitHub
  if (norm.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  // Arduino
  if (norm.includes('arduino')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M17.5 7A5.5 5.5 0 0 0 13 9.7 5.5 5.5 0 0 0 6.5 7 5.5 5.5 0 1 0 12 12a5.5 5.5 0 1 0 5.5-5zm-11 8A3.5 3.5 0 1 1 10 11.5 3.5 3.5 0 0 1 6.5 15zm11 0a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" fill="#00979C" />
        <path d="M16 11.5h3m-1.5-1.5v3M5 11.5h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // ESP32 / IoT Hardware
  if (norm.includes('esp32') || norm.includes('iot') || norm.includes('embedded')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="#262626" stroke="#E7352C" strokeWidth="1.5" />
        <rect x="8" y="8" width="8" height="8" rx="1" fill="#E7352C" />
        <path d="M2 9h3m-3 3h3m-3 3h3m14-6h3m-3 3h3m-3 3h3M9 2v3m3-3v3m3-3v3m-6 14v3m3-3v3m3-3v3" stroke="#E5E7EB" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  // Neural Networks / Deep Learning
  if (norm.includes('neural') || norm.includes('deep learning')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="5" cy="7" r="2.2" fill="#8B5CF6" />
        <circle cx="5" cy="17" r="2.2" fill="#8B5CF6" />
        <circle cx="12" cy="5" r="2.2" fill="#38BDF8" />
        <circle cx="12" cy="12" r="2.2" fill="#38BDF8" />
        <circle cx="12" cy="19" r="2.2" fill="#38BDF8" />
        <circle cx="19" cy="8" r="2.2" fill="#EC4899" />
        <circle cx="19" cy="16" r="2.2" fill="#EC4899" />
        <path d="M7 7.5l3-1.5m-3 2.5l3 2.5m-3 5.5l3-4m-3 5l3 2m4-12.5l3 2m-3 4l3-2.5m-3 4l3 3.5m-3-12.5l3 8.5m-3-2l3-7" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.75" />
      </svg>
    );
  }

  // Generative AI / Imaging / Vision
  if (norm.includes('generative') || norm.includes('genai') || norm.includes('ai')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2l2.4 5.5L20 10l-4.5 3.9L16.8 20 12 16.8 7.2 20l1.3-6.1L4 10l5.6-2.5L12 2z" fill="url(#aiSparkle)" />
        <path d="M19 2l1 2.2L22 5l-1.8 1.5.5 2.5-1.7-1.3-1.7 1.3.5-2.5L16 5l2.2-.8L19 2z" fill="#FBBF24" />
        <defs>
          <linearGradient id="aiSparkle" x1="4" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EC4899" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Prompt Engineering
  if (norm.includes('prompt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#1C1917" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M6 9l4 3-4 3" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="15" x2="16" y2="15" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="8" r="1.5" fill="#F59E0B" />
      </svg>
    );
  }

  // NumPy
  if (norm.includes('numpy')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#4DABCF" />
        <path d="M12 2v10l9-5-9-5zm0 10l-9-5v10l9 5V12z" fill="#013243" opacity="0.65" />
        <path d="M7 9v6l3.5-2.5V7L7 9zm6.5 4.5l3.5 2V9l-3.5-2v6.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Pandas
  if (norm.includes('pandas')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="4" y="4" width="3" height="16" rx="1.5" fill="#150458" />
        <rect x="9" y="8" width="3" height="12" rx="1.5" fill="#E70488" />
        <rect x="14" y="5" width="3" height="15" rx="1.5" fill="#FFCA00" />
        <rect x="19" y="10" width="3" height="10" rx="1.5" fill="#00B4D8" />
      </svg>
    );
  }

  // MATLAB
  if (norm.includes('matlab')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#E16737" />
        <path d="M5 15c2.5-4 4.5-8 7-8s4 8 7 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 17c1.5-2 2.5-4 4-4s2.5 3 4 3" stroke="#FFD8A8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // R
  if (norm === 'r' || norm.includes('r language')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="8" fill="#CBCBCB" />
        <path d="M11.5 6.5h3.2c2.2 0 3.8 1 3.8 2.8 0 1.5-1 2.4-2.2 2.7l2.8 5.5h-2.5L14 12.3h-1v5.2h-2V6.5h.5zm1.5 4.3h1.3c1 0 1.9-.4 1.9-1.4 0-.9-.7-1.4-1.9-1.4H13v2.8z" fill="#276DC3" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2.3-.6.5-1.3.6-2.1-1.8.3-2.6-.7-2.8-1.5-.2-.5-.7-1.1-1.2-1.3-.4-.2-.1-.5.3-.5.9.1 1.6 1 1.9 1.4.8 1.4 2.2 1 2.7.8.1-.6.3-1.1.6-1.5C7.2 16 5 14.8 5 10.8c0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4-2.2 5.2-4.4 5.7.4.4.7 1.1.7 2.2v3.3c0 .3.2.6.7.5C19.4 19.8 22 16.2 22 12c0-5.5-4.5-10-10-10z" fill="#336791" />
      </svg>
    );
  }

  // Redis
  if (norm.includes('redis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#D82C20" />
        <path d="M2 12l10 5 10-5-10-5-10 5z" fill="#A82017" />
        <path d="M2 17l10 5 10-5-10-5-10 5z" fill="#78140E" />
      </svg>
    );
  }

  // MySQL / SQL / Database
  if (norm.includes('sql') || norm.includes('dbms') || norm.includes('database')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#00758F" />
        <path d="M4 5v5c0 1.7 3.6 3 8 3s8-1.3 8-3V5" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 10v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 15v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" stroke="#F29111" strokeWidth="1.5" />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C11.5 3 6 8.5 6 14.5c0 4.2 2.7 7.5 6 7.5s6-3.3 6-7.5C18 8.5 12.5 3 12 2z" fill="#47A248" />
        <path d="M12 2v20c-.2 0-3-2.5-3-7.5C9 9 11.8 3.5 12 2z" fill="#3FA037" />
      </svg>
    );
  }

  // Operating Systems
  if (norm.includes('operating') || norm.includes('os')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" fill="#1C1917" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="6.5" cy="7.5" r="1" fill="#EF4444" />
        <circle cx="9.5" cy="7.5" r="1" fill="#F59E0B" />
        <circle cx="12.5" cy="7.5" r="1" fill="#10B981" />
        <path d="M6 13l3-2.5L6 8m4 5h5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 21h8m-4-3v3" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // DSA / Data Structures & Algorithms
  if (norm.includes('dsa') || norm.includes('structure') || norm.includes('algorithm')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="5" r="3" fill="#10B981" />
        <circle cx="6" cy="17" r="3" fill="#6366F1" />
        <circle cx="18" cy="17" r="3" fill="#EC4899" />
        <path d="M10 7.5L7.5 14.5m6.5-7l2.5 7" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    );
  }

  // OOP
  if (norm.includes('oop') || norm.includes('object')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#3B82F6" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#10B981" />
        <rect x="8" y="13" width="8" height="8" rx="1.5" fill="#F59E0B" />
        <path d="M7 11v3m10-3v3M11 7h2" stroke="#94A3B8" strokeWidth="1.3" />
      </svg>
    );
  }

  // RESTful APIs / API
  if (norm.includes('api') || norm.includes('rest')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="1.6" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        <path d="M8 9h8" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // Microservices / Cloud Systems
  if (norm.includes('microservice')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="3" width="7" height="7" rx="1.5" fill="#6366F1" />
        <rect x="15" y="3" width="7" height="7" rx="1.5" fill="#10B981" />
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" fill="#F59E0B" />
        <path d="M9 6.5h6m-5.5 3.5l2.5 4m5-4l-2.5 4" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  // GraphQL
  if (norm.includes('graphql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#E10098" strokeWidth="1.5" />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="20.66" cy="7" r="2" fill="#E10098" />
        <circle cx="20.66" cy="17" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3.34" cy="17" r="2" fill="#E10098" />
        <circle cx="3.34" cy="7" r="2" fill="#E10098" />
      </svg>
    );
  }

  // Spring / Spring Boot
  if (norm.includes('spring')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M20.2 6.5C18.6 4.9 16.4 4 14 4c-5.5 0-10 4.5-10 10 0 2.4.9 4.6 2.5 6.2 1.6 1.6 3.8 2.5 6.2 2.5 5.5 0 10-4.5 10-10 0-2.4-.9-4.6-2.5-6.2z" fill="#6DB33F" fillOpacity="0.2" />
        <path d="M21 3C15 3 6 8 5 17c5.5 1 12-2 16-14z" fill="#6DB33F" />
        <path d="M12 11c-2 2-4 5-4 5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#FF9D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
