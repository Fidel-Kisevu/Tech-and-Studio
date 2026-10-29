import Link from "next/link";
import { PageHero } from "@/components/site-layout";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Digital services designed for mission-driven organizations."
      description="From church websites to custom applications, we help organizations build practical digital experiences that do real work for staff, members and communities."
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-ivory transition hover:bg-brand-secondary"
          >
            Request a quotation
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-charcoal/15 bg-white px-5 py-3 text-sm font-medium text-brand-charcoal transition hover:bg-brand-ivory"
          >
            View products
          </Link>
        </>
      }
    />
  );
}
