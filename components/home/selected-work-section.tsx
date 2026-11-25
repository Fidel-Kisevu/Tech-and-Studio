import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/components/site-layout";
import { portfolioItems } from "@/lib/site-data";

export function SelectedWorkSection() {
  const featuredWork = portfolioItems.slice(0, 3);

  return (
    <section className="bg-[#f2f0ea]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Selected work"
          title="A clearer digital story, shaped around real organizational needs."
          description="These examples reflect the kinds of digital experiences, operational systems and product directions we help teams concept and build with intention."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredWork.map((item) => {
            // Safely combine stack and tech, fallback to empty array
            const tags = [...(item.stack ?? []), ...(item.tech ?? [])];

            return (
              <article
                key={item.slug}
                className="group flex flex-col rounded-[32px] border border-brand-border bg-white p-6 shadow-[0_16px_40px_rgba(23,26,25,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(23,26,25,0.08)]"
              >
                {/* Visual Mockup Area */}
                <div className="relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-[#eef3ee] via-[#f7f5f1] to-[#e9e2d3] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-brand-border bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-charcoal backdrop-blur-sm">
                      {item.kind}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-muted">
                      {item.status}
                    </span>
                  </div>
                  
                  {/* Mock Browser Window */}
                  <div className="mt-4 translate-y-2 rounded-t-xl border border-brand-border/50 bg-white/80 p-4 shadow-sm backdrop-blur-md">
                    <div className="mb-4 flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="mb-2 h-2 w-1/3 rounded-full bg-brand-charcoal/20" />
                    <div className="mb-4 h-1.5 w-3/4 rounded-full bg-brand-charcoal/10" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg bg-[#edf1ee]" />
                      <div className="h-12 rounded-lg bg-[#e9e3d5]" />
                      <div className="h-12 rounded-lg bg-[#dfe8e1]" />
                    </div>
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold leading-snug text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-muted">
                    {item.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand-border bg-brand-ivory px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-brand-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div className="mt-6 pt-4 border-t border-brand-border/60">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal transition-colors group-hover:text-brand-secondary"
                    >
                      View case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}