import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Set your image path here once you add it to public/images/
const HERO_IMAGE: string | null = null; // e.g. "/images/hero-bg.jpg"
export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-brand-charcoal">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        {HERO_IMAGE ? (
          <Image
            src={HERO_IMAGE}
            alt="Avenor Digital Community"
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          // Fallback gradient if no image is present yet
          <div className="h-full w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        )}
        
        {/* 2. COLOR OVERLAYS (To make text readable and give it that cinematic feel) */}
        {/* Left-side warm glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-transparent to-transparent mix-blend-overlay" />
        {/* Dark vignette for text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
      </div>

      {/* 3. CENTERED TYPOGRAPHY */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        
        <h1 className="flex flex-col items-center text-white">
          {/* Top Line */}
          <span className="text-3xl font-black tracking-tight sm:text-7xl lg:text-[6.5rem] leading-none">
            The Digital Studio
          </span>

          {/* Middle Line (The Handwritten Script) */}
          <span className="my-2 -rotate-2 font-serif text-3xl italic text-orange-400 sm:text-5xl lg:text-[4rem]">
            for mission-driven
          </span>

          {/* Bottom Line */}
          <span className="text-2xl font-black tracking-tight sm:text-7xl lg:text-[6.5rem] leading-none">
            Churches
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-white/80 sm:text-xl">
          We build clear digital experiences, practical systems, and sustainable growth strategies so your team can focus on people.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Book a Discovery Call
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}