import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google"; // <-- Import Roboto
import { SiteHeader } from "@/components/layout/site-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

// 1. Roboto for clean, light text
const roboto = Roboto({ 
  weight: ["300", "400", "500"], 
  subsets: ["latin"],
  variable: "--font-roboto", 
});

// 2. Plus Jakarta Sans (Main Font)
const plusJakartaSans = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans-400.woff2", weight: "300", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aventek | Purpose-led digital systems and design",
  description: "Aventek helps churches, ministries and mission-driven organizations build digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${roboto.variable} h-full antialiased`}
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