"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { serviceGridData } from "@/lib/service-data";

// How much scrolling (in viewport heights) each service gets.
const STEP_VH = 70;

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = serviceGridData.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(Math.max(Math.floor(latest * count), 0), count - 1);
    setActiveIndex(next);
  });

  if (count === 0) return null;

  const active = serviceGridData[activeIndex];
  const ActiveIcon = active.icon;

  function goTo(index: number) {
    const el = containerRef.current;
    if (!el) return;
    const vh = window.innerHeight / 100;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = (count - 1) * STEP_VH * vh;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: top + ((index + 0.5) / count) * range,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate bg-brand-navy">
        
        {/* Background: every image stays mounted and cross-fades */}
        <div className="sticky top-0 -z-10 h-screen w-full overflow-hidden">
          {serviceGridData.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={false}
              animate={{ opacity: i === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={service.image || "/images/home.png"}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover object-center"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/99 via-brand-purple/99 to-brand-navy/99 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-charcoal/60" />
        </div>

        {/* Content layer, pulled up over the sticky background */}
        <div className="relative z-10 -mt-[100vh]">
          <div
            ref={containerRef}
            className="mx-auto grid max-w-[100rem] lg:grid-cols-2"
          >
            {/* Left: headline and index */}
            <div className="relative hidden lg:block">
              <div className="sticky top-0 flex h-screen flex-col justify-between px-16 pb-16 pt-28">
                
               <div>
                  <h2 className="max-w-sm  rounded-full bg-white py-1 text-[clamp(2rem,3.2vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-brand-pink text-center">
                  WHY WE EXIST
                 </h2>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-2 block text-white text-lg font-medium leading-relaxed"
                  >
                    To equip your ministry for the digital age.
                  </motion.h3>

               </div>
               

                <ul className="space-y-4">
  {serviceGridData.map((service, i) => {
    const isActive = i === activeIndex;
    return (
      <li key={service.slug}>
        <button
          type="button"
          onClick={() => goTo(i)}
          aria-current={isActive ? "true" : undefined}
          className="group flex w-full items-center gap-5 text-left outline-none"
        >
          {/* The Index Number - Enlarges on active */}
          <span
            className={`font-mono font-bold tracking-tighter transition-all duration-500 ease-out ${
              isActive 
                ? "text-2xl text-brand-pink scale-60 origin-left rounded bg-white/90 px-3 py-1.5" 
                : "text-sm text-white/30 group-hover:text-white/60"
            }`}
          >
            0{i + 1}
          </span>

          {/* The Service Title - Slightly enlarges on active */}
          <span
            className={`tracking-wide transition-all duration-500 ease-out group-focus-visible:text-white ${
              isActive
                ? "text-base font-semibold text-white"
                : "text-sm font-medium text-white/40 group-hover:text-white/70"
            }`}
          >
            {service.title}
          </span>
        </button>
      </li>
    );
  })}
</ul>
              </div>
            </div>

            {/* Right: the service in focus */}
            <div
              className="relative"
              style={{ height: `${(count - 1) * STEP_VH + 100}vh` }}
            >
              <div className="sticky top-0 flex h-screen items-center px-6 sm:px-12 lg:px-16">
                
                {/* Mobile headline */}
                <h2 className="absolute inset-x-6 top-24 text-2xl font-bold leading-tight tracking-tight text-white sm:inset-x-12 lg:hidden">
                  WHY WE EXIST
                  <span className="mt-1 block text-white/55">
                    To equip your ministry for the digital age.
                  </span>
                </h2>

                <div className="w-full max-w-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <ActiveIcon
                        size={30}
                        strokeWidth={1.25}
                        aria-hidden="true"
                        className="text-white/80"
                      />

                      <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {active.title}
                      </h3>

                      <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                        {active.shortDescription}
                      </p>

                      <Link
                        href={`/services/${active.slug}`}
                        className="group mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white outline-none transition-colors hover:border-white focus-visible:border-white"
                      >
                        View service
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 17L17 7M8 7h9v9" />
                        </svg>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile progress line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-10 h-px bg-white/20 sm:inset-x-12 lg:hidden"
                >
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full origin-left bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="sr-only">
          {serviceGridData.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`}>{service.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </MotionConfig>
  );
}