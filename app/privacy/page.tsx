import { PageHero } from "@/components/site-layout";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="How we handle project inquiries and public website information."
        description="This privacy notice explains how project information is handled on the website and the basic principles behind our data practices."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-[30px] border border-brand-border bg-white p-8 shadow-[0_10px_35px_rgba(23,26,25,0.04)]">
          <div>
            <h3 className="text-2xl text-brand-charcoal">Collection of information</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">We only collect information necessary to respond to project inquiries, including name, organization, email and project context. Optional fields are clearly marked as optional.</p>
          </div>
          <div>
            <h3 className="text-2xl text-brand-charcoal">Use of information</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">Project inquiries are reviewed to understand the request, determine the appropriate scope and respond to the communication. We do not use this information for unrelated marketing purposes without a clear basis to do so.</p>
          </div>
          <div>
            <h3 className="text-2xl text-brand-charcoal">Safeguards</h3>
            <p className="mt-3 text-base leading-8 text-brand-muted">We use secure handling practices, server-side processing where appropriate and reasonable access control. Sensitive data should not be attached to public project inquiries unless there is an agreed need.</p>
          </div>
        </div>
      </section>
    </>
  );
}
