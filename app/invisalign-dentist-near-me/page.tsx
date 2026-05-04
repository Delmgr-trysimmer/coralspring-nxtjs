import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Invisalign Dentist Near Me | Clear Aligners in Coral Springs",
  description:
    "Looking for an Invisalign dentist near me? Visit Coral Springs Smiles for expert clear aligners in Coral Springs. Straighten your teeth comfortably—book your consultation today!",
  alternates: {
    canonical: "/invisalign-dentist-near-me",
  },
};

const heroParagraphs = [
  "Where Can I Find the Best Invisalign Dentist Near Me?",
  "If you’re searching for an Invisalign dentist near me, the best choice is a trusted local provider like Coral Springs Smiles. They offer advanced clear aligner treatment, personalized care, and modern dental technology—helping patients in Coral Springs achieve straighter smiles comfortably and efficiently.",
];

const howItWorks = [
  "Uses a series of custom-made, clear aligners",
  "Gradually shifts teeth into proper alignment",
  "Each set is worn for about 1–2 weeks",
];

const whoItIsFor = [
  "Adults and teens looking for subtle treatment",
  "Patients wanting to avoid metal braces",
  "Individuals seeking flexible orthodontic care",
];

const advantages = [
  {
    title: "Nearly Invisible",
    text: "Clear aligners are hard to notice, making them perfect for professional and social settings.",
  },
  {
    title: "Removable Convenience",
    text: "You can take them out while eating, brushing, and flossing.",
  },
  {
    title: "Enhanced Comfort",
    text: "Smooth plastic aligners reduce irritation compared to metal braces.",
  },
  {
    title: "Fewer Dental Visits",
    text: "Less frequent adjustments mean fewer clinic visits.",
  },
  {
    title: "Modern Orthodontic Solution",
    text: "Advanced digital planning ensures precise, predictable results.",
  },
];

const idealCandidates = [
  {
    title: "Teens and Adults",
    text: "Especially those concerned about appearance",
  },
  {
    title: "Mild to Moderate Cases",
    text: "Includes crowding, spacing, and minor bite issues",
  },
  {
    title: "Lifestyle-Focused Individuals",
    text: "Those who prefer removable, low-maintenance solutions",
  },
];

const processSteps = [
  {
    title: "Consultation",
    text: "Your dentist evaluates your teeth and discusses goals.",
  },
  {
    title: "Digital Scans",
    text: "Advanced 3D imaging creates a precise treatment plan.",
  },
  {
    title: "Custom Aligners",
    text: "A series of aligners is designed specifically for your smile.",
  },
  {
    title: "Progress Tracking",
    text: "Regular check-ins ensure your teeth are moving correctly.",
  },
];

const nearMeBenefits = [
  {
    title: "Easy Access to Appointments",
    text: "No long travel times for check-ups",
  },
  {
    title: "Quick Support",
    text: "Immediate help if issues arise",
  },
  {
    title: "Personalized Care",
    text: "A local dentist understands your needs and preferences",
  },
  {
    title: "Consistent Monitoring",
    text: "Regular follow-ups improve treatment success",
  },
];

const clinicReasons = [
  {
    title: "Experienced Invisalign Providers",
    text: "Skilled in handling a wide range of cases",
  },
  {
    title: "Advanced Digital Technology",
    text: "Accurate scans and precise treatment planning",
  },
  {
    title: "Comfort-Focused Care",
    text: "Designed to reduce anxiety and improve experience",
  },
  {
    title: "Trusted in Coral Springs",
    text: "A reputation for quality and patient satisfaction",
  },
];

const costFactors = [
  "Complexity of the case",
  "Duration of treatment",
  "Number of aligners required",
  "Dentist’s expertise and technology used",
];

const resultTips = [
  {
    title: "Wear Aligners 20–22 Hours Daily",
    text: "Consistency is key to success",
  },
  {
    title: "Maintain Oral Hygiene",
    text: "Brush and floss before reinserting aligners",
  },
  {
    title: "Follow Dentist Instructions",
    text: "Stick to the prescribed schedule",
  },
  {
    title: "Switch Aligners on Time",
    text: "Keep your treatment on track",
  },
  {
    title: "Attend Regular Check-Ups",
    text: "Monitor progress and make adjustments",
  },
];

