import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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

  // Safely merge stack and tech for the tags
  const tags = [...(project.stack ?? []), ...(project.tech ?? [])];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-charcoal"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>

      <article className="overflow-hidden rounded-[32px] border border-brand-border bg-white shadow-[0_20px_60px_rgba(23,26,25,0.05)]">
        
        {/* Header Area */}
        <div className="relative overflow-hidden bg-brand-charcoal p-8 sm:p-12">
          {/* Subtle background pattern/gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
              {project.kind}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {project.status}
            </span>
          </div>
          <h1 className="relative z-10 mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {project.title}
          </h1>
        </div>

        {/* Problem & Approach */}
        <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-brand-charcoal">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-ivory text-sm text-brand-muted">01</span>
              The Problem
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-brand-charcoal">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-ivory text-sm text-brand-muted">02</span>
              Our Approach
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
              {project.approach || "We designed a practical solution focused on user needs and long-term maintainability."}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid gap-6 border-t border-brand-border bg-[#faf9f7] p-8 sm:p-12 md:grid-cols-2">
          
          {/* Tech Stack Card */}
          <div className="rounded-[24px] border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full border border-brand-border bg-brand-ivory px-3 py-1.5 text-[11px] font-medium text-brand-charcoal"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-sm text-brand-muted">Not specified</span>
              )}
            </div>
          </div>

          {/* Outcome Card */}
          <div className="rounded-[24px] border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
              The Outcome
            </h3>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600/70" />
              <p className="text-[15px] leading-relaxed text-brand-charcoal">
                {project.outcome || "This work highlights the design and product thinking behind a practical digital concept or prototype."}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-brand-border p-8 text-center sm:p-12">
          <h3 className="text-xl font-semibold text-brand-charcoal">Need something similar?</h3>
          <p className="mt-2 text-sm text-brand-muted">Let's discuss how we can build a solution tailored to your organization.</p>
          <Link 
            href="/contact" 
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
        
      </article>
    </section>
  );
}