export const tracks = [
  {
    id: 'developer',
    label: 'Developer',
    badge: 'Web & Mobile Tools',
    headline: 'Frontend-leaning developer building practical web and mobile tools',
    summary: 'Focusing on reactive interfaces, web applications, and campus tooling. Experienced with React, Vite, JavaScript/TypeScript, and mobile application wrappers like Capacitor.js.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['JavaScript', 'React', 'HTML5 & CSS3', 'Vite', 'Capacitor.js', 'Tailwind / CSS'],
    metrics: [
      { label: 'Campus Students Targeted', value: '15,000+' },
      { label: 'Key Campus Tools', value: '3+' },
      { label: 'Roles Held', value: 'NEXUS & AWS' }
    ]
  },
  {
    id: 'ai-research',
    label: 'AI/ML & Research',
    badge: 'AI/ML, Research & Patents',
    headline: 'AI/ML student working toward research, patents, and intelligent systems',
    summary: 'Investigating deep learning architectures, embedded acoustic classification, semantic search, and AI vulnerability dynamics. Co-inventor on an industry-transferred patent application and author of an empirical research manuscript in active preparation.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['Python', 'U-Net Architectures', 'Edge Impulse', 'Embeddings & Semantic Search', 'Patents & IP Filing', 'LaTeX'],
    metrics: [
      { label: 'Patent Application', value: '1 (Transferred)' },
      { label: 'Research Papers', value: '1 (In prep)' },
      { label: 'Validations', value: 'NVIDIA, IBM, BCG' }
    ]
  },
  {
    id: 'leadership',
    label: 'Leadership',
    badge: 'Campus Programs & Events',
    headline: 'Student leader running campus programs and events',
    summary: 'Management Lead at NEXUS VIT and AWS Student Builder Campus Leader. Directing large-scale hackathons, technical speaker series, and student engagement initiatives.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['Event Coordination', 'Sponsorship & Pitch Decks', 'Cross-functional Leadership', 'Campus Outreach', 'Public Speaking'],
    metrics: [
      { label: 'Nexus Forum Talk Show', value: '1,100+ Attended' },
      { label: 'AWS Builder Sign-ups', value: '300+' },
      { label: 'Major Events Run', value: 'DECODEX & Nexathon' }
    ]
  }
];

export const defaultTrackId = 'developer';

export function getTrackById(id) {
  return tracks.find(t => t.id === id) || tracks[0];
}
