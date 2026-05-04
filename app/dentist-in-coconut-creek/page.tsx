import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";

type ServiceSection = {
  title: string;
  image: string;
  paragraphs: string[];
  list?: string[];
  listAfterParagraph: number;
};

type FeatureSection = {
  title: string;
  image: string;
  paragraphs: string[];
  list?: string[];
  listAfterParagraph: number;
};

export const metadata: Metadata = {
  title: "Dentist in Coconut Creek, FL | Coral Springs Smiles Care",
  description:
    "Need a dentist in Coconut Creek, FL? Coral Springs Smiles provides implants, cosmetic dentistry, Invisalign, and emergency dental care. Schedule today!",
};

const introParagraphs = [
  "If you are searching for a dentist in Coconut Creek, FL, Coral Springs Smiles offers comprehensive dental services designed to support healthy teeth and confident smiles.",
  "Many patients looking for a dental clinic near Coconut Creek visit our practice for preventive care, cosmetic smile treatments, and restorative dental procedures. Our dental team focuses on providing modern dental care with a personalized approach so every patient receives treatment tailored to their oral health needs.",
  "From routine dental exams to advanced procedures such as dental implants or gum disease treatment, our goal is to help patients maintain long-term oral health in a comfortable and welcoming environment.",
];

const services: ServiceSection[] = [
  {
    title: "Cosmetic Dentistry",
    image: "/images/Cosmetic-Dentistry.jpg",
    paragraphs: [
      "Cosmetic dentistry treatments help improve the appearance of your smile while maintaining the health of your natural teeth.",
      "Our cosmetic dentistry services include:",
      "These procedures help correct discoloration, uneven teeth, gaps, and minor alignment issues to create a brighter and more balanced smile.",
    ],
    list: [
      "Professional teeth whitening",
      "Dental veneers",
      "Cosmetic bonding",
      "Smile makeover treatments",
      "Invisalign clear aligners",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "Dental Crowns and Bridges",
    image: "/images/Crowns-Bridges.jpg",
    paragraphs: [
      "Crowns and bridges are restorative dental solutions used to strengthen damaged teeth or replace missing teeth.",
      "A dental crown is placed over a weakened tooth to restore its shape, strength, and function.",
      "A dental bridge replaces one or more missing teeth by anchoring an artificial tooth between neighboring teeth.",
      "These restorations help restore proper chewing ability and maintain the alignment of surrounding teeth.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dental Implants",
    image: "/images/Dental-Implants.jpg",
    paragraphs: [
      "Dental implants are considered one of the most reliable options for replacing missing teeth. The implant is placed in the jawbone and functions as an artificial tooth root that supports a dental crown.",
      "Benefits of dental implants include:",
      "Dental implants are often recommended for patients seeking a stable and long-lasting tooth replacement solution.",
    ],
    list: [
      "Natural appearance and comfort",
      "Improved chewing and speaking ability",
      "Long-term durability",
      "Support for jawbone health",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "Tooth Extraction",
    image: "/blog/tooth-extraction-coral-springs-damaged-tooth-removal.jpg",
    paragraphs: [
      "When a tooth is severely damaged or affected by advanced decay, tooth extraction may be required to protect surrounding teeth and prevent infection.",
      "Our dental team performs extractions using modern techniques focused on minimizing discomfort and supporting smooth recovery.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Wisdom Tooth Removal",
    image: "/blog/tooth-extraction-pros-cons-bone-graft-benefits.jpg",
    paragraphs: [
      "Wisdom teeth can sometimes grow improperly or cause overcrowding in the mouth. Removing impacted wisdom teeth can help prevent pain, infection, and damage to nearby teeth.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Root Canal Therapy",
    image: "/images/Root-Canal.jpg",
    paragraphs: [
      "Root canal treatment is performed when infection reaches the inner pulp of a tooth. The infected tissue is removed and the tooth is sealed to prevent further damage.",
      "This procedure allows patients to preserve their natural tooth while relieving discomfort caused by infection.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Bone Grafting",
    image: "/blog/dental-implants-with-bone-loss.jpg",
    paragraphs: [
      "Bone grafting procedures help rebuild jawbone structure in areas where bone loss has occurred. This treatment is commonly recommended prior to dental implant placement to ensure proper support.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Orthodontics and Invisalign",
    image: "/images/Invisalign.jpg",
    paragraphs: [
      "Orthodontic care helps correct issues such as crooked teeth and bite misalignment.",
      "Our office provides orthodontic treatment and Invisalign clear aligners.",
      "Invisalign uses transparent, removable aligners to gradually move teeth into their proper position without the appearance of metal braces.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Sedation Dentistry",
    image: "/images/visit-a-dentist.webp",
    paragraphs: [
      "Sedation dentistry is available for patients who experience dental anxiety or require more complex dental procedures. Sedation options help patients remain calm and comfortable during treatment.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Teeth Whitening Treatments",
    image: "/images/Teeth-Whitening.jpg",
    paragraphs: [
      "Professional teeth whitening treatments remove stains caused by coffee, tea, tobacco, and natural aging.",
      "These treatments provide noticeable results and can significantly brighten the appearance of your smile.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dental Veneers",
    image: "/blog/dental-veneers-in-coral-springs-fl.jpg",
    paragraphs: [
      "Dental veneers are thin porcelain shells placed over the front surface of teeth to improve their color, shape, and alignment.",
      "Veneers are commonly used to correct chipped teeth, discoloration, minor gaps, and uneven tooth shapes.",
    ],
    listAfterParagraph: -1,
  },
];

const featureSections: FeatureSection[] = [
  {
    title: "Periodontal Care and Gum Disease Treatment",
    image: "/images/Periodontics.jpg",
    paragraphs: [
      "Healthy gums play an important role in maintaining strong teeth and supporting overall oral health.",
      "If gum disease develops, early treatment is essential to prevent damage to the teeth and supporting bone.",
      "Our periodontal treatments include:",
      "These treatments help restore gum health and protect long-term oral stability.",
    ],
    list: [
      "Gum disease diagnosis",
      "Scaling and root planing",
      "Periodontal maintenance therapy",
      "Infection management",
      "Preventive gum care programs",
    ],
    listAfterParagraph: 2,
  },
  {
    title: "Pediatric Dental Care",
    image: "/blog/prepare-kids-first-dental-visit.jpg",
    paragraphs: [
      "Children benefit from early dental visits that monitor oral development and encourage proper oral hygiene habits.",
      "Our pediatric dental services provide preventive care and routine checkups in a comfortable environment for young patients.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Laser Dentistry",
    image: "/images/Laser-Dentistry.jpg",
    paragraphs: [
      "Laser dental technology allows certain procedures to be performed with improved precision and minimal discomfort. Laser dentistry can also help reduce recovery time following treatment.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dermal Fillers & Botox® Cosmetics",
    image: "/images/Botox-Cosmetics.jpg",
    paragraphs: [
      "In addition to dental care, Coral Springs Smiles offers facial aesthetic services including dermal fillers and Botox® cosmetics.",
      "These treatments can enhance facial appearance and complement a healthy, confident smile.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Emergency Dentist in Coconut Creek",
    image: "/images/Dental-Emergencies.jpg",
    paragraphs: [
      "Dental emergencies can occur without warning and require immediate attention.",
      "Patients searching for an emergency dentist in Coconut Creek can receive prompt treatment at Coral Springs Smiles.",
      "Emergency dental situations may include:",
      "Quick treatment helps relieve pain and prevent further complications.",
    ],
    list: [
      "Severe toothache",
      "Broken or cracked teeth",
      "Knocked-out teeth",
      "Dental infections",
      "Swelling or oral injuries",
    ],
    listAfterParagraph: 2,
  },
];

const reasons = [
  {
    title: "Experienced Dental Team",
    text: "Our dental professionals provide preventive, cosmetic, restorative, and periodontal dental treatments.",
  },
  {
    title: "Advanced Dental Technology",
    text: "Modern diagnostic equipment improves treatment accuracy and patient comfort.",
  },
  {
    title: "Personalized Treatment Plans",
    text: "Each patient receives dental care tailored to their individual oral health needs.",
  },
  {
    title: "Convenient Location",
    text: "Our office is easily accessible for patients living in Coconut Creek and nearby communities.",
  },
];

const faqs = [
  {
    question: "Do you accept new patients from Coconut Creek?",
    answer:
      "Yes. Coral Springs Smiles welcomes new patients from Coconut Creek and the surrounding areas.",
  },
  {
    question: "Do you perform tooth extraction and wisdom tooth removal?",
    answer:
      "Yes. Our dental team provides both tooth extraction and wisdom tooth removal procedures when necessary.",
  },
  {
    question: "What dental services do you offer?",
    answer:
      "Our services include cosmetic dentistry, dental implants, crowns and bridges, root canal therapy, bone grafting, orthodontics, Invisalign, sedation dentistry, periodontal care, and emergency dental services.",
  },
  {
    question: "Do you provide emergency dental treatment?",
    answer:
      "Yes. We offer prompt care for dental emergencies such as severe tooth pain, broken teeth, infections, and dental injuries.",
  },
];

function TextList({ items }: { items: string[] }) {
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

function ServiceCard({ service }: { service: ServiceSection }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="relative h-48 bg-slate-100">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#003d54]/55 to-transparent"
          aria-hidden
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-slate-950">
          {service.title}
        </h3>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          {service.paragraphs.map((paragraph, index) => (
            <div key={paragraph}>
              <p>{paragraph}</p>
              {service.list && service.listAfterParagraph === index ? (
                <TextList items={service.list} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FeatureBlock({
  section,
  index,
}: {
  section: FeatureSection;
  index: number;
}) {
  const image = (
    <div className="relative min-h-72 overflow-hidden rounded-xl bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      <Image
        src={section.image}
        alt=""
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 42vw, 100vw"
      />
    </div>
  );

  const copy = (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {section.title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <div key={paragraph}>
            <p>{paragraph}</p>
            {section.list &&
            section.listAfterParagraph === paragraphIndex ? (
              <TextList items={section.list} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      {index % 2 === 0 ? (
        <>
          {copy}
          {image}
        </>
      ) : (
        <>
          <div className="lg:order-2">{copy}</div>
          <div className="lg:order-1">{image}</div>
        </>
      )}
    </section>
  );
}

export default function DentistInCoconutCreekPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden bg-[#003d54] pt-24">
          <Image
            src="/images/dental-care.webp"
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
                Experienced Dentist in Coconut Creek, FL for Family Dental Care
              </h1>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-white/88 sm:text-lg">
                {introParagraphs.map((paragraph) => (
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

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef8fb_55%,#ffffff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl  p-6 text-center sm:p-8">
              <p className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                Comprehensive Services
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Complete Dental Care for Coconut Creek Patients
              </h2>
              <div className="mt-5 flex justify-center" aria-hidden>
                <span className="h-1 w-20 rounded-full bg-brand" />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                At Coral Springs Smiles, we provide a wide range of dental
                treatments designed to protect teeth, restore damaged smiles, and
                improve overall oral health.
              </p>
              <div className="mt-6 grid gap-3 text-left text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-base font-semibold text-slate-900">10+ Treatments</p>
                  <p className="mt-1 text-slate-600">Preventive, cosmetic, and restorative care.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-base font-semibold text-slate-900">Patient-First Care</p>
                  <p className="mt-1 text-slate-600">Personalized plans for long-term oral health.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <div className="bg-[linear-gradient(180deg,#f3fbfd_0%,#ffffff_100%)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:px-8">
            {featureSections.map((section, index) => (
              <FeatureBlock
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <Image
                src="/payal-anand.webp"
                alt=""
                width={640}
                height={760}
                className="h-[420px] w-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Meet Dr. Payal Anand, DDS
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Dr. Payal Anand has more than 16 years of experience providing
                  comprehensive dental care.
                </p>
                <p>
                  Her approach focuses on accurate diagnosis, modern treatment
                  methods, and personalized dental care that helps patients
                  maintain healthy and confident smiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#003d54] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Why Patients Choose Our Dentist in Coconut Creek
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Patients looking for a dentist in Coconut Creek choose Coral
                  Springs Smiles for professional dental care and a
                  patient-centered experience.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="rounded-xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,23,35,0.16)]"
                  >
                    <h3 className="font-display text-lg font-semibold text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/78">
                      {reason.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f4fbfd_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Schedule an Appointment with a Dentist in Coconut Creek
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    If you are searching for a dentist in Coconut Creek, FL,
                    Coral Springs Smiles provides comprehensive dental care
                    designed to maintain healthy teeth and confident smiles.
                  </p>
                  <p>Contact our office today to schedule your dental appointment.</p>
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/Emergency-Appointment.png"
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
              Frequently Asked Questions
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
