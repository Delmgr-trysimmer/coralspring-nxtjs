"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const riseTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-28 overflow-hidden pt-32 pb-16 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(0,61,84,0.42)_0%,rgba(0,90,120,0.28)_42%,rgba(0,61,84,0.5)_100%)]" />
      <div className="pointer-events-none absolute right-[18%] top-24 z-1 h-72 w-72 rounded-full bg-[rgba(0,174,239,0.28)] blur-[90px]" />
      <div className="pointer-events-none absolute left-[8%] top-40 z-1 h-64 w-64 rounded-full bg-[rgba(198,81,42,0.14)] blur-[88px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={riseTransition}
          >
            <Badge variant="outline">Welcome to Coral Springs Smiles</Badge>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...riseTransition, delay: 0.06 }}
            className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl"
          >
            <span className="inline-block bg-linear-to-r from-white via-[#c9edf8] to-[#2f7f99] bg-clip-text text-transparent drop-shadow-[0_2px_28px_rgba(0,35,52,0.35)]">
              Dentist Coral Springs
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...riseTransition, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-8 text-white sm:text-lg"
          >
            If you are looking for dentist near me in your location? then welcome to
            Coral Springs Smiles. We are the best dental service provider in Coral
            Springs community by offering top-quality dental service to you and your
            family, with over 16+ years of experience.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...riseTransition, delay: 0.18 }}
            className="mt-6 flex max-w-lg items-start gap-3 rounded-2xl border-0 bg-white/3 px-4 py-3 text-sm text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1),0_18px_48px_rgba(0,35,52,0.24)]"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" />
            <span>
              Located at 2929 North University Drive Suite 203 Coral Springs, Florida
              33065
            </span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...riseTransition, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.div whileHover={reduceMotion ? undefined : { y: -2 }}>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#contact-us">
                  Make Appointment
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={reduceMotion ? undefined : { y: -2 }}>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#specials">Special Offers</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...riseTransition, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 text-sm text-white sm:flex-row sm:items-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-0 bg-white/3 px-4 py-2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.09)]">
              <div className="flex items-center gap-1 text-brand-light drop-shadow-[0_0_14px_rgba(198,81,42,0.4)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white">
                Trusted by families across Coral Springs
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="relative isolate mx-auto w-full max-w-[560px]"
          data-parallax="soft"
        >
          <div className="pointer-events-none absolute inset-x-[14%] bottom-8 top-10 z-0 rounded-full bg-[rgba(0,174,239,0.22)] blur-[100px]" />
          <div className="pointer-events-none absolute inset-x-[28%] bottom-16 top-20 z-0 rounded-full bg-[rgba(198,81,42,0.12)] blur-[90px]" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative z-10 overflow-hidden rounded-[32px] border-0 bg-[#00aeef]/12 p-5 shadow-[0_30px_120px_rgba(0,174,239,0.22),inset_0_0_0_1px_rgb(255_255_255/0.14)] backdrop-blur-sm"
          >
            <div className="relative overflow-hidden rounded-[26px] border-0 bg-[#007ea8]/22 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.07)] backdrop-blur-sm">
              <Image
                src="/payal-anand.webp"
                alt="Stylized illustration of Dr. Payal Anand in a premium dental clinic."
                width={1120}
                height={1280}
                priority
                className="mx-auto h-auto w-[92%] object-contain"
              />
              <div className="absolute right-4 bottom-4 rounded-full border-0 bg-linear-to-r from-[#006892]/92 via-[#007ea8]/88 to-[#00aeef]/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,61,84,0.35),inset_0_0_0_1px_rgb(255_255_255/0.18)] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[0.7rem]">
                Dr. Payal Anand DDS
              </div>
              <div className="absolute left-4 top-4 rounded-full border-0 bg-linear-to-r from-[#006892]/92 via-[#007ea8]/88 to-[#00aeef]/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,61,84,0.35),inset_0_0_0_1px_rgb(255_255_255/0.18)] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[0.7rem]">
                16+ years
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
