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
    title: 'Languages & Core',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'R' },
      { name: 'MATLAB' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Web',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Firebase' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI / ML & Data Science',
    skills: [
      { name: 'Neural Networks' },
      { name: 'Generative Imaging' },
      { name: 'Prompt Engineering' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'MATLAB' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud, IoT & Tools',
    skills: [
      { name: 'AWS Fundamentals' },
      { name: 'Firebase' },
      { name: 'ESP32' },
      { name: 'Arduino' },
      { name: 'Git' },
      { name: 'GitHub' }
    ]
  }
];

export const csFundamentals = [
  'Operating Systems',
  'Database Management Systems (DBMS)',
  'Data Structures & Algorithms (DSA)',
  'Object-Oriented Programming (OOP)',
  'SQL'
];

export const additionalTech = [
  'Git',
  'GitHub',
  'Arduino',
  'ESP32',
  'NumPy',
  'Pandas',
  'MATLAB',
  'R',
  'Fastify',
  'PostgreSQL',
  'Redis'
];

export const areasOfInterest = [
  'AI / ML & Neural Networks',
  'Generative Imaging',
  'Prompt Engineering',
  'Full-Stack Web Development',
  'Embedded Systems & IoT',
  'Research & Patents'
];

export function getExperiencesForTrack(trackId) {
  return experiences
    .filter(exp => exp.tracks.includes(trackId))
    .map(exp => ({
      ...exp,
      bullets: exp.bulletsByTrack[trackId] || Object.values(exp.bulletsByTrack)[0]
    }));
}
