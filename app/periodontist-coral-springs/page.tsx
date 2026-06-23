import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ServicePageBody from "@/components/ServicePageBody";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import type { ServiceContentBlock } from "@/data/service-page-types";

export const metadata: Metadata = {
  title: "Periodontist Coral Springs | Gum Disease Coral Springs",
  description:
    "Periodontist Coral Springs for gum disease, LANAP, laser gum treatment, deep cleaning, grafting & periodontal care in Coral Springs. Call today.",
  alternates: {
    canonical: "/periodontist-coral-springs",
  },
};

function ServiceCtaSection() {
  return (
    <section
      aria-labelledby="service-slug-cta-heading"
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
      <div className="relative mx-auto max-w-4xl px-4 py-2 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-light sm:text-sm">
          Get In Touch
        </p>
        <h2
          id="service-slug-cta-heading"
          className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          To schedule your consultation today
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/service">All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const content: ServiceContentBlock[] = [
  {
    type: "paragraph",
    text: "Healthy gums protect more than your smile. They help hold your teeth in place, support your jawbone, and lower the risk of pain, infection, and tooth loss. If your gums bleed, feel swollen, look receded, or make your teeth feel loose, it is time to get help before the problem gets worse. Periodontist Coral Springs patients can turn to Coral Springs Smiles for careful evaluation, modern technology, and a clear plan for healthier gums.",
  },
  {
    type: "paragraph",
    text: "At Coral Springs Smiles in Coral Springs, FL, Dr. Payal Anand, DDS and her team provide periodontal care Coral Springs families can trust. We help patients with gingivitis, periodontitis, gum recession, bone loss, dental implant concerns, and ongoing periodontal maintenance. If you searched Periodontist Coral Springs because you want answers, comfort, and honest guidance, our team is ready to help.",
  },
  {
    type: "paragraph",
    text: "Call [(954) 757-5353](tel:9547575353) or [book online](/contact-us) to schedule your periodontal consultation. Periodontist Coral Springs visits are available for patients who want a clear diagnosis and a calm plan.",
  },
  {
    type: "heading",
    level: 2,
    text: "Why Choose Coral Springs Smiles for Periodontal Care",
  },
  {
    type: "paragraph",
    text: "Choosing the right gum care provider matters. Gum disease can be quiet at first, but it can damage the soft tissue and bone that support your teeth. Our goal is to find the cause, explain what is happening in simple terms, and treat the infection as early as possible. When patients compare options for Periodontist Coral Springs, they often want a team that offers advanced care without making the visit feel stressful.",
  },
  {
    type: "paragraph",
    text: "Coral Springs Smiles offers a calm, modern dental setting at 2929 North University Drive, Suite 203, Coral Springs, Florida 33065. Periodontist Coral Springs care here is focused on prevention, comfort, and long-term stability. Patients choose us for local experience, clear communication, advanced laser dentistry, deep cleaning, scaling and root planing, LANAP, bone grafting, gum therapy, and dental implant support. We also work with most PPO insurance plans and can help verify benefits before treatment.",
  },
  {
    type: "paragraph",
    text: "If you need periodontal treatment Coral Springs residents can access close to home, call today. Same-day appointments may be available for urgent gum pain, swelling, or bleeding.",
  },
  {
    type: "heading",
    level: 2,
    text: "Meet Dr. Payal Anand",
  },
  {
    type: "paragraph",
    text: "Dr. Payal Anand, DDS brings more than 16+ years of dental experience to Coral Springs Smiles. She is a graduate of Louisiana State University School of Dentistry and has completed fellowship training in periodontics. She is also connected with respected dental organizations, including the ADA and AGD, and she stays current with modern dental methods and technology.",
  },
  {
    type: "paragraph",
    text: "Patients searching Periodontist Coral Springs often want to know who will be guiding their care. Dr. Anand takes a patient-first approach. That means she listens to your symptoms, reviews your medical and dental history, checks your gum pockets, studies X-rays when needed, and explains every option before you decide. For advanced cases, she also works with trusted local specialists so patients receive the right level of care.",
  },
  {
    type: "paragraph",
    text: "Periodontist Coral Springs consultations should feel respectful and clear. You will not be rushed or judged. Whether you have missed cleanings, feel nervous, or already know you have gum disease, our team will meet you where you are and help you move forward.",
  },
  {
    type: "heading",
    level: 2,
    text: "What Does a Periodontist Do?",
  },
  {
    type: "paragraph",
    text: "A periodontist focuses on the gums, bone, and support structures around the teeth. This area of dentistry is called periodontics. A gum specialist Coral Springs patients may see can diagnose and treat gingivitis, periodontitis, gum recession, loose teeth, bone loss, deep periodontal pockets, and problems around dental implants.",
  },
  {
    type: "paragraph",
    text: "When people search Periodontist Coral Springs, they are usually looking for help with symptoms that go beyond a normal cleaning. A periodontal visit often includes pocket measurements, X-rays, gum recession checks, bite evaluation, oral hygiene review, and a treatment plan. Treatment may be non-surgical, such as scaling and root planing, or more advanced, such as laser gum treatment Coral Springs patients choose for a less invasive approach.",
  },
  {
    type: "paragraph",
    text: "The goal is simple: remove harmful bacteria, control inflammation, protect jawbone health, and help you keep your natural teeth whenever possible.",
  },
  {
    type: "heading",
    level: 2,
    text: "Signs You Need a Periodontist",
  },
  {
    type: "paragraph",
    text: "You may need a periodontal evaluation if your gums bleed when you brush or floss. Bleeding is common, but it is not normal. It can be an early sign of gingivitis or a sign that bacteria are collecting below the gumline. Periodontist Coral Springs care may also be needed if your gums feel tender, your teeth look longer, or your gumline is pulling away.",
  },
  {
    type: "paragraph",
    text: "Other warning signs include loose teeth, pain while chewing, pus near the gums, changes in your bite, deep pockets, bad breath that does not go away, or a dental implant that feels sore. People with diabetes, tobacco use, a family history of gum disease, or past periodontitis should also stay alert because they may need more frequent periodontal maintenance.",
  },
  {
    type: "paragraph",
    text: "Do not wait for severe pain. Gum disease often becomes serious before it hurts, which is why Periodontist Coral Springs exams are useful even when symptoms seem mild. Schedule an exam now so we can check your gum health and explain your next step.",
  },
  {
    type: "heading",
    level: 2,
    text: "Common Gum Disease Symptoms",
  },
  {
    type: "paragraph",
    text: "Gum disease starts when plaque and bacteria irritate the gums. In the early stage, called gingivitis, gums may look red, swollen, shiny, or tender. They may bleed during brushing or flossing. Gingivitis can often improve with professional care and better home habits. Periodontist Coral Springs treatment becomes more important when infection moves deeper and causes periodontitis.",
  },
  {
    type: "paragraph",
    text: "Periodontitis can create pockets between the teeth and gums. These pockets trap bacteria, tartar, and food particles. Over time, the infection may damage gum tissue, periodontal ligaments, and jawbone health. Symptoms may include gum recession, loose teeth, shifting teeth, tooth sensitivity, pain, bad taste, or tooth loss.",
  },
  {
    type: "paragraph",
    text: "If you notice these signs, call Coral Springs Smiles. Early gum disease treatment Coral Springs patients receive can reduce damage and help prevent more complex treatment later.",
  },
  {
    type: "heading",
    level: 2,
    text: "Our Periodontal Treatments",
  },
  {
    type: "paragraph",
    text: "Every mouth is different. That is why your treatment starts with a complete exam and a clear diagnosis. Periodontist Coral Springs care at Coral Springs Smiles may include one treatment or a phased plan, depending on the depth of your pockets, amount of bone support, inflammation level, and comfort needs.",
  },
  {
    type: "heading",
    level: 3,
    text: "Scaling and Root Planing",
  },
  {
    type: "paragraph",
    text: "Scaling and root planing is a deep cleaning used to remove plaque and tartar from below the gumline. The root surfaces are smoothed so the gums can heal more closely around the teeth. This is often recommended for early to moderate periodontitis. Local anesthetic can be used to keep you comfortable.",
  },
  {
    type: "heading",
    level: 3,
    text: "Deep Cleaning",
  },
  {
    type: "paragraph",
    text: "A deep cleaning is not the same as a routine cleaning. It is designed for patients who already have gum infection, bone loss, bleeding, or deep pockets. Periodontist Coral Springs patients may need deep cleaning in sections, followed by a recheck to see how the gums respond.",
  },
  {
    type: "heading",
    level: 3,
    text: "LANAP",
  },
  {
    type: "paragraph",
    text: "LANAP stands for Laser Assisted New Attachment Procedure. It uses laser energy to target diseased tissue and bacteria inside periodontal pockets while helping preserve healthy tissue. For qualified patients, LANAP may reduce the need for traditional cutting and sutures.",
  },
  {
    type: "heading",
    level: 3,
    text: "Laser Gum Therapy",
  },
  {
    type: "paragraph",
    text: "Laser gum treatment Coral Springs patients choose may support a more precise and comfortable visit. Laser dentistry can help reduce bacteria, remove infected tissue, and support healing. Periodontist Coral Springs visits may include laser therapy alone or with other periodontal procedures.",
  },
  {
    type: "heading",
    level: 3,
    text: "Gum Grafting",
  },
  {
    type: "paragraph",
    text: "Gum grafting may be recommended when gum recession exposes tooth roots or creates sensitivity. Grafting can add tissue to thin areas, improve root coverage, and protect teeth from future damage. It can also improve the appearance of an uneven gumline.",
  },
  {
    type: "heading",
    level: 3,
    text: "Bone Grafting",
  },
  {
    type: "paragraph",
    text: "Bone grafting helps rebuild areas where gum disease, infection, or tooth loss has weakened the jawbone. This can help support natural teeth or prepare the mouth for dental implants. Periodontist Coral Springs treatment planning may include bone grafting when X-rays show a lack of support.",
  },
  {
    type: "heading",
    level: 3,
    text: "Pocket Reduction Surgery",
  },
  {
    type: "paragraph",
    text: "Pocket reduction surgery may be used when deep pockets do not respond well enough to non-surgical care. The goal is to clean deeper areas, reduce pocket depth, and make the gums easier to maintain at home.",
  },
  {
    type: "heading",
    level: 3,
    text: "Periodontal Maintenance",
  },
  {
    type: "paragraph",
    text: "After gum disease is controlled, routine cleanings may not be enough. Periodontal maintenance is a deeper, ongoing cleaning schedule, often every three to four months, to keep bacteria under control. This helps protect your results and lower the risk of relapse.",
  },
  {
    type: "paragraph",
    text: "Ready to find the right treatment? Call [(954) 757-5353](tel:9547575353) and ask about a periodontal consultation.",
  },
  {
    type: "heading",
    level: 2,
    text: "Benefits of Early Periodontal Treatment",
  },
  {
    type: "paragraph",
    text: "Early treatment can save time, money, comfort, and teeth. When gum disease is caught early, care may be simpler and less invasive. Periodontist Coral Springs patients who act quickly may avoid advanced bone loss, gum recession, loose teeth, and emergency dental visits.",
  },
  {
    type: "paragraph",
    text: "Healthy gums can also improve confidence. You can smile without worrying about bleeding, swelling, bad breath, or teeth that feel unstable. Early periodontal care can also support dental implants, crowns, bridges, and other restorative work because strong gums and bone create a better foundation.",
  },
  {
    type: "paragraph",
    text: "Do not wait until a small symptom becomes a major problem. A consultation gives you answers and a plan.",
  },
  {
    type: "heading",
    level: 2,
    text: "Why Coral Springs Patients Trust Us",
  },
  {
    type: "paragraph",
    text: "Coral Springs Smiles is part of the Coral Springs Florida community. We treat patients from nearby neighborhoods, families who have lived here for years, and new residents looking for a periodontist near me. Periodontist Coral Springs searches often come from people who want a local office that feels personal, not rushed.",
  },
  {
    type: "paragraph",
    text: "Our trust signals include more than 16 years of experience, advanced dental technology, ADA and AGD connections, digital diagnostics, laser dentistry, dental implant experience, insurance support, and a patient-focused team. We explain fees before treatment, help with insurance questions, and offer flexible payment options.",
  },
  {
    type: "paragraph",
    text: "Most of all, we focus on comfort. If you are nervous, tell us. We will slow down, answer questions, and help you feel in control.",
  },
  {
    type: "heading",
    level: 2,
    text: "Areas We Serve",
  },
  {
    type: "paragraph",
    text: "Coral Springs Smiles welcomes patients from Coral Springs, FL and surrounding communities. If you live or work near University Drive, Sample Road, or the 33065 area, our office is easy to reach for periodontal care.",
  },
  {
    type: "paragraph",
    text: "We also serve Parkland, Coconut Creek, Margate, and nearby parts of Broward County. Many patients from these communities choose us because they want advanced gum care without driving far for every visit. If you searched Periodontist Coral Springs while comparing local options, our team is ready to help you understand your choices.",
  },
  {
    type: "paragraph",
    text: "Call now to schedule a visit at our Coral Springs office.",
  },
  {
    type: "heading",
    level: 2,
    text: "Patient Experience & Technology",
  },
  {
    type: "paragraph",
    text: "Your first visit is designed to be clear and comfortable. We begin by talking about your concerns, such as bleeding gums, bad breath, gum recession, loose teeth, sensitivity, or implant issues. Then we check your teeth, gums, bite, and bone support. We may measure gum pockets and take X-rays to see what is happening below the surface.",
  },
  {
    type: "paragraph",
    text: "Our technology may include digital imaging, laser dentistry, implant planning tools, and the Fotona LightWalker laser for hard and soft tissue care. Periodontist Coral Springs care should feel modern, precise, and personal. We use technology to improve diagnosis, comfort, and treatment planning, but we never let it replace real conversation.",
  },
  {
    type: "paragraph",
    text: "Before you leave, you will know what we found, what it means, and what we recommend next. Periodontist Coral Springs care should give you answers, not confusion.",
  },
  {
    type: "heading",
    level: 2,
    text: "Frequently Asked Questions",
  },
  {
    type: "faq",
    items: [
      {
        question: "Who is the best periodontist in Coral Springs?",
        answer:
          "The best choice depends on your needs, comfort level, treatment goals, and insurance. Many patients choose Coral Springs Smiles because Dr. Payal Anand, DDS has periodontal training, more than 16 years of experience, modern laser technology, and a patient-first approach. If you are comparing Periodontist Coral Springs options, schedule a consultation and choose the team that explains your condition clearly.",
      },
      {
        question: "How much does periodontal treatment cost in Coral Springs?",
        answer:
          "Cost depends on the diagnosis and treatment. A deep cleaning usually costs less than surgery, LANAP, gum grafting, or bone grafting. Your fee may also depend on insurance benefits, number of teeth treated, X-rays, anesthesia, and follow-up visits. Coral Springs Smiles works with many insurance plans and can review your estimate before care begins.",
      },
      {
        question: "What is LANAP treatment?",
        answer:
          "LANAP is a laser-based treatment for periodontitis. It uses a dental laser to target diseased tissue and bacteria inside gum pockets. It may be an option for some patients who want a less invasive alternative to traditional gum surgery. Your exam will show whether you are a candidate.",
      },
      {
        question: "Does insurance cover periodontal treatment?",
        answer:
          "Many dental insurance plans offer coverage for gum disease treatment, scaling and root planing, periodontal maintenance, and some surgical care. Coverage depends on your plan, deductible, waiting periods, and medical need. Our team can help verify your benefits before treatment.",
      },
      {
        question: "When should I see a periodontist?",
        answer:
          "You should schedule a periodontal evaluation if you have bleeding gums, swollen gums, gum recession, loose teeth, deep pockets, pain when chewing, bad breath, or bone loss. You should also be checked if you have diabetes, smoke, or have a history of periodontitis.",
      },
      {
        question: "Is laser gum treatment painful?",
        answer:
          "Most patients describe laser gum therapy as more comfortable than they expected. Local anesthetic can be used when needed. You may feel mild soreness afterward, but many patients return to normal activities quickly.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Recovery depends on treatment. Scaling and root planing may cause mild tenderness for a few days. Laser therapy may involve less swelling than traditional surgery. Gum grafting and bone grafting take longer and require specific aftercare instructions.",
      },
      {
        question: "What causes gum recession?",
        answer:
          "Gum recession may be caused by gum disease, aggressive brushing, thin gum tissue, tobacco use, teeth grinding, misalignment, genetics, or past dental work. An exam can help identify the cause and whether gum grafting is needed.",
      },
      {
        question: "Can gum disease be reversed?",
        answer:
          "Gingivitis can often improve with professional cleaning and strong home care. Periodontitis cannot always be fully reversed because bone and tissue may be damaged, but it can often be controlled with the right treatment and maintenance.",
      },
      {
        question: "What happens if gum disease is untreated?",
        answer:
          "Untreated gum disease can lead to deeper pockets, gum recession, bone loss, loose teeth, tooth loss, bad breath, infection, and problems with dental implants. Early care is the best way to protect your smile.",
      },
      {
        question: "Is a deep cleaning different from a regular cleaning?",
        answer:
          "Yes. A regular cleaning focuses on plaque and tartar above the gumline. A deep cleaning removes buildup below the gumline and smooths root surfaces to help infected gums heal.",
      },
      {
        question: "How often do I need periodontal maintenance?",
        answer:
          "Many patients need periodontal maintenance every three to four months after active gum treatment. Your schedule depends on pocket depth, home care, bleeding, risk factors, and how your gums respond.",
      },
      {
        question: "Can periodontal care help protect dental implants?",
        answer:
          "Yes. Healthy gums and bone are important for dental implants. Periodontal care can help treat inflammation around implants and lower the risk of peri-implantitis.",
      },
      {
        question: "What can I do at home to improve gum health?",
        answer:
          "Brush twice daily, clean between teeth, use recommended rinses, avoid tobacco, manage diabetes if needed, and keep your maintenance visits. Home care works best when paired with professional treatment.",
      },
      {
        question: "How do I book a consultation?",
        answer:
          "Call Coral Springs Smiles at (954) 757-5353 or book online. Tell the team if you have bleeding gums, swelling, pain, a loose tooth, or an implant concern. If you searched Periodontist Coral Springs today, this is the right time to get checked.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Schedule Your Periodontal Consultation Today",
  },
  {
    type: "paragraph",
    text: "Your gums are the foundation of your smile. If they are inflamed, infected, or receding, do not wait for the damage to spread. Coral Springs Smiles offers advanced periodontal care in a comfortable local setting with modern technology, insurance support, and a team that treats you like family.",
  },
  {
    type: "paragraph",
    text: "Call [(954) 757-5353](tel:9547575353) now, [book online](/contact-us), or schedule a periodontal consultation at 2929 North University Drive, Suite 203, Coral Springs, Florida 33065. Periodontist Coral Springs care is available for new and existing patients who want healthier gums, stronger teeth, and lasting confidence.",
  },
];

export default function PeriodontistCoralSpringsPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        tagline="Advanced Gum Disease Treatment & Periodontal Care"
        title="Periodontist"
        breadcrumbLabel="Periodontist"
        titleClassName="normal-case tracking-tight"
      />
      <main className="relative z-0 bg-white pb-16">
        <ServicePageBody
          title="Periodontist"
          tagline="Advanced Gum Disease Treatment & Periodontal Care"
          video={{ kind: "mp4", src: "/images/lanap.mp4" }}
          content={content}
          breadcrumbLabel="Periodontist"
        />
        <ServiceCtaSection />
        <GoogleMapEmbed />
        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
