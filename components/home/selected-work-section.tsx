import Link from "next/link";
import Image from "next/image"; // <-- Added this import
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/site-layout";
import { portfolioItems } from "@/lib/site-data";

export function SelectedWorkSection() {
  const featuredWork = portfolioItems.slice(0, 3);

  return (
    <section className="bg-brand-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Selected work"
          title="A clearer digital story, shaped around real organizational needs."
          description="These examples reflect the kinds of digital experiences, operational systems and product directions we help teams concept and build with intention."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredWork.map((item) => {
            const tags = [...(item.stack ?? []), ...(item.tech ?? [])];

            return (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group relative flex h-[460px] w-full flex-col justify-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-purple to-brand-charcoal p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                
                {/* Optional Image Layer - using 'any' cast to bypass TS error if image doesn't exist in type */}
                {(item as any).image && (
                  <Image
                    src={(item as any).image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center opacity-60 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}

                {/* Brand Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Status Tag */}
                  <div className="mb-4 inline-flex rounded-full bg-brand-pink px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                    {item.kind}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
                    {tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-sm font-semibold text-white transition-colors group-hover:text-brand-pink">
                      View case study
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-brand-pink">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}