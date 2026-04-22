import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const schedulingSteps = [
  {
    number: "01",
    title: "Visit a Dentist",
    image: "/images/visit-a-dentist.webp",
    description:
      "Our friendly and knowledgeable staff will help you schedule your appointment at a time that works best for you",
  },
  {
    number: "02",
    title: "Dental Diagnostics",
    image: "/images/dental-diagnostics.png",
    description:
      "Our skilled dentists will conduct a comprehensive dental diagnostic evaluation to assess your oral health and identify any issues that may require treatment",
  },
  {
    number: "03",
    title: "Dental Care",
    image: "/images/dental-care.webp",
    description:
      "Our team of experienced dental professionals will work closely with you to develop a personalized treatment plan that addresses your unique needs and concerns",
  },
  {
    number: "04",
    title: "Dental Implant",
    image: "/images/dental-implant.png",
    description:
      "Our skilled implant specialists will guide you through the entire process, from the initial consultation to the placement of the implant",
  },
];

export default function PatientScheduling() {
  return (
    <section
      id="patient-scheduling"
      className="scroll-mt-28 border-y border-slate-200/90 bg-[linear-gradient(180deg,#f4fbff_0%,#eaf6fd_56%,#e2f1fa_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-block bg-linear-to-r from-accent-light via-highlight to-brand-light bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
            Patient Experience
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Looking for the Best Dentist in Coral Springs?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-5xl text-base leading-8 text-slate-700 sm:text-lg">
            At Coral Springs Smiles, your oral health is our top priority. Our dedicated
            team of dental professionals is here to help you attain the smile of your
            dreams. With a commitment to delivering excellent dental care at affordable
            prices, we proudly serve the Coral Springs, Florida community. For more than
            16 years, families have trusted us as their preferred dentist in Coral
            Springs, FL. More than just a dental office, we are a group of skilled
            experts who treat every patient like part of our family.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 text-lg font-semibold text-slate-900">
            We&apos;re excited to welcome you!
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl">
              Dental Scheduling Made Easy!
            </h3>
            <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
              Make Scheduling Easier and Simpler for Patients
            </p>

            <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
              {schedulingSteps.map((step) => (
                <article
                  key={step.number}
                  className="group flex h-full flex-col rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-[0_10px_28px_rgba(2,44,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_42px_rgba(0,122,168,0.14)] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#0ea5e9_0%,#007ea8_100%)] px-3 text-xs font-semibold tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(0,122,168,0.3)]">
                      {step.number}
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-sky-50 p-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.8)]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="mt-3 text-lg leading-6 font-semibold tracking-[-0.02em] text-slate-900">
                    {step.title}
                  </h4>
                  <p className="mt-4 border-t border-slate-100 text-[15px] leading-7 text-slate-700">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
