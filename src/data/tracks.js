export const tracks = [
  {
    id: 'developer',
    label: 'Software Engineer',
    badge: 'Full Stack & Systems',
    headline: 'Full-Stack Software Engineer & Interactive Systems Craftsman',
    summary: 'Specializing in resilient distributed services, reactive UI architectures, and performance-optimized browser experiences. Passionate about end-to-end craft, clean abstractions, and high-throughput web applications.',
    pdfUrl: '/resume/developer.pdf',
    skillsHighlighted: ['TypeScript', 'React / Next.js', 'Go / Node.js', 'Distributed Systems', 'Web Performance', 'GraphQL'],
    metrics: [
      { label: 'Latency Reduction', value: '42%' },
      { label: 'Production Uptime', value: '99.99%' },
      { label: 'Daily Active Users', value: '250k+' }
    ]
  },
  {
    id: 'researcher',
    label: 'AI / ML Researcher',
    badge: 'Deep Learning & Multimodal',
    headline: 'Machine Learning Researcher in Generative Models & Representations',
    summary: 'Focusing on large-scale foundation models, multimodal alignment, diffusion dynamics, and compute-efficient fine-tuning. Experienced with PyTorch distributed training, synthetic datasets, and scientific publication.',
    pdfUrl: '/resume/researcher.pdf',
    skillsHighlighted: ['PyTorch / JAX', 'Transformers', 'Diffusion Models', 'CUDA / Triton', 'Multimodal LLMs', 'Evaluation Benchmarks'],
    metrics: [
      { label: 'Conference Papers', value: '3+' },
      { label: 'Citations', value: '140+' },
      { label: 'Bench Improvement', value: '+18.4%' }
    ]
  },
  {
    id: 'aiml',
    label: 'AI/ML Systems Engineer',
    badge: 'Model Serving & LLMOps',
    headline: 'AI Systems Engineer Bridging Research Prototypes & Production Inference',
    summary: 'Designing low-latency inference pipelines, KV-cache quantization engines, automated evaluation harnesses, and agentic workflows. Bridging the gap between cutting-edge PyTorch research and high-reliability cloud deployment.',
    pdfUrl: '/resume/aiml-engineer.pdf',
    skillsHighlighted: ['vLLM / TensorRT-LLM', 'LangChain / DSPy', 'Model Distillation', 'Vector DBs', 'Kubernetes GPU Nodes', 'Quantization (AWQ/GPTQ)'],
    metrics: [
      { label: 'Inference TTFT', value: '<35ms' },
      { label: 'GPU Cost Saved', value: '65%' },
      { label: 'Throughput Lift', value: '3.4x' }
    ]
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & Infrastructure',
    badge: 'Platform Engineering & SRE',
    headline: 'Platform Engineer Architecting Resilient Cloud Foundations & CI/CD',
    summary: 'Architecting zero-downtime infrastructure across multi-cloud environments, automated GitOps deployment pipelines, robust observability platforms, and hardened container orchestration topologies.',
    pdfUrl: '/resume/cloud-devops.pdf',
    skillsHighlighted: ['Kubernetes (EKS/GKE)', 'Terraform / OpenTofu', 'ArgoCD / Helm', 'Prometheus & Grafana', 'AWS / GCP / Cloudflare', 'Security & IAM'],
    metrics: [
      { label: 'Deploy Frequency', value: '12x/day' },
      { label: 'MTTR', value: '<8 min' },
      { label: 'Infra Automation', value: '100%' }
    ]
  },
  {
    id: 'leadership',
    label: 'Technical Leadership',
    badge: 'Architecture & Strategy',
    headline: 'Technical Lead & Engineering Strategist Cultivating High-Impact Teams',
    summary: 'Leading cross-functional engineering teams from zero-to-one product incubation through hyper-scale delivery. Champion of engineering excellence, mentorship frameworks, cross-team alignment, and pragmatic roadmapping.',
    pdfUrl: '/resume/leadership.pdf',
    skillsHighlighted: ['System Architecture', 'Roadmapping & OKRs', 'Cross-Team Mentorship', 'Hiring & Culture', 'RFC & Spec Authoring', 'Stakeholder Alignment'],
    metrics: [
      { label: 'Engineers Mentored', value: '18+' },
      { label: 'Projects Shipped', value: '24+' },
      { label: 'Product Cycle Speed', value: '-35%' }
    ]
  }
];

export const defaultTrackId = 'developer';

export function getTrackById(id) {
  return tracks.find(t => t.id === id) || tracks[0];
}
