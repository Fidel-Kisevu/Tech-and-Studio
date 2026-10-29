import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionIntro } from "@/components/site-layout";
import { serviceItems } from "@/lib/site-data";

// Map specific images to your services. 
// Add these images to your /public/images/ folder later.
const serviceImages: Record<string, string | null> = {
  "digital-presence": null, // e.g. "/images/service-web.jpg"
  "digital-systems": null,  // e.g. "/images/service-systems.jpg"
  "creative-studio": null,  // e.g. "/images/service-creative.jpg"
};

export function ServicesSection() {
  const featuredServices = serviceItems.slice(0, 3);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionIntro
          eyebrow="Services"
          title="Focused support across the digital foundations that matter most."
          description="Whether you need a stronger website, a custom system or a more sustainable digital workflow, we help you design something useful and realistic for your team."
        />

        {/* THE CARD GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {featuredServices.map((service) => {
            const imagePath = serviceImages[service.slug];

            return (
              <article
                key={service.slug}
                className="group relative flex h-[500px] w-full flex-col justify-end overflow-hidden rounded-[2rem] bg-brand-charcoal p-8 shadow-xl transition-transform duration-500 hover:-translate-y-2"
              >
                
                {/* 1. BACKGROUND IMAGE */}
                {imagePath ? (
                  <Image
                    src={imagePath}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  // Premium fallback gradient if no image is added yet
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal to-[#2a2623]" />
                )}

                {/* 2. GRADIENT OVERLAY (Crucial for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* 3. CONTENT (Sits on top of the gradient) */}
                <div className="relative z-10">
                  
                  {/* Status Tag (Yellow like the "New" tag in reference) */}
                  <div className="mb-4 inline-flex rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal shadow-sm">
                    {service.status}
                  </div>

                  {/* Title & Chevron */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    {/* Decorative chevron like the reference image */}
                    <ChevronDown className="shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-y-1" size={24} />
                  </div>

                  {/* Short Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-charcoal transition-all hover:bg-brand-ivory hover:scale-105"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}