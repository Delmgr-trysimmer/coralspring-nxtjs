import BeforeAfter from "@/components/BeforeAfter";
import BlogHighlights from "@/components/BlogHighlights";
import CTA from "@/components/CTA";
import Doctor from "@/components/Doctor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PatientScheduling from "@/components/PatientScheduling";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-144 bg-[radial-gradient(circle_at_18%_12%,rgba(198,79,36,0.12),transparent_42%),radial-gradient(circle_at_top,rgba(0,174,239,0.2),transparent_52%),radial-gradient(circle_at_92%_24%,rgba(0,174,239,0.08),transparent_40%)]" />
        <Hero />
        <Stats />
        <Doctor />
        <WhyChoose />
        <Services />
        <PatientScheduling />
        <BeforeAfter />
        <Testimonials />
        <BlogHighlights />
        <CTA />
      </main>
    </>
  );
}
