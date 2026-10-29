/**
 * EDIT YOUR PRODUCTS HERE
 * Save as: lib/products-data.ts
 */

export type IconName =
  | "globe"
  | "hand-heart"
  | "radio"
  | "users"
  | "calendar"
  | "smartphone"
  | "chart"
  | "palette"
  | "mail"
  | "shield"
  | "book"
  | "layers";

export type Accent = "gold" | "charcoal" | "blue" | "green" | "rose";

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: IconName;
  accent: Accent;
  image?: string;
  features: string[];
  idealFor?: string;
  timeline?: string;
  startingFrom?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const products: Product[] = [
  {
    id: "church-websites",
    name: "Church websites",
    category: "Websites",
    tagline: "A clear first visit, before anyone walks in.",
    description:
      "A fast, welcoming website built around what visitors actually look for: service times, location, what to expect and how to get involved.",
    icon: "globe",
    accent: "gold",
    image: "/images/products/church-websites.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Service times and map on the first screen",
      "Sermon archive with audio and video",
      "Events calendar your team can update",
      "Simple editing, no developer needed",
    ],
    idealFor: "Churches and ministries of any size",
    timeline: "4 to 6 weeks",
    startingFrom: "Custom quote",
  },
  {
    id: "mobile-apps",
    name: "Mobile apps",
    category: "Apps",
    tagline: "Your church in your members' pockets.",
    description:
      "A branded app for sermons, giving, events and notifications, built so members can stay connected through the week.",
    icon: "smartphone",
    accent: "blue",
    image: "/images/products/mobile-apps.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Sermons, events and giving in one app",
      "Push notifications",
      "iPhone and Android",
      "Content managed from your existing website",
    ],
    idealFor: "Larger churches and organizations with active communities",
    timeline: "8 to 12 weeks",
    startingFrom: "Custom quote",
  },
    {
    id: "minister-publishing",
    name: "Minister's Publishing Platform",
    category: "Websites",
    tagline: "Your own platform for articles, books and ministry resources.",
    description:
      "A personal digital home for ministers, speakers and authors. Publish your articles, host your books, share sermon notes and build a direct relationship with your audience without relying on social media algorithms.",
    icon: "book",
    accent: "charcoal",
    image: "/images/products/minister-publishing.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Article and blog publishing system",
      "Book showcase with purchase or download links",
      "Sermon and teaching archive",
      "Email newsletter signup for your readers",
      "Simple dashboard to publish without a developer",
    ],
    idealFor: "Ministers, authors, speakers and teachers",
    timeline: "4 to 6 weeks",
    startingFrom: "Custom quote",
  },
  {
    id: "brand-identity",
    name: "Brand and design",
    category: "Creative",
    tagline: "A look that people recognize and trust.",
    description:
      "Logo, colours, type and templates that make your sermons, posters and social posts feel like one organization.",
    icon: "palette",
    accent: "gold",
    image: "/images/products/brand-identity.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Logo and brand guide",
      "Social media and print templates",
      "Sermon series graphics",
      "Simple files your volunteers can reuse",
    ],
    idealFor: "New ministries and organizations refreshing their look",
    timeline: "3 to 5 weeks",
    startingFrom: "Custom quote",
  },
  {
    id: "email-sms",
    name: "Email and SMS",
    category: "Systems",
    tagline: "Reach your whole community in one message.",
    description:
      "Set up newsletters, text alerts and automatic welcome messages so important news reaches people where they will see it.",
    icon: "mail",
    accent: "rose",
    image: "/images/products/email-sms.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Newsletter templates",
      "Text alerts for urgent updates",
      "Automatic welcome series for new visitors",
      "Lists organized by group or ministry",
    ],
    idealFor: "Any church or nonprofit that communicates weekly",
    timeline: "1 to 2 weeks",
    startingFrom: "Custom quote",
  },
  {
    id: "training",
    name: "Team training",
    category: "Support",
    tagline: "Your team, confident with the tools.",
    description:
      "Hands-on sessions and short guides so staff and volunteers can use and update everything we build.",
    icon: "book",
    accent: "blue",
    image: "/images/products/training.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Live training sessions",
      "Short video and written guides",
      "Volunteer-friendly checklists",
      "Follow-up questions answered",
    ],
    idealFor: "Teams taking over a new system",
    timeline: "Half-day to 2 days",
    startingFrom: "Custom quote",
  },
  {
    id: "custom-systems",
    name: "Custom systems",
    category: "Apps",
    tagline: "When nothing off the shelf fits.",
    description:
      "If your ministry has a process no tool handles well, we design and build something that fits it, and hand it over properly.",
    icon: "layers",
    accent: "gold",
    image: "/images/products/custom-systems.jpg", // <── ADD YOUR IMAGE HERE
    features: [
      "Discovery and planning together",
      "Built to match how your team works",
      "Documented and maintainable",
      "Handover and training included",
    ],
    idealFor: "Organizations with unusual or complex needs",
    timeline: "Scoped per project",
    startingFrom: "Custom quote",
  },
];