import React from 'react';
import { TechIcon } from '../TechIcon/TechIcon';
import './SocialDock.css';

export function SocialDock() {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krishangupta1607',
      isTBD: false,
      className: 'dock-item-linkedin',
      icon: <TechIcon name="linkedin" size={18} />
    },
    {
      name: 'Email',
      url: 'mailto:work.krishan.gupta@gmail.com',
      isTBD: false,
      className: 'dock-item-email',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/krishan-gupta',
      isTBD: false,
      className: 'dock-item-github',
      icon: <TechIcon name="github" size={18} />
    }
  ];

  return (
    <div className="social-dock-wrapper" aria-label="Social and contact profiles">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target={item.url.startsWith('http') ? '_blank' : undefined}
          rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={(e) => {
            if (item.isTBD) {
              e.preventDefault();
              alert('GitHub profile URL: TBD (will be updated soon)');
            }
          }}
          className={`dock-item ${item.className}`}
          aria-label={item.name}
        >
          <span className="dock-icon">{item.icon}</span>
          <span className="dock-tooltip">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
