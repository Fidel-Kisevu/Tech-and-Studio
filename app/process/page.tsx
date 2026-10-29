import { PageHero } from "@/components/site-layout";
import { processSteps } from "@/lib/site-data";

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A structured way to turn a challenge into a working digital solution."
        description="Good digital work starts with clarity. We use a practical process that keeps decision-making honest, transparent and grounded in the business realities of the organization."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-sm font-semibold text-brand-charcoal">{index + 1}</div>
                <h3 className="text-2xl text-brand-charcoal">{step}</h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-brand-muted">
                {index === 0 && "We listen to the challenge, understand the audience, and identify where the organization needs better systems, clearer communication or stronger digital foundations."}
                {index === 1 && "We align on goals, user groups, business requirements and technical assumptions so the project has a clear plan before design or build begins."}
                {index === 2 && "We design practical, user-friendly experiences that balance visual clarity and real-world usability for both staff and end users."}
                {index === 3 && "We build and iterate on the working solution using the right technologies for the scope, maintainability and future growth of the product."}
                {index === 4 && "We test the experience rigorously, validate the most important scenarios and make sure the digital product behaves in the way people expect."}
                {index === 5 && "We guide launch activities, onboarding and training so the client can move confidently from implementation into ongoing use."}
                {index === 6 && "We keep the digital product healthy with maintenance, improvements and a clear roadmap for future features and support."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
