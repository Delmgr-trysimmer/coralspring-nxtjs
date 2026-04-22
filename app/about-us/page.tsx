"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Sparkles, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const practiceHighlights = [
  "We believe in simplicity - Our staff will strive to make each and every appointment a breeze. We offer automated appointment reminders and free insurance validation.",
  "Proud of her conservative approach, Dr. Payal Anand, DDS will only recommend treatment when it is absolutely necessary.",
  "We offer the most effective and efficient treatment options to meet the individual needs and desires of each patient. Dr. Payal Anand, DDS is a member of the American Dental Association (ADA), Academy of Cosmetic Dentistry (ACD) and Academy of General Dentistry (AGD). We offer quality services that are affordable.",
  "Dr. Payal Anand, DDS offers flexible payment options that fit into your budget, and her fees are thousands less than some other leading orthodontic offices.",
  "Our family dentistry services include: dental implants, crowns and bridges, dentures and cosmetic dentistry, such as veneers or teeth whitening.",
];

const accomplishments = [
  { value: 10000, suffix: "+", label: "Satisfied Patients" },
  { value: 16, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Dental Implants" },
  { value: 10000, suffix: "+", label: "Happy Smiles" },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let startTime: number | null = null;
    const duration = 1400;
    const animationFrame = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = Math.round(progress * value);
      setCount(nextValue);

      if (progress < 1) {
        window.requestAnimationFrame(animationFrame);
      }
    };

    const frameId = window.requestAnimationFrame(animationFrame);
    return () => window.cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <p ref={ref} className="text-3xl font-semibold text-cyan-200">
      {count.toLocaleString()}
      {suffix}
    </p>
  );
}

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-32 pb-20 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(198,81,42,0.24),transparent_34%),radial-gradient(circle_at_88%_16%,rgba(0,174,239,0.26),transparent_42%),radial-gradient(circle_at_40%_92%,rgba(14,165,233,0.16),transparent_38%)]"
          aria-hidden
        />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-cyan-100 uppercase">
                <Sparkles className="size-3.5 text-brand-light" />
                About Coral Springs Smiles
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Solution For Your Smile!
              </h1>
              <h2 className="mt-3 text-xl font-medium text-cyan-100 sm:text-2xl">
                Welcome to Coral Springs Smiles Dentistry
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                Dr. Payal Anand, DDS and her staff of Coral Springs dentists
                provide comprehensive dental care for you and your family in
                Coral Springs, FL. What makes us so special? A combination of
                conservative and innovative treatment, and Dr. Payal Anand&apos;s
                personal attention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-sky-400/24 via-brand/16 to-cyan-300/14 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-white/14 bg-white/6 p-3 backdrop-blur-xl">
                <Image
                  src="/images/about-1.png"
                  alt="Dr. Payal Anand"
                  width={680}
                  height={740}
                  className="h-[440px] w-full rounded-3xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-white/12 bg-linear-to-b from-white/8 to-white/4 p-7 shadow-[0_16px_52px_rgba(0,35,52,0.34)] backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-white">
                Conservative &amp; Innovative Approach to Treatment
              </h3>
              <p className="mt-4 leading-relaxed text-white/86">
                Her commitment to using the latest advancements in technology is
                not the only reason you should choose Dr. Payal Anand, DDS for
                all your family&apos;s dental needs. She uses an effective
                combination of cutting-edge dental technology, and time-proven
                methods to keep your smile healthy and beautiful.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/about-2.png"
                  alt="Modern treatment room at Coral Springs Smiles Dentistry"
                  width={900}
                  height={620}
                  className="h-52 w-full object-cover"
                />
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-3xl border border-white/12 bg-linear-to-b from-white/8 to-white/4 p-7 shadow-[0_16px_52px_rgba(0,35,52,0.34)] backdrop-blur-xl"
            >
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
                <Trophy className="size-5 text-brand-light" />
                What makes us the Best Dentist in Coral Springs?
              </h3>
              <p className="mt-4 leading-relaxed text-white/86">
                We take pride in the steps we have taken to make sure the
                personal and professional care you receive in our office is
                second-to-none. Here are just a few of the things that make our
                practice unique:
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/about-3.png"
                  alt="Patient care at Coral Springs Smiles Dentistry"
                  width={900}
                  height={620}
                  className="h-52 w-full object-cover"
                />
              </div>
            </motion.article>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/12 bg-linear-to-b from-[#004a63]/95 via-[#003a4f]/96 to-[#002d3d]/97 p-7 shadow-[0_22px_60px_rgba(0,27,41,0.42)] backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Personalized Dentistry For Every Family Member
                </h3>
                <p className="mt-4 leading-relaxed text-white/86">
                  Please feel free to contact us with any questions you have or
                  to request an appointment.
                </p>
                <div className="mt-7 space-y-3">
                  {practiceHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white/88">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="space-y-5"
              >
                <div className="overflow-hidden rounded-2xl border border-white/12">
                  <Image
                    src="/images/about-3.png"
                    alt="Friendly team helping dental patients"
                    width={900}
                    height={620}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {accomplishments.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                      className="rounded-2xl border border-white/12 bg-white/6 px-5 py-6 text-center"
                    >
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                      <p className="mt-1 text-sm text-white/82">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUsPage;