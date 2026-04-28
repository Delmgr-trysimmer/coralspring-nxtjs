import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Metadata } from "next";

const TEAM_PHOTOS = [
  {
    src: "/images/our-team-1.jpg",
    alt: "Coral Springs Smiles team member in professional attire at the practice",
  },
  {
    src: "/images/our-team-2.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
  {
    src: "/images/our-team-3.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
  {
    src: "/images/our-team-4.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
  {
    src: "/images/our-team-5.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
  {
    src: "/images/our-team-6.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
  {
    src: "/images/our-team-7.jpg",
    alt: "Coral Springs Smiles dental team member",
  },
] as const;

export const metadata: Metadata = {
  title: "Meet the team - Coral Springs Smiles",
  description:
    "Get to know our friendly team of dental experts at Coral Springs Smiles. Schedule an appointment today for exceptional dental care.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Meet the team" breadcrumbLabel="Meet the team" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_PHOTOS.map((photo, index) => {
              const isLast = index === TEAM_PHOTOS.length - 1;
              return (
                <li
                  key={photo.src}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md",
                    isLast &&
                      "sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:col-start-2 lg:max-w-none",
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={768}
                    height={512}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <ActiveMembersSection
          wrap="none"
          className="mt-10 border-t border-slate-200 pt-10"
        />
      </main>
    </>
  );
}
