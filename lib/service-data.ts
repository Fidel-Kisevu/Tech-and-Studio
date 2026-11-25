import { 
  Monitor, 
  Code2, 
  Palette, 
  Database, 
  Bot, 
  Wrench 
} from "lucide-react";

// 1. Define the type for the data
export type ServiceData = {
  slug: string;
  title: string;
  shortDescription: string;
  status: string;
  icon: any; 
  image?: string; // <-- Added optional image property
};

// 2. Export the encoded data
export const serviceGridData: ServiceData[] = [
  {
    slug: "digital-presence",
    title: "Websites and Digital Presence",
    shortDescription: "Professional websites, ministry publishing and digital communication that help organizations attract and inform people clearly.",
    status: "Available",
    icon: Monitor,
    image: "/images/home.png", // <-- Added image
  },
  {
    slug: "digital-systems",
    title: "Custom Software and Organizational Systems",
    shortDescription: "Member records, event workflows, dashboards and organization tools designed around real operational needs.",
    status: "Available",
    icon: Code2,
    image: "/images/home.png", // <-- Added image
  },
  {
    slug: "creative-studio",
    title: "Graphic Design and Creative Media",
    shortDescription: "Visual identity, event assets, social media graphics and marketing materials for organizations that need clarity and consistency.",
    status: "Available",
    icon: Palette,
    image: "/images/home.png", // <-- Added image
  },
  {
    slug: "data-and-insights",
    title: "Data Analytics and Reporting",
    shortDescription: "Data cleaning, dashboards and reporting frameworks that help organizations understand trends and make better decisions.",
    status: "Available",
    icon: Database,
    image: "/images/home.png", // <-- Added image
  },
  {
    slug: "ai-and-automation",
    title: "AI and Workflow Automation",
    shortDescription: "Automations that reduce repetitive admin work, improve internal processes and connect tools used by teams.",
    status: "In Development",
    icon: Bot,
    image: "/images/home.png", // <-- Added image
  },
  {
    slug: "digital-care",
    title: "Digital Support and Maintenance",
    shortDescription: "Ongoing website care, content support, technical assistance and product upkeep for growing organizations.",
    status: "Consulting",
    icon: Wrench,
    image: "/images/home.png", // <-- Added image
  },
];