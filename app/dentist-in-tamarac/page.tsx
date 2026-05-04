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

type HighlightSection = {
  title: string;
  image: string;
  paragraphs: string[];
  list?: string[];
  listAfterParagraph: number;
};

export const metadata: Metadata = {
  title: "Dentist Near Tamarac, FL | Coral Springs Smiles Dental Care",
  description:
    "Looking for a trusted dentist near Tamarac, FL? Coral Springs Smiles offers implants, cosmetic dentistry, root canals & emergency care. Call today!",
  alternates: {
    canonical: "/dentist-in-tamarac",
  },
};

const introParagraphs = [
  "If you are searching for a dentist near Tamarac, FL or a reliable dentist in Tamarac, the team at Coral Springs Smiles provides a full range of dental services designed to support healthy teeth and confident smiles.",
  "Patients looking for a dental office near Tamarac often visit our practice for preventive dental care, restorative procedures, and cosmetic dentistry. Our goal is to help patients maintain strong teeth and healthy gums through modern dental treatments and personalized care.",
  "Whether you need routine checkups, orthodontic treatment, dental implants, or periodontal therapy, our dental team offers treatments designed to improve oral health and smile appearance.",
];

const services: ServiceSection[] = [
  {
    title: "Cosmetic Dentistry",
    image: "/images/Cosmetic-Dentistry.jpg",
    paragraphs: [
      "Cosmetic dentistry focuses on improving the appearance of teeth while maintaining overall oral health.",
      "Our cosmetic dentistry services include:",
      "These treatments help correct stains, uneven teeth, small gaps, and alignment concerns to create a brighter smile.",
    ],
    list: [
      "Teeth whitening treatments",
      "Dental veneers",
      "Cosmetic bonding",
      "Smile makeover procedures",
      "Invisalign clear aligners",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "Dental Crowns & Bridges",
    image: "/images/Crowns-Bridges.jpg",
    paragraphs: [
      "Dental crowns and bridges are restorative treatments used to repair damaged teeth and replace missing teeth.",
      "A dental crown covers and protects a weakened tooth, restoring strength and function.",
      "A dental bridge replaces one or more missing teeth by filling the gap with a custom dental restoration.",
      "Both options help restore chewing ability and maintain proper dental alignment.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dental Implants",
    image: "/images/Dental-Implants.jpg",
    paragraphs: [
      "Dental implants provide a long-term solution for replacing missing teeth. The implant is placed into the jawbone and acts as a strong foundation for a dental crown.",
      "Benefits of dental implants include:",
      "Dental implants are often recommended for patients seeking a stable and permanent tooth replacement option.",
    ],
    list: [
      "Natural appearance",
      "Improved chewing ability",
      "Long-lasting durability",
      "Support for jawbone structure",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "Tooth Extraction",
    image: "/images/services-29.png",
    paragraphs: [
      "In some cases, removing a damaged or severely decayed tooth may be necessary to protect surrounding teeth. Our dental team performs tooth extraction procedures using modern techniques to ensure patient comfort.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Wisdom Tooth Extraction",
    image: "/images/Orthodontics.jpg",
    paragraphs: [
      "Wisdom teeth may cause pain or crowding when they grow improperly. Wisdom tooth extraction helps prevent infection and protects nearby teeth from damage.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Root Canal Treatment",
    image: "/images/Root-Canal.jpg",
    paragraphs: [
      "Root canal therapy is used to treat infection inside a tooth while preserving the natural tooth structure. The procedure removes infected pulp and seals the tooth to restore dental health.",
      "Modern root canal treatments are safe and effective for relieving tooth pain.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Bone Grafting",
    image: "/blog/dental-implants-with-bone-loss.jpg",
    paragraphs: [
      "Bone grafting helps restore jawbone density in areas where bone loss has occurred. This procedure is often recommended before dental implant placement to ensure proper support.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Orthodontics & Invisalign",
    image: "/images/Invisalign.jpg",
    paragraphs: [
      "Orthodontic treatment helps correct crooked teeth and bite alignment issues.",
      "We provide:",
      "Invisalign gradually straightens teeth using transparent aligners that are comfortable and discreet.",
    ],
    list: ["Orthodontic treatment", "Invisalign clear aligners"],
    listAfterParagraph: 1,
  },
  {
    title: "Sedation Dentistry",
    image: "/images/visit-a-dentist.webp",
    paragraphs: [
      "Sedation dentistry helps patients feel relaxed during dental procedures. This option can be beneficial for individuals who experience dental anxiety or require complex treatments.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Teeth Whitening",
    image: "/images/Teeth-Whitening.jpg",
    paragraphs: [
      "Professional teeth whitening treatments help remove stains caused by food, beverages, and aging. These treatments can noticeably brighten your smile.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dental Veneers",
    image: "/blog/dental-veneers-in-coral-springs-fl.jpg",
    paragraphs: [
      "Dental veneers are thin porcelain shells placed on the front surface of teeth to improve their color, shape, and alignment.",
    ],
    listAfterParagraph: -1,
  },
];

const highlightSections: HighlightSection[] = [
  {
    title: "Periodontal Care – Gum Disease Treatment",
    image: "/images/Periodontics.jpg",
    paragraphs: [
      "Healthy gums play a vital role in supporting strong teeth. Gum disease can develop gradually and may lead to tooth loss if not treated early.",
      "Our periodontal services include:",
      "Proper periodontal treatment helps maintain healthy gums and long-term oral health.",
    ],
    list: [
      "Gum disease diagnosis",
      "Scaling and root planing (deep cleaning)",
      "Periodontal maintenance therapy",
      "Treatment for gum infections",
      "Preventive gum care",
    ],
    listAfterParagraph: 1,
  },
  {
    title: "Pediatric Dentistry",
    image: "/blog/prepare-kids-first-dental-visit.jpg",
    paragraphs: [
      "Our pediatric dental services provide preventive and routine dental care for children. Early dental visits help encourage good oral hygiene habits and support healthy tooth development.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Laser Dentistry",
    image: "/images/Laser-Dentistry.jpg",
    paragraphs: [
      "Laser dentistry allows dentists to perform certain procedures with improved precision. This technology can reduce treatment time and support faster healing.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Dermal Fillers & Botox® Cosmetics",
    image: "/images/Botox-Cosmetics.jpg",
    paragraphs: [
      "In addition to dental services, Coral Springs Smiles offers facial aesthetic treatments such as dermal fillers and Botox® cosmetics to enhance facial appearance and complement your smile.",
    ],
    listAfterParagraph: -1,
  },
  {
    title: "Emergency Dentist Near Tamarac",
    image: "/images/Dental-Emergencies.jpg",
    paragraphs: [
      "Dental emergencies can happen unexpectedly. Patients searching for an emergency dentist near Tamarac can receive prompt care at Coral Springs Smiles.",
      "Emergency dental care may be required for:",
      "Timely treatment helps relieve discomfort and prevent further complications.",
    ],
    list: [
      "Severe tooth pain",
      "Broken or chipped teeth",
      "Knocked-out teeth",
      "Dental infections",
      "Swelling or oral injuries",
    ],
    listAfterParagraph: 1,
  },
];

const reasons = [
  {
    title: "Experienced Dental Team",
    text: "Our dental professionals provide preventive, cosmetic, restorative, and periodontal treatments.",
  },
  {
    title: "Advanced Dental Technology",
    text: "Modern diagnostic tools help improve treatment precision.",
  },
  {
    title: "Customized Treatment Plans",
    text: "Every patient receives dental care tailored to their oral health needs.",
  },
  {
    title: "Convenient Access",
    text: "Our dental office is easily accessible for patients traveling from Tamarac and nearby communities.",
  },
];

const faqs = [
  {
    question: "Do you accept new patients from Tamarac?",
    answer:
      "Yes. Coral Springs Smiles welcomes patients from Tamarac and nearby communities.",
  },
  {
    question: "Do you provide tooth extraction and wisdom tooth removal?",
    answer:
      "Yes. Our dental team performs both tooth extraction and wisdom tooth extraction when necessary.",
  },
  {
    question: "What dental treatments do you provide?",
    answer:
      "Our services include cosmetic dentistry, dental implants, crowns and bridges, root canal treatment, bone grafting, sedation dentistry, orthodontics, Invisalign, periodontal care, and emergency dental services.",
  },
  {
    question: "Do you treat dental emergencies?",
    answer:
      "Yes. Our dental team offers prompt care for dental emergencies including tooth pain, dental trauma, and infections.",
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

function HighlightBlock({
  section,
  index,
}: {
  section: HighlightSection;
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
            {section.list && section.listAfterParagraph === paragraphIndex ? (
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

export default function DentistInTamaracPage() {
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
                Trusted Dentist Near Tamarac, FL – Comprehensive Dental Care for
                Your Smile
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
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Comprehensive Dental Services for Tamarac Patients
              </h2>
              <div className="mt-5 flex justify-center" aria-hidden>
                <span className="h-1 w-20 rounded-full bg-brand" />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Our dental practice offers several treatments that focus on
                preventing dental problems, restoring damaged teeth, and
                enhancing the appearance of your smile.
              </p>
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
            {highlightSections.map((section, index) => (
              <HighlightBlock key={section.title} section={section} index={index} />
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
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Meet Dr. Payal Anand, DDS
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Patients at Coral Springs Smiles receive care from Dr. Payal
                  Anand, a dentist with more than 16 years of clinical
                  experience.
                </p>
                <p>
                  Dr. Anand focuses on providing modern dental treatments and
                  personalized care to help patients maintain healthy and
                  confident smiles.
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
                  Why Tamarac Patients Choose Coral Springs Smiles
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Patients searching for a dentist close to Tamarac choose Coral
                  Springs Smiles because of our commitment to quality care and
                  advanced dental technology.
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
                  Schedule Your Visit with a Dentist Near Tamarac
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    If you are looking for a dentist near Tamarac FL or a
                    trusted dentist in Tamarac, Coral Springs Smiles provides
                    dental care designed to maintain healthy teeth and confident
                    smiles.
                  </p>
                  <p>
                    Contact our office today to schedule your dental
                    appointment.
                  </p>
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
