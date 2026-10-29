import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted">{description}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="border-b border-brand-border bg-brand-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-brand-charcoal sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        <div className="rounded-[28px] border border-brand-border bg-white p-4 shadow-[0_26px_80px_rgba(23,26,25,0.08)]">
          <div className="rounded-[22px] bg-brand-charcoal p-5 text-brand-ivory">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/20 text-xs font-semibold text-brand-gold">A</div>
                <div>
                  <div className="text-sm font-semibold">Project Snapshot</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-brand-ivory/60">Digital studio</div>
                </div>
              </div>
              <div className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-gold">Live</div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-brand-ivory/60">Discovery</div>
                <div className="mt-2 text-2xl font-semibold">Needs review</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-ivory/60">Scope</div>
                  <div className="mt-2 text-xl font-semibold">Website</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-ivory/60">Build</div>
                  <div className="mt-2 text-xl font-semibold">Custom</div>
                </div>
              </div>
              <div className="rounded-2xl bg-brand-gold/10 p-4 text-sm text-brand-ivory">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Sparkles size={14} /> Strategy & delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Badges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex rounded-full border border-brand-border bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-charcoal"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition";
  const style =
    variant === "primary"
      ? "bg-brand-charcoal text-brand-ivory hover:bg-brand-secondary"
      : "border border-brand-charcoal/15 bg-white text-brand-charcoal hover:bg-brand-ivory";

  return (
    <Link href={href} className={`${base} ${style}`}>
      {children}
    </Link>
  );
}
