import Link from "next/link";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(900px,100svh)] w-full items-center overflow-hidden bg-brand-charcoal text-white">
      
      {/* Background SVG */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
      />

      {/* Subtle contrast layers to ensure text is readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-brand-charcoal/20"
      />

      {/* Ambient accent glow (using your brand gold) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 z-0 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-[120px]"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="max-w-5xl">
          
          {/* Eyebrow Tag */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <Sparkles size={15} className="shrink-0 text-brand-gold" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">
              Strategy. Design. Digital.
            </span>
          </div>

          {/* Massive Headline */}
          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
            {/* Top Line */}
            <span className="block text-[clamp(3rem,7.6vw,7rem)] leading-[0.98] tracking-[-0.065em]">
              The Digital Studio
            </span>
            
            {/* Bottom Line */}
            <span className="mt-3 block text-[clamp(1.5rem,3.5vw,3rem)] text-white/90">
              for mission-driven <span className="text-brand-gold">Churches.</span>
            </span>
          </h1>
         

          {/* Supporting Copy */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:mt-10 sm:text-lg sm:leading-9">
            We build thoughtful digital experiences, practical systems, and
            sustainable growth strategies—so your team can focus on what
            matters most: people and ministry.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
            >
              Book a Discovery Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
            >
              Explore Services
              <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Brand positioning line */}
          <div className="mt-14 flex items-center gap-4 sm:mt-16">
            <span aria-hidden="true" className="h-px w-10 bg-brand-gold" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
              Thoughtful technology. Meaningful impact.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}