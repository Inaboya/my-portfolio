export const profile = {
  name: "David Momoh",
  role: "Senior Full-Stack Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 810 604 2495",
  email: "momohdavid21@gmail.com",
  linkedin: "linkedin.com/in/david-momoh-17ab3518b",
  github: "github.com/Inaboya",
  site: "david.dev",
  summary:
    "Senior Full-Stack Engineer with 5+ years building production systems in fintech, agritech, and Web3. Currently leading redevelopment of NASD PLC's trading platforms (React, Node.js, TypeScript, AWS), migrating 15+ legacy modules with measurable gains in performance and reliability. Comfortable owning a system end-to-end — infrastructure, API design, and frontend.",
};

export const tickerStats = [
  { label: "Page load cut", value: "-35%" },
  { label: "Donation pipeline uptime", value: "99.9%" },
  { label: "API reliability gain", value: "+30%" },
  { label: "Feature rollout time", value: "-40%" },
  { label: "Years in production", value: "5+" },
  { label: "Legacy modules migrated", value: "15+" },
  { label: "Mandate forms / yr", value: "50K+" },
  { label: "Daily active investors", value: "5,000+" },
];

export type Experience = {
  ticker: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: { label: string; detail: string }[];
};

export const experience: Experience[] = [
  {
    ticker: "$NASD",
    company: "NASD PLC",
    role: "Senior Fullstack Engineer",
    location: "Lagos, Nigeria",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      {
        label: "Platform Modernization",
        detail:
          "Led migration of 15+ legacy modules across NASD's web and mobile trading platforms to React, TypeScript, and Node.js, cutting page load times by 35%.",
      },
      {
        label: "Crowdfunding Platform",
        detail:
          "Built NASD's multi-level crowdfunding product end-to-end (React, Vite, TypeScript, Node.js), including a real-time donation-tracking pipeline running at 99.9% uptime and a media pipeline that cut processing time by 40%.",
      },
      {
        label: "Enterprise Solutions",
        detail:
          "Built shared APIs and microservices powering the Mobile App, Private Market Platform, and Data Portal, improving reliability by 30% and cutting data-processing time by 25%.",
      },
      {
        label: "Technical Leadership",
        detail:
          "Introduced CI/CD pipelines, code-review standards, and a shared component library adopted across 3 engineering teams, cutting feature rollout time by 40%.",
      },
    ],
  },
  {
    ticker: "$VLCD",
    company: "ValucideTech",
    role: "Senior Fullstack Engineer",
    location: "Lagos, Nigeria (Remote)",
    start: "Jun 2023",
    end: "Dec 2023",
    bullets: [
      {
        label: "Revenue Analytics Platform",
        detail:
          "Built \"247Comcare Revenue Reports\" (React, Node.js, MongoDB), a real-time dashboard giving department heads live revenue visibility, contributing to a reported 60% increase in revenue.",
      },
      {
        label: "Gamification Product",
        detail:
          "Built \"Scratch and Play,\" a rewards platform with a randomized prize engine processing 100K+ daily interactions and a 70% user retention rate.",
      },
      {
        label: "System Architecture",
        detail:
          "Introduced event-driven microservices and Redis caching, cutting API response times by 50% and supporting 5x traffic growth.",
      },
    ],
  },
  {
    ticker: "$RNFL",
    company: "Renbee & Fern Life",
    role: "Contract Software Engineer — UK Clients",
    location: "London, UK (Remote)",
    start: "Mar 2023",
    end: "Jun 2023",
    bullets: [
      {
        label: "Web3 Platform Overhaul (Renbee)",
        detail:
          "Led a full rebuild of a legacy platform into a component-driven, Web3-enabled application, adding wallet connectivity and smart-contract interactions via ethers.js for 500+ daily active users.",
      },
      {
        label: "Product API Development (Fern Life)",
        detail:
          "Designed and shipped 12+ RESTful APIs (React, Node.js, NestJS) for product customization and third-party integrations, including virtual room visualization and payment gateways.",
      },
    ],
  },
  {
    ticker: "$RLAF",
    company: "Releaf Africa",
    role: "Fullstack Engineer",
    location: "Lagos, Nigeria",
    start: "Apr 2022",
    end: "Feb 2023",
    bullets: [
      {
        label: "Geospatial Platform",
        detail:
          "Built a data-driven mapping tool (Vue.js, NestJS, ArcGIS) that improved field-operations efficiency by 38%.",
      },
      {
        label: "SALT Logistics Platform",
        detail:
          "Built a USSD-based logistics platform connecting 2,000+ stakeholders and smallholder farmers, deployed on AWS with 99.5% uptime through peak harvest season.",
      },
    ],
  },
  {
    ticker: "$DCGN",
    company: "Decagon",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    start: "Oct 2020",
    end: "Mar 2022",
    bullets: [
      {
        label: "Enterprise Applications",
        detail:
          "Built and maintained full-stack applications (Node.js, TypeScript, NestJS) for 500+ internal users, including an end-to-end encrypted internal chat tool.",
      },
      {
        label: "Code Quality",
        detail:
          "Introduced automated testing (Jest, Supertest) and code review processes that cut production bugs by 40%.",
      },
    ],
  },
  {
    ticker: "$SFLI",
    company: "Safelife International",
    role: "Backend Engineer",
    location: "Rivers, Nigeria",
    start: "Apr 2020",
    end: "Sep 2020",
    bullets: [
      {
        label: "Database Optimization",
        detail:
          "Optimized PostgreSQL, MySQL, and MongoDB backends, improving query performance by 60% and cutting server costs by 25%.",
      },
      {
        label: "API Development",
        detail:
          "Built RESTful APIs handling 10K+ daily requests with sub-100ms response times through efficient indexing.",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript/TypeScript", "Python", "PHP", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "Vue.js", "Redux", "Zustand", "TanStack Query", "TailwindCSS", "Shadcn/UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "Laravel", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, RDS, ECS)", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD (GitHub Actions, GitLab)"],
  },
  {
    label: "AI & Machine Learning",
    items: ["OpenAI APIs", "Google Gemini", "RAG", "Vector Search (pgvector)", "Prompt Engineering"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"],
  },
  {
    label: "Architecture",
    items: ["Event-Driven", "Message Queues (Kafka, Pub/Sub)", "Data Pipelines", "Domain-Driven Design"],
  },
  {
    label: "Blockchain",
    items: ["ethers.js", "Web3.js", "Smart Contract Integration"],
  },
  {
    label: "Tools",
    items: ["Git", "Postman", "Jira", "Firebase", "Heroku", "Vite", "Webpack"],
  },
];

