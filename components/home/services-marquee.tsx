const services = [
  "Progressive Web App Development",
  "Custom Software",
  "App Development",
  "E-commerce",
  "Graphic Design",
  "Digital Systems",
  "SaaS Solutions",
];

function ServiceItems() {
  return (
    <>
      {services.map((service) => (
        <div
          key={service}
          className="flex shrink-0 items-center gap-7 px-6 sm:gap-10 sm:px-9"
        >
          <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.13em] text-brand-charcoal transition-colors duration-300 hover:text-brand-gold sm:text-sm">
            {service}
          </span>

          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rotate-45 bg-brand-gold"
          />
        </div>
      ))}
    </>
  );
}

export function ServicesMarquee() {
  return (
    <section
      aria-label="Aventek services"
      className="relative overflow-hidden border-y border-brand-border/60 bg-white py-6 sm:py-8"
    >
      <style>{`
        @keyframes aventek-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .aventek-marquee-track {
          display: flex;
          width: max-content;
          animation: aventek-marquee 38s linear infinite;
        }

        .aventek-marquee:hover .aventek-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .aventek-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="aventek-marquee flex overflow-hidden">
        <div className="aventek-marquee-track">
          <div className="flex shrink-0 items-center">
            <ServiceItems />
          </div>

          <div
            className="flex shrink-0 items-center"
            aria-hidden="true"
          >
            <ServiceItems />
          </div>
        </div>
      </div>

      {/* Soft edge transitions */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-20" />
    </section>
  );
}
