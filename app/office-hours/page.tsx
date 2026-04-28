import ActiveMembersSection from "@/components/ActiveMembersSection";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Hours | Coral Springs Dental",
  description:
    "At Coral Springs Dental, we understand that your time is valuable. That's why we offer convenient office hours to fit your busy schedule. Book your appointment today and experience personalized dental care at a time that works for you.",
};

const HOURS_ROWS: { day: string; value: string }[] = [
  { day: "Monday", value: "9:00am – 5:00pm" },
  { day: "Tuesday", value: "9:00am – 5:00pm" },
  { day: "Wednesday", value: "9:00am – 5:00pm" },
  { day: "Thursday", value: "9:00am – 5:00pm" },
  { day: "Friday", value: "9:00am – 5:00pm" },
  { day: "Saturday", value: "- By Appointment Only -" },
  { day: "Sunday", value: "Closed" },
];

export default function OfficeHoursPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Office Hours" breadcrumbLabel="Office Hours" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,440px)] lg:items-start lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Solution For Your Smile!
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Contact Coral Springs Smiles Office
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We invite you to contact us anytime with questions, comments,
                requests or suggestions. We will respond to you as soon as
                possible.
              </p>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>

              <div className="mt-10 space-y-10 border-t border-slate-200">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                    Location
                  </h3>
                  <p className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">
                    Coral Springs Smiles
                  </p>
                  <address className="mt-2 not-italic text-base leading-relaxed text-slate-800 sm:text-lg">
                    2929 North University Drive
                    <br />
                    Suite 203
                    <br />
                    Coral Springs, Florida 33065
                  </address>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                    Contact Phone
                  </h3>
                  <p className="mt-3">
                    <a
                      href="tel:9542668755"
                      className="text-lg font-semibold text-slate-900 transition-colors hover:text-[#007ea8] sm:text-xl"
                    >
                      (954) 266-8755
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-brand lg:text-left">
                Our Team
              </p>
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-md">
                <Image
                  src="/images/our-team-7.jpg"
                  alt="Coral Springs Smiles dental team"
                  width={768}
                  height={512}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="office-hours-heading"
          className="mt-16 bg-[#004a63] py-14 sm:mt-20 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div>
                <h2
                  id="office-hours-heading"
                  className="text-center font-display text-2xl font-semibold text-brand-light sm:text-3xl lg:text-left"
                >
                  Office Hours
                </h2>
                <dl className="mt-8 space-y-4 text-white">
                  {HOURS_ROWS.map((row) => (
                    <div
                      key={row.day}
                      className="flex flex-col gap-0.5 border-b border-white/15 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="shrink-0 font-medium text-white/95">
                        {row.day}
                      </dt>
                      <dd className="text-white/90 sm:text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/about-1.png"
                  alt="Coral Springs Smiles dentistry office"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        <GoogleMapEmbed className="px-4 sm:px-6 lg:px-8" />
        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
