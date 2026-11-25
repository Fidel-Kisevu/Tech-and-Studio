import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionIntro } from "@/components/site-layout";
import { serviceItems } from "@/lib/site-data";

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="What we do"
        title="Focused service lines that match real organizational needs."
        description="We keep the scope practical and honest. Every service is designed to solve a recognizable problem, with clarity about deliverables, dependencies and next steps."
      />

      <div className="mt-12 space-y-8">
        {serviceItems.map((service) => (
          <article
            key={service.slug}
            className="group relative overflow-hidden rounded-[32px] border border-brand-border bg-white p-6 shadow-[0_8px_30px_rgba(23,26,25,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,26,25,0.06)] lg:p-10"
          >
            {/* Top Section: Title & Description */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {/* Updated Badge using brand colors */}
                  <span className="inline-flex rounded-full border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy">
                    {service.status}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted">
                    {service.audience}
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold text-brand-charcoal sm:text-3xl">
                  {service.title}
                </h3>
                
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
                  {service.description}
                </p>
              </div>

              {/* Problem Box */}
              <div className="rounded-[24px] bg-brand-ivory p-6 border border-brand-border/50">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-pink">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
                  The Problem
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal">
                  {service.problem}
                </p>
              </div>
            </div>

            {/* Middle Section: Details Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "What's Included", items: service.includes },
                { label: "Our Process", items: service.process },
                { label: "Deliverables", items: service.deliverables },
                { label: "Dependencies", items: service.dependencies },
              ].map((group) => (
                <div key={group.label} className="rounded-[20px] bg-[#faf9f7] p-5">
                  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                    {group.label}
                  </h4>
                  <ul className="space-y-3 text-sm text-brand-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-navy/40" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Section: Note & CTA */}
            <div className="mt-10 flex flex-col gap-6 border-t border-brand-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-sm italic text-brand-muted">
                "{service.quoteNote}"
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-navy"
              >
                View service details 
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}