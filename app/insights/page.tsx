import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site-layout";
import { insightArticles } from "@/lib/site-data";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & resources"
        title="Thoughtful perspectives for digital growth and organizational clarity."
        description="Avenor Digital is preparing a growing library of practical resources on church digital transformation, digital publishing, operational systems and AI-enabled workflows."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {insightArticles.map((article) => (
            <article key={article.slug} className="rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-3xl text-brand-charcoal">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{article.excerpt}</p>
              <div className="mt-6">
                <Link href={`/insights/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
                  Read article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
