import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { ProductsIndex } from "@/components/home/ProductsIndex";
import { Capacity } from "@/components/home/Capacity";
import { ProcessStack } from "@/components/home/ProcessStack";
import { TruckLoader } from "@/components/home/TruckLoader";
import { Certificates } from "@/components/home/Certificates";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProductsIndex />
      <Capacity />
      <ProcessStack />
      <TruckLoader />
      <Certificates />
      <ContactSection />
    </>
  );
}
