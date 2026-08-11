import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { HubEstimator } from "@/app/services/ClientSections";
import { BUSINESS_DETAILS } from "./constants";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <StatsBar />

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
        <HubEstimator whatsapp={BUSINESS_DETAILS.whatsapp} />
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
        <FAQ />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <EstimateForm />
      </AnimatedSection>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
