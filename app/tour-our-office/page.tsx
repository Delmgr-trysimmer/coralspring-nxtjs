import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour our office - Coral Springs Smiles",
  description:
    "Explore our dental office and experience exceptional care at Coral Springs Smiles. Book your appointment today!",
};

export default function TourOurOfficePage() {
  const embedSrc =
    "https://www.youtube.com/embed/xGt4Xefwj7U?si=BrE5rdr17dNN_YJk";

  return (
    <>
      <Navbar />
      <PageBanner title="Tour our office" breadcrumbLabel="Tour our office" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white px-6 py-12 text-slate-900 shadow-[0_24px_80px_rgba(0,35,52,0.12)] sm:px-10 sm:py-14">
            <h2 className="text-center font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              Take a Virtual Tour of Our Dental Office at Coral Springs Smiles
            </h2>
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedSrc}
                title="Our Office Tour — Coral Springs Smiles"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            
          </div>
        </div>

        <ActiveMembersSection
              wrap="none"
              className="mt-10 border-t border-slate-200 pt-10"
            />
      </main>
    </>
  );
}
