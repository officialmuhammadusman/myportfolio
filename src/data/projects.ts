import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mejora-tu-dolor",
    slug: "mejora-tu-dolor",
    title: "Mejora Tu Dolor — Telemedicine Platform",
    shortDescription:
      "Telemedicine platform for chronic pain specialists — video booking, Webpay payments, async medical reviews, and specialist dashboards live in Chile.",
    longDescription:
      "Mejora Tu Dolor connects patients with certified chronic-pain specialists through secure teleconsultations. The platform covers the full care journey: time-slot booking, Webpay payment, automated email confirmation with secure video links, asynchronous multi-file medical review (labs, imaging, diagnostic charts), specialist dashboards consolidating patient history, and cross-regional physician referral flows.",
    category: ["full-stack", "frontend", "backend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/mejora-tu-dolor.png",
    screenshots: ["/images/projects/live/mejora-tu-dolor.png"],
    liveUrl: "https://mejoratudolor.cl",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "Tailwind CSS", color: "#FFFFFF", bgColor: "#0F172A" },
      { name: "Webpay", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Live in Chile", icon: "Globe" },
      { label: "Webpay Payments", icon: "CreditCard" },
      { label: "Video Consults", icon: "Video" },
      { label: "Async Reviews", icon: "FileText" },
    ],
    features: [
      {
        icon: "Calendar",
        title: "Video Consultation Booking",
        description:
          "End-to-end booking flow with time-slot selection, confirmation, and secure video access links delivered by email after payment.",
      },
      {
        icon: "CreditCard",
        title: "Webpay Payment Integration",
        description:
          "Secure Chilean Webpay checkout wired into the appointment flow with transparent pricing and automated confirmation.",
      },
      {
        icon: "FileUp",
        title: "Async Medical Review Module",
        description:
          "Patients upload diagnostic charts, lab reports, and imaging for specialist review on a structured ~7-day turnaround.",
      },
      {
        icon: "LayoutDashboard",
        title: "Specialist Dashboard",
        description:
          "Consolidates a patient's full document and consultation history into a single view ahead of each call.",
      },
      {
        icon: "GitBranch",
        title: "Cross-Regional Referrals",
        description:
          "Physicians can route complex cases to specialists across the platform without leaving the care workflow.",
      },
      {
        icon: "Stethoscope",
        title: "Patient Care Journey",
        description:
          "Public site supports specialist search, visit types, reminders, e-prescriptions, FAQ, and health content for chronic conditions.",
      },
    ],
    technicalDecisions: [
      {
        title: "Booking + payment as one transactional journey",
        content:
          "Appointment availability, Webpay confirmation, and video-link issuance are treated as a single care journey so patients never land in a paid-but-unconfirmed state.",
      },
      {
        title: "Async review for specialist throughput",
        content:
          "Heavy clinical document review is separated from live video slots so specialists can triage cases asynchronously before consultations.",
      },
    ],
    challenges: [
      {
        problem: "Patients needed both live video care and document-heavy specialist review.",
        solution:
          "Built dual paths — instant teleconsult booking and a multi-file async review module with specialist routing.",
      },
      {
        problem: "Complex cases required specialists outside the patient's local region.",
        solution:
          "Implemented cross-regional referral flow so physicians can hand off cases inside the same platform.",
      },
    ],
    performanceMetrics: [
      { label: "Care paths", value: "2", unit: "live + async" },
      { label: "Payment", value: "Webpay", unit: "Chile" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "cliender",
    slug: "cliender",
    title: "Cliender — Business Management SaaS",
    shortDescription:
      "Cloud business management for local operators — POS, appointments, billing, leads, live dashboards, and geolocation marketing.",
    longDescription:
      "Cliender is a business management SaaS for local businesses. Core delivery includes point-of-sale and cloud operations modules, unified appointment scheduling with billing and lead tracking, a real-time performance cockpit (employees, clients, social engagement), and geolocation-based targeting for local marketing tools — helping operators run day-to-day work from one platform.",
    category: ["full-stack", "frontend", "backend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/cliender.png",
    screenshots: ["/images/projects/live/cliender.png"],
    liveUrl: "https://cliender.com",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "Cloud", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Live SaaS", icon: "Globe" },
      { label: "POS + CRM", icon: "Store" },
      { label: "Geo Marketing", icon: "MapPin" },
      { label: "Live Cockpit", icon: "BarChart2" },
    ],
    features: [
      {
        icon: "Store",
        title: "POS & Cloud Operations",
        description:
          "Core dashboard modules for point-of-sale and cloud-based day-to-day business management.",
      },
      {
        icon: "Calendar",
        title: "Appointments + Billing + Leads",
        description:
          "Unified system combining scheduling, billing, and lead tracking so operators stop juggling tools.",
      },
      {
        icon: "BarChart2",
        title: "Real-Time Performance Cockpit",
        description:
          "Live views consolidating employee output, client metrics, and social engagement data.",
      },
      {
        icon: "MapPin",
        title: "Geolocation Marketing",
        description:
          "Local targeting tools that help businesses run location-aware campaigns from the same platform.",
      },
      {
        icon: "MessageSquare",
        title: "Omnichannel Business Ops",
        description:
          "Product surface supports CRM-style follow-up, inventory-aware ops, and marketing channels around the local business workflow.",
      },
      {
        icon: "Layers",
        title: "Modular Vertical Delivery",
        description:
          "Built to serve local service businesses with modules that can expand across sales, ops, and media workflows.",
      },
    ],
    technicalDecisions: [
      {
        title: "One cockpit instead of tool sprawl",
        content:
          "Appointments, billing, leads, and performance metrics share one operational model so local teams get a single source of truth.",
      },
      {
        title: "Geo as a first-class marketing signal",
        content:
          "Location targeting is wired into marketing tools rather than bolted on as a separate campaign spreadsheet.",
      },
    ],
    challenges: [
      {
        problem: "Local businesses were losing leads and time across disconnected POS, calendar, and marketing tools.",
        solution:
          "Unified core modules into one cloud cockpit with live operational metrics.",
      },
    ],
    performanceMetrics: [
      { label: "Modules", value: "POS + CRM + Geo" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "hrms-portal",
    slug: "hrms-portal",
    title: "HRMS Portal — Enterprise People Platform",
    shortDescription:
      "Enterprise HR platform with admin-configurable RBAC, employees, attendance, hiring, and project modules.",
    longDescription:
      "BXTrack HRMS is an enterprise people platform with a dynamic, admin-configurable role-based permission system (permissions assigned per role from the admin panel, not hardcoded). It covers employee onboarding and department hierarchy, attendance and leave with multi-step approvals, hiring/recruitment pipelines, and project/task tracking for teams.",
    category: ["full-stack", "backend", "frontend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/hrms-portal.png",
    screenshots: ["/images/projects/live/hrms-portal.png"],
    liveUrl: "https://hrms-portal-beta.vercel.app",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "RBAC", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Dynamic RBAC", icon: "Shield" },
      { label: "Approvals", icon: "CheckCircle2" },
      { label: "Hiring Pipeline", icon: "Users" },
      { label: "Live Beta", icon: "Globe" },
    ],
    features: [
      {
        icon: "Shield",
        title: "Dynamic Role-Based Permissions",
        description:
          "Admins assign permissions per role from the panel — access rules are configurable, not hardcoded into the app.",
      },
      {
        icon: "Users",
        title: "Employee Management",
        description:
          "Onboarding flows, department hierarchy, and profile records for the full employee lifecycle.",
      },
      {
        icon: "CalendarCheck",
        title: "Attendance & Leave Approvals",
        description:
          "Attendance tracking and leave requests with multi-step approval workflows.",
      },
      {
        icon: "UserPlus",
        title: "Hiring & Recruitment",
        description:
          "Candidate pipeline module for tracking applicants through hiring stages.",
      },
      {
        icon: "Kanban",
        title: "Project & Task Tracking",
        description:
          "Project management module for task assignment and team progress tracking.",
      },
      {
        icon: "Lock",
        title: "Secure Portal Access",
        description:
          "Authenticated employee portal with login and password recovery for workforce access.",
      },
    ],
    technicalDecisions: [
      {
        title: "Permissions as data, not code",
        content:
          "RBAC is admin-configurable so organizations can evolve roles without shipping a new release for every permission change.",
      },
      {
        title: "Approval workflows as first-class state machines",
        content:
          "Leave and attendance approvals use explicit multi-step states so auditability and accountability stay clear.",
      },
    ],
    challenges: [
      {
        problem: "Hardcoded permissions blocked different client org structures.",
        solution:
          "Built a dynamic RBAC matrix configurable from the admin panel.",
      },
    ],
    performanceMetrics: [
      { label: "Core modules", value: "5+" },
      { label: "Access model", value: "Dynamic RBAC" },
      { label: "Status", value: "Live beta" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "padel-connect",
    slug: "padel-connect",
    title: "Padel Connect — Club & Matchmaking Platform",
    shortDescription:
      "Smart padel platform with club-owner dashboard, skill-based matchmaking, player app flows, and subscription landing.",
    longDescription:
      "Padel Connect is a dual-sided sports platform: a club-owner web dashboard for managing matches, player-level upgrades, and club operations; skill-level matchmaking for fair pairing; player-facing mobile flows to view/join matches, approve or decline requests, and track availability; plus a marketing landing with feature sections, pricing tiers, store CTAs, and subscription-based access.",
    category: ["full-stack", "frontend", "real-time"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/padel-connect.png",
    screenshots: ["/images/projects/live/padel-connect.png"],
    liveUrl: "https://padel-fe.vercel.app",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "React Native", color: "#FFFFFF", bgColor: "#0A0A0A" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "Tailwind CSS", color: "#FFFFFF", bgColor: "#0F172A" },
    ],
    badges: [
      { label: "Club Dashboard", icon: "LayoutDashboard" },
      { label: "Matchmaking", icon: "Users" },
      { label: "Mobile App", icon: "Smartphone" },
      { label: "Subscriptions", icon: "CreditCard" },
    ],
    features: [
      {
        icon: "LayoutDashboard",
        title: "Club-Owner Dashboard",
        description:
          "Web dashboard for managing matches, approving player-level upgrade requests, and overseeing club operations.",
      },
      {
        icon: "Users",
        title: "Skill-Based Matchmaking",
        description:
          "Matchmaking logic pairs players by skill level so games stay competitive and fair.",
      },
      {
        icon: "Smartphone",
        title: "Player Mobile Flows",
        description:
          "Core screens for viewing/joining matches, approving or declining requests, and tracking availability.",
      },
      {
        icon: "Megaphone",
        title: "Marketing Landing",
        description:
          "Growth landing with feature sections, pricing tiers, and App Store / Play Store integration points.",
      },
      {
        icon: "CreditCard",
        title: "Subscription Access Model",
        description:
          "Tiered plans control platform access for clubs and players.",
      },
      {
        icon: "Trophy",
        title: "Dual Product Surface",
        description:
          "One system serving club operators and players with synchronized match and availability workflows.",
      },
    ],
    technicalDecisions: [
      {
        title: "Skill as the matchmaking primitive",
        content:
          "Pairing is driven by skill level so club quality and player retention stay higher than random open matches.",
      },
      {
        title: "Club ops + player app as one product",
        content:
          "Approvals, upgrades, and availability are shared across dashboard and mobile so operations stay consistent.",
      },
    ],
    challenges: [
      {
        problem: "Clubs needed operations control while players needed a fast mobile match experience.",
        solution:
          "Split surfaces — web dashboard for clubs, mobile flows for players — on shared matchmaking rules.",
      },
    ],
    performanceMetrics: [
      { label: "Surfaces", value: "Web + Mobile" },
      { label: "Model", value: "Subscriptions" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },

  {
    id: "desert-speed-tourism",
    slug: "desert-speed-tourism",
    title: "Desert Speed Tourism",
    shortDescription: "Premium tourism and safari booking platform for Dubai visitors, featuring custom packages, live WhatsApp integration, and immersive visuals.",
    longDescription: "Desert Speed Tourism is a comprehensive booking platform for UAE desert safaris and city tours. Built to handle high-volume tourist traffic with seamless WhatsApp booking integration, dynamic tour packages, and an immersive, image-first design that converts visitors into customers.",
    category: ["frontend", "full-stack"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "https://iad.microlink.io/2bJgTlbtbC6Cwz3wjtDE1jALxzowQh-yFmsV88IiTwdZA_rxXR4PUQIACkdcrHbLtKfDsYWqFTskkkfV3sEgBg.png",
    screenshots: [
      "https://iad.microlink.io/2bJgTlbtbC6Cwz3wjtDE1jALxzowQh-yFmsV88IiTwdZA_rxXR4PUQIACkdcrHbLtKfDsYWqFTskkkfV3sEgBg.png"
    ],
    liveUrl: "https://bookdubaiguide.com",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Tailwind CSS", color: "#FFFFFF", bgColor: "#0F172A" },
      { name: "Framer Motion", color: "#000000", bgColor: "#E5E7EB" },
    ],
    badges: [
      { label: "Live in UAE", icon: "Globe" },
      { label: "WhatsApp Booking", icon: "Smartphone" },
      { label: "High Conversion", icon: "BarChart2" },
    ],
    features: [
      {
        icon: "Map",
        title: "Dynamic Tour Packages",
        description: "Showcasing premium desert safaris, buggy rentals, and city tours with clear pricing and itineraries.",
      },
      {
        icon: "MessageSquare",
        title: "Direct WhatsApp Booking",
        description: "Frictionless booking flow that drops customers directly into a WhatsApp conversation with pre-filled tour details.",
      },
      {
        icon: "Image",
        title: "Immersive Visuals",
        description: "Cinematic, full-bleed imagery that sells the experience before the customer even reads the text.",
      },
    ],
    technicalDecisions: [
      {
        title: "Optimized for Mobile Conversion",
        content: "Tourists book on the go. The site is aggressively optimized for mobile performance and one-tap WhatsApp integration, skipping complex checkout flows for higher conversion.",
      }
    ],
    challenges: [
      {
        problem: "Users dropping off during traditional multi-step checkout.",
        solution: "Implemented one-click WhatsApp booking to capture leads instantly.",
      }
    ],
    performanceMetrics: [
      { label: "Platform", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },





















  // {
  //   id: "2",
  //   slug: "project-management-saas",
  //   title: "Project Management SaaS",
  //   shortDescription: "Real-time kanban with Socket.io, Reddit-style nested comments via MongoDB $graphLookup, and sprint analytics with Gantt charts.",
  //   longDescription: "A SaaS project management platform with real-time kanban boards, nested comment threads, and comprehensive sprint analytics designed for development teams.",
  //   category: ["full-stack", "real-time"],
  //   status: "in-progress",
  //   year: "2024",
  //   isFeatured: true,
  //   heroImage: "/images/projects/pm-hero.jpg",
  //   screenshots: [
  //     "/images/projects/pm-1.jpg",
  //     "/images/projects/pm-2.jpg",
  //     "/images/projects/pm-3.jpg",
  //   ],
  //   liveUrl: "https://pm-saas-demo.vercel.app",
  //   githubUrl: "https://github.com/alexjohnson/project-management-saas",
  //   techStack: [
  //     { name: "Next.js 15", color: "#FFFFFF", bgColor: "#000000" },
  //     { name: "TypeScript", color: "#FFFFFF", bgColor: "#3178C6" },
  //     { name: "MongoDB", color: "#FFFFFF", bgColor: "#13AA52" },
  //     { name: "Socket.io", color: "#FFFFFF", bgColor: "#010101" },
  //     { name: "Redis", color: "#FFFFFF", bgColor: "#DC382D" },
  //     { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
  //   ],
  //   badges: [
  //     { label: "30+ Tests", icon: "TestTube2" },
  //     { label: "Real-Time Sync", icon: "Zap" },
  //     { label: "Deployed", icon: "Globe" },
  //     { label: "Swagger Docs", icon: "FileText" },
  //   ],
  //   features: [
  //     {
  //       icon: "MessageSquare",
  //       title: "Recursive Comment System",
  //       description: "Nested comments (unlimited depth) using MongoDB $graphLookup aggregation. Full comment tree returned in a single database call with sub-100ms performance at 1000+ comments.",
  //     },
  //     {
  //       icon: "Kanban",
  //       title: "Real-Time Kanban Board",
  //       description: "Drag-and-drop task management with Socket.io. When a user moves a task, all connected users see the update in under 100ms. Optimistic UI updates for zero perceived latency.",
  //     },
  //     {
  //       icon: "Calendar",
  //       title: "Sprint Planning & Gantt Charts",
  //       description: "Create 1-4 week sprints, assign tasks, visualize dependencies with Gantt charts, and track progress with burn-down charts and retrospective templates.",
  //     },
  //     {
  //       icon: "BarChart2",
  //       title: "Sprint Analytics",
  //       description: "Completion rate vs plan, velocity in story points per sprint, cycle time from created to done, and team productivity trends over time.",
  //     },
  //     {
  //       icon: "Bell",
  //       title: "Real-Time Notifications",
  //       description: "Browser notifications and email for task assignment, comment mentions, and approaching due dates. Powered by Socket.io with email fallback.",
  //     },
  //     {
  //       icon: "Users",
  //       title: "Role-Based Access Control",
  //       description: "Owner, Manager, Developer, Viewer roles with cascading permissions. Middleware validates role and resource ownership on every API call.",
  //     },
  //   ],
  //   technicalDecisions: [
  //     {
  //       title: "MongoDB for Recursive Data",
  //       content: "Project management data is heavily nested: Projects → Sprints → Tasks → Comments. SQL would require 5 JOIN statements to fetch a task with all comments. MongoDB $graphLookup aggregation handles this in a single query regardless of depth — not efficiently possible in SQL without recursive CTEs which are slow. Trade-off: loss of ACID guarantees for distributed transactions. Since this is a collaboration tool where eventual consistency is acceptable, this is a reasonable trade-off.",
  //     },
  //     {
  //       title: "Socket.io for Real-Time Kanban",
  //       content: "Kanban drag-and-drop requires sub-100ms latency. HTTP polling every 500ms would create unacceptable lag. Socket.io uses persistent WebSocket connections to push updates to all connected clients. When a user moves a task, the server broadcasts to all clients in that project room. Chosen over alternatives because it works in production without complex setup, has polling fallback if WebSocket is unavailable, has a built-in room concept, and TypeScript types are available.",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       problem: "Real-time sync conflicts when two users simultaneously edited the same task — traditional last-write-wins loses data.",
  //       solution: "Implemented Operational Transformation (OT) using the Yjs CRDT library for collaborative text editing. This ensures all clients converge to the same state even with concurrent edits. Non-text fields (status, assignee) use timestamp-based conflict resolution with a deterministic winner.",
  //     },
  //     {
  //       problem: "Real-time update storm — bulk operations broadcast 50 updates simultaneously, causing UI lag for all connected clients.",
  //       solution: "Implemented batch socket.io emissions that collect all changes in a 100ms window then send a single batch update. Reduces network traffic 50x. UI updates once with all changes instead of 50 rapid successive updates.",
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: "Real-Time Update Latency", value: "<100ms", unit: "WebSocket" },
  //     { label: "Task + Comments Query", value: "<150ms" },
  //     { label: "Page Load (LCP)", value: "1.2s" },
  //     { label: "Bundle Size", value: "55KB", unit: "gzipped" },
  //   ],
  //   testCount: "30+",
  //   testCoverage: "80%",
  // },

  // {
  //   id: "3",
  //   slug: "scoutiq-cricket-saas",
  //   title: "ScoutIQ — Cricket Team SaaS",
  //   shortDescription: "Enterprise cricket management SaaS with live ball-by-ball scoring, player analytics, multi-tenant architecture, and Stripe subscription billing.",
  //   longDescription: "ScoutIQ is a comprehensive cricket team management SaaS platform enabling academy and club admins to manage players, schedule matches, record live scores, and generate advanced performance analytics.",
  //   category: ["full-stack", "real-time", "performance"],
  //   status: "in-progress",
  //   year: "2024",
  //   isFeatured: true,
  //   heroImage: "/images/projects/scoutiq-hero.jpg",
  //   screenshots: [
  //     "/images/projects/scoutiq-1.jpg",
  //     "/images/projects/scoutiq-2.jpg",
  //     "/images/projects/scoutiq-3.jpg",
  //     "/images/projects/scoutiq-4.jpg",
  //   ],
  //   liveUrl: "https://scoutiq-demo.vercel.app",
  //   githubUrl: "https://github.com/alexjohnson/scoutiq",
  //   techStack: [
  //     { name: "Next.js 15", color: "#FFFFFF", bgColor: "#000000" },
  //     { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
  //     { name: "Redis", color: "#FFFFFF", bgColor: "#DC382D" },
  //     { name: "Socket.io", color: "#FFFFFF", bgColor: "#010101" },
  //     { name: "Stripe", color: "#FFFFFF", bgColor: "#635BFF" },
  //     { name: "Prisma", color: "#FFFFFF", bgColor: "#2D3748" },
  //   ],
  //   badges: [
  //     { label: "35+ Tests", icon: "TestTube2" },
  //     { label: "Multi-Tenant", icon: "Building2" },
  //     { label: "Live Scoring", icon: "Activity" },
  //     { label: "Stripe Billing", icon: "CreditCard" },
  //     { label: "Redis Cache", icon: "Zap" },
  //   ],
  //   features: [
  //     {
  //       icon: "Building2",
  //       title: "Multi-Tenant Architecture",
  //       description: "Each academy gets an isolated workspace. OrganizationId enforced on every query. One user can own multiple organizations with separate subscriptions. Soft delete for 30-day data recovery.",
  //     },
  //     {
  //       icon: "User",
  //       title: "Player Profiling & Career Stats",
  //       description: "Full player profiles with batting average, strike rate, bowling economy, and form rating. Stats auto-update after every match. Form visualization with last-10-innings charts.",
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Live Ball-by-Ball Scoring",
  //       description: "Real-time match scorecard entry with runs, extras, wickets, and over summaries. Socket.io broadcasts updates to all viewers in under 100ms. Shareable public scorecard link.",
  //     },
  //     {
  //       icon: "BarChart2",
  //       title: "Advanced Analytics",
  //       description: "Team win/loss ratio, player radar charts (Batting/Bowling/Fielding/Consistency/Form), head-to-head comparison, season analytics, and Redis-cached leaderboards.",
  //     },
  //     {
  //       icon: "Calendar",
  //       title: "Fixture & Availability Management",
  //       description: "Calendar view of all matches and training sessions. Availability poll before matches with auto-squad suggestion based on availability plus form rating.",
  //     },
  //     {
  //       icon: "CreditCard",
  //       title: "Subscription Billing (3 Tiers)",
  //       description: "Free, Pro ($19/mo), Elite ($49/mo) tiers with feature gating. Stripe handles recurring billing, proration, invoicing, and tax calculation across regions.",
  //     },
  //   ],
  //   technicalDecisions: [
  //     {
  //       title: "PostgreSQL for Structured Data",
  //       content: "Cricket team management has highly structured data: Teams → Players → Matches → Scores. Relationships are fixed and benefit from ACID guarantees — a player must belong to a valid team, a match must have valid players. PostgreSQL foreign key constraints enforce this at the database level. Advanced window functions enable complex analytics like running averages and career rankings that would require application-layer code in MongoDB.",
  //     },
  //     {
  //       title: "Redis Sorted Sets for Leaderboards",
  //       content: "Leaderboards require sorting 1000+ players by various stats. Database query would take 100-200ms. But leaderboards are read-heavy (displayed on many pages) and update only when match stats change. Redis sorted sets — ZADD/ZRANGE — are O(log N) and sub-1ms. Leaderboard updated after every match. This reduces database load 95% for leaderboard queries. Trade-off: one more infrastructure component, justified by the performance gain.",
  //     },
  //     {
  //       title: "Multi-Tenant with organizationId",
  //       content: "Every table has an organizationId column. Every query is filtered by organizationId. This ensures complete data isolation between teams, easy onboarding of new teams, and clean cascade deletion. Mitigated the risk of missing the filter by implementing Prisma middleware that automatically appends organizationId to every query based on the authenticated user's context.",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       problem: "Live match scoring concurrency — when coach enters score, 100+ viewers need instant consistent updates without race conditions or duplicate runs.",
  //       solution: "Optimistic locking at the database level: each score update increments a version number. If update fails on version mismatch (conflict), retry with fresh data. Socket.io broadcasts confirmed state to all viewers. Coach UI shows immediate local update but awaits server confirmation before allowing next ball entry.",
  //     },
  //     {
  //       problem: "Analytics calculation performance — sorting 1000+ players across a season required 500ms+ database queries that blocked UI rendering.",
  //       solution: "Pre-compute and cache results in Redis after every match. Leaderboard queries serve from Redis cache (1ms) instead of database (500ms+). Background job runs nightly to recompute all season analytics. Cache invalidated immediately after any match result is finalized.",
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: "API Response Time", value: "80-120ms", unit: "p95: 200ms" },
  //     { label: "Live Score Latency", value: "<100ms", unit: "Socket.io" },
  //     { label: "Leaderboard Query", value: "<10ms", unit: "from Redis" },
  //     { label: "Lighthouse Score", value: "95+/100" },
  //   ],
  //   testCount: "35+",
  //   testCoverage: "82%",
  // },
  {
    id: "rag-chatbot",
    slug: "rag-chatbot",
    title: "RAG Chatbot — Corrective RAG / Self-RAG",
    shortDescription:
      "Enterprise RAG system combining LangChain, LangGraph, and Pinecone vector databases to provide accurate, grounded responses on private datasets.",
    longDescription:
      "This system tackles one of the biggest challenges with LLMs in production: hallucination. Using a LangGraph multi-agent architecture, the chatbot runs a Corrective RAG (C-RAG) flow. It retrieves documents from Pinecone, scores their relevance, and if the context is insufficient, automatically rewrites the query and searches the web as a fallback mechanism. The frontend is built on Next.js 15, providing a seamless streaming experience.",
    category: ["backend"],
    status: "completed",
    year: "2026",
    isFeatured: false,
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600&h=900",
    screenshots: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600&h=900"],
    liveUrl: null,
    techStack: [
      { name: "LangChain", color: "#FFFFFF", bgColor: "#111111" },
      { name: "LangGraph", color: "#FFFFFF", bgColor: "#FF6A00" },
      { name: "Pinecone", color: "#000000", bgColor: "#E6F0FF" },
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "Redis", color: "#FFFFFF", bgColor: "#DC382D" },
    ],
    badges: [
      { label: "C-RAG", icon: "Brain" },
      { label: "Web Fallback", icon: "Globe" },
      { label: "LangGraph", icon: "Network" },
    ],
    features: [
      {
        icon: "Search",
        title: "Semantic Vector Search",
        description: "High-accuracy semantic retrieval using dense embeddings mapped in a high-dimensional Pinecone index.",
      },
      {
        icon: "Filter",
        title: "Relevance Grading",
        description: "An evaluation node that checks if the retrieved documents actually contain the answer before generation.",
      },
      {
        icon: "Globe",
        title: "Automated Web Fallback",
        description: "If internal documents lack the answer, the agent dynamically rewrites the query and executes a web search using Tavily.",
      }
    ],
    technicalDecisions: [
      {
        title: "Why LangGraph over basic LangChain?",
        content: "Basic chains are linear. In an enterprise RAG system, you need conditional logic (cycles) — 'Did I find the answer? If no, search again.' LangGraph's state machine architecture makes cyclic, reliable agent workflows possible.",
      }
    ],
    challenges: [
      {
        problem: "Latency overhead from multiple LLM calls.",
        solution: "Implemented Redis caching for frequent semantic queries, bypassing the LLM entirely for 40% of standard questions. Used smaller, faster models for the 'grader' nodes.",
      }
    ],
    performanceMetrics: [
      { label: "Answer Accuracy", value: "94%" },
      { label: "Avg Latency", value: "<1.2s", unit: "TTFB Streaming" },
    ],
    testCount: "18+",
    testCoverage: "78%",
  },
  {
    id: "multi-agent",
    slug: "multi-agent",
    title: "Multi-Agent Supervisor & SQL Agent",
    shortDescription:
      "A multi-actor LLM architecture where a supervisor agent routes tasks to specialized sub-agents (SQL extraction, Research, Writing).",
    longDescription:
      "This project demonstrates complex workflow automation. Instead of relying on a single mega-prompt, the system uses a Supervisor Agent built in LangGraph. The supervisor parses the user intent and delegates execution. If a user asks for 'sales data from last Q3', it routes to the SQL Agent which introspects the database schema, writes valid Postgres SQL, runs it, and passes the JSON results to the Writer Agent for summarization.",
    category: ["backend"],
    status: "completed",
    year: "2025",
    isFeatured: false,
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600&h=900",
    screenshots: ["https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600&h=900"],
    liveUrl: null,
    techStack: [
      { name: "LangGraph", color: "#FFFFFF", bgColor: "#FF6A00" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "Python", color: "#FFFFFF", bgColor: "#3776AB" },
      { name: "OpenAI API", color: "#FFFFFF", bgColor: "#10A37F" },
    ],
    badges: [
      { label: "Supervisor Pattern", icon: "GitMerge" },
      { label: "SQL Tool Calling", icon: "Database" },
      { label: "Structured JSON outputs", icon: "Code" },
    ],
    features: [
      {
        icon: "GitMerge",
        title: "Task Delegation",
        description: "Supervisor agent dynamically decides which specialized tool or sub-agent to invoke.",
      },
      {
        icon: "Database",
        title: "Safe SQL Introspection",
        description: "Agent can read schema structure and formulate precise read-only queries against complex relational databases.",
      }
    ],
    technicalDecisions: [
      {
        title: "Separation of Concerns via Agents",
        content: "Using smaller specialized models for sub-tasks (e.g. a strict JSON schema extractor vs a creative writer) massively reduces hallucination and improves determinism compared to one massive LLM call.",
      }
    ],
    challenges: [
      {
        problem: "Agent generating invalid SQL syntax.",
        solution: "Implemented a human-in-the-loop fallback mechanism and automated retry nodes. If the SQL errors out, the error trace is passed back to the SQL agent to self-correct.",
      }
    ],
    performanceMetrics: [
      { label: "SQL Accuracy", value: "92%" },
    ],
    testCount: "12+",
    testCoverage: "74%",
  }
];

export const getFeaturedProjects = () => projects.filter((p) => p.isFeatured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getRelatedProjects = (currentSlug: string) =>
  projects.filter((p) => p.slug !== currentSlug).slice(0, 2);
