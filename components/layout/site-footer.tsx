import Link from "next/link";
import Image from "next/image";
import { company, footerLinks } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import mainIcon from "@/public/images/mainiconwhite.png";

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
		<footer className="relative overflow-hidden bg-[linear-gradient(125deg,#a0185c_0%,#8a174f_28%,#5a216d_58%,#1d3975_100%)] pb-6 pt-12 text-white">
			<div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
				<div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#ec2a78]/30 blur-3xl" />
				<div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#3478e5]/30 blur-3xl" />
			</div>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Top Section */}
				<div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-10 lg:grid-cols-12 lg:gap-8">
					{/* Left Column: Brand & Socials */}
					<div className="lg:col-span-5">
						<Link href="/" aria-label="Aventek home" className="mb-4 inline-flex items-center">
							<Image
								src={mainIcon}
								alt="Aventek"
								width={150}
								height={48}
								priority
                                className="h-[42px] w-auto object-contain object-left"							/>
						</Link>

						<p className="max-w-md text-sm leading-relaxed text-white/75">
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
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:border-white hover:bg-white hover:text-[#5a216d]"
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
							<h5 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
								{column.title}
							</h5>

							<ul className="space-y-2">
								{column.links.map((link) => (
									<li key={`${column.title}-${link.label}`}>
										<Link
											href={link.href}
											className="text-sm text-white/75 transition-colors hover:text-white"
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
				<div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/75 md:flex-row">
					<p>&copy; 2026 {company.name}. All rights reserved.</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 text-white transition-colors hover:text-white/75"
					>
						Contact <ArrowRight size={14} />
					</Link>
				</div>
			</div>
		</footer>
	);
}