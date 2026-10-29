import { PageHero } from "@/components/site-layout";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of service"
        title="Terms for working with Avenor Digital."
        description="These terms provide a simple overview of how project work is scoped, communicated and delivered. Final agreements are subject to a written proposal or signed project contract."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-[30px] border border-brand-border bg-white p-8 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
          <div>
            <h3 className="text-2xl text-brand-charcoal">Scope of work</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">The studio offers website design, product design, software development, creative services and supporting analytics or automation consultation. Scope, timelines and deliverables are defined in writing before work proceeds.</p>
          </div>
          <div>
            <h3 className="text-2xl text-brand-charcoal">Client responsibilities</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">Clients are expected to provide required information, approvals, brand assets and content access in a timely manner. Delays in decision-making or content delivery may affect scheduling and delivery dates.</p>
          </div>
          <div>
            <h3 className="text-2xl text-brand-charcoal">Changes and support</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">Changes to scope or additional requests are reviewed before implementation. Ongoing support is scheduled separately where appropriate and is not assumed to be unlimited or included without a defined agreement.</p>
          </div>
        </div>
      </section>
    </>
  );
}
