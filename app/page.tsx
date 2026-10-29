import { ClosingCta } from "@/components/home/closing-cta";
import { HeroSection } from "@/components/home/hero-section";
import { ProductsSection } from "@/components/home/products-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { ServicesSection } from "@/components/home/services-section";
import { TrustSection } from "@/components/home/trust-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SelectedWorkSection />
      <ServicesSection />
      <ProductsSection />
      <ClosingCta />
    </>
  );
}
