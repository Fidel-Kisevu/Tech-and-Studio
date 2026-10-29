"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Globe,
  HandHeart,
  Layers,
  Mail,
  Palette,
  Radio,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { products, type Accent, type IconName, type Product } from "@/lib/products-data";

// ─── Lookups ───
const ICONS: Record<IconName, ComponentType<{ size?: number; className?: string }>> = {
  globe: Globe,
  "hand-heart": HandHeart,
  radio: Radio,
  users: Users,
  calendar: CalendarDays,
  smartphone: Smartphone,
  chart: BarChart3,
  palette: Palette,
  mail: Mail,
  shield: ShieldCheck,
  book: BookOpen,
  layers: Layers,
};

const ACCENTS: Record<Accent, string> = {
  gold: "from-brand-gold to-amber-700",
  charcoal: "from-brand-charcoal to-[#2f2a26]",
  blue: "from-sky-500 to-indigo-700",
  green: "from-emerald-500 to-teal-700",
  rose: "from-rose-500 to-orange-600",
};

// ─── Visual Component ───
function ProductVisual({ product, iconSize }: { product: Product; iconSize: number }) {
  const Icon = ICONS[product.icon];
  
  // This checks if the product ID is the first one in your list
  const isFirstCard = products[0]?.id === product.id;

  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        fill
        draggable={false}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        // Add this line to fix the LCP warning:
        loading={isFirstCard ? "eager" : "lazy"} 
        priority={isFirstCard}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${ACCENTS[product.accent]}`}>
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={iconSize} className="text-white drop-shadow-sm" />
      </div>
    </div>
  );
}

// ─── Main Section ───
export function ProductsSection() {
  const [category, setCategory] = useState("All");
  const [dragging, setDragging] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ startX: 0, startScroll: 0, moved: false });

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const visible = useMemo(
    () => (category === "All" ? products : products.filter((p) => p.category === category)),
    [category]
  );

  const updateArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanLeft(rail.scrollLeft > 4);
    setCanRight(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows, visible]);

  const scrollByCards = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * Math.max(rail.clientWidth * 0.8, 260), behavior: "smooth" });
  };

  const chooseCategory = (c: string) => {
    setCategory(c);
    railRef.current?.scrollTo({ left: 0 });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const rail = railRef.current;
    if (!rail) return;

    drag.current = { startX: e.clientX, startScroll: rail.scrollLeft, moved: false };

    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - drag.current.startX;
      if (Math.abs(dx) > 5) {
        if (!drag.current.moved) setDragging(true);
        drag.current.moved = true;
      }
      if (drag.current.moved) rail.scrollLeft = drag.current.startScroll - dx;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      setDragging(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  // Prevent navigation if the user was dragging
  const handleCardClick = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  return (
    <section
      id="products"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="products-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-charcoal sm:text-5xl lg:text-6xl"
            >
              Everything we build for your mission.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">
              Products and services. Hover to learn more, or click any card to explore the full details.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              disabled={!canLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-brand-charcoal transition hover:border-brand-charcoal/40 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              disabled={!canRight}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-charcoal text-brand-ivory transition hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

    
      </div>

      {/* Rail */}
      <div
        ref={railRef}
        onScroll={updateArrows}
        onPointerDown={onPointerDown}
        className={`mt-10 flex gap-6 overflow-x-auto px-4 pb-8 pt-4 [scrollbar-width:none] sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-proximity"
        }`}
      >
        {visible.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            onClick={handleCardClick}
            className="group relative flex h-[450px] w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] bg-brand-charcoal p-7 text-left shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:w-[340px]"
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <ProductVisual product={p} iconSize={64} />
            </div>

            {/* Dark Gradient Overlay - Darkens more on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-end">
              
              <div className="mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {p.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-white">{p.name}</h3>
              
              {/* 
                THE FIX: 
                We use a fixed height container here to prevent layout shifts.
                The tagline slides up and fades out. 
                The description slides up from below and fades in.
              */}
              <div className="relative mt-2 h-[80px] overflow-hidden">
                
                {/* Tagline (visible by default) */}
                <p className="absolute inset-x-0 top-0 line-clamp-2 text-sm leading-relaxed text-white/80 transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
                  {p.tagline}
                </p>

                {/* Description (revealed on hover) */}
                <p className="absolute inset-x-0 top-0 line-clamp-4 text-sm leading-relaxed text-white/90 translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  {p.description}
                </p>
                
              </div>

              {/* Static Button at the bottom */}
              <div className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-charcoal transition-transform duration-300 group-hover:scale-105">
                Learn more
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
        <div aria-hidden className="w-2 shrink-0" />
      </div>
    </section>
  );
}