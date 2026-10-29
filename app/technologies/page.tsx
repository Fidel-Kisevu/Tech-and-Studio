import { PageHero } from "@/components/site-layout";
import { technologyCategories } from "@/lib/site-data";

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A technical foundation that balances speed, maintainability and practical outcomes."
        description="The company works across frontend, backend, data, automation and creative production. The goal is not to chase every trend; it is to choose the right tools for the right purpose."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologyCategories.map((category) => (
            <article key={category.title} className="rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
              <h3 className="text-2xl text-brand-charcoal">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-brand-border bg-brand-ivory px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
