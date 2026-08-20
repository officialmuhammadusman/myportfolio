export interface ContactFAQ {
  question: string;
  answer: string;
}

export interface ContactCategory {
  id: string; // The slug from the Mega Menu
  title: string;
  subtitle: string;
  faqs: ContactFAQ[];
}

export const CONTACT_CATEGORIES: ContactCategory[] = [
  {
    id: "inquiry-ai",
    title: "Start an AI Project",
    subtitle: "Integrate LangGraph agents, RAG pipelines, or autonomous workflows into your existing systems.",
    faqs: [
      {
        question: "What is the typical timeline for an AI integration?",
        answer: "A standard RAG implementation or custom LangGraph agent workflow typically takes 4-8 weeks from discovery to production deployment, depending on the complexity of your data sources and security requirements."
      },
      {
        question: "Do I need my own OpenAI API keys?",
        answer: "For initial development and testing, I can use my own sandbox keys. For production deployment, you will need to provide your own API keys (OpenAI, Anthropic, etc.) so billing remains strictly yours."
      },
      {
        question: "Is my corporate data safe?",
        answer: "Absolutely. I implement strict data partitioning, utilize private cloud endpoints when necessary, and ensure that no proprietary data is used to train public LLMs."
      }
    ]
  },
  {
    id: "inquiry-backend",
    title: "Backend Engineering",
    subtitle: "Scale your architecture, migrate legacy APIs, or build secure microservices from scratch.",
    faqs: [
      {
        question: "Which backend technologies do you use?",
        answer: "I specialize in Node.js, NestJS, and Express.js, typically paired with PostgreSQL (via Prisma ORM) and Redis for high-performance caching."
      },
      {
        question: "Can you audit our existing backend?",
        answer: "Yes, I offer comprehensive architectural audits focusing on security vulnerabilities, N+1 query problems, caching strategies, and overall code maintainability."
      },
      {
        question: "Do you handle DevOps and Deployment?",
        answer: "Yes, I configure CI/CD pipelines using GitHub Actions and handle deployments across AWS, Vercel, and Dockerized environments."
      }
    ]
  },
  {
    id: "inquiry-mvp",
    title: "Startup MVP Launch",
    subtitle: "Go from idea to production-ready SaaS in a matter of weeks, not months.",
    faqs: [
      {
        question: "How long does an MVP take to build?",
        answer: "Most MVPs are scoped to be built and launched within 6 to 10 weeks. The exact timeline depends heavily on the complexity of your core feature set."
      },
      {
        question: "Do you provide UI/UX design?",
        answer: "I specialize in engineering and implementing design systems. While I can build beautiful UIs using Tailwind and Shadcn, I highly recommend bringing a Figma design or wireframes for the best results."
      },
      {
        question: "Who owns the code?",
        answer: "You do. Upon project completion and final payment, 100% of the intellectual property and source code is transferred to you."
      }
    ]
  },
  {
    id: "project-brief",
    title: "Submit a Project Brief",
    subtitle: "Tell me about your scope, timeline, and budget. Let's build something massive.",
    faqs: [
      {
        question: "What should I include in my brief?",
        answer: "Please include your core business objective, a high-level list of features, your target launch date, and any specific technology constraints or preferences."
      },
      {
        question: "What is your hourly or project rate?",
        answer: "I primarily work on a fixed-bid basis for well-scoped projects, ensuring you know exactly what you will pay upfront. For ongoing architecture consulting, I offer retainer engagements."
      },
      {
        question: "Do you work with agencies?",
        answer: "Yes, I frequently partner with design and marketing agencies as a white-label technical partner to execute complex engineering tasks."
      }
    ]
  },
  {
    // Fallback for any other contact slug
    id: "general",
    title: "Let's Work Together",
    subtitle: "Discuss your upcoming software build, architectural challenges, or potential partnerships.",
    faqs: [
      {
        question: "Where are you based?",
        answer: "I am based in Pakistan but work remotely with clients worldwide, primarily in the US, UK, KSA, and UAE."
      },
      {
        question: "What is your typical availability?",
        answer: "I typically book projects 2-4 weeks in advance. For urgent architectural consulting, please indicate the timeline in your message."
      },
      {
        question: "Can we schedule a call?",
        answer: "Absolutely. Once you submit this form, I will review your requirements and follow up with a link to schedule a discovery call."
      }
    ]
  }
];
