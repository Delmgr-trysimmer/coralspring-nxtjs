import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const metrics = [
  {
    value: 10000,
    suffix: "+",
    label: "Satisfied Patients",
    description: "Long-term care plans designed around comfort and consistency.",
  },
  {
    value: 16,
    suffix: "+",
    label: "Years of Experience",
    description: "Advanced treatment planning with a calm, private-clinic touch.",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Dental Implants",
    description: "Restorative outcomes supported by digital precision and detail.",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Happy Smiles",
    description: "Every smile refreshed with trust, clarity, and careful follow-through.",
  },
];

export default function Stats() {
  return (
    <section
      id="success-stories"
      className="scroll-mt-28 border-y border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_42%,#f1f5f9_100%)] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Trusted Results"
            title="Why Choose Coral Springs Smiles for Your Dental Care in Coral Springs, FL?"
            description="With over 16+ years of experience, we believe that prevention is the best medicine. Our commitment to excellence has allowed us to serve more than 10,000+ satisfied patients, complete over 2,000+ dental implants, and create over 10,000+ happy smiles."
            align="center"
            className="[&_h2]:text-slate-900 [&_p]:text-slate-600"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <article className="rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {metric.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {metric.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
