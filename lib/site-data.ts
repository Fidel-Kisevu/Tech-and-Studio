export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  audience: string;
  problem: string;
  includes: string[];
  process: string[];
  deliverables: string[];
  dependencies: string[];
  quoteNote: string;
  status: "Available" | "In Development" | "Consulting";
};

export type ProductItem = {
  slug: string;
  name: string;
  status: "Prototype" | "In Development" | "Live Demo" | "Available";
  summary: string;
  audience: string;
  problem: string;
  features: string[];
  tech: string[];
  demoUrl?: string;
  docsUrl?: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  kind: "Website" | "Software & Dashboard" | "Church Technology" | "Creative & Media" | "Data & AI";
  status: "Completed" | "Prototype" | "In development" | "In Development" | "Concept" | "Live Demo";
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome?: string;
};

export type TechnologyCategory = {
  title: string;
  description: string;
  items: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const company = {
  name: "Avenor Digital",
  tagline: "Technology that brings people and purpose together.",
  alternativeTagline: "Building better digital experiences for organizations that matter.",
  description:
    "Avenor Digital helps churches, ministries, community organizations and mission-driven institutions build clear digital experiences, practical systems and reliable operations.",
  email: "hello@avenordigital.com",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
  website: "https://avenordigital.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    github: "https://github.com",
    instagram: "https://www.instagram.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Technologies", href: "/technologies" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const serviceItems: ServiceItem[] = [
  {
    slug: "digital-presence",
    title: "Websites and Digital Presence",
    shortDescription: "Professional websites, ministry publishing and digital communication that help organizations attract and inform people clearly.",
    description:
      "We design and build websites that give churches, ministries and mission-led organizations a clear digital home. From discovery to launch, we create engaging experiences that communicate mission, distribute content and support real engagement.",
    audience: "Independent churches, ministries, mission organizations and Christian leaders.",
    problem: "Outdated or scattered communication makes it harder for people to understand your mission, find resources and connect with your community.",
    includes: [
      "Strategy and content structure",
      "Custom website design and UX",
      "Responsive frontend development",
      "Sermon and resource publishing systems",
      "SEO foundations and launch support",
    ],
    process: [
      "Review current digital assets and audience goals",
      "Map content, navigation and conversion priorities",
      "Design a clear, mobile-friendly experience",
      "Develop the site and publish content",
      "Test, train and support post-launch updates",
    ],
    deliverables: [
      "Website planning and sitemap",
      "Approved design system and page layouts",
      "Fully responsive production site",
      "Launch checklist and training notes",
    ],
    dependencies: [
      "Content approval and imagery",
      "Brand guidance or a clear direction",
      "Hosting and domain access if applicable",
    ],
    quoteNote: "Estimates depend on scope, content volume, integrations, custom features and migration complexity.",
    status: "Available",
  },
  {
    slug: "digital-systems",
    title: "Custom Software and Organizational Systems",
    shortDescription: "Member records, event workflows, dashboards and organization tools designed around real operational needs.",
    description:
      "We build digital systems for organizations that need better coordination, less repetitive admin and clearer visibility across departments, teams and programs. This includes member databases, registries, attendance tracking and multi-user dashboards.",
    audience: "Churches, associations, NGOs, community groups and organizations managing members or programs.",
    problem: "Spreadsheets, emails and disconnected tools create bottlenecks and make timely decisions harder.",
    includes: [
      "Requirements discovery and process mapping",
      "Database schema and system architecture",
      "Role-based access and admin dashboards",
      "Forms, workflows and reporting views",
      "Deployment and handover documentation",
    ],
    process: [
      "Document workflows and pain points",
      "Prioritize critical operational features",
      "Prototype user journeys and data structures",
      "Build and validate the system with real scenarios",
      "Train staff and provide maintenance guidance",
    ],
    deliverables: [
      "System requirements and workflows",
      "Functional dashboard and admin interfaces",
      "Data model and reporting foundations",
      "Deployment and onboarding brief",
    ],
    dependencies: [
      "Access to required data and process owners",
      "Clear technical assumptions and hosting environment",
      "Any third-party integrations or compliance requirements",
    ],
    quoteNote: "Project estimates vary based on user roles, integrations, data complexity and ongoing support needs.",
    status: "Available",
  },
  {
    slug: "creative-studio",
    title: "Graphic Design and Creative Media",
    shortDescription: "Visual identity, event assets, social media graphics and marketing materials for organizations that need clarity and consistency.",
    description:
      "A strong digital presence needs visual clarity. We create communication assets that help organizations appear consistent, credible and engaging across events, campaigns and digital channels.",
    audience: "Ministries, organizers, public speakers, NGOs and community initiatives.",
    problem: "Inconsistent visuals and rushed design work weaken trust and reduce clarity in communication.",
    includes: [
      "Brand refresh and identity design",
      "Poster and flyer design",
      "Social graphics and content templates",
      "Presentation and pitch deck support",
      "Photo and video editing support",
    ],
    process: [
      "Define audience and visual objectives",
      "Create the visual direction and content structure",
      "Design the assets and revise based on feedback",
      "Prepare final export and publishing files",
      "Support updates or repurposing where needed",
    ],
    deliverables: [
      "Creative brief and style direction",
      "Final print and digital asset files",
      "Reusable templates and production notes",
      "Content support for publication workflows",
    ],
    dependencies: [
      "Brand references or draft messaging",
      "Approvals on timing and channels",
      "Project assets such as photos, recordings or text",
    ],
    quoteNote: "Creative fees are based on asset count, revision cycles, formats and turnaround time.",
    status: "Available",
  },
  {
    slug: "data-and-insights",
    title: "Data Analytics and Reporting",
    shortDescription: "Data cleaning, dashboards and reporting frameworks that help organizations understand trends and make better decisions.",
    description:
      "We help organizations turn scattered information into usable reporting. From Excel data cleanup to Power BI dashboards and operational indicators, we make data easier to understand and act on.",
    audience: "Church teams, NGOs, community organizations and programs tracking engagement and impact.",
    problem: "Manual reporting and inconsistent data make it difficult to understand what is happening and where to focus attention.",
    includes: [
      "Data cleaning and structure review",
      "Dashboard and report design",
      "Power BI and spreadsheet workflows",
      "Operational and monitoring metrics",
      "Documentation for recurring reporting",
    ],
    process: [
      "Review data sources and reporting goals",
      "Clean and structure the underlying data",
      "Design meaningful indicators and visuals",
      "Build dashboards and automate recurring reporting",
      "Document the process for future updates",
    ],
    deliverables: [
      "Cleaned data model",
      "Dashboard or interactive report",
      "Insights summary for stakeholders",
      "Reusable reporting workflow",
    ],
    dependencies: [
      "Data access and source documentation",
      "Agreed success metrics and stakeholders",
      "Any existing reporting tools and constraints",
    ],
    quoteNote: "Scope depends on source volume, data quality, desired dashboards and recurring reporting requirements.",
    status: "Available",
  },
  {
    slug: "ai-and-automation",
    title: "AI and Workflow Automation",
    shortDescription: "Automations that reduce repetitive admin work, improve internal processes and connect tools used by teams.",
    description:
      "We design practical AI and automation support for teams that want to reduce repetitive work without adding unnecessary complexity. We focus on useful workflows that improve operations and support better decision-making.",
    audience: "Organizations using forms, spreadsheets, content workflows, document processes and communication tools.",
    problem: "Teams spend too much time on repetitive tasks, document processing and manual follow-ups instead of serving people and programs.",
    includes: [
      "Workflow mapping and automation opportunities",
      "AI-assisted content and document processing",
      "Data extraction and structured output",
      "Approvals, notifications and admin support",
      "Integration design for selected tools",
    ],
    process: [
      "Identify recurring workflows and bottlenecks",
      "Assess process risk, data sensitivity and tool fit",
      "Prototype the automation and validation rules",
      "Deploy and monitor for quality and reliability",
      "Document maintenance and support responsibilities",
    ],
    deliverables: [
      "Workflow map and automation plan",
      "Validated automation or AI-assisted process",
      "Operational documentation and QA checklist",
      "Monitoring recommendations and handover notes",
    ],
    dependencies: [
      "Authorized access to required systems",
      "Clear input and output requirements",
      "Internal review of privacy and governance needs",
    ],
    quoteNote: "Automation work varies based on system complexity, data sensitivity, required integrations and testing needs.",
    status: "In Development",
  },
  {
    slug: "digital-care",
    title: "Digital Support and Maintenance",
    shortDescription: "Ongoing website care, content support, technical assistance and product upkeep for growing organizations.",
    description:
      "Digital platforms need maintenance, clear ownership and a response plan. We provide technical support, small updates, hosting guidance and recurring optimization for organizations that need help staying online and effective.",
    audience: "Organizations with active websites, portals or digital systems that need dependable support.",
    problem: "Sites and systems that are not maintained can become slow, outdated and harder to trust, while internal teams are left to manage technical issues alone.",
    includes: [
      "Website maintenance and updates",
      "Content changes and improvement tasks",
      "Technical troubleshooting and support",
      "Backup and hosting guidance",
      "Planned improvements and training",
    ],
    process: [
      "Review the current environment and support needs",
      "Define the support scope and response expectations",
      "Prioritize urgent fixes and recurring improvements",
      "Provide monthly or project-based support work",
      "Review progress and refresh priorities over time",
    ],
    deliverables: [
      "Support agreement or maintenance schedule",
      "Priority task list and response guidelines",
      "Prepared update backlog and recommendations",
      "Technical documentation and contact process",
    ],
    dependencies: [
      "Hosting access and admin permissions",
      "Understanding of support priorities and expectations",
      "Any existing technical documentation or access notes",
    ],
    quoteNote: "Ongoing support is scoped by the number of updates, response expectations and the complexity of the platform.",
    status: "Consulting",
  },
];

export const productItems: ProductItem[] = [
  {
    slug: "minister-digital-platform",
    name: "Minister Digital Platform",
    status: "Prototype",
    summary: "A publishing and ministry website platform that combines profile, sermons, teaching materials, events and speaker resources in one place.",
    audience: "Pastors, teachers, evangelists, authors and ministry speakers.",
    problem: "Many Christian leaders rely on fragmented websites, social channels and resource uploads, making it harder to organize and discover teaching content.",
    features: [
      "Personal ministry homepage",
      "Sermon and teaching library",
      "Resource packaging and downloads",
      "Speaking inquiry contact workflow",
      "Content publishing and search",
    ],
    tech: ["Next.js", "Tailwind CSS", "CMS-ready structure", "Search indexing", "Responsive publishing templates"],
    demoUrl: "/products/minister-digital-platform",
    docsUrl: "/contact",
  },
  {
    slug: "churchos",
    name: "ChurchOS",
    status: "In Development",
    summary: "An operations platform for membership, attendance, ministries, events and follow-up workflows for churches and larger organizations.",
    audience: "Church leaders, administrators and ministry teams.",
    problem: "Operational work often happens across disconnected spreadsheets and manual follow-up processes, slowing coordination and reporting.",
    features: [
      "Membership and family records",
      "Attendance tracking and ministry dashboards",
      "Event management and follow-up automation",
      "Department and group coordination",
      "Reporting and export workflows",
    ],
    tech: ["React", "Next.js", "PostgreSQL", "Role-based permissions", "Dashboard reporting"],
    demoUrl: "/products/churchos",
    docsUrl: "/contact",
  },
  {
    slug: "bereans-space",
    name: "Bereans Space",
    status: "Live Demo",
    summary: "A Bible-learning platform with searchable lessons, reading progress and study resources designed for small-group and personal discipleship.",
    audience: "Bible study groups, church discipleship teams and learners.",
    problem: "Study materials are often hard to find and difficult to organize into a clear learning journey across reading, notes and group contexts.",
    features: [
      "Searchable library interface",
      "Progress tracking and reading plans",
      "Curated topic collections",
      "Small-group discovery and tracking",
      "Accessible reading experience",
    ],
    tech: ["Next.js", "App Router", "Content models", "Progress data", "Responsive UI"],
    demoUrl: "/products/bereans-space",
    docsUrl: "/contact",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "minister-website-concept",
    title: "Minister Website Experience",
    kind: "Website",
    status: "Completed",
    summary: "A personal ministry website concept built around sermon archives, speaking inquiries and digital resource distribution.",
    problem: "A minister needed a central online presence that could streamline teachings, speaking requests and resource access without relying on multiple platforms.",
    approach: "We designed an editorial layout with resource collections, sermon categories and a clear calling-to-action flow for speaking and partnership inquiries.",
    stack: ["Next.js", "Tailwind CSS", "Content structure", "Mobile-first design"],
    outcome: "Clear communication and a reusable publishing framework for ministry content.",
  },
  {
    slug: "church-digital-presence",
    title: "Church Digital Presence",
    kind: "Church Technology",
    status: "Prototype",
    summary: "A church website concept combining announcements, sermon publishing, events and ministry pathways in one digital experience.",
    problem: "The church’s communication was dispersed across social posts, emails and a dated website, making it harder for visitors to navigate and engage.",
    approach: "We restructured the content around key journeys: visiting, serving, learning and connecting, and built a modern publishing interface for regular content updates.",
    stack: ["Next.js", "CMS patterns", "Responsive design", "SEO structure"],
    outcome: "Improved clarity, stronger content pathways and a foundation for volunteer and member engagement.",
  },
  {
    slug: "churchos-dashboard",
    title: "ChurchOS Dashboard",
    kind: "Software & Dashboard",
    status: "In development",
    summary: "A church operations dashboard prototype designed for administration, attendance, follow-up and ministry coordination.",
    problem: "Manual reporting left leaders without clear visibility into participation, attendance trends and ministry activity.",
    approach: "We modeled key operational flows and built a dashboard with practical views for attendance, follow-up, departments and reporting needs.",
    stack: ["React", "Dashboard UI", "Role access patterns", "Data modeling"],
    outcome: "A usable prototype for stakeholder review before deeper product build-out.",
  },
  {
    slug: "bereans-space-learning",
    title: "Bereans Space Learning Experience",
    kind: "Software & Dashboard",
    status: "Live Demo",
    summary: "A reading and study platform focused on accessible Bible learning with search, progress and curated learning tracks.",
    problem: "Students and small groups needed a clear path through learning materials without getting lost in scattered resources and inconsistent formats.",
    approach: "We created a structured content model with reading progress, search and collection-based browsing to preserve continuity across study materials.",
    stack: ["Next.js", "Responsive UI", "Progress tracking", "Content taxonomy"],
    outcome: "A live demo that demonstrates the product’s learning flow and overall content architecture.",
  },
  {
    slug: "organizational-analytics",
    title: "Organizational Analytics Dashboard",
    kind: "Data & AI",
    status: "Concept",
    summary: "An analytics concept for tracking participation, campaign effectiveness and program progress across a mission-driven organization.",
    problem: "Leaders needed a more meaningful way to understand activity without relying only on periodic reports and spreadsheets.",
    approach: "We designed a dashboard structure using operational metrics, weekly trends and summary cards to help teams interpret the story behind the numbers.",
    stack: ["Power BI", "Python", "SQL", "Reporting patterns"],
    outcome: "Concept direction for recurring reporting and better decision support.",
  },
  {
    slug: "ai-content-automation",
    title: "AI-Assisted Content Workflow",
    kind: "Data & AI",
    status: "Prototype",
    summary: "A content tooling concept using AI-assisted drafting, document review and publication steps to cut repetitive work for teams.",
    problem: "Publishing teams and ministries were spending too much time drafting repetitive content and reformatting materials across channels.",
    approach: "We mapped content flows and created a lightweight workflow that supports initial drafting, QA and publishing handoff for approved content.",
    stack: ["AI integrations", "Automation design", "Workflow review", "Content QA"],
    outcome: "A prototype showing how AI can support but not replace editorial judgment and process quality.",
  },
];

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces that are fast, accessible and built for real-world usage across web, tablet and mobile devices.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessible interface patterns"],
  },
  {
    title: "Backend",
    description: "Reliable logic, API integrations and application structure for business or member-facing systems.",
    items: ["Node.js", "Express", "Laravel", "FastAPI", "Server actions and APIs"],
  },
  {
    title: "Databases",
    description: "Data models designed for organizations that need registrations, records, permissions and reporting.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Cloud storage patterns"],
  },
  {
    title: "Data and analytics",
    description: "Practical analysis workflows that turn messy information into useful operational insight.",
    items: ["Python", "Pandas", "SQL", "Power BI", "Excel and Power Query"],
  },
  {
    title: "AI and automation",
    description: "Workflows that support content generation, document processing and repetitive operational tasks with human oversight.",
    items: ["LLM evaluation", "Automated document processing", "API integrations", "Workflow orchestration", "QA controls"],
  },
  {
    title: "Cloud and deployment",
    description: "Deployment patterns focused on reliability, performance and maintainability once the solution is live.",
    items: ["Vercel", "Hosting setup", "Environment variables", "Monitoring and backups", "CI-ready workflows"],
  },
  {
    title: "Testing and quality assurance",
    description: "Verification practices that make tools easier to trust and safer to maintain over time.",
    items: ["TypeScript checks", "ESLint", "Functional testing", "Manual QA", "Regression review"],
  },
  {
    title: "Creative production",
    description: "Support for design systems, marketing assets and polished communication across channels.",
    items: ["Brand identities", "Event graphics", "Presentation design", "Video editing", "Photo retouching"],
  },
];

