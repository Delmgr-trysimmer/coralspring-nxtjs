"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { title: "Botox Cosmetic",         image: "/images/botox.png",                    description: "Soft facial balancing treatments with a natural, refreshed finish."                     },
  { title: "Cosmetic Dentistry",     image: "/images/Cosmetic-Dentistry.png",        description: "Smile-enhancing veneers and contouring tailored to your features."                      },
  { title: "Crowns & Bridges",       image: "/images/Crowns-Bridges.png",            description: "Durable restorations crafted for ideal bite alignment and aesthetics."                  },
  { title: "Dental Implants",        image: "/images/Dental-Implants.png",           description: "Precision-guided implant solutions for stability and long-term confidence."             },
  { title: "Dermal Fillers",         image: "/images/Dermal-Fillers.png",            description: "Volume-restoring enhancements designed for subtle facial harmony."                      },
  { title: "Emergency Appointment",  image: "/images/Emergency-Appointment.png",     description: "Same-day urgent care support when comfort and fast relief matter most."                 },
  { title: "Invisalign",             image: "/images/Invisalign.png",                description: "Clear aligner plans that straighten your smile with daily convenience."                 },
  { title: "Laser Dentistry",        image: "/images/Laser-Dentistry.png",           description: "Minimally invasive procedures with better comfort and faster healing."                  },
  { title: "Orthodontics",           image: "/images/Orthodontics.png",              description: "Comprehensive bite correction for healthy function and balanced aesthetics."             },
  { title: "Periodontics",           image: "/images/Periodontics.png",              description: "Gum health therapies focused on prevention, restoration, and longevity."                },
  { title: "Root Canal Treatment",   image: "/images/Root-Canal-Treatment.png",      description: "Advanced infection treatment to save natural teeth and reduce discomfort."              },
  { title: "Teeth Whitening",        image: "/images/Teeth-Whitening.png",           description: "Professional whitening protocols for noticeably brighter, even-toned teeth."           },
];

/* Distribute across 4 columns for alternating parallax depth */
const COL_COUNT = 4;
const columns: (typeof services)[] = Array.from({ length: COL_COUNT }, () => []);
services.forEach((s, i) => columns[i % COL_COUNT].push(s));

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Background orbs — each drifts at a distinct speed + axis */
  const orb1Y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-70,  90]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [ 50, -90]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-30, 100]);
  const orb1X = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [  0,  28]);
  const orb2X = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [  0, -20]);

  /* Heading drifts up slowly */
  const headingY       = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [0, -28]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.08, 0.65, 1], [0.5, 1, 1, 0.4]);

  /* Alternating column parallax — cols 0 & 2 rise, cols 1 & 3 sink */
  const colY = [
    useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [ 28, -48]),
    useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18,  56]),
    useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [ 18, -36]),
    useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-26,  46]),
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="scroll-mt-28 border-y border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="specials" className="scroll-mt-28" />

        <div className="relative overflow-hidden rounded-[40px] border border-slate-200/90 bg-white px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 sm:py-16 lg:px-12">

          {/* Inner highlight ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-inset ring-slate-100" />

          {/* Parallax ambient orbs — soft tints on light */}
          <motion.div style={{ y: orb1Y, x: orb1X }}
            className="pointer-events-none absolute -left-24 -top-16 h-96 w-96 rounded-full bg-sky-400/12 blur-[110px]" />
          <motion.div style={{ y: orb2Y, x: orb2X }}
            className="pointer-events-none absolute -bottom-16 -right-24 h-80 w-80 rounded-full bg-[rgba(198,81,42,0.08)] blur-[100px]" />
          <motion.div style={{ y: orb3Y }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[90px]" />

          {/* Section heading with scroll-driven parallax */}
          <motion.div style={{ y: headingY, opacity: headingOpacity }}>
            <Reveal>
              <SectionHeading
                eyebrow="Signature Services"
                title="Comprehensive Dental Services We Offer in Coral Springs"
                description="Each treatment is delivered in a premium, technology-supported setting designed to feel calm, personal, and detail-focused."
                align="center"
                className="[&_h2]:text-slate-900 [&_p]:text-slate-600"
              />
            </Reveal>
          </motion.div>

          {/* ── Desktop: 4-column parallax grid ── */}
          <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-4">
            {columns.map((col, colIdx) => (
              <motion.div key={colIdx} style={{ y: colY[colIdx] }} className="flex flex-col gap-5">
                {col.map((service, rowIdx) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={colIdx + rowIdx * COL_COUNT}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* ── Mobile / tablet: flat 2-col grid ── */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────────────────── */

type Service = { title: string; image: string; description: string };

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 0.05}>
      <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[rgb(0_122_168/0.24)] bg-[linear-gradient(165deg,#ebf8fb_0%,#ddf2f7_48%,#d5edf4_100%)] shadow-[0_10px_32px_rgba(0,61,84,0.08),inset_0_1px_0_rgb(255_255_255/0.52)] transition-all duration-500 hover:-translate-y-2 hover:border-[rgb(0_174_239/0.5)] hover:bg-[linear-gradient(165deg,#f1fbfd_0%,#e4f7fb_50%,#dbf3f8_100%)] hover:shadow-[0_24px_56px_rgba(0,174,239,0.16),0_14px_40px_rgba(198,81,42,0.08)]">

        {/* Top accent — logo cyan → terracotta */}
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgb(0_174_239/0.7),rgb(198_81_42/0.45),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Corner glows */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[rgb(0_174_239/0.22)] blur-2xl transition-all duration-500 group-hover:scale-110" />
        <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[rgb(198_81_42/0.14)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Card body */}
        <div className="relative flex flex-col p-6">

          {/* Icon + number row */}
          <div className="flex items-start justify-between">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgb(0_174_239/0.26),rgb(56_189_248/0.16),rgb(198_81_42/0.12))] shadow-[inset_0_1px_0_rgb(255_255_255/0.68)] ring-1 ring-[rgb(0_122_168/0.24)] transition-transform duration-400 group-hover:scale-105 group-hover:ring-[rgb(0_174_239/0.38)]">
              <Image
                src={service.image}
                alt={service.title}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
            <span className="font-mono text-xs font-medium tabular-nums text-[rgb(0_90_120/0.48)] transition-colors duration-300 group-hover:text-brand">
              {num}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-[#043347]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-sm leading-[1.75] text-[rgb(6_61_84/0.84)]">
            {service.description}
          </p>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2">
            <Link
              href="#contact-us"
              className="group/link inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand transition-all duration-300 hover:text-brand-muted"
            >
              Learn More
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
