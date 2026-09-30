import {
  Blocks,
  Code2,
  Database,
  Layers3,
  Radio,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  accent: "blue" | "violet" | "sky" | "cyan";
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "E-Commerce Microservices Platform",
    eyebrow: "Distributed systems / payments / event-driven backend",
    description:
      "A fully containerized commerce backend built around independent services, with synchronous gRPC calls and asynchronous RabbitMQ workflows.",
    tags: [
      ".NET 10",
      "Keycloak",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "gRPC",
      "Stripe",
      "YARP",
      "Docker",
    ],
    highlights: [
      "6 independent services with 5 databases",
      "OIDC + Authorization Code + PKCE",
      "Clean Architecture + Vertical Slices + CQRS",
      "SignalR for real-time notification delivery",
    ],
    github: "https://github.com/kerolesnabiel/ECommerceMicroservices",
    accent: "blue",
    image: "/projects/ecommerce.webp",
  },
  {
    number: "02",
    title: "URL Shortener",
    eyebrow: "Fast redirects / analytics / deployment automation",
    description:
      "A production-oriented URL platform where redirect latency stays low while click analytics are processed off the hot path.",
    tags: [
      "ASP.NET Core 10",
      "Redis",
      "SQL Server",
      "Identity",
      "Chart.js",
      "GitHub Actions",
    ],
    highlights: [
      "Redis cache-aside redirect path",
      "Bounded Channel + BackgroundService analytics",
      "Per-link analytics dashboard with GeoIP insights",
      "CI/CD on every push to main",
    ],
    github: "https://github.com/kerolesnabiel/UrlShortenerMvc",
    demo: "https://short.runasp.net",
    accent: "violet",
    image: "/projects/url-shortener.webp",
  },
  {
    number: "03",
    title: "Real-Time Chat App",
    eyebrow: "Realtime product / security / React + TypeScript",
    description:
      "A real-time messaging experience with SignalR, refresh-token rotation, delivery/read receipts, and a React client built for resilient sessions.",
    tags: [
      "ASP.NET Core 10",
      "SignalR",
      "React 19",
      "TypeScript",
      "Azure Blob",
      "SQL Server",
    ],
    highlights: [
      "Live delivery, read, edit and delete events",
      "JWT refresh-token rotation",
      "Message encryption at rest",
      "Zustand + Axios interceptors + auto-reconnect",
    ],
    github: "https://github.com/kerolesnabiel/RealTimeChat",
    demo: "https://chat-time-web.vercel.app/",
    accent: "sky",
    image: "/projects/real-time-chat.webp",
  },
  {
    number: "04",
    title: "Social Media REST API",
    eyebrow: "API design / CQRS / cloud storage",
    description:
      "A structured social backend using Clean Architecture and MediatR, designed around focused commands and queries for a maintainable API surface.",
    tags: ["ASP.NET Core 10", "EF Core", "MediatR", "SQL Server", "Azure Blob"],
    highlights: [
      "Domain / Application / Infrastructure / API layers",
      "Pipeline validation with FluentValidation",
      "RFC 7807 ProblemDetails error responses",
      "xUnit + Moq handler tests",
    ],
    github: "https://github.com/kerolesnabiel/SocialMediaAPI",
    demo: "https://social-media.runasp.net/swagger",
    accent: "cyan",
    image: "/projects/social-media-api.webp",
  },
];

export type SkillGroup = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: ServerCog,
    title: "Backend",
    items: [
      ".NET",
      "ASP.NET Core",
      "Web API",
      "MVC",
      "EF Core",
      "SignalR",
      "MediatR",
      "FluentValidation",
      "YARP",
      "Swagger",
    ],
  },
  {
    icon: Layers3,
    title: "Architecture",
    items: [
      "Microservices",
      "Clean Architecture",
      "Vertical Slice",
      "CQRS",
      "REST",
      "gRPC",
      "Event-Driven",
      "SOLID",
      "OOD",
    ],
  },
  {
    icon: Database,
    title: "Data & Messaging",
    items: ["PostgreSQL", "SQL Server", "Redis", "RabbitMQ", "MassTransit"],
  },
  {
    icon: Blocks,
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Azure Blob Storage",
    ],
  },
  {
    icon: Radio,
    title: "Security",
    items: [
      "Keycloak",
      "OIDC",
      "OAuth 2.0",
      "PKCE",
      "JWT",
      "ASP.NET Core Identity",
    ],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Axios"],
  },
];

export const navItems = [
  ["work", "Work"],
  ["stack", "Stack"],
  ["about", "About"],
  ["contact", "Contact"],
] as const;

export const techStack = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "gRPC",
  "Docker",
  "SignalR",
  "React",
  "TypeScript",
  "Azure",
];
