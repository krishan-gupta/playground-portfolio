export const experiences = [
  {
    id: 'exp-1',
    company: 'NeuralFlow Systems Inc.',
    role: 'Senior ML Systems Engineer',
    location: 'San Francisco, CA (Hybrid)',
    period: '2024 — Present',
    tracks: ['developer', 'aiml', 'researcher', 'leadership'],
    impact: [
      { label: 'Inference Speedup', value: '3.8x' },
      { label: 'Monthly Cloud Savings', value: '$84k' },
      { label: 'Uptime SLA', value: '99.99%' }
    ],
    tech: ['PyTorch', 'vLLM', 'CUDA / Triton', 'Go', 'Kubernetes', 'Ray'],
    bulletsByTrack: {
      developer: [
        'Architected a distributed model inference orchestrator in Go that routes multi-modal requests across heterogeneous GPU clusters with dynamic batching.',
        'Engineered zero-copy memory transfers between host pinned memory and device VRAM, cutting request serialization overhead by 46%.',
        'Implemented rigorous automated stress suites and canary rollback procedures, achieving 99.99% system availability under 15,000 requests/sec.'
      ],
      researcher: [
        'Formulated custom quantization kernels with FP8 / INT4 mixed precision, preserving 99.4% perplexity across open-weights reasoning models.',
        'Co-authored internal technical report on speculative decoding performance bounds in asynchronous distributed environments.',
        'Designed continuous evaluation harness comparing hallucination rates and grounding fidelity against established academic benchmarks.'
      ],
      aiml: [
        'Deployed production vLLM and TensorRT-LLM serving pipelines with continuous batching and PagedAttention optimizations.',
        'Engineered an automated model distillation pipeline that shrunk 70B parameter models into fine-tuned 8B checkpoints with zero capability regression on target domains.',
        'Decreased time-to-first-token (TTFT) by 64% through speculative decoding and prefix caching optimization.'
      ],
      leadership: [
        'Led a core platform squad of 6 distributed systems and ML engineers delivering the v2 inference runtime on-schedule.',
        'Authored foundational RFCs for GPU cluster topology, capacity forecasting, and standardized model deployment specifications.',
        'Mentored 4 junior and mid-level engineers, running weekly architecture reviews and distributed systems deep-dives.'
      ]
    }
  },
  {
    id: 'exp-2',
    company: 'Vertex Cloud Technologies',
    role: 'Distributed Systems & Platform Engineer',
    location: 'Seattle, WA',
    period: '2022 — 2024',
    tracks: ['developer', 'cloud-devops', 'leadership'],
    impact: [
      { label: 'Cluster Provisioning', value: '-85% Time' },
      { label: 'Deploy Reliability', value: '99.95%' },
      { label: 'P99 Latency Drop', value: '28ms' }
    ],
    tech: ['Kubernetes', 'Terraform', 'Go', 'TypeScript', 'eBPF', 'Kafka'],
    bulletsByTrack: {
      developer: [
        'Engineered multi-region event streaming fabric processing 1.4B daily telemetry events with zero message loss.',
        'Developed internal CLI tools and developer portal in TypeScript/React and Go, improving developer deployment velocity by 40%.',
        'Refactored legacy REST synchronization layer to bidirectional gRPC streaming with protobuf contracts.'
      ],
      'cloud-devops': [
        'Managed and provisioned 28 Kubernetes clusters across AWS and GCP using declarative GitOps with ArgoCD and Terraform.',
        'Configured comprehensive distributed tracing and eBPF network telemetry, decreasing mean-time-to-resolution (MTTR) from 45 min to under 6 min.',
        'Automated multi-region failover tests and chaos engineering drills simulating complete datacenter brownouts.'
      ],
      leadership: [
        'Spearheaded the migration of 40+ microservices to a unified service mesh without customer disruption.',
        'Established engineering incident on-call post-mortem guidelines and SLA tracking across 5 product engineering units.'
      ]
    }
  },
  {
    id: 'exp-3',
    company: 'Applied AI & Geometry Lab',
    role: 'Machine Learning Research Fellow',
    location: 'Boston, MA',
    period: '2021 — 2022',
    tracks: ['researcher', 'aiml'],
    impact: [
      { label: 'Top-tier Publication', value: 'NeurIPS Spotlight' },
      { label: 'Benchmark Improvement', value: '+14.2%' },
      { label: 'Citations', value: '110+' }
    ],
    tech: ['PyTorch', 'JAX', 'W&B', 'NumPy', 'SciPy', 'LaTeX'],
    bulletsByTrack: {
      researcher: [
        'Investigated geometric deep learning on non-Euclidean manifolds for protein folding and molecular conformation generation.',
        'Published spotlight paper at top-tier machine learning venue and released open-source reproduction benchmarks with over 1,200 GitHub stars.',
        'Conducted distributed multi-GPU training experiments scaling up to 64 A100 GPUs using SLURM and PyTorch FSDP.'
      ],
      aiml: [
        'Engineered modular data preprocessing pipelines that parsed 20TB of raw structural biological databases with zero pipeline bottlenecks.',
        'Optimized custom message-passing GNN kernels in PyTorch C++ extensions, achieving 3.2x faster training iterations.'
      ]
    }
  },
  {
    id: 'exp-4',
    company: 'HyperScale Labs',
    role: 'Full Stack Software Engineer',
    location: 'Remote',
    period: '2020 — 2021',
    tracks: ['developer', 'cloud-devops'],
    impact: [
      { label: 'Bundle Size Drop', value: '-52%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Feature Delivery', value: '+30%' }
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    bulletsByTrack: {
      developer: [
        'Built interactive analytical dashboards with WebGL visualizations handling tens of thousands of real-time datapoints.',
        'Architected relational schemas and optimized complex SQL queries with Redis caching layers, sustaining 10k concurrent users.',
        'Championed component-driven design systems, writing accessible WCAG AAA compliant UI primitives.'
      ],
      'cloud-devops': [
        'Containerized production workloads with multi-stage Docker builds, reducing base image sizes from 1.2GB to 85MB.',
        'Built automated GitHub Actions CI/CD pipelines with automated preview environments for every pull request.'
      ]
    }
  }
];

export const education = [
  {
    degree: 'B.S. in Computer Science & Applied Mathematics',
    institution: 'University of Technology',
    period: '2018 — 2022',
    honors: 'Summa Cum Laude, GPA 3.96/4.00',
    details: 'Focus on Distributed Systems, High-Performance Computing, and Statistical Machine Learning. Dean’s Honor List all semesters.'
  }
];

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages & Core',
    icon: 'code',
    skills: [
      { name: 'TypeScript / JavaScript', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'Go (Golang)', level: 'Advanced' },
      { name: 'Rust', level: 'Intermediate' },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Interactive',
    icon: 'layout',
    skills: [
      { name: 'React / Next.js', level: 'Expert' },
      { name: 'WebGL / Three.js', level: 'Advanced' },
      { name: 'CSS Architecture & Canvas', level: 'Expert' },
      { name: 'Web Audio API / Wasm', level: 'Proficient' },
      { name: 'Performance & Profiling', level: 'Expert' },
      { name: 'State Machines & Signals', level: 'Advanced' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI / ML & Research',
    icon: 'cpu',
    skills: [
      { name: 'PyTorch / JAX', level: 'Expert' },
      { name: 'vLLM / TensorRT-LLM', level: 'Advanced' },
      { name: 'CUDA / Triton Kernels', level: 'Proficient' },
      { name: 'Diffusion & Transformers', level: 'Expert' },
      { name: 'Vector DBs / RAG', level: 'Expert' },
      { name: 'Model Quantization & Eval', level: 'Advanced' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: 'server',
    skills: [
      { name: 'Kubernetes & Docker', level: 'Expert' },
      { name: 'Terraform / OpenTofu', level: 'Advanced' },
      { name: 'AWS / GCP / Cloudflare', level: 'Advanced' },
      { name: 'eBPF & Prometheus', level: 'Proficient' },
      { name: 'CI/CD & GitOps (Argo)', level: 'Expert' },
      { name: 'Distributed Consensus', level: 'Advanced' }
    ]
  }
];

export function getExperiencesForTrack(trackId) {
  return experiences
    .filter(exp => exp.tracks.includes(trackId))
    .map(exp => ({
      ...exp,
      bullets: exp.bulletsByTrack[trackId] || Object.values(exp.bulletsByTrack)[0]
    }));
}
