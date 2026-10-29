import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// Note: dynamic = "force-dynamic" was removed here

export const metadata: Metadata = {
  title: "Avenor Digital | Purpose-led digital systems and design",
  description:
    "Avenor Digital helps churches, ministries and mission-driven organizations build digital experiences, systems and creative support that are practical and sustainable.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-ivory text-brand-charcoal">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-[60px]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}