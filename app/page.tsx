import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import EstimateForm from "@/components/EstimateForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { BUSINESS_DETAILS } from "./constants";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Gallery />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Pricing />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Reviews />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Location />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <CTA />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <EstimateForm />
      </AnimatedSection>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
        <p className="mt-2 text-sm">Serving {BUSINESS_DETAILS.city} and surrounding areas.</p>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
