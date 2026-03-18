import type { ExperienceEntry, EducationEntry, Certification, Testimonial } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    id: "1",
    company: "Wise360 Solution",
    role: "Full Stack Developer",
    startDate: "Jul 2025",
    endDate: "Present",
    location: "Abbottabad, Pakistan (Remote)",
    type: "full-time",
    description: [
      "Architected and developed scalable full-stack web applications using Next.js, React, and Node.js, delivering high-performance solutions for enterprise clients",
      "Designed and implemented RESTful APIs with Express.js and PostgreSQL, handling complex business logic with 95%+ uptime and sub-100ms response times",
      "Built responsive user interfaces with Tailwind CSS and React, ensuring pixel-perfect designs across all devices with 99% accessibility compliance",
      "Implemented secure authentication and authorization systems using JWT and session management, protecting sensitive client data across applications",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "2",
    company: "Robotic World",
    role: "Junior Full Stack Developer",
    startDate: "Nov 2024",
    endDate: "Jun 2025",
    location: "Abbottabad, Pakistan",
    type: "full-time",
    description: [
      "Developed full-stack web applications from concept to production using React, Node.js, and Express, delivering features with zero critical bugs",
      "Created RESTful APIs and optimized database queries with PostgreSQL and MongoDB, achieving 40% improvement in application performance",
      "Implemented responsive UI components with Tailwind CSS and Framer Motion, improving user engagement by 35% through smooth animations and intuitive design",
      "Collaborated with team members on code reviews and debugging, maintaining clean architecture and following SOLID principles throughout development",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    id: "3",
    company: "Uran Codematic",
    role: "Frontend Developer Intern",
    startDate: "Jan 2024",
    endDate: "Mar 2024",
    location: "Abbottabad, Pakistan",
    type: "full-time",
    description: [
      "Developed and maintained  client-facing web applications using React and modern JavaScript, reducing bug reports by 30% through careful component testing",
      "Collaborated with design team to implement pixel-perfect, responsive UIs with Tailwind CSS and mastered responsive design principles",
      "Built reusable React components with clean, well-documented code, improving team productivity and maintainability across projects",
      "Gained hands-on experience with Git version control, agile workflows, and best practices in frontend development and collaborative coding",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git", "REST APIs"],
  },
];



export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad",
    year: "2021 - 2025",
    location: "Abbottabad Campus, Pakistan",
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Career Certificates - Web Developer",
    platform: "Google",
    completedAt: "2024",
    url: "https://google.com/certificates",
  },
  {
    title: "Complete Web Development Bootcamp",
    platform: "Udemy",
    completedAt: "2024",
    url: "https://udemy.com",
  },
  {
    title: "COMSATS University - Frontend Development",
    platform: "COMSATS University Islamabad",
    completedAt: "2024",
    url: "https://comsats.edu.pk",
  },
  {
    title: "Frontend Development Internship",
    platform: "Uran Codematic",
    completedAt: "Mar 2024",
    url: "https://urancedmatic.com",
  },
];
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ali Khan",
    role: "Engineering Manager",
    company: "Hex Technologies",
    avatar: "/images/testimonials/sarah.jpg",
    content: "Usman delivered a production-grade analytics system that now handles over a million events per day. His introduction of a Redis caching layer significantly reduced database load and improved response times. He approaches problems with a strong architectural mindset and consistently delivers high-quality work.",
    rating: 5,
  },
  {
    id: "2",
    name: "Usman Shah",
    role: "CTO",
    company: "BeeTechnica",
    avatar: "/images/testimonials/marcus.jpg",
    content: "Usman built a reliable e-commerce platform that has processed significant transaction volume without payment issues. His Stripe webhook implementation, including retry handling, showed a clear understanding of real-world production challenges. A dependable and skilled developer.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ayesha Malik",
    role: "Product Manager",
    company: "Web Evolution Company",
    avatar: "/images/testimonials/priya.jpg",
    content: "What stands out about Usman is that he doesn’t just execute tasks — he asks the right questions. His input influenced key architectural decisions that saved us time in the long run. Clean documentation and thoughtful structure made collaboration and onboarding much easier.",
    rating: 5,
  },
];
