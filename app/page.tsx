import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import BusinessGrowth from "@/components/BusinessGrowth";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Trusted Partners */}
        <Partners />

        {/* Business Growth */}
        <BusinessGrowth />

        {/* Services Preview */}
        <Services />

        {/* Why Choose Jamestuns */}
        <WhyChooseUs />

        {/* Main CTA */}
        <CTA />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  );
}