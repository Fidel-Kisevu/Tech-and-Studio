import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site-layout";
import { portfolioItems } from "@/lib/site-data";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, prototypes and product foundations."
        description="This portfolio presents honest project directions and working prototypes, helping clients understand how the studio approaches real-world digital challenges."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.slug} className="rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                <span>{item.kind}</span>
                <span>{item.status}</span>
              </div>
              <h3 className="text-3xl text-brand-charcoal">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((stack) => (
                  <span key={stack} className="rounded-full border border-brand-border bg-brand-ivory px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal">{stack}</span>
                ))}
              </div>
              <div className="mt-6">
                <Link href={`/portfolio/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
                  Read case study <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
