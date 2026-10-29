import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/components/site-layout";
import { serviceItems } from "@/lib/site-data";

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="What we do"
        title="Focused service lines that match real organizational needs."
        description="We keep the scope practical and honest. Every service is designed to solve a recognizable problem, with clarity about deliverables, dependencies and next steps."
      />

      <div className="mt-10 space-y-6">
        {serviceItems.map((service) => (
          <article
            key={service.slug}
            className="rounded-[30px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)] transition-transform duration-300 hover:-translate-y-1 lg:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-charcoal">
                    {service.status}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brand-muted">{service.audience}</p>
                </div>
                <h3 className="text-3xl text-brand-charcoal">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-brand-muted">{service.description}</p>
              </div>

              <div className="rounded-[24px] bg-brand-ivory p-5">
                <h4 className="text-sm uppercase tracking-[0.18em] text-brand-muted">Problem</h4>
                <p className="mt-3 text-sm leading-7 text-brand-charcoal">{service.problem}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "What is included", items: service.includes },
                { label: "Implementation process", items: service.process },
                { label: "Deliverables", items: service.deliverables },
                { label: "Dependencies", items: service.dependencies },
              ].map((group) => (
                <div key={group.label} className="rounded-[24px] border border-brand-border bg-brand-ivory p-5">
                  <h4 className="mb-4 text-sm uppercase tracking-[0.18em] text-brand-muted">{group.label}</h4>
                  <ul className="space-y-2 text-sm leading-7 text-brand-charcoal">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-brand-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm leading-7 text-brand-muted">{service.quoteNote}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal transition hover:text-brand-secondary"
              >
                View service details <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
