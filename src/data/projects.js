export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'web', label: 'Web & Tools' },
  { id: 'cloud', label: 'Cloud & IoT' },
  { id: 'hackathon', label: 'Hackathons' }
];

export const projects = [
  {
    slug: 'dhobitrack',
    title: 'DhobiTrack: Campus Laundry Platform',
    category: 'web',
    tracks: ['developer'],
    featured: true,
    status: 'Built (dashboard); backend planned',
    date: '2026',
    summary: 'Admin dashboard for a campus laundry service with companion mobile app (Dhobi Terminal), designed for 15,000+ students.',
    tags: ['React', 'Vite', 'Tailwind', 'Capacitor.js', 'Fastify', 'PostgreSQL', 'Redis', 'Socket.io'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'Full-Stack Developer & Designer',
    overview: 'A campus utility platform built to solve queue bottlenecks and order tracking for college laundry operations. Built as an admin dashboard with a companion mobile app ("Dhobi Terminal") tailored to streamline order statuses, notifications, and pickups across 15,000+ campus residents.',
    problem: 'Manual slip tracking and unorganized pickup times in large-scale university hostels lead to lost garments, elongated wait times, and zero real-time visibility for students.',
    approach: 'Engineered an intuitive frontend dashboard in React and Vite with mobile packaging via Capacitor.js. Planned backend architecture leverages Fastify, PostgreSQL for relational order states, Redis for caching, and Socket.io for instantaneous order status pushes.',
    result: 'Frontend admin dashboard interface completed and verified; architectural blueprint ready for university-wide rollout upon backend integration.',
    metrics: [
      { label: 'Campus Scale', value: '15,000+ Students' },
      { label: 'Interface Status', value: 'Built' },
      { label: 'Mobile Wrapper', value: 'Capacitor.js' }
    ],
    gallery: [
      { label: 'Admin Dashboard Wireframe', caption: 'Status tracking, order intake, and customer lookups (TBD).' },
      { label: 'Dhobi Terminal Mobile Interface', caption: 'Streamlined QR scanner view for service staff (TBD).' }
    ]
  },
  {
    slug: 'noise-pollution-monitor',
    title: 'AI-Powered Noise Pollution Monitor',
    category: 'cloud',
    tracks: ['ai-research'],
    featured: true,
    status: 'Foundational project',
    date: '2025 — 2026',
    summary: 'Hardware sound-monitoring device classifying ambient acoustic noise via an ML model and logging telemetry to the cloud.',
    tags: ['ESP32', 'INMP441 Microphone', 'Edge Impulse', 'Firebase', 'IoT', 'Embedded ML'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'IoT & Embedded ML Developer',
    overview: 'An environmental intelligence hardware monitor designed to detect, classify, and map urban noise pollution hot-spots in real time using embedded machine learning at the edge.',
    problem: 'Traditional sound level meters only measure decibel volume (dB) without context; municipal bodies cannot distinguish between construction drilling, traffic honking, and emergency sirens.',
    approach: 'Interfaced an INMP441 I2S digital microphone with an ESP32 microcontroller running an Edge Impulse acoustic classification neural network. Processed audio spectrograms locally and streamed telemetry to Firebase.',
    result: 'Successfully achieved local inference classification on-device with low power consumption and continuous wireless telemetry logging.',
    metrics: [
      { label: 'Inference Device', value: 'ESP32' },
      { label: 'Acoustic Model', value: 'Edge Impulse' },
      { label: 'Cloud Database', value: 'Firebase' }
    ],
    gallery: [
      { label: 'Hardware Circuit Topology', caption: 'ESP32 paired with INMP441 digital microphone (TBD).' },
      { label: 'Edge Impulse Spectrogram', caption: 'Frequency bin classification and confusion matrix (TBD).' }
    ]
  },
  {
    slug: 'context-preserving-document-editor',
    title: 'Context-Preserving Document Text Editor',
    category: 'hackathon',
    tracks: ['ai-research'],
    featured: true,
    status: 'iQOO Hackathon 2026 concept (idea-screening stage)',
    date: '2026',
    summary: 'Privacy-first, fully on-device mobile app that edits text inside images while preserving the original background and graphics.',
    tags: ['On-Device OCR', 'Vision Models', 'Image Inpainting', 'Mobile AI', 'Hackathon'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'Concept Architect & AI Developer',
    overview: 'Conceived for the iQOO Hackathon 2026. A privacy-first mobile application that allows users to edit text directly inside flyers, posters, and documents without disturbing the underlying texture, typography aesthetics, or photographic background.',
    problem: 'Existing mobile editing tools either white-out the background, mismatch font styling, or require uploading sensitive documents to third-party cloud servers.',
    approach: 'Formulated an on-device pipeline: automated text bounding box detection, tap-to-edit interactions, inpainting to reconstruct the graphic background behind the letters, and style-matched re-rendering with font metric estimation. Includes undo, before/after comparative slider, and batch processing mode.',
    result: 'Selected for competitive screening at the iQOO Hackathon 2026 concept stage; architectural blueprint and interaction wireframes defined.',
    metrics: [
      { label: 'Privacy Mode', value: '100% On-Device' },
      { label: 'Hackathon', value: 'iQOO 2026' },
      { label: 'Features', value: '7 Core Workflows' }
    ],
    gallery: [
      { label: 'Before / After Text Replacement Slider', caption: 'Preservation of complex background gradients (TBD).' },
      { label: 'On-Device Inference Pipeline', caption: 'OCR detection, erase, inpaint, and re-render flow (TBD).' }
    ]
  },
  {
    slug: 'semantic-search-engine',
    title: 'Semantic Search Engine for Documents',
    category: 'ai-ml',
    tracks: ['ai-research'],
    featured: false,
    status: 'In progress (about 2-3 weeks)',
    date: '2026',
    summary: 'Semantic search over documents with both local and API-based embeddings, paired with a web application front end.',
    tags: ['sentence-transformers', 'FAISS / Chroma', 'OpenAI / Cohere', 'React', 'Python', 'Vector Search'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'ML Developer',
    overview: 'The inaugural milestone in a series of 10 planned AI/ML portfolio builds. Enables intuitive natural language search across dense multi-page documentation and unstructured notes.',
    problem: 'Keyword search (Ctrl+F) fails whenever documents use synonyms, conceptual parallels, or different phrasing than the user query.',
    approach: 'Implementing dual embedding pathways: local compute using open-weight sentence-transformers for offline privacy, and API-based embeddings (OpenAI / Cohere) for scalable depth. Vector indices managed via FAISS / Chroma with a responsive React query dashboard.',
    result: 'In active development; core vector indexing verified; web frontend in progress.',
    metrics: [
      { label: 'Embeddings', value: 'Local + API' },
      { label: 'Vector Index', value: 'FAISS / Chroma' },
      { label: 'Portfolio Series', value: 'Project 1 of 10' }
    ],
    gallery: [
      { label: 'Semantic Similarity Graph', caption: 'Cosine distance projection of retrieved passages (TBD).' }
    ]
  },
  {
    slug: 'cinecipher',
    title: 'CineCipher: Movie Discovery Platform',
    category: 'web',
    tracks: ['developer'],
    featured: false,
    status: 'Foundational project',
    date: '2025',
    summary: 'Movie recommendation platform that combines rich film metadata, ratings, and embedded trailers.',
    tags: ['React', 'TMDB API', 'YouTube API', 'CSS3', 'Web App'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'Frontend Developer',
    overview: 'A visual discovery engine aggregating movie intelligence, genres, cast details, and synchronized video previews into an engaging single-page application.',
    problem: 'Users frequently bounce between search engines, IMDb, and video streaming apps just to evaluate film recommendations.',
    approach: 'Integrated TMDB API for dynamic search, trending filters, and metadata with the YouTube API for trailer previews.',
    result: 'Delivered a snappy, responsive web application for movie exploration and recommendation.',
    metrics: [
      { label: 'API Integrations', value: 'TMDB + YouTube' },
      { label: 'Type', value: 'Web App' }
    ]
  },
  {
    slug: 'rag-knowledge-pipeline',
    title: 'RAG Knowledge Retrieval Pipeline',
    category: 'ai-ml',
    tracks: ['ai-research'],
    featured: false,
    status: 'Planned (Upcoming Portfolio Project)',
    date: '2026',
    summary: 'Retrieval-Augmented Generation system with document chunking, hybrid keyword/vector search, and grounded synthesis.',
    tags: ['RAG', 'Python', 'Vector DB', 'LangChain / LlamaIndex', 'Planned'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    role: 'AI Systems Architect',
    overview: 'Planned next milestone following the Semantic Search Engine: a full-stack RAG pipeline implementing recursive chunking, re-ranking, and grounded generation.',
    problem: 'Direct LLM queries lack domain-specific private context and hallucinate without verifiable citations.',
    approach: 'Architecture roadmap includes sentence window retrieval, reciprocal rank fusion (RRF), and citation tracing.',
    result: 'Roadmapped as project 2 of the 10 planned AI/ML portfolio series.',
    metrics: [
      { label: 'Status', value: 'Planned' },
      { label: 'Series', value: 'Project 2 of 10' }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}
