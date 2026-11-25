"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Typewriter component
function TypewriterText({ text }: { text: string }) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.028, // speed of typing
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:mt-10 sm:text-lg sm:leading-9"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate flex w-full items-center overflow-hidden bg-brand-charcoal text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Brand gradient overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-brand-pink/90 via-brand-purple/80 to-brand-navy/90 mix-blend-multiply" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-brand-pink/40 via-transparent to-brand-navy/50 mix-blend-overlay" />

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Subtle brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-36 lg:px-12 lg:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Top tagline */}
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-3">
            <span
              className="text-xl font-normal tracking-wide text-white/95 sm:text-4xl lg:text-[38px]"
              style={{
                fontFamily: "'Bestermind', 'Great Vibes', cursive",
                lineHeight: "1.2",
              }}
            >
              Technology should be an enabler, not a barrier.
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="max-w-5xl text-[clamp(2.3rem,6.2vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-0.055em]"
          >
            The Digital Solutions
          </motion.h1>

          {/* Sub-headline */}
          <motion.span
            variants={item}
            className="mt-2 block max-w-5xl text-xl leading-[1.15] tracking-[-0.035em] sm:text-3xl"
          >
            for Ministers, Churches, and Communities.
          </motion.span>

          {/* Typewriter paragraph */}
          <TypewriterText text="Your complete digital ecosystem—websites, apps, and publishing tools designed to help you share your teachings and grow your community." />

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 bg-white px-8 py-4 text-sm text-brand-charcoal transition-all duration-300 hover:bg-white"
            >
              Let's Build Together
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-center gap-3 px-8 py-4 text-sm font-normal text-white transition-all duration-300 hover:border-brand-gold hover:bg-white/10"
            >
              Explore Our Services
              <ArrowDownRight
                size={18}
                className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-white/50 lg:flex"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <span className="h-10 w-px bg-white" />
      </motion.div>
    </section>
  );
}