import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import BusinessGrowth from "@/components/BusinessGrowth";

export default function Home() {
  return (
    <>
      <Navbar />
<Hero />
<Partners />
<BusinessGrowth />
<Services />
<WhyChooseUs />
<About />
<CTA />
<Contact />
<Footer />
<WhatsAppButton />
      
    </>
  );
}