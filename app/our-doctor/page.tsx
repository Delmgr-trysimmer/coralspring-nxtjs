import Image from "next/image";
import ActiveMembersSection from "@/components/ActiveMembersSection";
import Stats from "@/components/Stats";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Expert Dental Team | Coral Springs Smiles",
  description:
    "Get to know our experienced and friendly dentists, orthodontists, and specialists who provide top-quality dental care in Coral Springs, FL.",
};

export default function OurDoctorPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Our Doctor" breadcrumbLabel="Our Doctor" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-start lg:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                Meet Dr. Payal Anand, DDS
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Looking for a top-notch cosmetic dentist or a reliable general
                  dentist to take care of your regular checkups and cleanings?
                  Look no further than Dr. Payal Anand and her expert team. With
                  the latest state-of-the-art technology and efficiency, they
                  provide exceptional dental services tailored to your unique
                  needs.
                </p>
                <p>
                  Dr. Anand is a proud graduate of Louisiana State University
                  School of Dentistry, and is an esteemed member of the American
                  Dental Association (ADA), Academy of Cosmetic Dentistry (ACD),
                  and Academy of General Dentistry (AGD). Her extensive education
                  includes a board certification in general dentistry, and a
                  fellowship in periodontics at Louisiana State University School
                  of Dentistry.
                </p>
                <p>
                  As a dedicated dentist, Dr. Anand is committed to staying
                  up-to-date with the latest techniques in dentistry. Her
                  comprehensive approach involves collaborating with top local
                  specialists to ensure her patients always receive the highest
                  quality care available. Whether you require a full cosmetic
                  renovation or just a simple cleaning, Dr. Anand and her team
                  are here to provide you with the best possible dental care.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                <Image
                  src="/payal-anand.webp"
                  alt="Dr. Payal Anand, DDS"
                  width={640}
                  height={780}
                  className="h-auto w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <Stats />
        <GoogleMapEmbed />
        <ActiveMembersSection className="mt-12" />
      </main>
    </>
  );
}
