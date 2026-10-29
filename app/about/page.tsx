import { PageHero, SectionIntro } from "@/components/site-layout";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A founder-led studio for digital systems, creative work and practical growth."
        description="Avenor Digital was created to help churches, ministries and mission-driven organizations build stronger digital foundations without losing sight of their mission or operational realities."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-brand-border bg-white p-8 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
            <SectionIntro
              title="The company model"
              description="The studio combines software development, design, digital publishing and analytics in one practical workflow. That makes it easier for organizations to work with one partner across website build-outs, operations improvements and broader digital transformation work."
            />
          </div>
          <div className="rounded-[28px] border border-brand-border bg-brand-charcoal p-8 text-brand-ivory shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
            <h3 className="text-3xl">Built for real-world needs</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-ivory/75">
              <li>• Churches and ministries need websites that communicate clearly and support community engagement.</li>
              <li>• Organizations need compelling digital systems that reduce friction and improve visibility.</li>
              <li>• Mission-driven teams need tools that are maintainable, practical and easy to hand over.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
