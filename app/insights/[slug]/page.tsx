import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { insightArticles } from "@/lib/site-data";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export default async function InsightsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
          <ArrowLeft size={16} /> Back to insights
        </Link>
      </div>

      <article className="rounded-[30px] border border-brand-border bg-white p-8 shadow-[0_12px_40px_rgba(23,26,25,0.05)]">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-brand-muted">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="mt-6 text-5xl text-brand-charcoal">{article.title}</h1>
        <p className="mt-6 text-lg leading-8 text-brand-muted">{article.excerpt}</p>

        <div className="mt-10 space-y-6 text-base leading-8 text-brand-charcoal">
          <p>Churches and mission-driven organizations often need digital systems that help people connect with purpose rather than adding another layer of complexity. A strong digital foundation should make it easier to publish content, coordinate ministry teams and support meaningful engagement.</p>
          <p>When evaluating a website or digital platform, the most important question is whether it supports the organization’s real work. A ministry website should help members find sermons, events and resources. A church management system should support attendance, follow-up and service coordination without creating more manual work for staff.</p>
          <p>Good digital transformation is not about adopting technology for its own sake. It is about identifying the operational or communication gaps that matter most, then building or refining the right tools to reduce friction and improve clarity.</p>
        </div>
      </article>
    </section>
  );
}
