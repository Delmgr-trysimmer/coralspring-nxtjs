import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Periodontist Coral Springs | Gum Disease & Deep Cleaning Experts",
  description:
    "Looking for a trusted periodontist in Coral Springs? Coral Springs Smiles offers expert gum disease treatment, scaling and root planing, and advanced periodontal care. Book your consultation today.",
  alternates: {
    canonical: "/periodontist-coral-springs",
  },
};

const heroParagraphs = [
  "Who is the Best Periodontist in Coral Springs?",
  "If you're searching for the best periodontist in Coral Springs, Coral Springs Smiles stands out for expert gum disease treatment, advanced periodontal therapy, and personalized patient care. Their experienced team uses modern technology to treat bleeding gums, infections, and gum recession-helping patients restore healthy smiles with long-term results.",
];

const signsYouNeed = [
  "Bleeding gums while brushing or flossing",
  "Swollen, red, or tender gums",
  "Persistent bad breath",
  "Gum recession (teeth appearing longer)",
  "Loose or shifting teeth",
];

const causes = [
  "Plaque and tartar buildup",
  "Poor oral hygiene habits",
  "Smoking or tobacco use",
  "Medical conditions like diabetes",
];

const treatments = [
  "Scaling and root planing",
  "Laser gum therapy",
  "Antibiotic therapy",
  "Surgical periodontal care",
];

const treatmentCards = [
  {
    title: "Scaling and Root Planing",
    text: "Also called deep cleaning teeth, this removes plaque and tartar below the gumline.",
  },
  {
    title: "Laser Gum Therapy",
    text: "A minimally invasive option that targets infected tissue with precision and faster healing.",
  },
  {
    title: "Antibiotic Treatment",
    text: "Used to control bacterial infection and support healing.",
  },
  {
    title: "Surgical Periodontal Care",
    text: "For advanced cases, procedures like gum grafting or flap surgery may be required.",
  },
];

const earlyTreatmentBenefits = [
  "Save natural teeth",
  "Prevent bone loss",
  "Reduce systemic health risks",
  "Lower long-term dental costs",
];

const chooseReasons = [
  "Experienced dental professionals",
  "Advanced periodontal technology",
  "Personalized treatment plans",
  "Strong local reputation in Coral Springs",
];

const preventionTips = [
  "Brush twice daily",
  "Floss regularly",
  "Visit your dentist every 6 months",
  "Maintain a healthy lifestyle",
];

