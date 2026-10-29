import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { serviceItems } from "@/lib/site-data";

export function generateStaticParams() {
  return serviceItems.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
          <ArrowLeft size={16} /> Back to services
        </Link>
      </div>

      <div className="rounded-[30px] border border-brand-border bg-white p-8 shadow-[0_12px_40px_rgba(23,26,25,0.05)]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-charcoal">{service.status}</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-brand-muted">{service.audience}</span>
        </div>

        <h1 className="mt-6 text-5xl text-brand-charcoal">{service.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-muted">{service.description}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-brand-ivory p-6">
            <h2 className="text-2xl text-brand-charcoal">Problem it solves</h2>
            <p className="mt-4 text-base leading-8 text-brand-muted">{service.problem}</p>
          </div>
          <div className="rounded-[24px] bg-brand-charcoal p-6 text-brand-ivory">
            <h2 className="text-2xl">What is included</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-brand-ivory/75">
              {service.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Implementation process", items: service.process },
            { label: "Expected deliverables", items: service.deliverables },
            { label: "Dependencies", items: service.dependencies },
            { label: "Quote note", items: [service.quoteNote] },
          ].map((group) => (
            <div key={group.label} className="rounded-[24px] border border-brand-border bg-brand-ivory p-5">
              <h3 className="mb-4 text-sm uppercase tracking-[0.18em] text-brand-muted">{group.label}</h3>
              <ul className="space-y-2 text-sm leading-7 text-brand-charcoal">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-ivory">Request a quotation <ArrowRight size={16} /></Link>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/15 bg-white px-5 py-3 text-sm font-medium text-brand-charcoal">See all services</Link>
        </div>
      </div>
    </section>
  );
}
