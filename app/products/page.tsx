import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site-layout";
import { productItems } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Product directions developed around meaningful user needs."
        description="Avenor Digital is building a thoughtful product portfolio with a clear bias toward practical tools for churches, ministries and mission-driven organizations."
        actions={
          <>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-ivory hover:bg-brand-secondary">Request a demo</Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-charcoal/15 bg-white px-5 py-3 text-sm font-medium text-brand-charcoal hover:bg-brand-ivory">Explore services</Link>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {productItems.map((product) => (
            <article key={product.slug} className="rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-charcoal">{product.status}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-brand-muted">Solution</span>
              </div>
              <h3 className="text-3xl text-brand-charcoal">{product.name}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{product.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-charcoal">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2"><span className="text-brand-gold">•</span><span>{feature}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal">
                  Learn more <ArrowRight size={16} />
                </Link>
                {product.demoUrl ? <Link href={product.demoUrl} className="text-sm font-medium text-brand-gold">Demo</Link> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
