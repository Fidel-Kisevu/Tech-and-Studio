import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/site-data";

export function generateStaticParams() {
  return portfolioItems.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>

      <article className="overflow-hidden rounded-[32px] border border-brand-border bg-white shadow-[0_12px_40px_rgba(23,26,25,0.05)]">
        <div className="bg-brand-charcoal p-8 text-brand-ivory">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-gold">{project.kind}</span>
            <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-charcoal">{project.status}</span>
          </div>
          <h1 className="mt-6 text-5xl text-brand-ivory">{project.title}</h1>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand-charcoal">Problem</h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl text-brand-charcoal">Approach</h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">{project.approach}</p>
          </div>
        </div>

        <div className="grid gap-6 border-t border-brand-border p-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[22px] bg-brand-ivory p-5">
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-brand-muted">Project status</h3>
            <p className="text-base text-brand-charcoal">{project.status}</p>
          </div>
          <div className="rounded-[22px] bg-brand-ivory p-5">
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-brand-muted">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-brand-border bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] bg-brand-ivory p-5 md:col-span-2">
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-brand-muted">Outcome</h3>
            <p className="text-base text-brand-charcoal">{project.outcome || "This work highlights the design and product thinking behind a practical digital concept or prototype."}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
