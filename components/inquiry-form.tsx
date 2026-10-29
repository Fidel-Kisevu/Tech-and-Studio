'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  organization: z.string().min(2, 'Organization is required.'),
  email: z.string().email('Please provide a valid email address.'),
  phone: z.string().optional().or(z.literal('')),
  organizationType: z.string().min(1, 'Please choose an organization type.'),
  serviceRequired: z.string().min(1, 'Please choose a service.'),
  projectDescription: z.string().min(20, 'Please share a bit more detail about your project.'),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  contactPreference: z.string().optional().or(z.literal('')),
  consent: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that you agree to the privacy notice.',
  }),
  website: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

const defaultValues: Partial<InquiryFormValues> = {
  organizationType: '',
  serviceRequired: '',
  budget: '',
  timeline: '',
  contactPreference: '',
  consent: true,
};

export function InquiryForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string>('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues,
  });

  async function onSubmit(values: InquiryFormValues) {
    setFormState('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, phone: values.phone ?? '' }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'We could not submit the inquiry. Please try again.');
      }

      reset();
      setFormState('success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'A problem occurred while sending your message.';
      setServerError(message);
      setFormState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_20px_60px_rgba(23,26,25,0.08)]" noValidate>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Name</label>
          <input {...register('name')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none ring-0 transition focus:border-brand-gold" placeholder="Your full name" />
          {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Organization</label>
          <input {...register('organization')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold" placeholder="Church, ministry or organization" />
          {errors.organization ? <p className="mt-2 text-sm text-red-600">{errors.organization.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Email</label>
          <input type="email" {...register('email')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold" placeholder="you@example.com" />
          {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Phone (optional)</label>
          <input {...register('phone')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold" placeholder="+254 ..." />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Organization type</label>
          <select {...register('organizationType')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold">
            <option value="">Select one</option>
            <option value="Church">Church</option>
            <option value="Ministry">Ministry</option>
            <option value="NGO">NGO</option>
            <option value="Community group">Community group</option>
            <option value="Association">Association</option>
            <option value="Other">Other</option>
          </select>
          {errors.organizationType ? <p className="mt-2 text-sm text-red-600">{errors.organizationType.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Service required</label>
          <select {...register('serviceRequired')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold">
            <option value="">Select a service</option>
            <option value="Websites and digital presence">Websites and digital presence</option>
            <option value="Custom software and organizational systems">Custom software and organizational systems</option>
            <option value="Graphic design and creative media">Graphic design and creative media</option>
            <option value="Data analytics and reporting">Data analytics and reporting</option>
            <option value="AI and workflow automation">AI and workflow automation</option>
            <option value="Ongoing support and maintenance">Ongoing support and maintenance</option>
            <option value="Other">Other</option>
          </select>
          {errors.serviceRequired ? <p className="mt-2 text-sm text-red-600">{errors.serviceRequired.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-brand-charcoal">Project description</label>
        <textarea {...register('projectDescription')} rows={5} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold" placeholder="Tell us about the challenge, goals and current situation." />
        {errors.projectDescription ? <p className="mt-2 text-sm text-red-600">{errors.projectDescription.message}</p> : null}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Estimated budget range</label>
          <select {...register('budget')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold">
            <option value="">Select</option>
            <option value="Below $1k">Below $1k</option>
            <option value="$1k-$5k">$1k-$5k</option>
            <option value="$5k-$15k">$5k-$15k</option>
            <option value="$15k-$30k">$15k-$30k</option>
            <option value="$30k+">$30k+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Desired timeline</label>
          <select {...register('timeline')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold">
            <option value="">Select</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-brand-charcoal">Preferred contact method</label>
          <select {...register('contactPreference')} className="w-full rounded-xl border border-brand-border bg-brand-ivory px-4 py-3 text-sm outline-none transition focus:border-brand-gold">
            <option value="">Select</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-brand-border bg-brand-ivory p-4">
        <input id="consent" type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 rounded border-brand-charcoal" />
        <label htmlFor="consent" className="text-sm text-brand-muted">
          I agree to the applicable privacy notice and consent to being contacted about this inquiry.
        </label>
      </div>
      {errors.consent ? <p className="text-sm text-red-600">{errors.consent.message}</p> : null}

      {formState === 'success' ? (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          <CheckCircle2 className="h-5 w-5" />
          Your project inquiry has been received. We will be in touch soon.
        </div>
      ) : null}

      {formState === 'error' || serverError ? (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5" />
          {serverError || 'Something went wrong while sending your inquiry.'}
        </div>
      ) : null}

      <button type="submit" disabled={formState === 'submitting'} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-ivory transition hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-70">
        {formState === 'submitting' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : 'Send project inquiry'}
      </button>
    </form>
  );
}
