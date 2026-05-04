import ActiveMembersSection from "@/components/ActiveMembersSection";
import BeforeAfter from "@/components/BeforeAfter";
import Navbar from "@/components/Navbar";
import PeriodontalReviewSlider from "@/components/PeriodontalReviewSlider";
import {
  Check,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileImage,
  Heart,
  MapPin,
  MessageSquare,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const periodontalServiceGroups = [
  {
    number: "1",
    title: "Non-Surgical Treatments",
    services: [
      {
        title: "Scaling & Root Planing (Deep Cleaning)",
        description:
          "Removes plaque, tartar, and bacteria from below the gum line to control infection and inflammation.",
      },
      {
        title: "Periodontal Maintenance Therapy",
        description:
          "Ongoing care to prevent disease recurrence after treatment.",
      },
      {
        title: "Antibacterial & Infection Control Therapy",
        description:
          "Targets harmful bacteria to support healing and long-term gum health.",
      },
    ],
  },
  {
    number: "2",
    title: "Advanced Surgical Treatments",
    services: [
      {
        title: "Gum Grafting Procedures",
        description:
          "Restores receded gums and protects exposed tooth roots from sensitivity and damage.",
      },
      {
        title: "Pocket Reduction Therapy",
        description:
          "Reduces deep gum pockets to eliminate bacteria and stabilize gums.",
      },
      {
        title: "Bone & Tissue Preservation Procedures",
        description:
          "Protects and restores bone and soft tissue affected by advanced gum disease.",
      },
    ],
  },
];

const laserTherapyBenefits = [
  "Minimally invasive",
  "Faster healing time",
  "Reduced discomfort and bleeding",
  "Preservation of healthy gum tissue",
  "Effective alternative to traditional surgery",
];

const periodontalVisitSteps = [
  {
    icon: ClipboardList,
    text: "Comprehensive periodontal exam and gum charting",
  },
  {
    icon: FileImage,
    text: "Digital imaging for precise diagnosis",
  },
  {
    icon: ShieldCheck,
    text: "Personalized treatment planning",
  },
  {
    icon: Heart,
    text: "Gentle, patient-focused care",
  },
  {
    icon: MessageSquare,
    text: "Clear communication and long-term maintenance guidance",
  },
];

const clinicalExpertiseSupport = [
  "Advanced diagnostic and digital imaging",
  "Modern laser periodontal technology",
  "Evidence-based treatment protocols",
  "Ongoing professional training",
];

const doctorCredentials = [
  "16+ years of advanced periodontal experience",
  "Specialized training in periodontics and laser gum therapy",
  "Member of ADA, AGD, and ACD",
  "Extensive experience managing complex gum and bone loss cases",
  "Focused on long-term periodontal health and clinical outcomes",
];

const experienceCareBenefits = [
  "Manage advanced gum disease and bone loss",
  "Make accurate treatment decisions",
  "Prevent disease recurrence",
  "Preserve natural teeth and jawbone",
  "Ensure long-term oral stability",
];

const serviceAreas = [
  "Coral Springs",
  "Parkland",
  "Coconut Creek",
  "Margate",
  "surrounding South Florida communities",
];

const testimonialVideos = [
  { id: "kEpjruhHFpI", si: "H7C3sMGl8ACJLuiR" },
  { id: "DXf3DwkoSh4", si: "m4YwxOZtarKrvK2L" },
  { id: "-qTBjSK9RtA", si: "ukLtWG5nedrx3YQX" },
];

const insuranceOptions = [
  {
    icon: ShieldCheck,
    text: "Most major dental insurance plans are accepted",
  },
  {
    icon: ThumbsUp,
    text: "Insurance benefit assistance",
  },
  {
    icon: DollarSign,
    text: "Transparent pricing",
  },
  {
    icon: CreditCard,
    text: "Flexible payment and financing options",
  },
];

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
              <iframe
                src="https://www.youtube.com/embed/HXC_1Ezywa0?si=1h6X9VJPPca_gK0E"
                title="YTwinLight Periodontal Treatment"
                className="aspect-video w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-12 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
            <iframe
                src="https://www.youtube.com/embed/HXC_1Ezywa0?si=1h6X9VJPPca_gK0E"
                title="YTwinLight Periodontal Treatment"
                className="aspect-video w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                What Is Periodontics?
              </h2>
              <div
                className="mt-4 h-1 w-16 rounded-full bg-[#12b7df]"
                aria-hidden
              />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  Periodontics is a specialized branch of dentistry focused on
                  the health of the gums, bone, and connective tissues that
                  support your teeth.
                </p>
                <p>
                  Unlike general dentists, periodontists complete advanced
                  postgraduate education and specialized clinical training to
                  diagnose and treat complex gum disease, bone loss, gum
                  recession, and periodontal infections. This expertise is
                  essential for managing conditions that cannot be resolved with
                  routine dental care.
                </p>
                <p>
                  Experience plays a critical role in early disease
                  identification, treatment selection, and long-term stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Why Gum Health Matters
              </h2>
              <div
                className="mt-4 h-1 w-16 rounded-full bg-[#12b7df]"
                aria-hidden
              />
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Gum disease is one of the leading causes of tooth loss in
                adults. When infection spreads below the gum line, it can damage
                the bone that holds teeth in place, leading to loosening,
                shifting, and eventual tooth loss.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Healthy gums are essential for:
                </h3>
                <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
                  {[
                    "Strong jawbone support",
                    "Long-term tooth stability",
                    "Comfortable chewing and speaking",
                    "Reduced chronic inflammation",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#12b7df]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-7 text-base leading-relaxed italic text-slate-600">
                Periodontal disease has also been linked to systemic health
                conditions such as heart disease and diabetes. Early periodontal
                treatment helps protect both oral and overall health.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/gum-health.png"
                  alt="Periodontal procedure for gum health treatment"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Signs You May Need to See a Periodontist
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#12b7df]" aria-hidden />
            <p className="mt-6 text-center text-lg leading-relaxed text-slate-500">
              You may benefit from periodontal care if you experience:
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <ul className="space-y-4 text-xl leading-relaxed text-slate-700">
                  {[
                    "Bleeding gums",
                    "Red, swollen, or tender gums",
                    "Gum recession",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#12b7df]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <ul className="space-y-4 text-xl leading-relaxed text-slate-700">
                  {[
                    "Persistent bad breath",
                    "Loose or shifting teeth",
                    "Pain or discomfort when chewing",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#12b7df]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <p className="rounded-full bg-[#d9ecfb] px-6 py-2 text-center text-base font-medium text-[#1e5d86] sm:text-lg">
                Gum disease often progresses silently. Early intervention can
                prevent advanced damage.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Periodontal Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#12b7df]" aria-hidden />

            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
              {periodontalServiceGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-8 items-center justify-center rounded-lg bg-[#bce8ff] text-sm font-bold text-[#155e86]">
                      {group.number}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-[#063d75]">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {group.services.map((service) => (
                      <article
                        key={service.title}
                        className="rounded-2xl bg-white px-6 py-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] sm:px-7"
                      >
                        <h4 className="text-base font-medium text-[#00aeef]">
                          {service.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                          {service.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
            <div className="overflow-hidden rounded-2xl shadow-[0_22px_45px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-7/6 w-full">
                <Image
                  src="/images/laser-periodontal-therapy.png"
                  alt="Patient wearing a clear dental aligner"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Laser Periodontal Therapy
              </h2>
              <div
                className="mt-4 h-1 w-16 rounded-full bg-[#12b7df]"
                aria-hidden
              />
              <p className="mt-7 text-base leading-relaxed text-slate-500 sm:text-lg">
                We offer advanced laser gum disease treatment, including LANAP
                <sup>&reg;</sup> (Laser Assisted New Attachment Procedure), for
                eligible patients.
              </p>

              <div className="mt-6 rounded-2xl border border-[#bce8ff] bg-[#eaf7ff] p-6 sm:p-7">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Benefits of Laser Periodontal Therapy:
                </h3>
                <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {laserTherapyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d8f6ff] text-[#12b7df]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What to Expect During Your Periodontal Visit
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#12b7df]" aria-hidden />

            <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-5">
              {periodontalVisitSteps.map(({ icon: Icon, text }) => (
                <article
                  key={text}
                  className="flex min-h-20 w-full items-center gap-5 rounded-2xl bg-white px-6 py-5 shadow-[0_8px_18px_rgba(15,23,42,0.1)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)]"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dff3ff] text-[#00aeef]">
                    <Icon className="h-5 w-5" strokeWidth={2.3} />
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-slate-900">
                    {text}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:px-8">
            <div className="overflow-hidden rounded-2xl shadow-[0_18px_38px_rgba(15,23,42,0.14)]">
            <iframe
                src="https://www.youtube.com/embed/HXC_1Ezywa0?si=1h6X9VJPPca_gK0E"
                title="YTwinLight Periodontal Treatment"
                className="aspect-video w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Technology Backed by Clinical Expertise
              </h2>
              <div
                className="mt-5 h-1 w-16 rounded-full bg-[#12b7df]"
                aria-hidden
              />
              <p className="mt-7 text-base leading-relaxed text-slate-500 sm:text-lg">
                Our periodontal care is supported by:
              </p>

              <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {clinicalExpertiseSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d8f6ff] text-[#12b7df]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-9 rounded-xl border border-dashed border-[#12b7df] bg-[#eef9ff] px-6 py-5 text-base font-medium italic leading-relaxed text-[#0077b6]">
                Technology is most effective when guided by real-world clinical
                experience and sound clinical judgment.
              </p>
            </div>
          </div>
        </section>


        <BeforeAfter />

        <section className="bg-[#eef2f6] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 lg:px-8">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-[#c5edf5] shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:mx-0">
              <div className="relative aspect-[1.18/1] w-full">
                <Image
                  src="/payal-anand.webp"
                  alt="Dr. Payal Anand, DDS"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#0f4382] sm:text-4xl">
                Meet the Doctor - Periodontist in Coral Springs
              </h2>
              <p className="mt-3 font-display text-xl font-semibold text-[#00aeef]">
                Dr. Payal Anand, DDS
              </p>

              <div className="mt-7 rounded-2xl bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)] sm:p-7">
                <ul className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {doctorCredentials.map((credential) => (
                    <li key={credential} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dff3ff] text-[#0f8fc8]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why Experience Matters in Periodontal Treatment
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#12b7df]" aria-hidden />

            <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-[#e6f6ff] px-7 py-8 sm:px-10">
              <h3 className="text-center font-display text-lg font-semibold text-[#0f4382] sm:text-xl">
                Experienced periodontal care helps:
              </h3>

              <ul className="mt-7 grid gap-x-12 gap-y-5 text-base leading-relaxed text-slate-600 sm:grid-cols-2 sm:text-lg">
                {experienceCareBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d8f6ff] text-[#12b7df]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white px-6 py-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)] sm:px-8 lg:px-9">
              <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-[#0f4382] sm:text-3xl">
                Trusted Periodontist Serving Coral Springs &amp; Nearby Areas
              </h2>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {serviceAreas.map((area) => (
                  <article
                    key={area}
                    className="flex min-h-16 w-full items-center gap-5 rounded-lg border border-slate-200 bg-slate-50 px-6 py-4 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dff3ff] text-[#00aeef]">
                      <MapPin className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                    <h3 className="text-base font-medium leading-snug text-slate-700 sm:text-lg">
                      {area}
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[#174f8f] px-6 py-12 text-center shadow-[0_18px_42px_rgba(15,23,42,0.12)] sm:px-8 sm:py-14 lg:px-9">
              <PeriodontalReviewSlider />

              <div className="mt-7 grid gap-5 lg:grid-cols-3">
                {testimonialVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className="overflow-hidden rounded-lg bg-slate-900 shadow-[0_10px_22px_rgba(15,23,42,0.22)]"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?si=${video.si}`}
                      title={`Patient testimonial video ${index + 1}`}
                      className="aspect-video w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#174f8f] shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition-colors hover:bg-[#eef2f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Read More Reviews
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Insurance &amp; Payment Options
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#12b7df]" aria-hidden />

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {insuranceOptions.map(({ icon: Icon, text }) => (
                <article
                  key={text}
                  className="flex min-h-44 flex-col items-center justify-center rounded-2xl bg-white px-6 py-6 text-center shadow-[0_16px_32px_rgba(15,23,42,0.06)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#dff3ff] text-[#00aeef]">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-slate-700">
                    {text}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#174f8f_0%,#00aeca_100%)] px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Let&rsquo;s Restore and Protect Your Gum Health the Right Way
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              At Coral Springs Smiles, we guide you through every stage of your
              periodontal care&mdash;from early diagnosis to advanced treatment
              and long-term maintenance. With experienced periodontal expertise
              and modern laser technology, we help you achieve healthier gums
              and a stronger foundation for your smile
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-base font-bold leading-relaxed text-white sm:text-lg">
              Contact us today to schedule your appointment or call (954)
              757-5353 and take the first step toward lasting gum health.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact-us"
                className="inline-flex min-w-36 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#174f8f] shadow-[0_10px_22px_rgba(0,35,52,0.18)] transition-colors hover:bg-[#eef2f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Online
              </Link>
              <Link
                href="tel:9547575353"
                className="inline-flex min-w-40 items-center justify-center rounded-full border border-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Call (954) 757-5353
              </Link>
            </div>
          </div>
        </section>

        <ActiveMembersSection
          wrap="none"
          className="bg-white px-4 py-7 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
