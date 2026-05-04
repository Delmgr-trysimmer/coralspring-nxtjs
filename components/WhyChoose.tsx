import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock3, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const insuranceProviders = [
  "Humana",
  "United Healthcare",
  "Wellcare",
  "Simply healthcare",
  "Care Plus",
  "Florida Blue",
];

const flexHoursText =
  "We want you to feel welcomed and cared for at our dental practice. Now with convenient office hours! We are open every weekday and Saturday by appointment only. Also for your convenience, we offer late evening hours on Mondays until 7 PM. Feel free to contact us (954) 266-8755.";

const locationText =
  "Coral Springs Smiles is conveniently located at 2929 North University Drive, Suite 203, Coral Springs, Florida 33065. With easy access and ample parking, our location is perfect for everyone, whether you're a busy professional fitting in a cleaning during your day or a family coming in for routine check-ups. Our convenient location makes it simple to prioritize your dental health.";

export default function WhyChoose() {
  return (
    <section
      id="about-us"
      className="scroll-mt-28 border-y border-slate-200/90 bg-[linear-gradient(180deg,#f6fcff_0%,#edf7fd_52%,#e5f2fa_100%)] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-[450px]">
              <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.16)_0%,rgba(0,122,168,0.08)_44%,transparent_74%)] blur-xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-sky-100 bg-white p-3 shadow-[0_22px_70px_rgba(0,61,84,0.1)]">
                <Image
                  src="/images/blob-image.png"
                  alt="Dental team at Coral Springs Smiles."
                  width={1120}
                  height={920}
                  className="h-auto w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="inline-block bg-linear-to-r from-accent-light via-highlight to-brand-light bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
                Why Choose Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
                What makes us different?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                We offer comprehensive dental services all in one place, providing
                convenience and continuity of care. From routine cleanings and exams to
                advanced procedures like dental implants, cosmetic dentistry, and
                periodontal care, our experienced team is equipped to handle all your
                dental needs under one roof.
              </p>

              <Button asChild className="mt-8">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5">
          <Reveal>
            <article className="rounded-[30px] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-8">
              <div className="flex items-center gap-2 text-[#007ea8]">
                <Clock3 className="size-5" />
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900">
                  Flexible hours
                </h3>
              </div>
              <p className="mt-4 max-w-5xl text-base leading-8 text-slate-700">
                {flexHoursText}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-[30px] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-8">
              <h3 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900">
                We Accept Most Insurances as payment options!
              </h3>
              <p className="mt-4 max-w-5xl text-base leading-8 text-slate-700">
                At Coral Springs Smiles, we work with most insurance plans to make dental
                care both accessible and affordable. Our team is committed to helping you
                get the most out of your insurance coverage, reducing your out-of-pocket
                costs, and ensuring you receive the necessary treatments without added
                financial pressure.
              </p>
              <p className="mt-5 text-base font-semibold text-slate-900">
                We currently accept a variety of insurance providers, including
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {insuranceProviders.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="size-4 text-[#007ea8]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="rounded-[30px] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-8">
              <div className="flex items-center gap-2 text-[#007ea8]">
                <MapPin className="size-5" />
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900">
                  Located Conveniently
                </h3>
              </div>
              <p className="mt-4 max-w-5xl text-base leading-8 text-slate-700">
                {locationText}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
