import { PageHero } from "@/components/site-layout";
import { InquiryForm } from "@/components/inquiry-form";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building, improving or rethinking."
        description="Share a little about your organization, the challenge you are facing and the kind of support you need. We will review the details and clarify the best next step."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[28px] border border-brand-border bg-brand-charcoal p-8 text-brand-ivory shadow-[0_12px_40px_rgba(23,26,25,0.08)]">
            <h3 className="text-3xl">Start a project</h3>
            <p className="mt-4 text-sm leading-7 text-brand-ivory/75">We work with churches, ministries, mission-driven organizations and purpose-led communities that want a stronger digital foundation.</p>
            <ul className="mt-6 space-y-3 text-sm text-brand-ivory/75">
              <li>• Website design and development</li>
              <li>• Digital systems and dashboards</li>
              <li>• Creative support and media production</li>
              <li>• Reporting, automation and data support</li>
            </ul>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
