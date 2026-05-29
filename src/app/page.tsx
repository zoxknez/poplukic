import { Hero } from "@/components/home/Hero";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CertificatesSection } from "@/components/home/CertificatesSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <WhyUsSection />
      <ProcessSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
