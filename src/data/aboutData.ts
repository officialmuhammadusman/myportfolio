export interface AboutItem {
  id: string; // The slug
  title: string;
  subtitle: string;
  philosophy: string;
  philosophyDetails: string[];
  expertise: { title: string; description: string }[];
  values: { title: string; text: string }[];
}

export const ABOUT_DATA: AboutItem[] = [
  {
    id: "story",
    title: "My Story",
    subtitle: "From curious coder to enterprise architect.",
    philosophy: "Building software isn't just about writing code; it's about solving real human problems at scale.",
    philosophyDetails: [
      "I started my journey with a deep curiosity for how systems operate under the hood.",
      "Over the years, I've transitioned from building simple frontends to architecting complex, AI-driven enterprise platforms.",
      "My core belief is that great engineering is invisible to the user but critical to the business."
    ],
    expertise: [
      { title: "System Architecture", description: "Designing scalable, fault-tolerant systems for high-traffic environments." },
      { title: "Full-Stack Execution", description: "Bridging the gap between polished UIs and robust backend services." },
      { title: "AI Integration", description: "Embedding LLMs and autonomous agents into traditional SaaS workflows." }
    ],
    values: [
      { title: "Empathy", text: "Understanding the end-user's pain points before writing a single line of code." },
      { title: "Resilience", text: "Building systems that gracefully handle failure and scale seamlessly." },
      { title: "Continuous Learning", text: "Staying at the forefront of AI and web engineering trends." }
    ]
  },
  {
    id: "experience",
    title: "Professional Experience",
    subtitle: "A track record of delivery in production.",
    philosophy: "Experience isn't measured in years; it's measured in the complexity of problems solved and the impact delivered.",
    philosophyDetails: [
      "I have consistently delivered high-impact software solutions across healthcare, SaaS, and enterprise domains.",
      "My tenure at companies like BX Track Solution and Wise360 Solution involved leading critical architectural overhauls.",
      "I thrive in environments where performance, security, and scalability are non-negotiable."
    ],
    expertise: [
      { title: "Enterprise SaaS", description: "Building multi-tenant platforms with complex RBAC and billing systems." },
      { title: "Healthcare Tech", description: "Developing HIPAA-aligned telemedicine and patient management systems." },
      { title: "Technical Leadership", description: "Mentoring developers and driving engineering best practices." }
    ],
    values: [
      { title: "Accountability", text: "Taking full ownership of the systems I build, from conception to deployment." },
      { title: "Pragmatism", text: "Choosing the right tool for the job, rather than chasing the latest hype." },
      { title: "Collaboration", text: "Working closely with product and design teams to ensure alignment." }
    ]
  },
  {
    id: "process",
    title: "Engineering Process",
    subtitle: "How I turn complexity into clarity.",
    philosophy: "A robust process is the scaffolding that allows creativity and engineering excellence to flourish safely.",
    philosophyDetails: [
      "I follow a disciplined, iterative approach to software development, heavily inspired by Agile methodologies.",
      "Every project begins with a deep architectural discovery phase to mitigate risks early.",
      "I prioritize automated testing, CI/CD, and strict code reviews to maintain high quality."
    ],
    expertise: [
      { title: "Discovery & Architecture", text: "Mapping out system boundaries, data flows, and infrastructure needs." },
      { title: "Agile Execution", text: "Delivering value in rapid, iterative sprints with constant feedback." },
      { title: "Quality Assurance", text: "Implementing unit, integration, and end-to-end testing pipelines." }
    ] as any,
    values: [
      { title: "Transparency", text: "Maintaining open communication about progress, blockers, and technical debt." },
      { title: "Adaptability", text: "Pivoting gracefully when requirements or business needs change." },
      { title: "Velocity", text: "Optimizing workflows to ship features faster without compromising quality." }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Expertise",
    subtitle: "Crafting pixel-perfect, high-performance user interfaces.",
    philosophy: "The frontend is the bridge between human intent and machine execution; it must be seamless, accessible, and fast.",
    philosophyDetails: [
      "I specialize in React and Next.js, building heavily interactive SPAs and SSR applications.",
      "I obsess over Core Web Vitals, ensuring every interaction feels instantaneous.",
      "Design systems and component-driven architecture are at the core of my frontend strategy."
    ],
    expertise: [
      { title: "React & Next.js", description: "Building scalable applications with the App Router and React Server Components." },
      { title: "State Management", description: "Managing complex client state with Redux Toolkit, Zustand, and TanStack Query." },
      { title: "UI/UX Engineering", description: "Implementing intricate animations with Framer Motion and styling with Tailwind CSS." }
    ],
    values: [
      { title: "Accessibility (a11y)", text: "Ensuring applications are usable by everyone, regardless of ability." },
      { title: "Performance", text: "Optimizing bundle sizes, lazy loading, and minimizing main thread blocking." },
      { title: "Consistency", text: "Enforcing strict design system rules for a cohesive user experience." }
    ]
  },
  {
    id: "backend-exp",
    title: "Backend Architecture",
    subtitle: "Designing resilient, scalable, and secure APIs.",
    philosophy: "A strong backend is the silent engine of any successful application; it must be robust, secure, and predictable.",
    philosophyDetails: [
      "I architect backend systems using Node.js, NestJS, and Express, focusing on modularity and testability.",
      "I have deep expertise in relational database design, query optimization, and caching strategies.",
      "Security is baked in from day one, with strict RBAC, data validation, and threat mitigation."
    ],
    expertise: [
      { title: "RESTful & GraphQL APIs", description: "Designing intuitive, well-documented, and versioned APIs." },
      { title: "Microservices", description: "Breaking down monolithic architectures into manageable, scalable services." },
      { title: "Performance Tuning", description: "Profiling and optimizing slow queries, memory leaks, and CPU bottlenecks." }
    ],
    values: [
      { title: "Security First", text: "Implementing least-privilege access, zero-trust architectures, and robust encryption." },
      { title: "Scalability", text: "Designing systems that can handle 10x traffic without breaking a sweat." },
      { title: "Observability", text: "Integrating comprehensive logging, tracing, and alerting mechanisms." }
    ]
  },
  {
    id: "ai-exp",
    title: "AI & Agentic Workflows",
    subtitle: "Integrating intelligence into enterprise systems.",
    philosophy: "AI is no longer just a research topic; it is a fundamental building block for modern software engineering.",
    philosophyDetails: [
      "I specialize in embedding Large Language Models (LLMs) into traditional SaaS platforms to automate complex workflows.",
      "My expertise extends to building Retrieval-Augmented Generation (RAG) systems for enterprise knowledge bases.",
      "I leverage LangGraph and LangChain to create autonomous agents capable of multi-step reasoning."
    ],
    expertise: [
      { title: "LLM Integration", description: "Seamlessly connecting OpenAI, Anthropic, and open-source models to application logic." },
      { title: "Agentic Workflows", description: "Building stateful, multi-agent systems with LangGraph for complex task execution." },
      { title: "Vector Search", description: "Implementing semantic search using Pinecone, Supabase Vector, and pgvector." }
    ],
    values: [
      { title: "Innovation", text: "Pushing the boundaries of what's possible with applied artificial intelligence." },
      { title: "Reliability", text: "Ensuring non-deterministic AI outputs are safely constrained and validated." },
      { title: "Ethics", text: "Building AI systems that are fair, unbiased, and respect user privacy." }
    ]
  },
  {
    id: "mobile-exp",
    title: "Mobile Development",
    subtitle: "Delivering native-like experiences across platforms.",
    philosophy: "Mobile development requires a deep understanding of device constraints, network volatility, and fluid interactions.",
    philosophyDetails: [
      "I use React Native and Expo to build cross-platform mobile applications that feel truly native.",
      "I prioritize offline-first architectures and aggressive caching to handle poor network connectivity.",
      "Smooth 60fps animations and intuitive gesture handling are paramount to my mobile builds."
    ],
    expertise: [
      { title: "React Native & Expo", description: "Building iOS and Android applications from a single, maintainable codebase." },
      { title: "Offline-First", description: "Implementing robust local storage and background sync mechanisms." },
      { title: "Native Modules", description: "Bridging JavaScript to native code for specialized hardware access." }
    ],
    values: [
      { title: "Fluidity", text: "Ensuring UI interactions and transitions are buttery smooth." },
      { title: "Efficiency", text: "Minimizing battery consumption and memory footprint." },
      { title: "Reach", text: "Delivering high-quality experiences to users regardless of their device tier." }
    ]
  },
  {
    id: "databases",
    title: "Database Engineering",
    subtitle: "Structuring data for speed, scale, and integrity.",
    philosophy: "Data is the most valuable asset of any organization; its storage and retrieval must be treated with the utmost care.",
    philosophyDetails: [
      "I specialize in PostgreSQL, leveraging its advanced features like Row-Level Security (RLS) and JSONB operations.",
      "I design normalized schemas for transactional integrity and denormalized views for read-heavy analytics.",
      "Caching layers with Redis are implemented strategically to protect the primary database."
    ],
    expertise: [
      { title: "PostgreSQL & Prisma", description: "Designing complex schemas, migrations, and type-safe data access layers." },
      { title: "Query Optimization", description: "Analyzing query plans, adding strategic indexes, and avoiding N+1 problems." },
      { title: "Caching & Redis", description: "Implementing distributed caching for session management and rate limiting." }
    ],
    values: [
      { title: "Data Integrity", text: "Enforcing strict constraints, foreign keys, and ACID transactions." },
      { title: "Security", text: "Protecting sensitive data at rest and in transit." },
      { title: "Durability", text: "Implementing robust backup, replication, and disaster recovery strategies." }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Deploying and scaling infrastructure with confidence.",
    philosophy: "Infrastructure should be treated as code: versioned, reproducible, and automated.",
    philosophyDetails: [
      "I leverage AWS, Vercel, and Docker to create resilient, auto-scaling deployment environments.",
      "CI/CD pipelines via GitHub Actions ensure that code goes from commit to production safely and swiftly.",
      "I focus on edge computing and CDN distribution to minimize global latency."
    ],
    expertise: [
      { title: "AWS & Vercel", description: "Managing serverless functions, edge caching, and scalable object storage (S3)." },
      { title: "Containerization", description: "Using Docker to create consistent development and production environments." },
      { title: "CI/CD Pipelines", description: "Automating testing, linting, and deployment with GitHub Actions." }
    ],
    values: [
      { title: "Automation", text: "Eliminating manual toil through comprehensive scripting and pipelines." },
      { title: "High Availability", text: "Designing architectures that can survive zone failures." },
      { title: "Cost Efficiency", text: "Optimizing cloud resources to prevent unnecessary billing spikes." }
    ]
  },
  {
    id: "testing",
    title: "Testing & QA",
    subtitle: "Ensuring reliability through rigorous validation.",
    philosophy: "Testing is not an afterthought; it is an integral part of the development lifecycle that guarantees stability.",
    philosophyDetails: [
      "I employ a testing pyramid strategy: heavy unit testing, crucial integration testing, and strategic E2E testing.",
      "Jest, React Testing Library, and Playwright form the core of my testing toolchain.",
      "I believe in testing behavior over implementation details to create resilient test suites."
    ],
    expertise: [
      { title: "Unit & Integration", description: "Writing isolated and coupled tests using Jest and React Testing Library." },
      { title: "End-to-End (E2E)", description: "Simulating real user journeys with Playwright or Cypress." },
      { title: "Test-Driven Development", description: "Writing tests before code for complex business logic modules." }
    ],
    values: [
      { title: "Confidence", text: "Allowing developers to refactor aggressively without fear of breaking production." },
      { title: "Coverage", text: "Maintaining high code coverage on critical paths." },
      { title: "Speed", text: "Optimizing test suites to run quickly in CI/CD environments." }
    ]
  }
];
