export const experiences = [
  {
    id: 'exp-1',
    company: 'NEXUS VIT',
    role: 'Management Lead (Promoted)',
    location: 'Chennai, India',
    period: 'Sep 2025 — Present',
    tracks: ['developer', 'leadership'],
    impact: [
      { label: 'Forum Participants', value: '1,100+' },
      { label: 'Flagship Events', value: '2' },
      { label: 'Role Trajectory', value: 'Promoted' }
    ],
    tech: ['Event Coordination', 'Sponsorships', 'Frontend Dev', 'Team Leadership'],
    bulletsByTrack: {
      leadership: [
        'Promoted from Frontend Developer & Event Coordinator to Management Lead, taking a leading role across flagship chapter operations.',
        'Coordinated the Nexus Forum Striver Talk Show, driving engagement for 1,100+ student participants.',
        'Currently organizing Nexathon 2026, spearheading pitch decks, outreach materials, and corporate sponsorship pipelines.',
        'Coordinated the DECODEX competitive technical event end-to-end on campus.'
      ],
      developer: [
        'Served previously as Frontend Developer, crafting web assets and interactive promotional tools for chapter initiatives.',
        'Promoted to Management Lead while continuing to steer technological execution across collaborative NEXUS projects.',
        'Engineered responsive web interfaces and coordinated tech deployments for hackathon participants.'
      ]
    }
  },
  {
    id: 'exp-2',
    company: 'CloudOps VITC',
    role: 'Technical Specialist',
    location: 'Chennai, India',
    period: 'Sep 2025 — Present',
    tracks: ['cloud-devops', 'leadership'],
    impact: [
      { label: 'Focus Area', value: 'Cloud Foundations' },
      { label: 'Activities', value: 'Workshops & Labs' }
    ],
    tech: ['AWS', 'GCP', 'Linux', 'Cloud Operations'],
    bulletsByTrack: {
      'cloud-devops': [
        'Active Technical Specialist contributing to cloud operations, hands-on infrastructure workshops, and student labs.',
        'Operational responsibilities and upcoming chapter projects: Details TBD.'
      ],
      leadership: [
        'Mentoring student peers in cloud-native fundamentals and open-source tooling.',
        'Operational responsibilities and upcoming chapter projects: Details TBD.'
      ]
    }
  },
  {
    id: 'exp-3',
    company: 'AWS Cloud Club VIT Chennai',
    role: 'Web Developer',
    location: 'Chennai, India',
    period: 'Mar 2026 — Present',
    tracks: ['developer', 'cloud-devops'],
    impact: [
      { label: 'Focus Area', value: 'Web Properties' },
      { label: 'Affiliation', value: 'AWS Community' }
    ],
    tech: ['React', 'HTML5/CSS3', 'AWS Hosting', 'Vite'],
    bulletsByTrack: {
      developer: [
        'Developing and updating web portals and digital interfaces for AWS Cloud Club VIT Chennai.',
        'Building responsive frontends and coordinating event registrations: Details TBD.'
      ],
      'cloud-devops': [
        'Deploying and managing club web properties leveraging AWS cloud primitives.',
        'Building and maintaining infrastructure workflows: Details TBD.'
      ]
    }
  },
  {
    id: 'exp-4',
    company: 'AWS Student Builder, VIT Chennai',
    role: 'AWS Student Builder Campus Leader (Selected Participant)',
    location: 'Chennai, India',
    period: '3 Aug — 11 Sep 2026',
    tracks: ['cloud-devops', 'leadership'],
    impact: [
      { label: 'Student Sign-ups', value: '300+' },
      { label: 'Programme Type', value: 'Campus Leader' },
      { label: 'Outreach', value: 'VIT Chennai' }
    ],
    tech: ['AWS Builder Center', 'Campus Outreach', 'Community Growth'],
    bulletsByTrack: {
      'cloud-devops': [
        'Selected to participate in the prestigious AWS Student Builder Campus Leader programme to champion the AWS Builder Center.',
        'Promoted cloud learning resources, driving 300+ verifiable student sign-ups across VIT Chennai.',
        'Guided students through foundational cloud learning modules and certification preparation pathways.'
      ],
      leadership: [
        'Led high-impact peer advocacy and campaign outreach across engineering batches at VIT Chennai.',
        'Achieved 300+ student sign-ups for AWS Builder Center through workshops, classroom talks, and peer engagement.',
        'Recognized for exceptional campus leadership and builder enablement.'
      ]
    }
  }
];

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering (AI & ML Specialization)',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    period: 'Expected May 2029',
    honors: 'Second-Year Undergraduate Student',
    details: 'Focusing on Practical AI/ML applications, Deep Learning, Cloud Computing, and Interactive Web Engineering. Actively participating in competitive hackathons and student leadership.'
  }
];

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages and Core',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'Java (learning)' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend and Web',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'React (basics)' },
      { name: 'Vite' },
      { name: 'Vercel' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    skills: [
      { name: 'Claude API (Text & Vision)' },
      { name: 'U-Net Colorization Pipelines' },
      { name: 'Embeddings & Semantic Search (in progress)' },
      { name: 'Edge Impulse' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud, Backend and IoT',
    skills: [
      { name: 'AWS Fundamentals' },
      { name: 'Azure Fundamentals' },
      { name: 'GCP Fundamentals' },
      { name: 'Firebase' },
      { name: 'Flask' },
      { name: 'SQLite' },
      { name: 'ESP32' },
      { name: 'Arduino IDE' },
      { name: 'GitHub' }
    ]
  }
];

export const additionalTech = [
  'Fastify', 'PostgreSQL', 'Redis', 'Socket.io (DhobiTrack backend plan)', 'Capacitor.js', 'TypeScript', 'Tailwind', 'LaTeX'
];

export const csFundamentals = [
  'Operating Systems', 'Database Management Systems', 'Data Structures (improving)'
];

export const areasOfInterest = [
  'AI/ML Engineering', 'Full-Stack Development', 'Cloud', 'Research and Patents', 'Hackathons'
];

export function getExperiencesForTrack(trackId) {
  return experiences
    .filter(exp => exp.tracks.includes(trackId))
    .map(exp => ({
      ...exp,
      bullets: exp.bulletsByTrack[trackId] || Object.values(exp.bulletsByTrack)[0]
    }));
}
