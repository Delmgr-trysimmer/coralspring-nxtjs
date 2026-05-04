import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Periodontist in Coral Springs,FL",
  description:
    "Trusted periodontist in Coral Springs, FL offering advanced gum disease treatment, dental implants & personalized care. Book your visit today!",
};

export default function PeriodontistInCoralSpringsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="relative isolate overflow-hidden bg-[#003d54] pt-24">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,61,84,0.42)_0%,rgba(0,90,120,0.28)_42%,rgba(0,61,84,0.5)_100%)]" />
          <div className="pointer-events-none absolute right-[18%] top-24 z-0 h-72 w-72 rounded-full bg-[rgba(0,174,239,0.28)] blur-[90px]" />
          <div className="pointer-events-none absolute left-[8%] top-40 z-0 h-64 w-64 rounded-full bg-[rgba(198,81,42,0.14)] blur-[88px]" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
            <p className="font-display text-base font-semibold uppercase tracking-[0.2em] text-brand-light sm:text-lg">
              Periodontist in Coral Springs, FL
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Periodontist in Coral Springs With 16+ Years of Advanced Gum Care
              Experience
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white sm:text-lg">
              Specialized Periodontal &amp; Laser Gum Treatment by an Experienced
              Periodontist in Coral Springs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-base"
              >
                Book Online
              </Link>
              <Link
                href="tel:9542668755"
                className="inline-flex items-center justify-center rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-base"
              >
                Call (954) 266-8755
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Expert Periodontal Care for Healthy Gums
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand" aria-hidden />
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-12 lg:px-8">
            <div>
              <p className="text-lg leading-relaxed text-slate-600">
                Periodontal care focuses on the prevention, diagnosis, and
                treatment of gum disease and the supporting structures of the
                teeth. At Coral Springs Smiles, we provide comprehensive
                periodontal care designed to protect your gums, preserve jawbone
                health, and prevent tooth loss.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Our periodontal services are led by{" "}
                <span className="font-semibold text-[#155e86]">Dr. Payal Anand</span>
                , an
                experienced periodontist with over 16 years of hands-on clinical
                experience treating early to advanced gum disease.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Every patient receives personalized care using advanced
                diagnostic tools, modern laser technology, and evidence-based
                treatment protocols.
              </p>
              <p className="mt-6 border-l-4 border-brand pl-4 text-lg leading-relaxed font-semibold italic text-[#155e86]">
                We proudly serve patients in Coral Springs and surrounding South
                Florida communities.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
                aria-label="Expert periodontal care video"
              >
                <source src="/videos/lanap.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
