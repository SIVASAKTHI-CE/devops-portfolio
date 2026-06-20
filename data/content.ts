// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your name, links, projects, and skills.
// This is the only file most people need to touch.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Alex Rivera",
  role: "DevOps Engineer",
  tagline: "I build the pipes that ship code safely, fast, and without waking anyone up at 3 AM.",
  location: "Bengaluru, India",
  email: "alex.rivera@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/devops-portfolio/resume.pdf",
  naukri: "https://www.naukri.com/mnjuser/profile",
  avatarInitials: "AR",
};

export const stats = [
  { label: "uptime_30d", value: "99.97%" },
  { label: "avg_deploy_time", value: "3m 12s" },
  { label: "pipelines_shipped", value: "140+" },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"],
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "CloudFormation"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "UptimeRobot", "ELK Stack"],
  },
  {
    category: "Scripting",
    items: ["Bash", "Python", "Go"],
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  status: "deployed" | "building" | "planned";
};

export const projects: Project[] = [
  {
    slug: "zero-downtime-pipeline",
    name: "Zero-Downtime Deploy Pipeline",
    description:
      "A GitHub Actions pipeline that builds, tests, containerizes, and rolls out a sample app with health-checked, zero-downtime releases.",
    longDescription:
      "This pipeline takes a commit from push to production with no manual steps. It lints and runs unit tests, builds a Docker image, pushes it to a registry, then performs a rolling deployment to Kubernetes. A readiness probe gates traffic, so old pods only terminate after new pods report healthy — meaning users never hit a dead instance during a release.",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    repoUrl: "https://github.com/yourusername/zero-downtime-pipeline",
    status: "deployed",
  },
  {
    slug: "infra-as-code-starter",
    name: "Infrastructure as Code Starter Kit",
    description:
      "A Terraform module set that provisions a small, reproducible cloud environment — VPC, compute, and a managed database — from a single command.",
    longDescription:
      "Designed as a teaching artifact as much as a tool: every resource block is commented to explain the 'why', not just the 'what'. State is stored remotely with locking to prevent concurrent-apply conflicts, and the whole stack can be destroyed and rebuilt identically in minutes.",
    stack: ["Terraform", "AWS", "GitHub Actions"],
    repoUrl: "https://github.com/yourusername/infra-as-code-starter",
    status: "deployed",
  },
  {
    slug: "k8s-rolling-update-demo",
    name: "Kubernetes Rolling Update Demo",
    description:
      "A minimal Kubernetes deployment that demonstrates rolling updates, readiness probes, and automatic rollback on failed health checks.",
    longDescription:
      "Built on a free-tier cluster to show the mechanics of how Kubernetes replaces pods gradually during a release. Includes a deliberately broken version you can deploy to watch the automatic rollback trigger in real time.",
    stack: ["Kubernetes", "Docker", "kubectl"],
    repoUrl: "https://github.com/yourusername/k8s-rolling-update-demo",
    status: "building",
  },
  {
    slug: "uptime-observability-stack",
    name: "Observability Stack",
    description:
      "Prometheus + Grafana stack monitoring the pipeline above, with alerting wired to flag failed deploys before users notice.",
    longDescription:
      "Captures deploy duration, error rate, and pod restart counts on a single dashboard. Alert rules are version-controlled alongside the infrastructure they monitor, so monitoring changes go through the same review process as code.",
    stack: ["Prometheus", "Grafana", "Docker Compose"],
    repoUrl: "https://github.com/yourusername/uptime-observability-stack",
    status: "planned",
  },
];

export const pipelineStages = [
  { id: "lint", label: "lint", detail: "ESLint + type-check" },
  { id: "test", label: "test", detail: "Unit + integration suite" },
  { id: "build", label: "build", detail: "Docker image build" },
  { id: "push", label: "push", detail: "Push to registry" },
  { id: "deploy", label: "deploy", detail: "Rolling update to cluster" },
  { id: "verify", label: "verify", detail: "Health check gate" },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readMinutes: number;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-zero-downtime-actually-means",
    title: "What 'zero downtime' actually means (and how to prove it)",
    date: "2026-05-12",
    readMinutes: 6,
    excerpt:
      "Saying 'zero downtime' on a resume is easy. Here's the actual mechanism — readiness probes, rolling updates, and why a single server can never truly give you this.",
    content: [
      "Most of us say 'zero downtime' before we've actually built anything that guarantees it. It's worth being precise about what the phrase means mechanically, because it changes how you architect things.",
      "A single server cannot give you zero downtime. The moment you restart a process, redeploy, or reboot the host, there is a window where requests fail. Zero downtime requires at least two things running at once: a load balancer or proxy in front, and more than one healthy backend behind it at all times.",
      "A rolling update is the simplest version of this: bring up a new instance, wait for it to report healthy via a readiness probe, then take an old instance out of rotation. Repeat until every instance is replaced. Users never hit a dead backend because there is always at least one healthy one serving traffic.",
      "The readiness probe is the part people skip. Without it, your orchestrator has no way to know the new instance is actually ready — it might be alive but still loading config or warming a cache. Skipping this step is the most common reason 'zero downtime' deploys still cause a blip.",
    ],
  },
  {
    slug: "why-i-chose-github-actions-over-jenkins",
    title: "Why I chose GitHub Actions over Jenkins for personal projects",
    date: "2026-04-28",
    readMinutes: 5,
    excerpt:
      "Jenkins isn't worse. It's heavier. Here's the actual tradeoff and when each one is the right call.",
    content: [
      "Jenkins and GitHub Actions solve the same problem — running a sequence of steps on a trigger — but they differ in where the responsibility for the underlying server sits.",
      "Jenkins needs a server that is always running. You patch it, secure it, and scale its agents yourself. In exchange you get deep plugin flexibility and full control over the execution environment, which matters at companies with complex multi-team, on-prem pipelines.",
      "GitHub Actions has no server to maintain. Workflows run on infrastructure GitHub manages, triggered directly by repository events. For a personal project or a fast-moving small team, this removes an entire category of maintenance work.",
      "Neither choice is more 'advanced.' The right one depends on whether you already have infrastructure to integrate with, and how much control you need over the build environment.",
    ],
  },
];
