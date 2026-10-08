export const tracks = [
  {
    id: 'developer',
    label: 'Developer',
    badge: 'Web & Mobile Tools',
    headline: 'Frontend-leaning developer building practical web and mobile tools',
    summary: 'Focusing on reactive interfaces, web applications, and campus tooling. Experienced with React, Vite, JavaScript/TypeScript, and mobile application wrappers like Capacitor.js.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['JavaScript', 'React (basics)', 'HTML5 & CSS3', 'Vite', 'Capacitor.js', 'Tailwind / Handcrafted CSS'],
    metrics: [
      { label: 'Campus Students Targeted', value: '15,000+' },
      { label: 'Key Campus Tools', value: '3+' },
      { label: 'Roles Held', value: 'NEXUS & AWS' }
    ]
  },
  {
    id: 'researcher',
    label: 'Researcher',
    badge: 'AI/ML & Patents',
    headline: 'AI/ML student working toward research and patents',
    summary: 'Investigating deep learning architectures and AI vulnerability dynamics. Co-inventor on an industry-transferred patent application and author of an empirical research manuscript in preparation.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['Python', 'U-Net Architectures', 'Embeddings & Semantic Search', 'Research Methodology', 'Patents & IP Filing', 'LaTeX'],
    metrics: [
      { label: 'Patent Application', value: '1 (Transferred)' },
      { label: 'Research Papers', value: '1 (In prep)' },
      { label: 'DLI Certification', value: 'NVIDIA' }
    ]
  },
  {
    id: 'aiml',
    label: 'AI / ML Engineer',
    badge: 'Applied AI & Edge',
    headline: 'AI/ML student building applied AI projects',
    summary: 'Building practical applications of generative AI, vision models, on-device audio classification, and semantic document retrieval pipelines.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['Claude API (Text & Vision)', 'Edge Impulse', 'sentence-transformers', 'FAISS / Chroma', 'U-Net Colorization', 'ESP32 ML'],
    metrics: [
      { label: 'Planned AI Projects', value: '10' },
      { label: 'IoT Audio ML', value: 'Edge Impulse' },
      { label: 'Job Simulation', value: 'BCG GenAI' }
    ]
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & Infrastructure',
    badge: 'AWS Certified',
    headline: 'Cloud-fundamentals student with AWS certification',
    summary: 'Solid cloud foundations with AWS Certified Cloud Practitioner credential, active student builder leadership, and hands-on multi-cloud deployment workflows.',
    pdfUrl: 'TBD',
    skillsHighlighted: ['AWS Fundamentals', 'Azure & GCP Basics', 'Firebase', 'Vercel Deployment', 'CloudOps VITC', 'GitHub Workflows'],
    metrics: [
      { label: 'AWS Certification', value: 'CLF-C02' },
      { label: 'Campus Sign-ups', value: '300+' },
      { label: 'Cloud Communities', value: '2' }
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
