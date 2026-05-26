import Link from "next/link";
import { Calendar } from "lucide-react";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Insurance at Coral Springs Smiles",
  description:
    "Coral Springs Smiles accepts most dental insurance plans to provide affordable, high-quality dental care. Call (954) 266-8755 today.",
};

const insurancePlans = [
  "MetLife",
  "Cigna",
  "Guardian",
  "Humana",
  "United Concordia",
  "United Healthcare",
  "Wellcare",
  "Simply Healthcare",
  "CarePlus",
  "Florida Blue",
  "Other PPO insurance",
] as const;

export default function DentalInsurancePage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Dental Insurance"
        breadcrumbLabel="Dental Insurance"
      />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            At <strong className="font-semibold text-slate-900">Coral Springs Smiles</strong>{" "}
            , we believe that everyone deserves access to high-quality
            dental care. To ensure our services are accessible to as many
            patients as possible, we proudly accept a wide range of dental
            insurance plans. Whether you&apos;re looking for routine cleanings,
            cosmetic procedures, or restorative treatments, our team is here to
            help you maximize your insurance benefits and receive the best dental
            care in{" "}
            <strong className="font-semibold text-slate-900">Coral Springs, FL.</strong>

          </p>

          <h2 className="mt-12 font-display text-xl font-semibold text-slate-900 sm:text-2xl">
            Accepted Dental Insurance Plans
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <strong className="font-semibold text-slate-900">Coral Springs</strong>{" "}
            Smiles is in-network with several major insurance providers,
            including:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {insurancePlans.map((name) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 sm:text-base"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-sky-600"
                  aria-hidden
                />
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">
            If you don&apos;t see your insurance listed or have any questions
            regarding your specific plan, feel free to contact us! We are happy
            to verify your coverage and provide guidance on how to maximize your
            dental benefits.
          </p>

          <h2 className="mt-12 font-display text-xl font-semibold text-slate-900 sm:text-2xl">
            Convenient and Affordable Dental Care in Coral Springs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            As a local dental office in{" "}
            <strong className="font-semibold text-slate-900">Coral Springs</strong>
            , our goal is to provide the community with affordable and
            comprehensive dental care. With the wide range of insurance options
            we accept, we make it easy for our patients to receive the treatments
            they need without the stress of high out-of-pocket expenses. Whether
            you&apos;re a long-time resident or new to the area, you can rely on{" "}
            <strong className="font-semibold text-slate-900">Coral Springs</strong>{" "}
            Smiles for a wide range of dental services covered by your insurance.
          </p>

          <h2 className="mt-12 font-display text-xl font-semibold text-slate-900 sm:text-2xl">
            Why Choose Coral Springs Smiles?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            At Coral Springs Smiles, we&apos;re more than just a dental office-we&apos;re part of the <strong className="font-semibold text-slate-900">Coral Springs</strong>{" "}
            community. Our experienced team provides personalized care tailored to
            meet the unique needs of each patient, and we strive to create a
            welcoming, stress-free environment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our office is conveniently located in{" "}
            <strong className="font-semibold text-slate-900">Coral Springs</strong>
            , making it easy for residents and families to access quality dental
            care close to home. We offer flexible scheduling and work closely with
            your insurance provider to ensure you get the most value out of your
            coverage.
          </p>

          <h2 className="mt-12 font-display text-xl font-semibold text-slate-900 sm:text-2xl">
            Schedule Your Appointment Today!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Ready to schedule your next dental appointment?{" "}
            <strong className="font-semibold text-slate-900">Coral Springs</strong>{" "}
            Smiles is here to provide expert dental care for you and your family.
            Contact us today to verify your insurance and book your visit. We look
            forward to welcoming you to our{" "}
            <strong className="font-semibold text-slate-900">Coral Springs</strong>{" "}
            dental family!
          </p>

          
        </div>

        <section
            className="relative overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-16 mt-12 max-w-[1536px] mx-auto"
            aria-labelledby="get-in-touch-heading"
          >
            <div
              className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/25 blur-[80px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-16 h-64 w-96 rounded-[60%] bg-cyan-300/20 blur-[70px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-t-[100%] bg-[rgb(0_174_239/0.12)]"
              aria-hidden
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#003d54] via-[#005a78] to-[#006892]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-base">
                Get In Touch
              </p>
              <h2
                id="get-in-touch-heading"
                className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
              >
                To schedule your consultation today
              </h2>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-lg border-0 bg-linear-to-r from-brand-light via-brand to-brand-muted px-8 text-base font-bold text-white shadow-[0_12px_32px_rgba(198,81,42,0.35)] hover:from-[#e8896f] hover:via-[#ce5c38] hover:to-[#a63d22]"
              >
                <Link
                  href="/#contact-us"
                  className="inline-flex items-center gap-2.5"
                >
                  Book Appointment
                  <Calendar className="size-5 shrink-0" aria-hidden />
                </Link>
              </Button>
            </div>
          </section>

          <GoogleMapEmbed />
      </main>
    </>
  );
}
