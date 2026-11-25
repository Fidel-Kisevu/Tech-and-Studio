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
          className="flex shrink-0 items-center gap-6 px-4 sm:gap-8 sm:px-6"
        >
          <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.13em] text-brand-pink transition-colors duration-300 hover:text-brand-navy sm:text-sm">
            {service}
          </span>
          {/* Straight vertical separator line */}
          <span className="text-brand-navy font-light" aria-hidden="true">
            |
          </span>
        </div>
      ))}
    </>
  );
}

export function ServicesMarquee() {
  return (
    <section
      aria-label="Aventek services"
      className="relative overflow-hidden bg-white py-6 sm:py-8"
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

          <div className="flex shrink-0 items-center" aria-hidden="true">
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