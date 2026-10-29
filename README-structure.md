# Avenor Digital Project Structure Guide

This document is a quick map of the project so another developer can understand the codebase, what each folder is for, and where to make the most common updates.

---

## 1) Project overview

This is a Next.js 16 project using the App Router and TypeScript. The site is built for Avenor Digital, a digital studio focused on churches, ministries, community organizations, and purpose-driven institutions.

The application is organized around a few important principles:

- Centralized content in `lib/site-data.ts`
- Shared layout and reusable UI patterns in `components/site-layout.tsx`
- Page-level routing in the `app/` directory
- Global styling in `app/globals.css`
- Easy configuration through `package.json`, `next.config.ts`, and `tsconfig.json`

---

## 2) Full project tree

```text
avenor-digital/
├── .env.example
├── .gitignore
├── .next/                     # Generated Next.js build output (do not edit manually)
├── app/
│   ├── globals.css           # Global styles, design tokens, layout utilities, brand colors
│   ├── layout.tsx            # Root app layout, page shell, global metadata
│   ├── not-found.tsx         # Custom 404 page
│   ├── page.tsx              # Homepage
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── insights/
│   │   ├── page.tsx          # Insights overview page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual insight article page
│   ├── portfolio/
│   │   ├── page.tsx          # Portfolio overview page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual portfolio case study page
│   ├── privacy/
│   │   └── page.tsx          # Privacy policy page
│   ├── process/
│   │   └── page.tsx          # Process / methodology page
│   ├── products/
│   │   ├── page.tsx          # Products overview page
│   │   └── [slug]/
│   │       └── page.tsx      # Product detail page
│   ├── services/
│   │   ├── page.tsx          # Services overview page
│   │   └── [slug]/
│   │       └── page.tsx      # Service detail page
│   ├── technologies/
│   │   └── page.tsx          # Technology / capability page
│   ├── terms/
│   │   └── page.tsx          # Terms page
│   └── ...
├── components/
│   └── site-layout.tsx       # Shared layout, headers, footers, reusable section components, CTA links
├── lib/
│   └── site-data.ts          # Core content model: company data, nav, services, products, portfolio, technologies, insights
├── public/                   # Static assets (images, icons, media files if added later)
├── eslint.config.mjs         # ESLint configuration
├── next-env.d.ts             # Next.js TypeScript environment declarations
├── next.config.ts            # Next.js configuration
├── node_modules/             # Installed dependencies (generated)
├── package-lock.json         # Lockfile for npm dependency versions
├── package.json              # App scripts and dependencies
├── README.md                 # Main project overview and setup instructions
├── README-structure.md       # This structure guide
├── tsconfig.json             # TypeScript configuration
└── ...
```

---

## 3) Folder-by-folder explanation

### `app/`
This is the main application directory for Next.js App Router pages.

Key items:

- `app/page.tsx`  
  The homepage. This contains the main landing page sections such as hero, trust statements, service highlights, product highlights, and CTA blocks.

- `app/layout.tsx`  
  The root layout for the application. This usually wraps all pages with the site shell and shared structure.

- `app/globals.css`  
  Global design system and styling layer. This file controls theme colors, typography, spacing, reusable surface styles, and general visual treatment for the whole app.

- `app/not-found.tsx`  
  Custom fallback screen when a route does not exist.

- `app/about/page.tsx`  
  Company and brand story overview page.

- `app/contact/page.tsx`  
  Contact form and inquiry entry page.

- `app/services/page.tsx`  
  Main services listing.

- `app/services/[slug]/page.tsx`  
  Dynamic detail page for a specific service.

- `app/products/page.tsx`  
  Product overview page.

- `app/products/[slug]/page.tsx`  
  Product detail page.

- `app/portfolio/page.tsx`  
  Portfolio overview page.

- `app/portfolio/[slug]/page.tsx`  
  Individual portfolio case study page.

- `app/insights/page.tsx`  
  Insights and thought-leadership listing page.

- `app/insights/[slug]/page.tsx`  
  Dynamic article detail page.

- `app/api/contact/route.ts`  
  Server-side API endpoint used for handling form submissions from the contact page.

### `components/`
This folder holds reusable UI blocks that are shared across pages.

- `components/site-layout.tsx`  
  This is one of the most important feature files in the project. It contains shared pieces like:
  - site header
  - site footer
  - section intro headings
  - page hero layouts
  - reusable button links
  - reusable layout primitives

This file keeps the site consistent and reduces duplication across pages.

### `lib/`
This folder is used for reusable logic and central project data.

- `lib/site-data.ts`  
  This is the source of truth for most content on the site. It contains the project’s brand data and content records, including:
  - company info
  - navigation items
  - service listings
  - product listings
  - portfolio entries
  - technical categories
  - insight articles

This is the file to edit when you want to change business content without redesigning the structure.

### `public/`
This is where public static assets live.

Examples include:
- images
- favicons
- logos
- static media files

If you add assets like hero visuals or trust badges, they normally go here.

---

## 4) Root-level configuration files

### `package.json`
Defines:
- app name and version
- scripts such as `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`
- dependencies for Next.js, React, Zod, form handling, and icon libraries

### `tsconfig.json`
TypeScript compiler configuration. This controls strictness, path aliases, and TypeScript behavior across the app.

### `next.config.ts`
Next.js-specific configuration. This is where app-level settings for routing, optimization, or framework behavior are adjusted.

### `eslint.config.mjs`
Lint rules for code quality and consistency across the project.

### `.env.example`
Template file for environment variables. This is useful for sharing required configuration values without exposing secrets in the repo.

### `.gitignore`
Defines files and folders that should not be tracked by Git, such as `node_modules`, local environment files, and build output.

---

## 5) Where the main business content lives

If you are updating the site content, this is the usual path:

- Product and service details: `lib/site-data.ts`
- Global layout and shared UI: `components/site-layout.tsx`
- Homepage sections: `app/page.tsx`
- Brand styling: `app/globals.css`

This is the easiest mental model for the project:

- `lib/site-data.ts` = content
- `components/site-layout.tsx` = shared UI structure
- `app/` = pages and routes
- `app/globals.css` = visual language

---

## 6) Suggested workflow for editing the project

If another developer wants to contribute without confusion, the best workflow is:

1. Update business content in `lib/site-data.ts`
2. Adjust reusable UI in `components/site-layout.tsx`
3. Modify page composition in the relevant file under `app/`
4. Adjust colors, spacing, and visual treatment in `app/globals.css`
5. Validate with:

```bash
npm run lint
npm run build
```

---

## 7) Quick mental map

```text
Content changes      -> lib/site-data.ts
Page structure       -> app/
Shared UI            -> components/site-layout.tsx
Brand styling        -> app/globals.css
Project settings     -> package.json, next.config.ts, tsconfig.json
Runtime config       -> .env.example
```

---

## 8) Summary

This project is a modern Next.js marketing and content site with a structured content model, reusable components, and a clean page-based app architecture. The project is intentionally organized so the content can be updated centrally without rewriting the whole app.

If you want to understand the project quickly, start with:

1. `app/page.tsx`
2. `components/site-layout.tsx`
3. `lib/site-data.ts`
4. `app/globals.css`
5. `README.md`

That gives you the clearest view of the application’s logic, layout system, and content structure.
