import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type ServiceCard = {
  title: string;
  src: string;
  alt: string;
  href?: string;
};

export const metadata: Metadata = {
  title: "Best Dental Service at Coral Springs Smiles, Florida",
  description:
    "Coral Springs Smiles offers a range of dental services, including cosmetic dentistry, general dentistry, and emergency care. Get high-quality dental care in Coral Springs, FL.",
};

const SERVICE_ITEMS: ServiceCard[] = [
  {
    title: "Your First Visit",
    src: "/images/your-first-visit.png",
    alt: "Patient comfortable in the dental chair on a first visit",
  },
  // {
  //   title: "Kids Dentist",
  //   src: "/images/your-first-visit.png",
  //   alt: "Child-friendly pediatric dental care in Coral Springs",
  //   href: "/kids-dentist",
  // },
  {
    title: "Cosmetic Dentistry",
    src: "/images/Cosmetic-Dentistry.jpg",
    alt: "Cosmetic dentistry smile shade evaluation",
    href: "/cosmetic-dentistry",
  },
  // {
  //   title: "Porcelain Veneers",
  //   src: "/images/Cosmetic-Dentistry.jpg",
  //   alt: "Porcelain veneers for a natural-looking smile",
  //   href: "/veneers",
  // },
  {
    title: "Crowns & Bridges",
    src: "/images/Crowns-Bridges.jpg",
    alt: "Dental crowns and bridges treatment",
    href: "/crowns",
  },
  {
    title: "Dental Implant",
    src: "/images/Dental-Implants.jpg",
    alt: "Dental implant and crown model",
    href: "/dental-implant",
  },
  {
    title: "Root Canal Treatment",
    src: "/images/Root-Canal.jpg",
    alt: "Root canal treatment care",
    href: "/endodontics",
  },
  {
    title: "Orthodontics",
    src: "/images/Orthodontics.jpg",
    alt: "Orthodontic dental care",
    href: "/orthodontics",
  },
  {
    title: "Teeth Whitening",
    src: "/images/Teeth-Whitening.jpg",
    alt: "Professional teeth whitening",
    href: "/teeth-whitening",
  },
  {
    title: "Invisalign Coral Springs",
    src: "/images/Invisalign.jpg",
    alt: "Invisalign clear aligners in Coral Springs",
    href: "/invisalign",
  },
  {
    title: "Dermal Fillers",
    src: "/images/Dermal-Fillers.jpg",
    alt: "Dermal fillers consultation",
    href: "/dermal-fillers-coral-springs",
  },
  {
    title: "Botox® Cosmetics",
    src: "/images/Botox-Cosmetics.jpg",
    alt: "Botox cosmetic treatment",
    href: "/botox-coral-springs",
  },
  {
    title: "Dental Emergencies",
    src: "/images/Dental-Emergencies.jpg",
    alt: "Dental emergency care",
    href: "/emergency-dentist-coral-springs",
  },
  {
    title: "Laser Dentistry",
    src: "/images/Laser-Dentistry.jpg",
    alt: "Laser dentistry procedure",
    href: "/laser-dentistry",
  },
  {
    title: "Periodontics",
    src: "/images/Periodontics.jpg",
    alt: "Periodontal gum health care",
    href: "/periodontics",
  },
];

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Services" breadcrumbLabel="Services" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-brand sm:text-xl">
              Our Services
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Our family dentistry services include: dental implants, crowns/bridges,
              dentures and cosmetic dentistry, such as veneers or teeth whitening.
              Schedule your visit by calling our office in Coral Springs at:{" "}
              <Link
                href="tel:9542668755"
                className="font-semibold text-brand underline-offset-2 hover:text-brand-muted hover:underline"
              >
                (954) 266-8755
              </Link>
              , or by filling out our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-brand underline-offset-2 hover:text-brand-muted hover:underline"
              >
                contact us
              </Link>{" "}
              form.
            </p>
          </header>

          <ul className="mt-14 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {SERVICE_ITEMS.map((item) => {
              const card = (
                <article className="flex flex-col items-center text-center">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={640}
                      height={420}
                      className="aspect-16/11 h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-brand sm:text-lg">
                    {item.title}
                  </h3>
                </article>
              );

              return (
                <li key={item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-2xl outline-offset-4 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <section
          aria-labelledby="service-cta-heading"
          className="relative isolate mt-16 overflow-hidden py-16 sm:mt-20 "
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#007ea8] via-[#0090c5] to-[#005a78]" />
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Image
              src="/images/shap-bg.png"
              alt=""
              fill
              className="object-fill opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(255_255_255/0.12),transparent_55%)]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-light sm:text-sm">
              Have A Perfect Smile!
            </p>
            <h2
              id="service-cta-heading"
              className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Find The Ideal Treatment For Your Smile!
            </h2>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <ActiveMembersSection
          wrap="none"
          className="border-t border-slate-200 px-4 pt-14 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
