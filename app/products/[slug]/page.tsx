import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { products } from "@/lib/products-data";

// Generate static params for your products
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

// ─── 1. THE MAIN PAGE (Instant Shell) ───
export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="bg-white">
      <Suspense fallback={<ProductSkeleton />}>
        {/* We pass the promise directly to the child, without awaiting it here */}
        <ProductContent params={params} />
      </Suspense>
    </main>
  );
}

// ─── 2. THE CONTENT (Streams in after navigation) ───
async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const details = [
    { label: "Best for", value: product.idealFor },
    { label: "Timeline", value: product.timeline },
    { label: "Pricing", value: product.startingFrom },
  ].filter((d) => d.value);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-charcoal text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,165,103,0.22),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All products
          </Link>

          <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            {product.category}
          </div>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {product.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={product.ctaHref ?? `/contact?product=${product.id}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-charcoal transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
            >
              {product.ctaLabel ?? "Request this"}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-charcoal sm:text-4xl">
              Overview
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
              {product.description}
            </p>

            <h2 className="mt-14 text-3xl font-semibold tracking-[-0.03em] text-brand-charcoal sm:text-4xl">
              Core features
            </h2>
            <ul className="mt-6 space-y-4">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                    <CheckCircle2 size={16} aria-hidden />
                  </span>
                  <span className="text-lg leading-8 text-brand-charcoal">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[2rem] border border-brand-border bg-brand-ivory p-8 lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold text-brand-charcoal">At a glance</h2>
            <dl className="mt-6 space-y-5">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-brand-border pb-5 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-brand-muted">{detail.label}</dt>
                  <dd className="mt-1 text-base font-semibold text-brand-charcoal">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href={product.ctaHref ?? `/contact?product=${product.id}`}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-charcoal px-6 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-secondary"
            >
              {product.ctaLabel ?? "Request this"}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-brand-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-charcoal sm:text-4xl">
            More from Avenor Digital
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex flex-col rounded-3xl border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-charcoal/10"
              >
                <span className="text-sm text-brand-muted">{item.category}</span>
                <span className="mt-2 text-xl font-semibold tracking-tight text-brand-charcoal">
                  {item.name}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.tagline}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal">
                  Learn more
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── 3. THE SKELETON (Shows while the content is loading) ───
function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-brand-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-24 rounded bg-white/20" />
          <div className="mt-8 h-8 w-32 rounded-full bg-white/20" />
          <div className="mt-5 h-20 w-2/3 rounded-lg bg-white/20" />
          <div className="mt-6 h-8 w-1/2 rounded-lg bg-white/20" />
          <div className="mt-10 h-14 w-48 rounded-full bg-white/20" />
        </div>
      </div>
      
      {/* Body Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <div className="h-10 w-48 rounded bg-gray-200" />
            <div className="mt-5 h-32 w-full rounded bg-gray-100" />
            <div className="mt-14 h-10 w-48 rounded bg-gray-200" />
            <div className="mt-6 space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-full rounded bg-gray-100" />
              ))}
            </div>
          </div>
          <div className="h-96 rounded-[2rem] bg-gray-100" />
        </div>
      </div>
    </div>
  );
}