export type Project = {
  name: string;
  stack: string;
  description: string;
  tag: string;
  url: string;
};

export const projects: Project[] = [
  {
    name: "NASD Mobile App",
    stack: "React Native, TypeScript, Node.js, MongoDB, MySQL",
    description:
      "Cross-platform OTC securities trading app with real-time market data, portfolio tracking, and secure authentication for 5,000+ active investors.",
    tag: "Fintech",
    url: "https://play.google.com/store/apps/details?id=com.nasd",
  },
  {
    name: "NASD Data Portal",
    stack: "React, TypeScript, Node.js, Express, MongoDB",
    description:
      "Enterprise data archive with 10+ years of market history, price trends, and corporate action tracking, serving 1,000+ daily users.",
    tag: "Fintech",
    url: "https://app.nasdng.com/",
  },
  {
    name: "E-Mandate Portal",
    stack: "PHP, Laravel, MySQL, Bootstrap",
    description:
      "Automated dividend payment system linking BVN to stockbroker accounts, reducing unclaimed dividends by 60% and processing 50,000+ mandate forms annually.",
    tag: "Fintech",
    url: "https://nasdotcng.com/e_mandate/",
  },
  {
    name: "NASDeP",
    stack: "PHP, Laravel, MySQL, Bootstrap",
    description:
      "Enterprise discovery platform connecting SMEs with accredited investors via a verified business data repository, facilitating $2M+ in potential investments.",
    tag: "Fintech",
    url: "https://nasdep.com/",
  },
  {
    name: "Geospatial Mapping Platform",
    stack: "Vue.js, NestJS, MongoDB, ArcGIS",
    description:
      "Real-time spatial analytics tool helping field agents identify optimal factory locations.",
    tag: "Agritech",
    url: "https://site.releaf.ng/",
  },
  {
    name: "SALT (Sourcing & Logistics Tool)",
    stack: "Vue.js, Node.js, NestJS, MongoDB, AWS",
    description:
      "Digital platform connecting 2,000+ stakeholders with smallholder farmers via USSD technology.",
    tag: "Agritech",
    url: "https://salt.releaf.ng/",
  },
  {
    name: "Scratch and Play",
    stack: "React, Node.js, MongoDB, TailwindCSS",
    description:
      "Gamified rewards platform processing 10K+ daily interactions with a 70% user retention rate.",
    tag: "Product",
    url: "https://scratchandplayng.com",
  },
  {
    name: "247Comcare Revenue Reports",
    stack: "React, Node.js, MongoDB, Express",
    description:
      "Real-time analytics dashboard providing revenue insights across departments.",
    tag: "Product",
    url: "https://reports.247comcare.com/",
  },
];

export const certifications = [
  {
    label: "AWS Certified Developer Associate (DVA-C02)",
    meta: "In Progress · Udemy",
    group: "Cloud",
  },
  {
    label: "Generative AI for Node.js: OpenAI, LangChain, TypeScript",
    meta: "Udemy",
    group: "AI/ML",
  },
  {
    label: "Software Architecture & Design of Modern Large-Scale Systems",
    meta: "Udemy",
    group: "Architecture",
  },
];

export const publications = [
  {
    title: "How to Perform a Rollback in MongoDB",
    meta: "Medium · Nov 2025 · 5,000+ reads",
  },
];

export const community =
  "Mentored 15+ junior developers through Decagon and NASD's internal training programs.";

export const education = {
  school: "University of Benin, Edo State, Nigeria",
  degree: "B.Sc. Animal and Environmental Biology",
  years: "2013 – 2017",
};
