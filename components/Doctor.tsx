import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const memberships = ["ADA", "ACD", "AGD"];

const doctorHighlights = [
  "Complete smile transformations",
  "Advanced dental implants",
  "Periodontal surgery",
  "Preventive cleanings and routine checkups",
];

export default function Doctor() {
  return (
    <section
      id="our-doctor"
      className="bg-brand-section scroll-mt-28 border-y border-white/10 py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.1fr)] items-start lg:px-8">
        <div className="lg:sticky lg:top-20">
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-[460px]" data-parallax="soft">
              <div className="absolute -inset-6 -z-10 rounded-full bg-[rgba(34,211,238,0.10)] blur-[110px]" />
              <div className="absolute -left-4 bottom-1/4 -z-10 h-56 w-56 rounded-full bg-[rgba(198,81,42,0.12)] blur-[95px]" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#00aeef]/10 p-4 shadow-[0_28px_90px_rgba(0,174,239,0.2)] backdrop-blur-sm">
                <div className="relative h-[460px] overflow-hidden rounded-[26px] border border-white/10 bg-[#007ea8]/18 sm:h-[520px]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,90,120,0)_38%,rgba(198,81,42,0.06)_52%,rgba(0,61,84,0.55)_100%)]" />
                  <Image
                    src="/payal-anand.webp"
                    alt="Stylized portrait of Dr. Payal Anand, DDS."
                    width={960}
                    height={1160}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/12 bg-[#003d54]/82 p-5 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent-light">
                    Premium Private Care
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/90">
                    Thoughtful diagnosis, elegant restorative planning, and a
                    genuinely calm chairside experience.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Meet Our Dentist!"
              title="Meet Dr. Payal Anand, DDS - 16+ Years of Experience"
              description="Dr. Payal Anand, a graduate of Louisiana State University School of Dentistry, is a member of the American Dental Association (ADA), the Academy of Cosmetic Dentistry (ACD), and the Academy of General Dentistry (AGD). In addition to being a board-certified general dentist, she completed a subspecialty fellowship in periodontics at Louisiana State University School of Dentistry."
              className="[&_h2]:text-white [&_p]:text-white/85"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap gap-3">
              {memberships.map((item) => (
                <Badge key={item} variant="outline" className="px-4 py-2 text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-8 text-secondary sm:text-lg">
              Dr. Payal Anand&apos;s comprehensive approach involves working with her
              team of top local dental specialists to ensure her patients receive
              exceptional care using state-of-the-art technology.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-8 text-secondary sm:text-lg">
              Whether you need a complete smile transformation, advanced dental
              implants, periodontal surgery, or simply a trusted general dentist
              for regular cleanings and checkups, Dr. Anand and her team offer a
              wide range of services tailored to your needs. We are committed to
              enhancing both your smile and overall well-being by staying current
              with the latest advancements in dentistry.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4">
            {doctorHighlights.map((item, index) => (
              <Reveal key={item} delay={0.26 + index * 0.06}>
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/90 backdrop-blur-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.48}>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="#contact-us">
                Read More
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
