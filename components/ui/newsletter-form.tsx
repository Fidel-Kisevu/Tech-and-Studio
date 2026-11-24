"use client";

import { Mail } from "lucide-react";

export function NewsletterForm() {
  return (
    <div className="w-full lg:max-w-md">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
        Stay in the loop
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-white/75">
        Get thoughtful ideas, product updates, and practical insights for building digital experiences that actually work.
      </p>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full border border-white/25 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/60 focus:border-white"
            aria-label="Email address"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#5a216d] transition-colors hover:bg-white/90"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}