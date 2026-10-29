# Avenor Digital

Avenor Digital is a premium digital studio website and product foundation for churches, ministries, community organizations and purpose-driven institutions. The project uses Next.js, App Router and Tailwind CSS to present a credible brand, service catalogue, portfolio, product directions and project inquiry flow.

## Project purpose

This application demonstrates:

- A distinctive brand and visual identity for Avenor Digital
- Service detail pages for website design, software systems, creative support and operational consulting
- Product pages for the studio’s initial offerings, including Minister Digital Platform, ChurchOS and Bereans Space
- A portfolio with realistic prototype and concept case studies
- A working front-end inquiry form with server-side validation and documented API configuration
- A maintainable content model for editing brand, services, products and portfolio entries centrally

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Lucide icons

## Prerequisites

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environment variables

Create a `.env.local` file with any required runtime values. The public site currently uses a front-end inquiry flow and a server route, but no production email or database integration is configured by default.

Example:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

If you later connect a transactional email provider or database-backed inquiry system, add the relevant secrets here and keep them out of client code.

## Build and checks

```bash
npm run build
npm run lint
```

## How to edit the brand

Update the shared project settings in `lib/site-data.ts`.

- Company name and tagline
- Email, phone and social links
- Brand content and supporting copy
- Services
- Product records
- Portfolio entries
- Insights articles
- Technology categories

This keeps the brand configuration centralized and avoids rewriting the app for each change.

## How to add services

Add or update service entries in `lib/site-data.ts` under `serviceItems`.

Each entry supports:

- slug
- title
- description
- audience
- problem
- included features
- implementation process
- deliverables
- dependencies
- quote note
- status

## How to add portfolio entries

Add portfolio items in `lib/site-data.ts` under `portfolioItems`.

Each entry supports:

- slug
- title
- kind
- status
- summary
- problem
- approach
- stack
- optional outcome

## How to add products

Add product entries in `lib/site-data.ts` under `productItems`.

Each product supports:

- slug
- name
- status
- summary
- audience
- problem
- features
- tech stack
- demo URL
- docs URL

## Notes on external configuration

The following features are intentionally static or require configuration before production use:

- Contact form email delivery
- Production spam protection and rate limiting
- Hosting and deployment environment values
- Live bookings or external service integrations

## Deployment

This app is designed for deployment on Vercel or another Node-compatible hosting platform. Deploy from the project root and add environment variables in the host dashboard.

## License

This project is for demonstration and business-use development in the current workspace. Update licensing and legal wording before launching publicly if required.
