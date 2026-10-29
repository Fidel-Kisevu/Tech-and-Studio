"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import { navItems, serviceItems, productItems } from "@/lib/site-data"; 

// ==========================================
// 1. SITE HEADER
// ==========================================
export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsMegaMenuOpen(false); 
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const mainLinks = navItems.slice(0, 5);
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out border-b border-gray-100 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LEFT: Logo & Main Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center bg-brand-charcoal text-white text-xs font-bold">
                A
              </div>
              <span className="text-lg font-semibold tracking-tight text-brand-charcoal">
                Avenor
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 h-full">
              {mainLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className={`group relative flex h-[60px] items-center text-[13px] font-medium transition-colors hover:text-brand-charcoal ${
                      isActive ? "font-semibold text-brand-charcoal" : "text-brand-muted"
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-[3px] w-full scale-x-0 bg-brand-charcoal transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    {isActive && <span className="absolute bottom-0 left-0 h-[3px] w-full bg-brand-charcoal" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: All Avenor Dropdown, Search, CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div 
              className="relative h-[60px] flex items-center"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-medium text-brand-charcoal hover:underline decoration-2 underline-offset-4">
                All Avenor
                <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <div 
                className={`absolute right-0 top-full w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-200 origin-top-right ${
                  isMegaMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-8 p-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Services</h4>
                    <ul className="space-y-3">
                      {serviceItems.slice(0, 4).map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} onClick={closeMenus} className="text-sm text-gray-700 hover:text-brand-charcoal hover:underline decoration-2 underline-offset-4">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Products</h4>
                    <ul className="space-y-3">
                      {productItems.slice(0, 4).map((p) => (
                        <li key={p.slug}>
                          <Link href={`/products/${p.slug}`} onClick={closeMenus} className="text-sm text-gray-700 hover:text-brand-charcoal hover:underline decoration-2 underline-offset-4">
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                  <Link href="/contact" onClick={closeMenus} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:underline decoration-2 underline-offset-4">
                    Need something specific? Let&apos;s Talk <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <button className="text-brand-charcoal hover:underline decoration-2 underline-offset-4" aria-label="Search">
              <Search size={18} />
            </button>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="flex items-center justify-center bg-brand-charcoal px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-gray-800"
            >
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenus}
              className="border-b border-gray-100 py-4 text-base font-medium text-brand-charcoal"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenus} className="mt-6 bg-brand-charcoal px-4 py-3 text-center text-sm font-medium text-white">
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}

