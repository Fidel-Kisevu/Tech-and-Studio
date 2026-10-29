import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClosingCta() {
  return (
    <section className="bg-brand-charcoal py-20 text-brand-ivory">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-gold">Ready to move forward?</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Build a clearer digital foundation for the work that matters.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-ivory/75">
          We will help you identify the right next step, define a realistic path and create a solution that supports your mission, team and growth goals.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-medium text-brand-charcoal transition hover:opacity-90"
          >
            Start a project
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-medium text-brand-ivory transition hover:bg-white/5"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
