import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-i-chose-postgresql-over-mongodb",
    title: "Why I Chose PostgreSQL Over MongoDB for My SaaS — And When I'd Switch",
    excerpt: "A deep technical breakdown of the real trade-offs between PostgreSQL and MongoDB based on building three production systems. Not the answer you expect.",
    content: `
## The Real Cost of MongoDB

When I started my first major SaaS, MongoDB was the default choice for "rapid iteration." Schemaless design felt like a superpower. But after hitting 100k Monthly Active Users, the lack of constraints became our biggest bottleneck. Data migrations required complex application-level scripts, and simple relational queries forced us into massive \`$lookup\` aggregations that tanked performance.

## Why PostgreSQL Wins in 90% of Use Cases

1. **JSONB is the Ultimate Hybrid**: You don't need a NoSQL database to store unstructured data. PostgreSQL's \`JSONB\` column type allows you to index and query unstructured payloads with GIN indexes, giving you MongoDB's flexibility with ACID compliance.
2. **ACID Transactions by Default**: In fintech or billing systems, eventual consistency is a disaster waiting to happen. Postgres guarantees that multi-step Stripe webhook processings either fully succeed or roll back.
3. **pgvector for AI**: With the rise of RAG (Retrieval-Augmented Generation), keeping vector embeddings in the same database as your relational data simplifies architecture drastically.

### When I would actually use MongoDB
I'd only switch back for heavy IoT telemetry streams or extreme write-heavy event logging where absolute horizontal scale is prioritized over strict consistency. For everything else, start with Postgres.
`,
    category: "architecture",
    tags: ["PostgreSQL", "MongoDB", "Database Design", "Architecture"],
    publishedAt: "2024-11-15",
    readTime: "8 min read",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: true,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "2",
    slug: "redis-caching-strategies-production",
    title: "Redis Caching Strategies That Actually Work in Production",
    excerpt: "Cache invalidation is one of the hardest problems in CS. Here's how I handle it across three production systems with zero stale data incidents.",
    content: `
## The Invalidation Problem

"There are only two hard things in Computer Science: cache invalidation and naming things." 

In a production microservices architecture, stale data isn't just an annoyance—it's a security risk. If a user downgrades their subscription, but the API cache still serves the premium payload, you have a financial leak.

## Senior Patterns for Redis

1. **Tag-Based Invalidation (Cache Tags)**: Instead of manually tracking which keys to delete when a user updates their profile, we use cache tags. A response is cached with tags like \`[user:123, team:456]\`. When the user is updated, we invalidate the tag, instantly clearing all associated cached endpoints.
2. **Stale-While-Revalidate**: Never make the user wait for a slow database query if the cache just expired. Serve the stale Redis data immediately, and trigger a background SQS/RabbitMQ worker to fetch the new data and update Redis silently.
3. **The Thundering Herd Solution**: When a popular cache key expires, 10,000 requests might hit your database simultaneously. We implement **Promise Caching** at the application level—if a fetch is already in flight to the DB, subsequent requests wait for that single promise to resolve rather than spawning new DB queries.

By strictly adhering to these patterns, we achieved a 98% cache hit rate with zero reported stale data bugs across our last two SaaS platforms.
`,
    category: "fullstack",
    tags: ["Redis", "Caching", "Performance", "Node.js"],
    publishedAt: "2024-10-28",
    readTime: "10 min read",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "3",
    slug: "nextjs-app-router-patterns",
    title: "Next.js 15 App Router Patterns I Use in Every Project",
    excerpt: "After building three production apps with the Next.js App Router, these are the patterns that save me the most time and eliminate the most bugs.",
    content: `
## App Router: The Paradigm Shift

Next.js 15 and the App Router completely changed how we build React applications. The mental model shifted from "fetch on the client" to "render on the server." However, without strict architectural boundaries, App Router codebases can quickly turn into unmaintainable spaghetti.

## 3 Non-Negotiable Architecture Patterns

### 1. The Data Access Layer (DAL)
Never call your database directly from a UI component. Even though Server Components allow you to run \`prisma.user.findMany()\` right next to your \`<div>\`, you shouldn't. 
Create a strict \`src/data\` or \`src/services\` directory. Your server components should only call these highly cached, abstracted functions. This makes unit testing actually possible.

### 2. Server Actions as Mutations
API routes are dead for internal mutations. We exclusively use Server Actions wrapped in a custom \`safeAction\` utility (like \`next-safe-action\`). This ensures schema validation (via Zod), authorization checks, and error boundaries are applied consistently before any business logic runs.

### 3. Parallel & Intercepting Routes for Modals
Stop using React state (\`isOpen\`) for modals. In production, we use Next.js Intercepting Routes (\`@modal\`) so that every modal has a shareable URL, handles SSR, and doesn't bloat the main page bundle.

Adopting these three rules reduced our onboarding time for new engineers from 2 weeks to 3 days.
`,
    category: "tutorials",
    tags: ["Next.js", "React", "TypeScript", "App Router"],
    publishedAt: "2024-10-10",
    readTime: "7 min read",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "4",
    slug: "stripe-webhooks-production-reliability",
    title: "Making Stripe Webhooks 100% Reliable in Production",
    excerpt: "Silent payment failures are catastrophic. Here's the exact idempotent webhook pattern I use to ensure every payment event is processed exactly once.",
    content: `
## The Reality of Webhooks

If you are building a SaaS, billing is the lifeblood of your company. When a user upgrades their plan, Stripe sends a webhook to your server to provision the premium features. But what happens if your server crashes right as it receives the webhook? What happens if Stripe sends the exact same webhook twice?

Without idempotency, you might accidentally credit a user twice, or fail to provision an account they paid for.

## Building a Bulletproof Webhook Handler

### 1. The Idempotency Key
Every Stripe event has a unique \`evt_12345\` ID. Before processing the event, you must check your database: "Have I processed this event before?" If yes, return 200 OK immediately.
We create a \`stripe_events\` table in PostgreSQL. We start a transaction, try to \`INSERT\` the event ID. If it throws a unique constraint violation, we know it's a duplicate and abort gracefully.

### 2. The Dead Letter Queue
Never process heavy business logic inside the actual webhook HTTP handler. Stripe expects a 2xx response within seconds, otherwise it will timeout and retry. 
Instead, your webhook endpoint should do exactly three things:
1. Verify the Stripe signature.
2. Save the raw event payload to the database.
3. Return 200 OK.

A separate background worker (using BullMQ, Inngest, or a simple CRON) reads the raw events from the database and provisions the user accounts. If the provisioning logic crashes due to a bug, the raw event is still safe in your database, ready to be re-processed once you deploy a fix.
`,
    category: "saas",
    tags: ["Stripe", "Payments", "Node.js", "Reliability"],
    publishedAt: "2024-09-22",
    readTime: "9 min read",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
 
  {
    id: "6",
    slug: "from-junior-to-mid-level-engineer",
    title: "What Actually Moved Me from Junior to Mid-Level Engineer",
    excerpt: "It wasn't learning more frameworks. The shift came when I started thinking about systems, trade-offs, and the humans who maintain code after it's written.",
    content: `
## The Chasm Between Junior and Senior

When I was a junior engineer, I measured my progress by how many frameworks I knew. "I know React, Vue, Express, and Django!" But when I got my first mid-level role, I realized that the business didn't care about frameworks. The business cared about shipped features, stability, and maintainability.

## 3 Mindset Shifts That Promoted Me

### 1. Thinking in Systems, Not Files
A junior engineer looks at a bug and says "I need to fix this \`useEffect\`." A senior engineer looks at a bug and asks, "Why is this state even managed on the client? Shouldn't this be server-state?" 
I stopped treating tickets as isolated code edits, and started treating them as architectural decisions.

### 2. Empathy for the Next Developer
Code is read 10x more than it is written. I stopped writing "clever" one-liners using obscure array reducers. I started writing boring, predictable, highly-readable code. I started writing meaningful commit messages. I realized that my most important audience wasn't the compiler—it was the exhausted engineer (probably me) who has to debug this code at 3 AM in six months.

### 3. Owning the Delivery
Juniors merge their PR and say "my part is done." Mid-level and senior engineers follow their code into production. They check the logs. They monitor the error tracking (Sentry/Datadog). They verify with the product manager that the business requirement was actually solved.
`,
    category: "updates",
    tags: ["Career", "Engineering", "Growth", "Mentorship"],
    publishedAt: "2024-08-18",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "7",
    slug: "building-production-agents-langgraph",
    title: "Why I Migrated from LangChain to LangGraph for Production Agents",
    excerpt: "Building autonomous AI agents requires complex state management and cyclic graphs. Here's why LangGraph is the only viable architecture for production-grade agentic systems.",
    content: `
## The Limitations of LangChain

LangChain was the spark that ignited the LLM application boom. It's fantastic for prototyping simple sequential chains (Prompt -> LLM -> Output). But the moment you try to build a truly autonomous agent—one that needs to route decisions, handle API failures, loop back to correct its own mistakes, and manage complex long-term memory—LangChain's rigid abstractions become a nightmare.

## Enter LangGraph

LangGraph treats your AI agent not as a chain, but as a **Cyclic Graph**. 

### 1. State as a First-Class Citizen
In LangGraph, you define a strict TypedDict representing the overall "State" of the conversation or task. Every node (function/LLM call) takes the State, mutates it, and returns the updated State. This makes it incredibly easy to track exactly what the agent knows at any given moment.

### 2. Conditional Edges for Real Autonomy
Unlike a chain, a graph allows for loops. You can have a node that validates the LLM's output. If the output is missing required JSON fields, a "conditional edge" loops the execution back to the LLM node with an error message: "You forgot the 'date' field, try again." This self-correction loop is the secret to production-grade agents.

### 3. Human-in-the-Loop
LangGraph allows you to set "breakpoints." The agent can do 90% of the work, pause execution, and wait for a human to click "Approve" before sending an email or executing a high-stakes database query.

If you are building AI agents for the enterprise, LangGraph is the only serious architecture choice right now.
`,
    category: "ai-rag",
    tags: ["AI", "LangGraph", "LangChain", "Architecture", "Python"],
    publishedAt: "2024-12-05",
    readTime: "12 min read",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "8",
    slug: "zero-downtime-deployments-docker-aws",
    title: "Achieving True Zero-Downtime Deployments with Docker and AWS ECS",
    excerpt: "Downtime during deployments is unacceptable for SaaS platforms. A practical guide to blue-green deployments, container orchestration, and routing traffic seamlessly.",
    content: `
## The Cost of Downtime

If you run a B2B SaaS, telling your customers "we will be down for 2 hours on Sunday for maintenance" is no longer acceptable. Modern deployments must be invisible to the end user.

## Blue/Green Deployments with AWS ECS

To achieve true zero-downtime deployments, you cannot simply stop your old server and start the new one. You need a Blue/Green deployment strategy.

### The Architecture
1. **The Load Balancer (ALB)**: All user traffic hits an Application Load Balancer.
2. **The Blue Target Group**: The ALB routes 100% of traffic to the current running Docker containers (Blue).
3. **The Deployment Phase**: When you merge to \`main\`, GitHub Actions builds the new Docker image and pushes it to ECR.
4. **The Green Target Group**: AWS ECS spins up the new containers (Green) in a separate target group. The ALB does *not* route user traffic to them yet.
5. **Health Checks**: ECS pings the \`/health\` endpoint of the Green containers. If they fail (e.g., due to a bad database migration or crash), the deployment halts. The users on Blue never notice a thing.
6. **The Switch**: If Green is healthy, the ALB instantly swaps the routing rules. 100% of traffic now flows to Green.
7. **The Drain**: The old Blue containers are gracefully drained of any active connections and then terminated.

By combining Docker, AWS ECS, and proper health checks, we eliminated deployment anxiety. We now deploy to production 15 times a day, with zero dropped requests.
`,
    category: "fullstack",
    tags: ["DevOps", "Docker", "AWS", "CI/CD"],
    publishedAt: "2025-01-12",
    readTime: "8 min read",
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "9",
    slug: "framer-motion-complex-ui-animations",
    title: "Orchestrating Complex UI Animations with Framer Motion in Next.js",
    excerpt: "How to build buttery-smooth, layout-shifting animations without tanking performance. Exploring AnimatePresence, Layout animations, and custom variants.",
    content: `
## Why Animations Usually Fail

When you add animations to a React application, performance is the first casualty. Most developers use CSS transitions tightly coupled to React state, leading to unnecessary re-renders. When 50 items in a list re-render just to slide into view, your main thread blocks and the application stutters.

## The Framer Motion Architecture

Framer Motion solves this by bypassing the React render cycle for animations. When a value changes, Framer Motion updates the DOM directly.

### 1. \`AnimatePresence\` for Exit Animations
React has no native way to defer the unmounting of a component until an animation finishes. By wrapping your dynamic routes or modals in \`<AnimatePresence mode="wait">\`, Framer Motion holds the component in the DOM, runs the \`exit\` animation, and only then triggers the unmount. This is critical for building a premium, app-like feel.

### 2. Layout Animations (The Magic Trick)
In complex dashboards, elements often change position (e.g., moving a card from "To Do" to "Done"). Calculating the transform coordinates manually is mathematically intense. 
Instead, simply add the \`layout\` prop to your motion components. Framer Motion calculates the bounding box of the element before and after the state change, and seamlessly interpolates the transform.

### 3. Orchestration with Variants
Never hardcode \`initial\` and \`animate\` props on every single list item. Define a \`container\` variant with \`staggerChildren: 0.1\`, and an \`item\` variant. Apply them to the parent \`<motion.ul>\` and child \`<motion.li>\`. This keeps your JSX clean and ensures your animations remain perfectly synchronized across the entire layout.
`,
    category: "mobile",
    tags: ["React", "Framer Motion", "Animations", "UI/UX"],
    publishedAt: "2025-02-04",
    readTime: "7 min read",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "10",
    slug: "nestjs-microservices-message-queues",
    title: "Scaling Backend Systems: NestJS Microservices and Message Queues",
    excerpt: "Moving from a monolith to event-driven microservices. Deep dive into NestJS, RabbitMQ, and managing distributed data consistency.",
    content: `
## The Microservice Trap

Every growing startup eventually hits the "Microservice Trap." The monolithic REST API starts getting slow, so the engineering team breaks it apart. But instead of microservices, they build a "Distributed Monolith" where Service A makes synchronous HTTP calls to Service B. When Service B goes down, the entire system crashes.

## Event-Driven Architecture with NestJS

### 1. Ditch HTTP for Internal Communication
Internal services should rarely talk via HTTP. Instead, use a Message Broker (RabbitMQ or Kafka). In NestJS, this is built-in via the \`@nestjs/microservices\` package. 
When a user registers, the Auth service doesn't call the Email service. It simply emits a \`user.created\` event to RabbitMQ and forgets about it. The Email service listens for that event and sends the welcome email.

### 2. The Outbox Pattern
How do you guarantee that a database transaction succeeds AND the RabbitMQ event is published? You can't. Distributed transactions (Two-Phase Commit) are notoriously flaky.
Instead, use the Outbox Pattern. When you create a user in PostgreSQL, you also write an event payload to an \`outbox\` table in the *same* database transaction. A separate background worker reads the \`outbox\` table and reliably pushes the events to RabbitMQ.

### 3. Idempotency at the Consumer
Because RabbitMQ guarantees "at-least-once" delivery, your Email service might receive the \`user.created\` event twice. Every consumer must be idempotent. Always check your local database ("Did I already send a welcome email to user ID 123?") before acting on an event.
`,
    category: "architecture",
    tags: ["NestJS", "Microservices", "RabbitMQ", "Architecture"],
    publishedAt: "2025-03-15",
    readTime: "11 min read",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "11",
    slug: "optimizing-postgresql-queries-indexes",
    title: "10x Database Performance: Optimizing PostgreSQL Queries and Indexes",
    excerpt: "When your database becomes the bottleneck, adding more RAM isn't always the answer. Understanding EXPLAIN ANALYZE, composite indexes, and query tuning.",
    content: `
## The "More RAM" Fallacy

When a database query slows down, the knee-jerk reaction is to upgrade the RDS instance. Doubling your RAM might mask the problem for a month, but it doesn't fix a sequential scan on a 50-million-row table.

## 3 Steps to 10x Query Performance

### 1. \`EXPLAIN ANALYZE\` is Your Best Friend
Never guess why a query is slow. Prefix your query with \`EXPLAIN ANALYZE\` to see the exact execution plan. If you see \`Seq Scan\`, it means PostgreSQL is reading every single row in the table. You need an index.

### 2. The Power of Composite Indexes
Most developers know how to index a single column. But what if your query is:
\`SELECT * FROM orders WHERE status = 'pending' AND tenant_id = 45 ORDER BY created_at DESC\`?
Individual indexes on \`status\` and \`tenant_id\` won't help much. You need a **Composite Index**. 
The golden rule of composite indexes is the **Equality, Range, Sort** rule. Index the columns you check for equality first (\`tenant_id\`, \`status\`), then the range/sort columns (\`created_at\`).

### 3. Partial Indexes for Specific Workloads
If you only ever query for "active" users, why index the millions of "deleted" users?
\`CREATE INDEX idx_active_users ON users (email) WHERE deleted_at IS NULL;\`
This creates a massive reduction in index size, meaning it fits entirely into RAM and lightning-fast to traverse.

By applying these three rules, we dropped our P99 query latency from 800ms down to 12ms without upgrading our hardware.
`,
    category: "tutorials",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"],
    publishedAt: "2025-04-22",
    readTime: "9 min read",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
  {
    id: "12",
    slug: "vector-databases-rag-pipelines",
    title: "Choosing the Right Vector Database for Production RAG Pipelines",
    excerpt: "Pinecone vs ChromaDB vs pgvector. Benchmarking search latency, filtering capabilities, and scalability for AI-agentic retrieval systems.",
    content: `
## The Vector Database Boom

With the rise of Retrieval-Augmented Generation (RAG), vector databases have become a critical piece of the modern AI stack. But the market is flooded with options: Pinecone, ChromaDB, Weaviate, Qdrant. Which one should you use in production?

## Why I Chose pgvector

After benchmarking dedicated vector databases, I migrated all our production RAG pipelines back to PostgreSQL using the \`pgvector\` extension.

### 1. The Metadata Filtering Problem
In a multi-tenant SaaS, you NEVER want User A to retrieve User B's embeddings. In Pinecone, this requires complex metadata filtering. But in \`pgvector\`, it's just a standard SQL \`WHERE tenant_id = 45\` clause combined with your vector similarity search (\`ORDER BY embedding <-> '[0.1, 0.2...]' LIMIT 5\`). 

### 2. Operational Simplicity
Adding a dedicated vector database means adding another piece of infrastructure to monitor, backup, and secure. It also means your relational data and your vector data are now fundamentally out of sync. 
By keeping the embeddings in Postgres alongside the source text, a single database backup captures the entire state of your application.

### 3. Indexing for Scale
Out of the box, \`pgvector\` does exact nearest neighbor (KNN) search, which is slow for millions of rows. But by adding an HNSW (Hierarchical Navigable Small World) index to your embedding column, you achieve Approximate Nearest Neighbor (ANN) search with sub-millisecond latency and 99% recall accuracy.

Unless you are indexing billions of vectors at enterprise scale, start with \`pgvector\`. Keep your architecture boring, and let the AI do the magic.
`,
    category: "ai-rag",
    tags: ["AI", "RAG", "Vector Databases", "pgvector"],
    publishedAt: "2025-05-10",
    readTime: "10 min read",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=450",
    isFeatured: false,
    author: {
      name: "Muhammad Usman",
      role: "Full Stack & Applied AI Engineer",
      avatar: "/muhammad_usman_hero_slider_updated/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg",
      bio: "Building production systems with Next.js, NestJS, LangChain, and PostgreSQL.",
    },
  },
];

export const getFeaturedPost = () => blogPosts.find((p) => p.isFeatured);
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (currentSlug: string, category: string) =>
  blogPosts.filter((p) => p.slug !== currentSlug && p.category === category).slice(0, 3);