const faqs = [
  {
    question: "How long does Invisalign treatment take?",
    answer:
      "Most Invisalign treatments take 6 to 18 months, depending on the complexity of the case and how consistently aligners are worn.",
  },
  {
    question: "Is Invisalign painful?",
    answer:
      "Invisalign is generally less painful than traditional braces, though mild pressure or discomfort may occur when switching aligners.",
  },
  {
    question: "How much does Invisalign cost in Coral Springs?",
    answer:
      "The cost typically ranges from $3,000 to $6,500, depending on treatment complexity and duration.",
  },
  {
    question: "Can I eat with Invisalign aligners?",
    answer:
      "No, you should remove aligners while eating to prevent damage and maintain hygiene.",
  },
  {
    question: "How often should I visit my Invisalign dentist?",
    answer:
      "You’ll usually visit your dentist every 6–8 weeks to monitor progress and receive new aligners.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InvisalignDentistNearMePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden bg-[#003d54] pt-24">
          <Image
            src="/images/Invisalign.jpg"
            alt=""
            fill
            priority
            className="z-0 object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-0 bg-linear-to-br from-[#003d54]/96 via-[#005f82]/88 to-[#003d54]/94" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:px-8 lg:pt-28">
            <div>
              <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Invisalign Dentist Near Me: Find the Best Clear Aligner
                Treatment in Coral Springs
              </h1>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-white/88 sm:text-lg">
                {heroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/10 p-2 shadow-[0_24px_70px_rgba(0,23,35,0.35)] backdrop-blur">
              <Image
                src="/images/your-first-visit.png"
                alt=""
                width={640}
                height={720}
                className="h-[420px] w-full rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                What Is Invisalign?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Invisalign is a modern orthodontic treatment that uses clear,
                removable aligners to straighten teeth without traditional
                braces. It’s designed for comfort, convenience, and discreet
                smile correction.
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-slate-950">
                How It Works
              </h3>
              <BulletList items={howItWorks} />
              <h3 className="mt-6 font-display text-xl font-semibold text-slate-950">
                Who It Is For
              </h3>
              <BulletList items={whoItIsFor} />
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Unlike traditional braces, Invisalign fits seamlessly into your
                lifestyle while delivering effective results.
              </p>
            </article>
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/Invisalign.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef8fb_55%,#ffffff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Why Choose Invisalign Over Braces?
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-slate-600">
              Invisalign offers a more comfortable and discreet alternative to
              traditional braces. It’s ideal for patients who want effective
              results without the visible wires and brackets.
            </p>
            <h3 className="mt-8 text-center font-display text-2xl font-semibold text-slate-950">
              Key Advantages
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage) => (
                <article
                  key={advantage.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h4 className="font-display text-lg font-semibold text-slate-950">
                    {advantage.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {advantage.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-relaxed text-slate-600">
              For many patients in Coral Springs, Invisalign is the preferred
              choice for straightening teeth without disrupting daily life.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Who Is a Good Candidate for Invisalign?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Invisalign is best suited for patients with mild to moderate
              alignment issues who want a flexible treatment option.
            </p>
            <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950">
              Ideal Candidates
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {idealCandidates.map((candidate) => (
                <article
                  key={candidate.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h4 className="font-display text-lg font-semibold text-slate-950">
                    {candidate.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {candidate.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-slate-600">
              If you’re unsure whether Invisalign is right for you, a
              consultation at Coral Springs Smiles can help determine your
              eligibility.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Invisalign Treatment Process
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  The Invisalign process is simple, personalized, and designed
                  for predictable results.
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950">
                  Step-by-Step Overview
                </h3>
                <div className="mt-6 grid gap-4">
                  {processSteps.map((step) => (
                    <article
                      key={step.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h4 className="font-display text-lg font-semibold text-slate-950">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.text}
                      </p>
                    </article>
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Each stage is tailored to your needs, ensuring optimal results
                  with minimal disruption.
                </p>
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/invisalign-1.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Benefits of Choosing a Local Invisalign Dentist
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Choosing a local Invisalign dentist near you ensures
                convenience, faster care, and personalized attention.
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950">
                Why “Near Me” Matters
              </h3>
              <div className="mt-6 grid gap-4">
                {nearMeBenefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h4 className="font-display text-lg font-semibold text-slate-950">
                      {benefit.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {benefit.text}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                For residents in Coral Springs, working with a nearby provider
                like Coral Springs Smiles ensures a smooth and stress-free
                experience.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Why Choose Coral Springs Smiles?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Coral Springs Smiles stands out for its expertise, advanced
                technology, and patient-first approach to Invisalign treatment.
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950">
                What Sets Them Apart
              </h3>
              <div className="mt-6 grid gap-4">
                {clinicReasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h4 className="font-display text-lg font-semibold text-slate-950">
                      {reason.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {reason.text}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Patients searching for clear aligners in Coral Springs
                consistently choose this clinic for reliable, high-quality
                results.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#003d54] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Invisalign Cost in Coral Springs
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  The cost of Invisalign in Coral Springs depends on individual
                  treatment needs.
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  Factors Affecting Cost
                </h3>
                <ul className="mt-4 grid gap-3 text-base leading-relaxed text-white/86">
                  {costFactors.map((factor) => (
                    <li key={factor} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light"
                        aria-hidden
                      />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base leading-relaxed text-white/84">
                  While Invisalign may seem like an investment, its comfort,
                  convenience, and aesthetic benefits make it a valuable
                  long-term solution for many patients.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Tips for Best Invisalign Results
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Following proper guidelines ensures faster and more effective
                  results with Invisalign.
                </p>
                <div className="mt-6 grid gap-4">
                  {resultTips.map((tip) => (
                    <article
                      key={tip.title}
                      className="rounded-xl border border-white/12 bg-white/8 p-4 shadow-[0_18px_45px_rgba(0,23,35,0.16)]"
                    >
                      <h3 className="font-display text-lg font-semibold text-white">
                        {tip.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        {tip.text}
                      </p>
                    </article>
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/84">
                  Patients who follow these steps often achieve better and
                  quicker outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f4fbfd_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Conclusion: Start Your Invisalign Journey Today
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    A straighter smile is more than just aesthetics—it boosts
                    confidence, improves oral health, and enhances overall
                    quality of life. If you’re searching for an invisalign
                    dentist near me, choosing a trusted provider in Coral
                    Springs makes all the difference.
                  </p>
                  <p>
                    Coral Springs Smiles offers expert care, advanced
                    technology, and personalized treatment plans to help you
                    achieve the smile you’ve always wanted.
                  </p>
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/your-first-visit.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              FAQs
            </h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:border-brand/40 open:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-slate-950 marker:content-none">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-2xl leading-none text-brand transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
