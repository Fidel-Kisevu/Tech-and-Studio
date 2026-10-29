import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { trustPillars } from "@/lib/site-data";

const TRUST_IMAGE: string | null = null;

export function TrustSection() {
  return (
    // Reduced section padding from py-20 lg:py-32 to py-12 lg:py-20
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-center">
          
          {/* 1. IMAGE */}
          {/* Reduced height on large screens from 620px to 500px */}
          <div className="group relative h-[340px] w-full overflow-hidden rounded-[2rem] bg-brand-charcoal lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:h-[500px] lg:rounded-[2.5rem] lg:rounded-tr-none">
            {TRUST_IMAGE ? (
              <Image
                src={TRUST_IMAGE}
                alt="The Avenor Digital team working with a client"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            ) : (
              <div aria-hidden className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-[#2a2623]" />
                <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-gold/25 blur-[100px]" />
                <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-400/10 blur-[90px]" />
              </div>
            )}

            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
            />

            {/* Caption chip - reduced padding and bottom/left spacing */}
           <div className="absolute bottom-32 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl sm:right-auto sm:max-w-xs lg:bottom-32 lg:left-10">
              <p className="text-sm font-semibold leading-snug">
                Built so your team can run it without us.
              </p>
              <p className="mt-0.5 text-xs text-white/75">
                Clear handover, simple tools, real training.
              </p>
            </div>
          </div>

          {/* 2. CARD */}
          {/* Reduced the negative margin overlap, internal padding, and border radius slightly */}
          <div className="relative z-10 mx-3 -mt-10 rounded-[2rem] border border-brand-border/60 bg-white p-6 shadow-[0_30px_60px_rgba(23,26,25,0.08)] sm:mx-6 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mx-0 lg:rounded-[2.5rem] lg:p-10">
            
            {/* Dot pattern */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative">
              {/* Reduced headline margin bottom */}
              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-brand-charcoal sm:text-5xl lg:text-6xl">
                Our expertise
              </h2>

              {/* Reduced top margin and padding for the divider */}
              <div className="mt-5 border-t border-brand-border pt-4">
                <p className="text-xs font-medium text-brand-muted">
                  Digital strategy and systems for mission-driven teams
                </p>
              </div>

              {/* Reduced paragraph spacing */}
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-charcoal">
                We combine strategy, design, software thinking and creative execution so
                your projects are practical, maintainable and easier for your team to
                adopt.
              </p>

              {/* Reduced top margin and vertical gaps in the list */}
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {trustPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                      <CheckCircle2 size={14} aria-hidden />
                    </span>
                    <span className="text-sm leading-6 text-brand-muted">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}