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

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.slug}
              className="group rounded-[28px] border border-brand-border bg-white p-5 shadow-[0_16px_40px_rgba(23,26,25,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,26,25,0.08)]"
            >
              <div className="flex min-h-[180px] flex-col justify-between rounded-[22px] bg-gradient-to-br from-[#eef3ee] via-[#f7f5f1] to-[#e9e2d3] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-brand-border bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-charcoal">
                    {item.kind}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-brand-muted">{item.status}</span>
                </div>
                <div className="rounded-[18px] border border-brand-border bg-white/70 p-3">
                  <div className="mb-2 h-2 w-14 rounded-full bg-brand-charcoal/10" />
                  <div className="mb-2 h-2 w-24 rounded-full bg-brand-gold/50" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-xl bg-[#edf1ee]" />
                    <div className="h-10 rounded-xl bg-[#e9e3d5]" />
                    <div className="h-10 rounded-xl bg-[#dfe8e1]" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-semibold text-brand-charcoal">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-brand-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.slice(0, 3).map((stackItem) => (
                    <span
                      key={stackItem}
                      className="rounded-full border border-brand-border bg-brand-ivory px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal transition group-hover:text-brand-secondary"
                >
                  View concept <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
