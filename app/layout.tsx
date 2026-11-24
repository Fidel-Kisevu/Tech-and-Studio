import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "./fonts/plus-jakarta-sans-400.woff2", // Changed to ./fonts/
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-500.woff2", // Changed to ./fonts/
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-600.woff2", // Changed to ./fonts/
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-700.woff2", // Changed to ./fonts/
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aventek | Purpose-led digital systems and design",
  description:
    "Aventek helps churches, ministries and mission-driven organizations build digital experiences, systems and creative support that are practical and sustainable.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
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