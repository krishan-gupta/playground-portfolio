export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'web', label: 'Web & Systems' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'research', label: 'Research' },
  { id: 'hackathon', label: 'Hackathons' }
];

export const projects = [
  {
    slug: 'lumina-neural-canvas',
    title: 'Lumina: Neural Diffusion Canvas',
    category: 'ai-ml',
    featured: true,
    date: '2026-03',
    summary: 'Real-time latent space exploration and generative composition running at 60 FPS in WebGPU.',
    tags: ['WebGPU', 'PyTorch', 'ONNX Runtime', 'React', 'Triton'],
    githubUrl: 'https://github.com/example/lumina-neural-canvas',
    liveUrl: 'https://lumina-demo.example.com',
    role: 'Lead ML Systems Engineer',
    overview: 'Lumina bridges raw neural weights with instantaneous interactive tactile manipulation directly inside the browser viewport via WebGPU acceleration shaders.',
    problem: 'Existing text-to-image interfaces suffer from high roundtrip latency (>2s per step), breaking user immersion and creative exploratory flow states.',
    approach: 'Implemented an asynchronous tile-based latent caching strategy coupled with an INT4 quantized distilled UNet pipeline executed client-side where possible and streamed via WebSockets fallback.',
    result: 'Achieved sub-16ms interactive canvas updates, allowing artists to blend multimodal concept vectors seamlessly in continuous space.',
    metrics: [
      { label: 'Framerate', value: '60 FPS' },
      { label: 'Latency', value: '14.2 ms' },
      { label: 'Model Footprint', value: '-68%' }
    ],
    gallery: [
      { label: 'Latent Interpolation Matrix', caption: 'Vector trajectory between semantic concept tokens.' },
      { label: 'WebGPU Render Pipeline', caption: 'Custom WGSL shader passes for bloom and spatial noise.' }
    ]
  },
  {
    slug: 'hyperion-distributed-kv',
    title: 'Hyperion: Distributed Consensus KV Store',
    category: 'cloud',
    featured: true,
    date: '2026-01',
    summary: 'High-throughput Raft-based key-value storage engine engineered with zero-allocation Go buffers.',
    tags: ['Go', 'Raft Consensus', 'gRPC', 'RocksDB', 'Docker'],
    githubUrl: 'https://github.com/example/hyperion-distributed-kv',
    liveUrl: 'https://hyperion.example.com',
    role: 'Distributed Systems Engineer',
    overview: 'An embeddable distributed key-value cluster that guarantees linearizable reads and strict serializability across geo-replicated topologies.',
    problem: 'Standard consensus implementations degrade catastrophically under asymmetrical network partitions and multi-datacenter cross-region jitter.',
    approach: 'Designed an adaptive leader-election heartbeat with preemptive pipelined log replication and log compaction backed by memory-mapped LSM trees.',
    result: 'Demonstrated resilience during 5-node chaotic network chaos injection with zero split-brain incidents and over 180k QPS.',
    metrics: [
      { label: 'Throughput', value: '185k QPS' },
      { label: 'P99 Latency', value: '1.8 ms' },
      { label: 'Cluster Size', value: '7 Nodes' }
    ],
    gallery: [
      { label: 'Partition Resilience Benchmark', caption: 'Recovery curve under Jepsen chaos partition tests.' }
    ]
  },
  {
    slug: 'chronos-vibe-editor',
    title: 'Chronos: High-Density Audio Sequencer',
    category: 'web',
    featured: true,
    date: '2025-11',
    summary: 'Microsecond-accurate algorithmic polyphonic audio workstation built on Web Audio API & AudioWorklet.',
    tags: ['React', 'Web Audio API', 'Canvas API', 'AudioWorklet', 'WebAssembly'],
    githubUrl: 'https://github.com/example/chronos-vibe-editor',
    liveUrl: 'https://chronos-audio.example.com',
    role: 'Frontend Architect & Audio Engineer',
    overview: 'A visual music production workstation featuring modular synthesis nodes, automated parameter envelopes, and 128-track real-time rendering in browser.',
    problem: 'JavaScript main-thread UI garbage collection stalls cause severe audio buffer underruns and audible clicks during complex sequencing.',
    approach: 'Isolated DSP signal computation entirely into dedicated AudioWorklet threads utilizing lock-free circular ring buffers written in Rust WebAssembly.',
    result: 'Zero audio glitches even under maximum CPU browser tab pressure with buttery 120Hz canvas spectrogram rendering.',
    metrics: [
      { label: 'Audio Buffer Underruns', value: '0' },
      { label: 'Max Tracks', value: '128' },
      { label: 'Frame Rate', value: '120 Hz' }
    ],
    gallery: [
      { label: 'Modular Node Graph', caption: 'Real-time signal path graph with interactive modulation.' }
    ]
  },
  {
    slug: 'aether-multimodal-alignment',
    title: 'Aether: Contrastive Multimodal Alignment',
    category: 'research',
    featured: true,
    date: '2025-09',
    summary: 'Empirical research on geometric representations across vision-language manifolds under sparse labels.',
    tags: ['PyTorch', 'Contrastive Learning', 'W&B', 'Distributed Training', 'CUDA'],
    githubUrl: 'https://github.com/example/aether-multimodal-alignment',
    liveUrl: 'https://arxiv.org/abs/example',
    role: 'Primary Author / Researcher',
    overview: 'Investigating geometric manifold alignment across vision and language modalities when annotated pairs are constrained by 90% artificial sparsity.',
    problem: 'Multimodal foundation models require multi-billion image-text pairs; downstream specialized domains like medical imaging lack these vast datasets.',
    approach: 'Formulated a Riemannian geodesic contrastive loss that enforces topology preservation in cross-modal projection manifolds.',
    result: 'Surpassed standard CLIP zero-shot benchmarks by +11.8% accuracy on out-of-domain biomedical benchmarks.',
    metrics: [
      { label: 'Zero-shot Gain', value: '+11.8%' },
      { label: 'Data Efficiency', value: '8.5x' },
      { label: 'GPU Hours', value: '320 hrs' }
    ],
    gallery: [
      { label: 't-SNE Projection Topology', caption: 'Visual separation of cross-domain manifold clusters.' }
    ]
  },
  {
    slug: 'nexus-mesh-observability',
    title: 'Nexus: Zero-Overhead eBPF Service Mesh',
    category: 'cloud',
    featured: false,
    date: '2025-08',
    summary: 'Kernel-level distributed tracing and anomaly telemetry using Linux eBPF probes without sidecars.',
    tags: ['eBPF', 'Rust', 'Kubernetes', 'OpenTelemetry', 'Prometheus'],
    githubUrl: 'https://github.com/example/nexus-mesh-observability',
    liveUrl: 'https://nexus-mesh.example.com',
    role: 'Systems & Cloud Engineer',
    overview: 'Eliminated sidecar proxies by tapping socket lifecycle syscalls directly inside the Linux kernel.',
    problem: 'Envoy sidecars add 4-8ms latency per hop and consume massive cluster memory in microservice architectures.',
    approach: 'Loaded TC (traffic control) and kprobe hooks to correlate HTTP2/gRPC packet payloads directly into OTel trace spans.',
    result: 'Reduced network latency overhead by 88% while capturing 100% of inter-pod RPC calls.',
    metrics: [
      { label: 'Proxy Overhead', value: '-88%' },
      { label: 'Memory Saved', value: '3.2 GB/node' }
    ]
  },
  {
    slug: 'synth-agent-eval',
    title: 'SynthEval: Automated LLM Benchmark Suite',
    category: 'ai-ml',
    featured: false,
    date: '2025-07',
    summary: 'Adversarial benchmark framework testing multi-hop reasoning and deterministic tool misuse in autonomous agents.',
    tags: ['Python', 'LLM Agents', 'DSPy', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/example/synth-agent-eval',
    liveUrl: 'https://syntheval.example.com',
    role: 'AI Researcher',
    overview: 'A repeatable stress-testing framework generating synthetic edge cases to uncover agent hallucination patterns.',
    problem: 'Static benchmark datasets saturate rapidly and fail to catch compounding execution errors in complex agents.',
    approach: 'Employed an adversarial red-team generator model that recursively mutated task constraints until finding failure boundaries.',
    result: 'Identified 37 previously uncataloged tool-chaining vulnerabilities across 5 leading commercial model APIs.',
    metrics: [
      { label: 'Synthetic Tests', value: '50k+' },
      { label: 'Vulnerabilities', value: '37' }
    ]
  },
  {
    slug: 'pulse-hackathon-medlink',
    title: 'PulseMed: Real-Time Triage Telemetry',
    category: 'hackathon',
    featured: false,
    date: '2025-06',
    summary: 'Grand Prize winner: offline-first emergency patient vitals synchronization via Bluetooth Mesh.',
    tags: ['React Native', 'BLE Mesh', 'SQLite', 'Node.js', 'Tailwind'],
    githubUrl: 'https://github.com/example/pulse-medlink',
    liveUrl: 'https://pulsemed.example.com',
    role: 'Lead Developer & Architect',
    overview: 'Built in 36 hours for disaster recovery zones where cellular networks and internet connectivity have collapsed.',
    problem: 'Field paramedics cannot transfer vital signs to arriving hospital ambulances without manual paper records.',
    approach: 'Created an ad-hoc BLE multi-hop mesh network that automatically gossips encrypted patient packets upon proximity.',
    result: 'Awarded 1st Place overall out of 140 teams at Global Hackathon 2025.',
    metrics: [
      { label: 'Hackathon Award', value: '1st Place' },
      { label: 'Packet Delivery', value: '99.4%' }
    ]
  },
  {
    slug: 'vortex-reactive-engine',
    title: 'Vortex: Minimalist Reactive UI Runtime',
    category: 'web',
    featured: false,
    date: '2025-05',
    summary: 'A 1.8KB signal-based reactive framework featuring fine-grained DOM reconciliation without virtual DOM.',
    tags: ['TypeScript', 'Signals', 'DOM Diffing', 'Rollup', 'Micro-framework'],
    githubUrl: 'https://github.com/example/vortex-reactive-engine',
    liveUrl: 'https://vortex-ui.example.com',
    role: 'Author & Maintainer',
    overview: 'Exploring ultra-lightweight reactive primitives that bind state mutations directly to discrete DOM nodes.',
    problem: 'Virtual DOM overhead and component re-execution introduce micro-stutters in embedded low-resource displays.',
    approach: 'Implemented automatic dependency graph tracking using closure-wrapped getter/setter proxies and batch scheduling.',
    result: 'Outperformed vanilla React in Krausest DOM benchmark by 2.3x while maintaining sub-2KB gzipped footprint.',
    metrics: [
      { label: 'Bundle Size', value: '1.8 KB' },
      { label: 'Benchmark Speed', value: '2.3x' }
    ]
  },
  {
    slug: 'orbital-spacetime-viz',
    title: 'Orbital: Real-Time Satellite Constellation Tracker',
    category: 'web',
    featured: false,
    date: '2025-04',
    summary: 'Interactive WebGL visualization of 8,000+ low-earth orbit satellites with Keplerian orbital decay calculation.',
    tags: ['Three.js', 'WebGL', 'Web Workers', 'SGP4', 'TypeScript'],
    githubUrl: 'https://github.com/example/orbital-spacetime-viz',
    liveUrl: 'https://orbital.example.com',
    role: 'Graphics & Web Engineer',
    overview: 'Computes continuous SGP4 orbital propagation algorithms inside Web Workers and pushes instanced mesh transforms.',
    problem: 'Calculating 8,000 dual-axis matrix transformations every frame choked client rendering pipelines.',
    approach: 'Offloaded orbital mechanics to multithreaded workers transferring SharedArrayBuffers directly to instanced vertex buffers.',
    result: 'Silky smooth 120 FPS camera orbit navigation with zero dropped frames across desktop browsers.',
    metrics: [
      { label: 'Tracked Bodies', value: '8,400+' },
      { label: 'FPS', value: '120 FPS' }
    ]
  },
  {
    slug: 'spec-gen-semantic-cache',
    title: 'SpecCache: Semantic Embedding Cache for LLMs',
    category: 'ai-ml',
    featured: false,
    date: '2025-03',
    summary: 'High-speed vector similarity cache that prevents redundant expensive LLM reasoning passes.',
    tags: ['Rust', 'HNSW', 'OpenAI API', 'Vector DB', 'Triton'],
    githubUrl: 'https://github.com/example/spec-cache',
    liveUrl: 'https://speccache.example.com',
    role: 'Backend & ML Engineer',
    overview: 'Intercepts incoming prompts and evaluates semantic distance against prior generation completions using HNSW graphs.',
    problem: 'Repetitive customer service and enterprise query flows cost millions annually in duplicate LLM token usage.',
    approach: 'Built a specialized approximate nearest neighbor index with exact threshold pruning and parameter-aware fingerprinting.',
    result: 'Reduced overall API expenditures by 54% with negligible <2ms lookup overhead.',
    metrics: [
      { label: 'Cost Reduction', value: '54%' },
      { label: 'Lookup Time', value: '1.6 ms' }
    ]
  },
  {
    slug: 'solaris-solar-forecast',
    title: 'Solaris: Grid Solar Yield Forecasting',
    category: 'research',
    featured: false,
    date: '2025-02',
    summary: 'Physics-informed neural networks (PINN) predicting solar irradiance fluctuations across meteorological arrays.',
    tags: ['Python', 'PINN', 'TensorFlow', 'Geospatial Data', 'JAX'],
    githubUrl: 'https://github.com/example/solaris-forecast',
    liveUrl: 'https://solaris-research.example.com',
    role: 'Research Assistant',
    overview: 'Merged atmospheric differential equations with attention-based temporal transformers for grid stability forecasting.',
    problem: 'Cloud dynamics cause sudden drops in renewable solar power that strain municipal electrical grids.',
    approach: 'Constrained transformer loss functions with solar thermodynamic radiative transfer physics.',
    result: 'Decreased forecast error RMSE by 26% across 12 commercial photovoltaic arrays.',
    metrics: [
      { label: 'RMSE Improvement', value: '-26%' },
      { label: 'Forecast Horizon', value: '4 Hours' }
    ]
  },
  {
    slug: 'argo-gitops-autopilot',
    title: 'Argo Autopilot: Self-Healing Kubernetes Operator',
    category: 'cloud',
    featured: false,
    date: '2025-01',
    summary: 'Custom Kubernetes controller that remediates configuration drift and rollout failures autonomously.',
    tags: ['Kubernetes', 'Go', 'Kube-Builder', 'CRD', 'ArgoCD'],
    githubUrl: 'https://github.com/example/argo-autopilot',
    liveUrl: 'https://argo-autopilot.example.com',
    role: 'Platform Engineer',
    overview: 'Monitors cluster events and performs rollback/rollforward simulations before applying GitOps commits.',
    problem: 'Flawed config commits can cause cascading deployment outages requiring manual on-call engineer intervention.',
    approach: 'Integrated automated canary verification with automated metric anomaly thresholds into a single CRD.',
    result: 'Eliminated 92% of manual midnight deployment incident pages across 14 staging and production clusters.',
    metrics: [
      { label: 'Incident Drops', value: '-92%' },
      { label: 'Clusters Managed', value: '14' }
    ]
  },
  {
    slug: 'code-weaver-tree-sitter',
    title: 'CodeWeaver: AST-Aware Semantic Refactoring',
    category: 'web',
    featured: false,
    date: '2024-12',
    summary: 'Browser-based code analysis tool utilizing Tree-sitter WebAssembly grammar parsers.',
    tags: ['Tree-sitter', 'Wasm', 'TypeScript', 'Monaco Editor', 'CSS'],
    githubUrl: 'https://github.com/example/code-weaver',
    liveUrl: 'https://codeweaver.example.com',
    role: 'Frontend & Compiler Dev',
    overview: 'Instantly visualizes syntax trees and executes structural search-and-replace queries across complex codebases.',
    problem: 'RegEx find-and-replace often corrupts nested syntax, while heavy LSP servers require desktop installation.',
    approach: 'Compiled 14 language grammar specs into WebAssembly modules running concurrently in background web workers.',
    result: 'Instant live syntax AST inspection at 0 latency without server-side compute dependency.',
    metrics: [
      { label: 'Languages Supported', value: '14' },
      { label: 'Parse Time', value: '<5 ms' }
    ]
  },
  {
    slug: 'cipher-zero-knowledge-id',
    title: 'CipherID: Zero-Knowledge Identity Proofs',
    category: 'research',
    featured: false,
    date: '2024-11',
    summary: 'zk-SNARK cryptographic circuits for privacy-preserving verifiable credential issuance.',
    tags: ['Circom', 'SnarkJS', 'Solidity', 'Cryptography', 'Next.js'],
    githubUrl: 'https://github.com/example/cipher-zk-id',
    liveUrl: 'https://cipher-id.example.com',
    role: 'Cryptographic Researcher',
    overview: 'Enables users to prove age, citizenship, or membership without revealing identifying attributes.',
    problem: 'Online identity verification currently requires transmitting copies of physical passports and driving licenses.',
    approach: 'Constructed custom Groth16 arithmetic circuits and browser-based client witness generation engines.',
    result: 'Proof generation accomplished in under 800ms inside standard mobile browser environments.',
    metrics: [
      { label: 'Proof Time', value: '780 ms' },
      { label: 'Proof Size', value: '128 Bytes' }
    ]
  },
  {
    slug: 'hack-urban-mobility',
    title: 'RouteFlow: AI Multimodal Transit Planner',
    category: 'hackathon',
    featured: false,
    date: '2024-10',
    summary: 'Best Urban Tech: dynamically combines micro-mobility scooters, trains, and buses with real-time delays.',
    tags: ['React', 'Leaflet', 'Python', 'GTFS-RT', 'FastAPI'],
    githubUrl: 'https://github.com/example/route-flow',
    liveUrl: 'https://routeflow.example.com',
    role: 'Full Stack Hacker',
    overview: 'Integrated live GPS telematics from city bus fleets and dockless scooters to minimize commute transfers.',
    problem: 'Standard navigation apps treat public transit and private e-scooters in isolated silos.',
    approach: 'Developed a unified time-expanded graph router updating dynamic edge weights every 10 seconds.',
    result: 'Won Best Urban Innovation Award and tested by 1,200 participants during the city pilot.',
    metrics: [
      { label: 'Avg Commute Saved', value: '14 mins' },
      { label: 'Active Users', value: '1.2k' }
    ]
  },
  {
    slug: 'terra-sentinel-radar',
    title: 'TerraSentinel: Synthetic Aperture Radar InSAR',
    category: 'research',
    featured: false,
    date: '2024-09',
    summary: 'Interferometric radar processing for millimetric crustal deformation tracking during seismic events.',
    tags: ['Python', 'GDAL', 'NumPy', 'Sentinel-1', 'GPU Compute'],
    githubUrl: 'https://github.com/example/terra-sentinel',
    liveUrl: 'https://terrasentinel.example.com',
    role: 'Geophysical Data Researcher',
    overview: 'Automates phase unwrapping and topographic phase removal from European Space Agency Sentinel-1 constellations.',
    problem: 'Processing 4GB raw radar acquisitions traditionally took hours of manual expert calibration.',
    approach: 'Implemented GPU-accelerated 2D phase unwrapping kernels with automated atmospheric correction filters.',
    result: 'Decreased processing pipeline time from 3 hours to 4 minutes per interferogram pair.',
    metrics: [
      { label: 'Speedup', value: '45x' },
      { label: 'Resolution', value: '10m / pixel' }
    ]
  },
  {
    slug: 'kessel-run-game-engine',
    title: 'Kessel: Low-Level ECS Game Engine',
    category: 'web',
    featured: false,
    date: '2024-08',
    summary: 'Data-oriented Entity Component System engine powering 100k animated sprites via WebGL batching.',
    tags: ['TypeScript', 'WebGL 2.0', 'ECS', 'Data-Oriented Design', 'Vite'],
    githubUrl: 'https://github.com/example/kessel-engine',
    liveUrl: 'https://kessel.example.com',
    role: 'Lead Graphics Engineer',
    overview: 'Investigating memory layouts and cache locality for massive-scale interactive web simulations.',
    problem: 'Object-oriented scene graphs incur massive pointer chasing and garbage collection spikes in browser game engines.',
    approach: 'Designed packed structure-of-arrays memory layouts with uniform buffer object batching.',
    result: 'Maintained 60 FPS while rendering 100,000 individually simulated boids.',
    metrics: [
      { label: 'Rendered Entities', value: '100k' },
      { label: 'FPS', value: '60 FPS' }
    ]
  },
  {
    slug: 'flux-serverless-edge-kv',
    title: 'Flux: Low-Latency Global Edge Cache',
    category: 'cloud',
    featured: false,
    date: '2024-07',
    summary: 'Decentralized caching tier on Cloudflare Workers utilizing CRDTs for eventual consistency.',
    tags: ['Cloudflare Workers', 'CRDT', 'TypeScript', 'Edge Compute', 'Wasm'],
    githubUrl: 'https://github.com/example/flux-edge-kv',
    liveUrl: 'https://flux.example.com',
    role: 'Edge Infrastructure Architect',
    overview: 'Places mutable state within single-digit milliseconds of 95% of the world’s connected population.',
    problem: 'Centralized database read replicas still suffer from trans-oceanic 150ms+ network roundtrips.',
    approach: 'Utilized state-based PN-counters and observed-remove sets synced over WebRTC peer swarms.',
    result: 'Achieved sub-12ms read latency globally across 275 edge locations.',
    metrics: [
      { label: 'Read Latency', value: '9.8 ms' },
      { label: 'Edge POPs', value: '275' }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}
