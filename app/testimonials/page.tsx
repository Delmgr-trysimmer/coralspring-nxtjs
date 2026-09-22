import ActiveMembersSection from "@/components/ActiveMembersSection";
import LocalVideoCard from "@/components/LocalVideoCard";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials | Coral Springs Smiles",
  description:
    "Read patient testimonials and reviews to discover why Coral Springs Smiles is trusted for family dental care. Call today.",
};

const TESTIMONIAL_VIDEOS = [
  { id: "kEpjruhHFpI", si: "H7C3sMGl8ACJLuiR" },
  { id: "DXf3DwkoSh4", si: "m4YwxOZtarKrvK2L" },
  { id: "-qTBjSK9RtA", si: "ukLtWG5nedrx3YQX" },
  { id: "pbc5dtfAhRA", si: "CrEhN7TpjVsTzDwl" },
  { id: "SCr5Q_fWWbY", si: "G2yQEUArTVs94pTx" },
  { id: "00sKht0l1mU", si: "VW4rTDLehfs0mUEF" },
] as const;

const LOCAL_TESTIMONIAL_VIDEOS = [
  {
    src: "/videos/testimonial-video.mp4",
    title: "Patient Testimonial Video",
  },
  {
    src: "/videos/testimonial-video-maxine.mp4",
    title: "Maxine Patient Testimonial",
  },
  {
    src: "/videos/patient-testimonial-coral-springs-smiles-1.mp4",
    title: "Patient Testimonial Video 1",
  },
  {
    src: "/videos/patient-testimonial-coral-springs-smiles-2.mp4",
    title: "Patient Testimonial Video 2",
  },
] as const;

const TOTAL_TESTIMONIAL_VIDEOS =
  LOCAL_TESTIMONIAL_VIDEOS.length + TESTIMONIAL_VIDEOS.length;

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Testimonials" breadcrumbLabel="Testimonials" />
      <main className="relative z-0 bg-white">
        <section
          aria-labelledby="patient-videos-heading"
          className="border-b border-slate-200 pb-14 pt-10 sm:pb-16 sm:pt-12"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="patient-videos-heading"
              className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              Patient video testimonials
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">
              Hear directly from patients about their experience at Coral Springs
              Smiles.
            </p>

            <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 xl:grid-cols-3">
              {LOCAL_TESTIMONIAL_VIDEOS.map((video) => (
                <li key={video.src}>
                  <LocalVideoCard video={video} />
                </li>
              ))}
              {TESTIMONIAL_VIDEOS.map((video, index) => {
                const embedSrc = `https://www.youtube.com/embed/${video.id}?si=${video.si}`;
                return (
                  <li key={`${video.id}-${index}`}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                      <div className="relative aspect-video w-full">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={embedSrc}
                          title={`Patient testimonial video ${index + LOCAL_TESTIMONIAL_VIDEOS.length + 1} of ${TOTAL_TESTIMONIAL_VIDEOS}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading={index < 3 ? "eager" : "lazy"}
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <Testimonials />

        <ActiveMembersSection
          wrap="none"
          className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
