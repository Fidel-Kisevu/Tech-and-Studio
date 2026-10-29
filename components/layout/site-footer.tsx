import Link from "next/link";
import { company, footerLinks } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { NewsletterForm } from "@/components/ui/newsletter-form";

const footerColumns = [
  { title: "Services", links: footerLinks.services },
  { title: "Products", links: footerLinks.products },
  { title: "Company", links: footerLinks.company },
  { title: "Legal", links: footerLinks.legal },
];

const socialLinks = [
  { label: "LinkedIn", href: company.socialLinks.linkedin, Icon: FaLinkedinIn },
  { label: "X / Twitter", href: company.socialLinks.x, Icon: FaXTwitter },
  { label: "Instagram", href: company.socialLinks.instagram, Icon: FaInstagram },
  { label: "Github", href: company.socialLinks.github, Icon: FaGithub },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-ivory pb-6 pt-12 text-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 border-b border-brand-border/60 pb-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Brand & Socials */}
          <div className="lg:col-span-5">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-brand-charcoal text-sm font-bold text-white">
                A
              </div>
              <span className="text-xl font-semibold tracking-tight text-brand-charcoal">
                {company.name}
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-brand-muted">
              {company.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border/80 bg-white text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: NEWSLETTER COMPONENT */}
          <div className="lg:col-span-7 lg:flex lg:justify-end">
            <NewsletterForm />
          </div>
          
        </div>

        {/* Links Columns - TIGHTER SPACING */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-charcoal">
                {column.title}
              </h5>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-border/60 pt-6 text-sm text-brand-muted md:flex-row">
          <p>&copy; 2026 {company.name}. All rights reserved.</p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-charcoal transition-colors hover:text-brand-muted"
          >
            Contact <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}