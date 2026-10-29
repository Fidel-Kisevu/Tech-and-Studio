import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal">404</p>
      <h1 className="text-5xl text-brand-charcoal">This page could not be found.</h1>
      <p className="mt-5 text-lg text-brand-muted">The page you requested may have moved or may not exist yet. Please return to the homepage or contact us for the right next step.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-ivory">Back home</Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/15 bg-white px-5 py-3 text-sm font-medium text-brand-charcoal">Start a project</Link>
      </div>
    </section>
  );
}
