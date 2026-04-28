import Image from "next/image";
import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Special Offers for Dental Services in Coral Springs Smiles",
  description:
    "Get dental appointment with our special offers! Coral Springs Smiles provides top-notch dental services at affordable prices. Book now and save!",
};

const summerOfferImages = [
  {
    src: "/images/offer-1.png",
    alt: "Adult complete checkup special offer",
  },
  {
    src: "/images/offer-2.png",
    alt: "Emergency exam special offer",
  },
  {
    src: "/images/offer-3.png",
    alt: "Kids complete checkup special offer",
  },
] as const;

export default function SpecialsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Specials" breadcrumbLabel="Specials" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand sm:text-base">
            New Patient Online Specials
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center font-display text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Coral Springs Smiles&apos; Promotions will save you money!
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
            At Coral Springs Smiles, we offer competitive pricing and special
            offers and payment options to ensure our patients get the best deal
            while getting the best dental treatments to have a healthy and
            beautiful smile. Coral Springs Smiles will also work with your
            budget and offer other financing options.
          </p>

          <h3 className="mt-14 font-display text-xl font-semibold text-slate-900 sm:text-2xl">
            Summer Special Offers
          </h3>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {summerOfferImages.map((item) => (
              <article
                key={item.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={480}
                  height={620}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </article>
            ))}
          </div>

        </div>
        
        <ActiveMembersSection className="mt-14" />
      </main>
    </>
  );
}