export const insightArticles: InsightArticle[] = [
  {
    slug: "church-digital-transformation-guide",
    title: "A practical guide to church digital transformation",
    excerpt: "How to think about websites, systems and communication without introducing complexity for ministry teams.",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    slug: "church-management-systems-what-to-look-for",
    title: "What to look for in church management systems",
    excerpt: "A clearer framework for evaluating features, workflows and long-term maintenance before choosing a system.",
    category: "Operations",
    readTime: "6 min read",
  },
  {
    slug: "digital-publishing-for-ministry",
    title: "Digital publishing for ministry leaders",
    excerpt: "Designing a content model that keeps sermons, teaching resources and events discoverable over time.",
    category: "Content",
    readTime: "4 min read",
  },
  {
    slug: "organizational-data-with-purpose",
    title: "Using organizational data to inform decisions",
    excerpt: "Simple dashboards and reporting habits can help teams understand patterns without drowning in tools.",
    category: "Data",
    readTime: "7 min read",
  },
];

export const processSteps = [
  "Discover the problem",
  "Define requirements",
  "Design the experience",
  "Build the solution",
  "Test and validate",
  "Launch and train",
  "Maintain and improve",
];

export const homepageHighlights = [
  "Built for churches, ministries and mission-driven organizations.",
  "Technology and creative work under one roof.",
  "Practical systems rooted in real operational workflows.",
  "Clear communication, documentation and sustainable handover.",
];

export const trustPillars = [
  "A founder-led studio with a clear specialization in digital systems and organizational communication.",
  "Design and development shaped around the realities of ministry and community operations.",
  "Transparent process with practical, maintainable delivery from concept to launch.",
];
// Add this to the bottom of lib/site-data.ts

export const footerLinks = {
  services: [
    { label: "Websites & Digital Presence", href: "/services/digital-presence" },
    { label: "Custom Software & Systems", href: "/services/digital-systems" },
    { label: "Graphic Design & Media", href: "/services/creative-studio" },
    { label: "Data Analytics & Reporting", href: "/services/data-and-insights" },
    { label: "AI & Workflow Automation", href: "/services/ai-and-automation" },
  ],
  products: [
    { label: "Minister Digital Platform", href: "/products/minister-digital-platform" },
    { label: "ChurchOS", href: "/products/churchos" },
    { label: "Bereans Space", href: "/products/bereans-space" },
    { label: "View All Products", href: "/products" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Technologies", href: "/technologies" },
    { label: "Insights & Research", href: "/insights" },
    { label: "Portfolio", href: "/portfolio" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Support", href: "/contact" },
  ]
};