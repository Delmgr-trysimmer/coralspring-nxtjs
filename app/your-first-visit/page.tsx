import ActiveMembersSection from "@/components/ActiveMembersSection";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your First Visit to Our Practice | Schedule Your Appointment Today",
  description:
    "Schedule your first dental visit at Coral Springs Smiles for personalized family dental care in Coral Springs. Call (954) 266-8755 today.",
};

const VISIT_STEPS = [
  {
    label: "Step 1",
    title: "Request Appointment",
    body: (
      <>
        If you have not yet scheduled an appointment, you may do so by{" "}
        <Link
          href="/contact-us"
          className="font-semibold text-brand transition-colors hover:text-brand-light"
        >
          clicking here
        </Link>{" "}
        or by calling our office at{" "}
        <a
          href="tel:9542668755"
          className="font-semibold text-brand transition-colors hover:text-brand-light"
        >
          (954) 266-8755
        </a>
        .
      </>
    ),
  },
  {
    label: "Step 2",
    title: "Get Directions",
    body: (
      <>
        If you are unable to get directions on our{" "}
        <Link
          href="/office-hours"
          className="font-semibold text-brand transition-colors hover:text-brand-light"
        >
          location page
        </Link>
        , you may call our office to get more detailed directions.
      </>
    ),
  },
];

export default function YourFirstVisitPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Your First Visit" breadcrumbLabel="Your First Visit" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-[0_24px_80px_rgba(0,35,52,0.08)] sm:px-8 sm:py-12 lg:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-light">
                Get in Touch with Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Your First Visit
              </h2>
              <p className="mt-8 text-2xl font-semibold tracking-tight text-brand-light sm:text-3xl">
                Welcome to our practice!
              </p>

              <div className="mt-8 space-y-8">
                {VISIT_STEPS.map((step) => (
                  <article
                    key={step.label}
                    className="rounded-3xl border border-slate-200/90 bg-slate-50 px-5 py-6 sm:px-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {step.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-light">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-[#004a63] px-6 py-8 text-white shadow-[0_18px_50px_rgba(0,74,99,0.28)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
                  That&apos;s it!
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  We will see you at your first appointment!
                </p>
              </div>
            </div>
          {/* <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-start lg:gap-14">
            

            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-linear-to-br from-[#003d54] via-[#005a78] to-[#007ea8] p-8 text-white shadow-[0_24px_80px_rgba(0,35,52,0.18)] sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-light">
                  Schedule Today
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Make your first visit simple and stress-free.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  Reach out online, get directions to our office, and our team
                  will help you feel prepared from the moment you book.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact-us">Request Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/office-hours">Get Directions</Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                    Call Our Office
                  </p>
                  <a
                    href="tel:9542668755"
                    className="mt-2 inline-block text-2xl font-semibold tracking-tight text-white transition-colors hover:text-brand-light"
                  >
                    (954) 266-8755
                  </a>
                </div>
              </div>
            </aside>
          </div> */}
        </section>

        <GoogleMapEmbed className="px-4 sm:px-6 lg:px-8" />

        <section
          aria-labelledby="service-cta-heading"
          className="relative isolate mt-16 overflow-hidden py-16 sm:mt-20"
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
            Get In Touch
            </p>
            <h2
              id="service-cta-heading"
              className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              To schedule your consultation today
            </h2>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
