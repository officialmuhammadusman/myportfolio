import { brandIcons } from "@/lib/brandAssets";

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
  /** Brand icon base path (no extension / tone) */
  iconBase: string;
  /** Large tile mark for panels */
  tileSrc: string;
  homeTags: string[];
  /** Inner page details */
  heroImage?: string;
  detailedCapabilities?: { title: string; description: string; icon: any }[];
  techStackDetails?: { name: string; description: string; category: string }[];
}

/**
 * Services mapped to Muhammad Usman's real delivery stack.
 * Copy style: outcome-first (Thoughtworks / Devsinc pattern), not buzzword lists.
 */
export const SERVICES: ServiceItem[] = [
  {
    id: "product-engineering",
    title: "Full-Stack Product Engineering",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Product Engineering",
    eyebrow: "Build",
    description:
      "Production frontend engineering with Next.js, React, Tailwind CSS, Redux Toolkit, TanStack Query, and the supporting libraries needed to ship polished product experiences.",
    outcome: "Ship a scalable digital product, not just a polished prototype.",
    deliverables: [
      "Next.js / React product apps",
      "TypeScript + Tailwind design systems",
      "Framer Motion interactions",
      "Redux Toolkit / Zustand / TanStack Query state",
      "Testing and production UI quality",
    ],
    stack: [
      "React 18",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
    ],
    iconBase: brandIcons.services.fullstack,
    tileSrc: `${brandIcons.services.fullstackTile}.svg`,
    homeTags: ["Next.js", "React", "Tailwind", "TanStack Query"],
    detailedCapabilities: [
      { title: "Frontend Architecture", description: "Scalable React and Next.js applications using App Router, RSCs, and optimized hydration for lightning-fast metrics.", icon: null },
      { title: "Design System Engineering", description: "Translating Figma to pixel-perfect, accessible Tailwind components with Storybook documentation.", icon: null },
      { title: "Complex State Management", description: "Handling deeply nested data, optimistic updates, and real-time streams with Redux Toolkit and Zustand.", icon: null },
      { title: "High-Performance SSR", description: "Server-side rendering and edge caching strategies to ensure SEO dominance and low TTFB.", icon: null },
      { title: "Micro-frontend Integration", description: "Building decoupled frontends using module federation for large enterprise platforms.", icon: null },
      { title: "Web Vitals Optimization", description: "Systematic auditing and fixing of layout shifts, huge bundles, and main thread blocking issues.", icon: null }
    ],
    techStackDetails: [
      { name: "React 18", description: "The foundation of our interactive UIs.", category: "Core" },
      { name: "Next.js 15", description: "Enterprise framework for SSR and App Router.", category: "Core" },
      { name: "TypeScript", description: "Strictly typed codebases for maintainability.", category: "Language" },
      { name: "Tailwind CSS", description: "Utility-first rapid UI development.", category: "Styling" },
      { name: "Framer Motion", description: "Physics-based UI animations.", category: "Animation" },
      { name: "Redux Toolkit", description: "Predictable global state management.", category: "State" },
      { name: "Zustand", description: "Lightweight atomic state for modern apps.", category: "State" },
      { name: "TanStack Query", description: "Server state and caching handled elegantly.", category: "Data Fetching" }
    ]
  },
  {
    id: "ai-agentic",
    title: "AI, RAG & Agentic Systems",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "AI & Agentic",
    eyebrow: "Intelligence",
    description:
      "Applied AI systems that work in production, including direct LLM APIs, LangGraph workflows, RAG pipelines, pgvector retrieval, Redis-backed workflows, tool calling, and automation.",
    outcome: "Turn AI into a reliable product capability, not a demo feature.",
    deliverables: [
      "Direct LLM API integrations",
      "RAG pipelines with grounded retrieval",
      "LangChain / LangGraph agents",
      "pgvector / Pinecone / ChromaDB retrieval",
      "Redis, tool-calling, and agent workflows",
    ],
    stack: [
      "OpenAI",
      "Gemini",
      "Direct APIs",
      "LangChain",
      "LangGraph",
      "RAG",
      "pgvector",
      "Pinecone",
      "ChromaDB",
      "Agentic AI",
    ],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["LangGraph", "Direct LLM APIs", "RAG", "Redis"],
    detailedCapabilities: [
      { title: "RAG Pipelines", description: "Advanced Retrieval-Augmented Generation using semantic search, hybrid chunking, and vector databases.", icon: null },
      { title: "Agentic Workflows", description: "Multi-agent systems with LangGraph that can plan, execute tools, and handle complex multi-step reasoning.", icon: null },
      { title: "Direct LLM Integrations", description: "Securely connecting your product to OpenAI, Gemini, or Claude with streaming responses and cost controls.", icon: null },
      { title: "Tool Calling & Function Execution", description: "Enabling LLMs to trigger real-world actions (e.g. database updates, API calls, emails) reliably.", icon: null },
      { title: "Enterprise Knowledge Bases", description: "Ingesting PDFs, Notion docs, and databases into pgvector for private conversational AI.", icon: null },
      { title: "Automated Evaluations", description: "Building testing pipelines to prevent LLM hallucinations and measure response accuracy over time.", icon: null }
    ],
    techStackDetails: [
      { name: "OpenAI API", description: "State-of-the-art foundation models.", category: "LLM" },
      { name: "Gemini", description: "Multimodal and high-context reasoning.", category: "LLM" },
      { name: "LangChain", description: "Framework for developing LLM applications.", category: "Framework" },
      { name: "LangGraph", description: "Stateful, multi-actor LLM orchestrations.", category: "Framework" },
      { name: "pgvector", description: "Vector similarity search for PostgreSQL.", category: "Database" },
      { name: "Pinecone", description: "Managed, highly-scalable vector database.", category: "Database" },
      { name: "Redis", description: "Fast caching and message queuing for AI streams.", category: "Infrastructure" },
      { name: "Vercel AI SDK", description: "Streaming and hooks for React AI interfaces.", category: "Frontend" }
    ]
  },
  {
    id: "backend-apis",
    title: "Backend, APIs & Realtime",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Backend & APIs",
    eyebrow: "Systems",
    description:
      "Secure backend engineering with Node.js, Express, NestJS, MongoDB, PostgreSQL, Python, FastAPI, and the supporting libraries needed for APIs, auth, realtime, and service reliability.",
    outcome: "Reliable backend architecture that scales with product growth.",
    deliverables: [
      "Node.js / Express / NestJS / FastAPI services",
      "REST + OpenAPI / Swagger",
      "JWT / OAuth2 authentication",
      "WebSockets / Socket.io realtime",
      "Retries, queues, and service resilience",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "REST",
      "JWT",
      "OAuth2",
      "Socket.io",
      "Microservices",
    ],
    iconBase: brandIcons.services.backend,
    tileSrc: `${brandIcons.services.backendTile}.svg`,
    homeTags: ["Node.js", "Express", "NestJS", "FastAPI"],
    detailedCapabilities: [
      { title: "RESTful API Design", description: "Clean, versioned, and documented OpenAPI/Swagger specifications for mobile and web clients.", icon: null },
      { title: "Microservices Architecture", description: "Decoupling monolithic logic into scalable Node.js or Python services connected via message queues.", icon: null },
      { title: "Real-time WebSockets", description: "Low-latency bidirectional communication using Socket.io for chat, dashboards, and live updates.", icon: null },
      { title: "Enterprise Authentication", description: "Secure implementations of JWT, OAuth2, SAML, and RBAC (Role-Based Access Control) systems.", icon: null },
      { title: "Background Job Processing", description: "Reliable async tasks with BullMQ, Redis, or Celery for emails, video processing, and reports.", icon: null },
      { title: "API Security & Rate Limiting", description: "Protecting endpoints against DDoS, injection, and brute force attacks with WAFs and caching layers.", icon: null }
    ],
    techStackDetails: [
      { name: "Node.js", description: "V8-powered asynchronous runtime.", category: "Runtime" },
      { name: "Express.js", description: "Minimalist web framework for fast API iteration.", category: "Framework" },
      { name: "NestJS", description: "Angular-inspired enterprise TypeScript backend.", category: "Framework" },
      { name: "Python", description: "The standard for data-heavy and AI backends.", category: "Language" },
      { name: "FastAPI", description: "High performance, async-first Python API framework.", category: "Framework" },
      { name: "Socket.io", description: "Real-time, bidirectional communication.", category: "Protocol" },
      { name: "JWT / OAuth2", description: "Stateless and federated authentication standards.", category: "Security" },
      { name: "BullMQ", description: "Robust queue system backed by Redis.", category: "Infrastructure" }
    ]
  },
  {
    id: "data-cloud",
    title: "Data, Cloud & Integrations",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Data & Cloud",
    eyebrow: "Platform",
    description:
      "Data and platform foundations across PostgreSQL, pgvector, MongoDB, Redis, Supabase, Prisma, Docker, AWS, Vercel, and the integrations needed for secure scalable products.",
    outcome: "A stable product foundation for scale, performance, and reliability.",
    deliverables: [
      "PostgreSQL / pgvector / Supabase",
      "Redis caching & Prisma ORM",
      "Query optimization & indexing",
      "Stripe + Cloudinary integrations",
      "Docker, AWS, Vercel delivery",
    ],
    stack: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Supabase",
      "Redis",
      "Prisma",
      "Stripe",
      "AWS",
      "Docker",
      "Vercel",
    ],
    iconBase: brandIcons.services.cloud,
    tileSrc: `${brandIcons.services.cloudTile}.svg`,
    homeTags: ["PostgreSQL", "MongoDB", "Redis", "pgvector"],
    detailedCapabilities: [
      { title: "Database Architecture", description: "Designing normalized relational schemas in PostgreSQL or flexible document stores in MongoDB.", icon: null },
      { title: "Cloud Infrastructure Setup", description: "Provisioning scalable environments on AWS (EC2, S3, RDS) and managed platforms like Vercel.", icon: null },
      { title: "Containerization (Docker)", description: "Packaging applications into portable containers for identical dev, staging, and production environments.", icon: null },
      { title: "Stripe Subscriptions", description: "Complex SaaS billing implementations including usage-based, metered, and tiered subscription plans.", icon: null },
      { title: "Performance Caching", description: "Implementing Redis layers to reduce database load and serve critical data in sub-milliseconds.", icon: null },
      { title: "CI/CD Pipelines", description: "Automating testing, building, and deployments via GitHub Actions to ensure zero-downtime releases.", icon: null }
    ],
    techStackDetails: [
      { name: "PostgreSQL", description: "The world's most advanced open source relational database.", category: "Database" },
      { name: "MongoDB", description: "High-performance NoSQL document database.", category: "Database" },
      { name: "Redis", description: "In-memory data store for caching and pub/sub.", category: "Database" },
      { name: "Prisma", description: "Next-generation TypeScript ORM.", category: "Tooling" },
      { name: "Supabase", description: "Open source Firebase alternative with pure Postgres.", category: "Platform" },
      { name: "AWS", description: "Enterprise cloud computing infrastructure.", category: "Cloud" },
      { name: "Docker", description: "Industry-standard containerization platform.", category: "DevOps" },
      { name: "Stripe", description: "Payment processing and subscription management APIs.", category: "Integrations" }
    ]
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps (React Native)",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Mobile Apps",
    eyebrow: "Mobile",
    description: "Native-quality mobile applications built with React Native and Expo. Seamlessly integrating with your backend, providing offline-first experiences, and delivering smooth 60fps animations.",
    outcome: "Launch high-performance cross-platform mobile apps for iOS and Android.",
    deliverables: [
      "React Native app architecture",
      "Auth, notifications & offline-ready UX",
      "API integration with Nest/Node backends",
      "App store–ready build pipelines",
      "Shared design systems with web",
    ],
    stack: ["React Native", "TypeScript", "Expo", "REST APIs", "Push"],
    iconBase: brandIcons.services.mobile,
    tileSrc: `${brandIcons.services.mobileTile}.svg`,
    homeTags: ["React Native", "iOS", "Android", "Shared APIs"],
    detailedCapabilities: [
      { title: "Cross-Platform Mobile", description: "Building high-performance iOS and Android applications from a single React Native codebase.", icon: null },
      { title: "Expo Infrastructure", description: "Utilizing Expo Go, OTA (Over-The-Air) updates, and EAS Build for rapid deployment and testing.", icon: null },
      { title: "Offline-First Architectures", description: "Implementing local SQLite/WatermelonDB storage synced with backend APIs when connectivity returns.", icon: null },
      { title: "Push Notifications", description: "End-to-end integration of APNs and FCM for reliable, targeted user re-engagement.", icon: null },
      { title: "Native Module Bridging", description: "Writing custom Swift/Kotlin modules when you need device-specific hardware access beyond JS.", icon: null },
      { title: "App Store Publishing", description: "Navigating the complex Apple App Store and Google Play Store review guidelines and release processes.", icon: null }
    ],
    techStackDetails: [
      { name: "React Native", description: "Framework for building native apps using React.", category: "Framework" },
      { name: "Expo", description: "Platform making React Native development dramatically faster.", category: "Tooling" },
      { name: "TypeScript", description: "Ensuring end-to-end type safety from DB to Mobile.", category: "Language" },
      { name: "Zustand", description: "Lightweight state management optimized for mobile.", category: "State" },
      { name: "React Navigation", description: "Smooth, native-feeling screen transitions and routing.", category: "Navigation" },
      { name: "Reanimated", description: "60fps native animations running directly on the UI thread.", category: "Animation" },
      { name: "EAS Build", description: "Cloud build pipelines for iOS and Android.", category: "DevOps" },
      { name: "Firebase", description: "Push notifications, crashlytics, and analytics.", category: "Integrations" }
    ]
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms & Dashboards",
    shortTitle: "SaaS Platforms",
    eyebrow: "Product",
    description: "End-to-end multi-tenant SaaS architecture. I build everything from the complex RBAC dashboards to the Stripe billing engines that power them.",
    outcome: "Launch a scalable, secure, multi-tenant business platform.",
    deliverables: ["Multi-tenant architecture", "Complex dashboard UIs", "Stripe billing integration", "Role-based access control (RBAC)", "Tenant data isolation"],
    stack: ["Next.js", "React", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    iconBase: brandIcons.services.fullstack,
    tileSrc: `${brandIcons.services.fullstackTile}.svg`,
    homeTags: ["SaaS", "Next.js", "Stripe", "PostgreSQL"],
    detailedCapabilities: [
      { title: "Multi-Tenant Architecture", description: "Securely isolate data across thousands of organizations using Row Level Security (RLS) and Prisma middleware.", icon: null },
      { title: "Advanced Billing", description: "Usage-based, per-seat, and tiered subscriptions synced flawlessly with Stripe webhooks.", icon: null },
      { title: "Data-Dense Dashboards", description: "Highly responsive data tables and charts using TanStack Table and Recharts for complex reporting.", icon: null },
      { title: "Enterprise Identity", description: "SSO, SAML, and granular permissions for different roles within an organization.", icon: null },
      { title: "Audit Logging", description: "Immutable tracking of who changed what, critical for enterprise compliance.", icon: null },
      { title: "White-Labeling", description: "Dynamic theme and domain routing based on the tenant.", icon: null }
    ],
    techStackDetails: [
      { name: "Next.js", description: "App Router for nested layouts and fast transitions.", category: "Frontend" },
      { name: "Stripe API", description: "The gold standard for B2B subscription management.", category: "Payments" },
      { name: "PostgreSQL RLS", description: "Database-level security preventing tenant data leaks.", category: "Database" },
      { name: "TanStack", description: "Handling complex client-side state and tables.", category: "UI" },
      { name: "Tailwind CSS", description: "Rapid, consistent styling across the dashboard.", category: "Styling" },
      { name: "Redis", description: "Session caching and rate limiting.", category: "Infrastructure" },
      { name: "Auth.js", description: "Secure, flexible authentication flows.", category: "Security" },
      { name: "Vercel", description: "Edge caching and instant deployments.", category: "Hosting" }
    ]
  },
  {
    id: "custom-software",
    title: "Custom Business Software",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Custom Software",
    eyebrow: "Enterprise",
    description: "Bespoke internal tools and workflows tailored precisely to your operational bottlenecks. Stop paying for bloated enterprise software that doesn't fit your processes.",
    outcome: "Digitize and automate complex manual business operations.",
    deliverables: ["Process automation", "Legacy system modernization", "Custom CRM / ERP modules", "Data migration", "Internal APIs"],
    stack: ["Node.js", "NestJS", "React", "PostgreSQL", "AWS"],
    iconBase: brandIcons.services.backend,
    tileSrc: `${brandIcons.services.backendTile}.svg`,
    homeTags: ["Internal Tools", "Node.js", "React", "APIs"],
    detailedCapabilities: [
      { title: "Workflow Automation", description: "Replacing spreadsheets with robust, error-proof digital pipelines.", icon: null },
      { title: "Legacy Migration", description: "Safely moving data from outdated systems into modern PostgreSQL databases.", icon: null },
      { title: "Custom CRMs", description: "Client management systems built exactly for your sales and operational flow.", icon: null },
      { title: "API Integrations", description: "Connecting disjointed 3rd party tools (HubSpot, Salesforce, SAP) into a single source of truth.", icon: null },
      { title: "Report Generation", description: "Automated PDF and Excel exports for operational transparency.", icon: null },
      { title: "Access Control", description: "Strict permission models ensuring employees only see what they need.", icon: null }
    ],
    techStackDetails: [
      { name: "React / Vite", description: "Fast, responsive single page applications.", category: "Frontend" },
      { name: "NestJS", description: "Structured backend logic for complex business rules.", category: "Backend" },
      { name: "PostgreSQL", description: "Reliable relational data storage.", category: "Database" },
      { name: "Puppeteer", description: "Automated PDF report generation.", category: "Tooling" },
      { name: "AWS S3", description: "Secure document and asset storage.", category: "Cloud" },
      { name: "BullMQ", description: "Background job processing for heavy tasks.", category: "Infrastructure" },
      { name: "Docker", description: "Containerized deployments.", category: "DevOps" },
      { name: "OpenAPI", description: "Documented internal APIs.", category: "Integration" }
    ]
  },
  {
    id: "mvp-launch",
    title: "MVP & Startup Launch",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "MVP Launch",
    eyebrow: "Speed",
    description: "From concept to live product in weeks, not months. I help founders cut scope creep and build the core loop needed to validate the idea and raise funding.",
    outcome: "A functional, polished product in the hands of early adopters.",
    deliverables: ["Product scoping", "Rapid prototyping", "Core feature development", "Analytics integration", "Launch deployment"],
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    iconBase: brandIcons.services.mvp,
    tileSrc: `${brandIcons.services.mvpTile}.svg`,
    homeTags: ["Startups", "Next.js", "Supabase", "Rapid Dev"],
    detailedCapabilities: [
      { title: "Scope Reduction", description: "Identifying the true core value proposition and stripping away unnecessary features.", icon: null },
      { title: "Rapid Iteration", description: "Using Supabase and Next.js to build authenticated, database-backed apps in days.", icon: null },
      { title: "Investor-Ready UI", description: "Premium design that looks established, even at version 1.0.", icon: null },
      { title: "Analytics Tracking", description: "PostHog integration to see exactly how early users are interacting.", icon: null },
      { title: "Feedback Loops", description: "In-app feedback mechanisms for beta testers.", icon: null },
      { title: "Scalable Foundation", description: "Building fast, but not sloppy. The MVP can scale, avoiding immediate rewrites.", icon: null }
    ],
    techStackDetails: [
      { name: "Next.js", description: "Full-stack React framework for speed.", category: "Framework" },
      { name: "Supabase", description: "Instant Postgres backend with Auth and Storage.", category: "Backend" },
      { name: "Tailwind CSS", description: "Rapid UI development.", category: "Styling" },
      { name: "Framer Motion", description: "Adding polish with quick animations.", category: "Animation" },
      { name: "PostHog", description: "Product analytics and session recording.", category: "Analytics" },
      { name: "Vercel", description: "Frictionless deployment.", category: "Hosting" },
      { name: "Resend", description: "Transactional email for waitlists and onboarding.", category: "Communication" },
      { name: "Stripe Checkout", description: "Drop-in payment processing for quick validation.", category: "Payments" }
    ]
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Applications",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Web Apps",
    eyebrow: "Engineering",
    description: "High-performance, interactive web applications built with modern React ecosystems. Fast, accessible, and scalable.",
    outcome: "A robust, responsive web application.",
    deliverables: ["React SPAs", "SSR / SSG applications", "Component libraries", "State management", "Performance optimization"],
    stack: ["React 18", "Next.js 15", "TypeScript", "Tailwind CSS"],
    iconBase: brandIcons.services.fullstack,
    tileSrc: `${brandIcons.services.fullstackTile}.svg`,
    homeTags: ["React", "Next.js", "TypeScript", "Frontend"],
    detailedCapabilities: [
      { title: "App Router Architectures", description: "Leveraging React Server Components for optimal load times.", icon: null },
      { title: "Complex UIs", description: "Building drag-and-drop, rich text editors, and complex forms.", icon: null },
      { title: "Design Systems", description: "Translating Figma to reusable Tailwind components.", icon: null },
      { title: "State Management", description: "Handling local and server state cleanly with Zustand and TanStack Query.", icon: null },
      { title: "Accessibility", description: "Ensuring WCAG compliance across all interactive elements.", icon: null },
      { title: "SEO Optimization", description: "Dynamic metadata and semantic HTML for high search rankings.", icon: null }
    ],
    techStackDetails: [
      { name: "React 18", description: "The core UI library.", category: "Frontend" },
      { name: "Next.js", description: "The React framework.", category: "Framework" },
      { name: "TypeScript", description: "Type safety.", category: "Language" },
      { name: "Tailwind CSS", description: "Styling.", category: "Design" },
      { name: "Zustand", description: "State management.", category: "State" },
      { name: "TanStack Query", description: "Data fetching.", category: "State" },
      { name: "Radix UI", description: "Accessible headless components.", category: "UI" },
      { name: "Vitest", description: "Unit testing.", category: "Testing" }
    ]
  },
  {
    id: "realtime-systems",
    title: "Realtime Systems & Sync",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Realtime",
    eyebrow: "Infrastructure",
    description: "Low-latency WebSockets and event-driven architectures for live collaboration, chat apps, and streaming dashboards.",
    outcome: "Instantaneous data synchronization across all connected clients.",
    deliverables: ["WebSocket servers", "Live cursors/collaboration", "Realtime dashboards", "In-app chat", "Push notifications"],
    stack: ["Node.js", "Socket.io", "Redis", "WebSockets"],
    iconBase: brandIcons.services.backend,
    tileSrc: `${brandIcons.services.backendTile}.svg`,
    homeTags: ["WebSockets", "Socket.io", "Redis", "Collaboration"],
    detailedCapabilities: [
      { title: "WebSocket Architecture", description: "Persistent bi-directional connections for sub-100ms latency.", icon: null },
      { title: "Redis Pub/Sub", description: "Scaling WebSocket servers across multiple instances.", icon: null },
      { title: "Live Collaboration", description: "Multiplayer features like live cursors and document editing (CRDTs).", icon: null },
      { title: "Event Streaming", description: "Handling high-throughput live data streams (e.g., financial tickers).", icon: null },
      { title: "Connection Management", description: "Handling disconnects, heartbeats, and offline sync.", icon: null },
      { title: "Realtime Analytics", description: "Live tracking of active users and system health.", icon: null }
    ],
    techStackDetails: [
      { name: "Socket.io", description: "Reliable realtime engine with fallbacks.", category: "Protocol" },
      { name: "Redis", description: "Message broker for horizontal scaling.", category: "Infrastructure" },
      { name: "Node.js", description: "Event-driven backend.", category: "Runtime" },
      { name: "WebRTC", description: "Peer-to-peer data and media.", category: "Protocol" },
      { name: "Yjs / CRDTs", description: "Conflict-free replicated data types for collaboration.", category: "Data" },
      { name: "React", description: "Reactive UI updates.", category: "Frontend" },
      { name: "Kafka", description: "Enterprise event streaming.", category: "Infrastructure" },
      { name: "AWS API Gateway", description: "Managed WebSocket APIs.", category: "Cloud" }
    ]
  },
  {
    id: "rag-llm",
    title: "RAG & LLM Integration",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "RAG & LLMs",
    eyebrow: "Intelligence",
    description: "Connecting your private data to Large Language Models using Retrieval-Augmented Generation to prevent hallucinations.",
    outcome: "An intelligent, context-aware AI that actually knows your business.",
    deliverables: ["Vector database setup", "Document chunking pipelines", "Semantic search", "Chatbot UI", "Prompt engineering"],
    stack: ["OpenAI", "Pinecone", "LangChain", "Next.js"],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["RAG", "Vector DBs", "OpenAI", "Semantic Search"],
    detailedCapabilities: [
      { title: "Vector Search", description: "Embedding documents and storing them in Pinecone/pgvector.", icon: null },
      { title: "Hybrid Retrieval", description: "Combining keyword (BM25) and semantic search for perfect accuracy.", icon: null },
      { title: "Data Ingestion", description: "Automated pipelines to sync Notion, PDFs, and SQL into the vector store.", icon: null },
      { title: "Streaming UI", description: "ChatGPT-like typing effects using Vercel AI SDK.", icon: null },
      { title: "Context Window Management", description: "Optimizing token usage to reduce API costs.", icon: null },
      { title: "Guardrails", description: "Preventing the LLM from answering out-of-scope or inappropriate questions.", icon: null }
    ],
    techStackDetails: [
      { name: "Pinecone", description: "Managed vector database.", category: "Database" },
      { name: "OpenAI API", description: "Embeddings and completion models.", category: "AI" },
      { name: "LangChain", description: "RAG orchestration.", category: "Framework" },
      { name: "Vercel AI SDK", description: "Streaming hooks.", category: "Frontend" },
      { name: "Unstructured.io", description: "Parsing complex PDFs and docs.", category: "Tooling" },
      { name: "pgvector", description: "Postgres vector extension.", category: "Database" },
      { name: "Redis", description: "Semantic caching.", category: "Caching" },
      { name: "Next.js", description: "Full-stack host.", category: "Framework" }
    ]
  },
  {
    id: "langgraph",
    title: "LangGraph Agentic Workflows",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "LangGraph Agents",
    eyebrow: "Automation",
    description: "Stateful, multi-actor LLM orchestrations. Move beyond simple chatbots into autonomous agents that plan, execute tools, and reflect.",
    outcome: "Complex, multi-step cognitive workflows automated.",
    deliverables: ["Multi-agent systems", "Tool calling (APIs/SQL)", "Human-in-the-loop flows", "Self-correcting loops", "State persistence"],
    stack: ["LangGraph", "Python", "OpenAI", "PostgreSQL"],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["LangGraph", "Agents", "Tool Calling", "Python"],
    detailedCapabilities: [
      { title: "Cyclic Graphs", description: "Agents that can loop back and retry if a tool fails.", icon: null },
      { title: "Supervisor Agents", description: "A master agent delegating tasks to specialized sub-agents.", icon: null },
      { title: "Tool Execution", description: "Giving LLMs access to search the web, run SQL, or hit REST APIs.", icon: null },
      { title: "Human-in-the-loop", description: "Pausing the graph to ask for user approval before dangerous actions.", icon: null },
      { title: "Memory Persistence", description: "Saving agent state to PostgreSQL so conversations can resume days later.", icon: null },
      { title: "Self-Reflection", description: "Agents that grade their own work before presenting it to the user.", icon: null }
    ],
    techStackDetails: [
      { name: "LangGraph", description: "Graph-based agent orchestration.", category: "Framework" },
      { name: "LangChain", description: "Tool integrations.", category: "Framework" },
      { name: "Python / TS", description: "Agent logic execution.", category: "Language" },
      { name: "OpenAI gpt-4o", description: "High-reasoning foundation model.", category: "AI" },
      { name: "Tavily", description: "Agentic web search API.", category: "Tooling" },
      { name: "PostgreSQL", description: "State checkpoint persistence.", category: "Database" },
      { name: "Redis", description: "Fast state retrieval.", category: "Infrastructure" },
      { name: "FastAPI", description: "Serving the agentic endpoints.", category: "Backend" }
    ]
  },
  {
    id: "sql-agent",
    title: "SQL & Database Agents",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "SQL Agents",
    eyebrow: "Data Analytics",
    description: "Allow non-technical users to query complex databases using natural language. The agent writes the SQL, runs it, and charts the results.",
    outcome: "Self-serve data analytics powered by natural language.",
    deliverables: ["Schema introspection", "Text-to-SQL generation", "Read-only execution", "JSON charting", "Error correction loops"],
    stack: ["LangChain", "PostgreSQL", "OpenAI", "Recharts"],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["Text-to-SQL", "Analytics", "PostgreSQL", "AI"],
    detailedCapabilities: [
      { title: "Schema Introspection", description: "The agent reads the database schema to understand available tables and relationships.", icon: null },
      { title: "Text-to-SQL", description: "Translating 'Show me Q3 revenue by region' into valid Postgres syntax.", icon: null },
      { title: "Safe Execution", description: "Running queries through strict read-only roles and tight timeouts.", icon: null },
      { title: "Self-Correction", description: "If a syntax error occurs, the agent reads the DB error and rewrites the query.", icon: null },
      { title: "Data Visualization", description: "Converting SQL results into configuration objects for Recharts/Chart.js.", icon: null },
      { title: "Few-Shot Prompting", description: "Injecting domain-specific SQL examples to improve accuracy.", icon: null }
    ],
    techStackDetails: [
      { name: "LangChain SQL Toolkit", description: "Pre-built tools for database interaction.", category: "Tooling" },
      { name: "PostgreSQL", description: "The target analytical database.", category: "Database" },
      { name: "OpenAI gpt-4o", description: "Required for complex SQL reasoning.", category: "AI" },
      { name: "Recharts", description: "Dynamic frontend charting.", category: "Frontend" },
      { name: "Next.js", description: "Dashboard host.", category: "Framework" },
      { name: "Node.js / Python", description: "Agent backend.", category: "Runtime" },
      { name: "Prisma", description: "Schema management.", category: "ORM" },
      { name: "Redis", description: "Caching frequent queries.", category: "Caching" }
    ]
  },
  {
    id: "vector-search",
    title: "Vector & Semantic Search",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Vector Search",
    eyebrow: "Discovery",
    description: "Upgrade your app's search bar from dumb keyword matching to intelligent semantic understanding using embeddings and vector databases.",
    outcome: "Users find what they actually mean, not just what they typed.",
    deliverables: ["Vector database deployment", "Embedding pipelines", "Hybrid search setup", "E-commerce search", "Document discovery"],
    stack: ["Pinecone", "pgvector", "OpenAI", "Typesense"],
    iconBase: brandIcons.services.cloud,
    tileSrc: `${brandIcons.services.cloudTile}.svg`,
    homeTags: ["Semantic Search", "Pinecone", "pgvector", "Embeddings"],
    detailedCapabilities: [
      { title: "Dense Embeddings", description: "Converting products, articles, or logs into 1536-dimensional vectors.", icon: null },
      { title: "pgvector Integration", description: "Keeping relational data and vectors in the same Postgres database.", icon: null },
      { title: "Hybrid Search", description: "Combining BM25 (exact match) with Semantic Search for the best of both worlds.", icon: null },
      { title: "Metadata Filtering", description: "Filtering vector results by category, date, or user ID for security.", icon: null },
      { title: "Recommendation Engines", description: "Finding 'similar items' using cosine distance.", icon: null },
      { title: "Realtime Sync", description: "Updating vector embeddings automatically when source data changes.", icon: null }
    ],
    techStackDetails: [
      { name: "pgvector", description: "Vector extension for PostgreSQL.", category: "Database" },
      { name: "Pinecone", description: "Serverless vector database.", category: "Database" },
      { name: "text-embedding-3", description: "OpenAI's latest embedding model.", category: "AI" },
      { name: "Prisma", description: "Querying pgvector via raw queries.", category: "Tooling" },
      { name: "Supabase", description: "Managed Postgres with pgvector.", category: "Platform" },
      { name: "Typesense", description: "Typo-tolerant hybrid search engine.", category: "Tooling" },
      { name: "Node.js", description: "Embedding generation pipelines.", category: "Runtime" },
      { name: "PostgreSQL", description: "Source of truth data.", category: "Database" }
    ]
  },
  {
    id: "payments-billing",
    title: "Payments & Subscription Billing",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900",
    shortTitle: "Payments & Billing",
    eyebrow: "FinTech",
    description: "Robust financial integrations covering complex SaaS subscriptions, marketplace splits, and international payment gateways like Stripe and Webpay.",
    outcome: "Secure, automated revenue collection and invoice management.",
    deliverables: ["Stripe Connect", "Tiered SaaS Subscriptions", "Webpay / Local gateways", "Automated invoicing", "Webhook syncing"],
    stack: ["Stripe", "Node.js", "Webhooks", "PostgreSQL"],
    iconBase: brandIcons.services.mvp,
    tileSrc: `${brandIcons.services.mvpTile}.svg`,
    homeTags: ["Stripe", "Webpay", "Billing", "SaaS"],
    detailedCapabilities: [
      { title: "SaaS Subscriptions", description: "Handling upgrades, downgrades, prorations, and failed payments via Stripe.", icon: null },
      { title: "Usage-Based Billing", description: "Metering API calls or storage usage and billing in arrears.", icon: null },
      { title: "Marketplace Payouts", description: "Using Stripe Connect to split payments between vendors and the platform.", icon: null },
      { title: "Local Gateways (Webpay)", description: "Integrating regional payment providers for LATAM / specific markets.", icon: null },
      { title: "Webhook Synchronization", description: "Idempotent webhook handlers ensuring database state matches Stripe state exactly.", icon: null },
      { title: "Automated Invoicing", description: "Generating and emailing tax-compliant PDF invoices.", icon: null }
    ],
    techStackDetails: [
      { name: "Stripe API", description: "Core payment processor.", category: "Payments" },
      { name: "Stripe Webhooks", description: "Event-driven updates.", category: "Infrastructure" },
      { name: "Node.js", description: "Secure backend processing.", category: "Backend" },
      { name: "PostgreSQL", description: "Storing transaction history and sub status.", category: "Database" },
      { name: "Webpay", description: "Chilean local payment gateway.", category: "Payments" },
      { name: "Next.js", description: "Frontend checkout flows.", category: "Frontend" },
      { name: "Puppeteer", description: "PDF invoice generation.", category: "Tooling" },
      { name: "Resend", description: "Transactional receipts.", category: "Email" }
    ]
  }
];

/** Homepage runway — all five capabilities in agency order */
export const HOME_SERVICES = SERVICES.slice(0, 5);

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Discover",
    text: "Clarify the business goal, users, scope, constraints, and success metrics before development starts.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Choose the right frontend, backend, data, cloud, and AI stack for speed, scale, and maintainability.",
  },
  {
    step: "03",
    title: "Build",
    text: "Ship through weekly milestones, clean implementation, smart testing, and transparent progress updates.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Deploy, document, support, and improve the system so it performs reliably after launch.",
  },
] as const;

export const HOME_SERVICES_COPY = {
  eyebrow: "Services",
  title: "Full-stack and AI",
  titleAccent: "for real products.",
  support:
    "I design, build, and launch production software across web, backend, AI, cloud, and mobile, with clear ownership from plan to delivery.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View all services",
  footerLine: "Product · Backend · AI · Cloud · Mobile",
} as const;


