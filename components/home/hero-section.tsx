
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDownRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(850px,100svh)] w-full items-center overflow-hidden bg-brand-charcoal text-white">

      {/* Background photography */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-brand-charcoal/65" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-brand-charcoal/20" />

      {/* Subtle brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-[120px]"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 sm:py-36 lg:px-12 lg:py-40">

        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3 border rounded border-white/15 bg-white/[0.08] px-5 py-3 backdrop-blur-md">

            <span className="text-[5px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
              Digital solutions for your ministry
            </span>
          </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-[clamp(2.3rem,6.2vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
          The Digital Solutions
        </h1>

        <span className="mt-2 block max-w-5xl text-[clamp(0.8rem,1.8vw,1rem)] leading-[1.15] tracking-[-0.035em]">
          for Ministers, Churches, and Communities.
        </span>


         

          {/* Supporting copy */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:mt-10 sm:text-lg sm:leading-9">
            Your complete digital ecosystem—websites, apps, and publishing
            tools designed to help you share your teachings and grow your
            community.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center">

            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 bg-brand-gold px-8 py-4 text-sm font-bold text-brand-charcoal transition-all duration-300 hover:bg-white"
            >
              Let's Build Together

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-gold hover:bg-white/10"
            >
              Explore Our Services

              <ArrowDownRight
                size={18}
                className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>

          </div>


        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-white/50 lg:flex">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <span className="h-10 w-px bg-brand-gold/60" />
      </div>

    </section>
  );
}