const faqs = [
  {
    question: "What does a periodontist do?",
    answer:
      "A periodontist specializes in diagnosing and treating gum disease, performing deep cleanings, and managing advanced conditions affecting gums and supporting bone.",
  },
  {
    question: "When should I see a periodontist?",
    answer:
      "You should visit a periodontist if you have bleeding gums, gum recession, persistent bad breath, or loose teeth.",
  },
  {
    question: "Can gum disease be cured permanently?",
    answer:
      "Early-stage gum disease (gingivitis) can be reversed, while advanced periodontitis can be managed but requires ongoing care.",
  },
  {
    question: "Is periodontal treatment painful?",
    answer:
      "Most treatments are minimally invasive and performed with local anesthesia, making them comfortable for patients.",
  },
  {
    question: "How much does periodontal treatment cost in Coral Springs?",
    answer:
      "Costs vary depending on severity and treatment type, but early treatment is generally more affordable than advanced procedures.",
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

export default function PeriodontistCoralSpringsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden bg-[#003d54] pt-24">
          <Image
            src="/images/Periodontics.jpg"
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
                Best Periodontist Coral Springs: Expert Gum Disease Treatment
                Guide
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
                What Is a Periodontist?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                A periodontist is a dental specialist who focuses on diagnosing
                and treating gum disease and the supporting structures of the
                teeth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Unlike a general dentist, a periodontist has advanced training
                in managing conditions like gingivitis and periodontitis,
                performing deep cleanings, and handling complex gum procedures.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Periodontists go beyond routine dental care. While general
                dentists handle cleanings and fillings, a periodontist treats
                gum infections, bone loss, and advanced oral health issues.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                At Coral Springs Smiles, patients receive specialized
                periodontal care designed to stop disease progression and
                preserve natural teeth.
              </p>
            </article>
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/Periodontics.jpg"
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
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              What Are the Signs You Need a Periodontist?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              You may need a periodontist in Coral Springs if you notice:
            </p>
            <BulletList items={signsYouNeed} />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              These symptoms often indicate early or advanced gum disease. Many
              patients ignore bleeding gums, assuming it’s normal-but it’s
              usually the first sign of infection.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you’re searching for a periodontist near me, these warning
              signs should not be delayed. Early intervention at Coral Springs
              Smiles can prevent serious complications.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                What Causes Gum Disease?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Gum disease is primarily caused by bacterial buildup along the
                gumline.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Common causes include:
              </p>
              <BulletList items={causes} />
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                When plaque isn’t removed, it hardens into tartar, leading to
                inflammation known as gingivitis. If untreated, it progresses to
                periodontitis, damaging the bone and tissues supporting teeth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Lifestyle and health conditions can accelerate this process,
                making professional care from a periodontist in Coral Springs
                essential for long-term oral health.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                What Are the Best Gum Disease Treatments in Coral Springs?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                The best gum disease treatments in Coral Springs include deep
                cleaning, laser therapy, and advanced periodontal procedures.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Top treatments include:
              </p>
              <BulletList items={treatments} />
              <div className="mt-6 grid gap-3">
                {treatmentCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h3 className="font-display text-lg font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                At Coral Springs Smiles, treatment plans are customized based on
                severity, ensuring effective gum disease treatment in Coral
                Springs.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Why Is Early Periodontal Treatment Important?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Early treatment of gum disease prevents tooth loss and protects
                  overall health.
                </p>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  Treating gum disease early helps:
                </p>
                <BulletList items={earlyTreatmentBenefits} />
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Gum disease is linked to conditions like heart disease and
                  diabetes. Delaying treatment allows infection to spread deeper
                  into the gums and bone.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  By visiting a periodontist in Coral Springs early, patients
                  avoid complex procedures and maintain better oral and overall
                  health.
                </p>
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/Laser-Dentistry.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#003d54] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Why Choose Coral Springs Smiles?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Coral Springs Smiles is a trusted provider for periodontal
                  therapy in Coral Springs, known for expertise and
                  patient-focused care.
                </p>
                <p className="mt-5 text-base leading-relaxed text-white/84">
                  Patients choose Coral Springs Smiles because of:
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {chooseReasons.map((reason) => (
                  <article
                    key={reason}
                    className="rounded-xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,23,35,0.16)]"
                  >
                    <p className="font-display text-lg font-semibold text-white">
                      {reason}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-8 text-base leading-relaxed text-white/84">
              The clinic combines modern dental technology with compassionate
              care, ensuring every patient receives tailored solutions. Whether
              it’s bleeding gums treatment or advanced periodontal surgery, their
              approach prioritizes comfort, precision, and long-term success.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/84">
              Their consistent results and patient satisfaction make them a top
              choice for anyone seeking a periodontist Coral Springs residents
              trust.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                How to Prevent Gum Disease?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Preventing gum disease starts with consistent oral hygiene and
                regular dental visits.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                To prevent gum disease:
              </p>
              <BulletList items={preventionTips} />
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Daily habits play a major role in preventing gum infection
                symptoms. Brushing removes plaque, while flossing targets areas
                between teeth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Routine checkups at Coral Springs Smiles ensure early detection
                and professional cleaning-reducing the risk of needing advanced
                periodontal therapy.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Conclusion: Protect Your Smile with Expert Periodontal Care
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Gum disease can silently damage your oral health-but the right
                care can stop it early. If you&apos;re experiencing symptoms or
                searching for a periodontist in Coral Springs, now is the time
                to act.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Don’t wait until it becomes painful or severe.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Book your consultation today at Coral Springs Smiles and take
                the first step toward healthier gums and a confident smile.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              FAQs About Periodontal Treatment
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
