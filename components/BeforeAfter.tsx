"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const smileResults = [
  { image: "/images/before-after-1.jpg", alt: "Before and after smile makeover case one" },
  { image: "/images/before-after-2.jpg", alt: "Before and after smile makeover case two" },
  { image: "/images/before-after-3.jpg", alt: "Before and after smile makeover case three" },
  { image: "/images/before-after-1.jpg", alt: "Before and after smile makeover case one" },
  { image: "/images/before-after-2.jpg", alt: "Before and after smile makeover case two" },
  { image: "/images/before-after-3.jpg", alt: "Before and after smile makeover case three" },
];

export default function BeforeAfter() {
  return (
    <section
      id="success-stories"
      className="scroll-mt-28 border-y border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fcfeff_62%,#f8fbfe_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Smile Makeover Results"
            title="See Our Patient's Smile Transformation"
            description="Explore real before and after cases from our patients. Slide through to see the improvements delivered by our cosmetic and restorative dental treatments."
            align="center"
            className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10">
            <div className="pointer-events-none absolute -top-14 right-0 z-10 hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous before and after slide"
                className="before-after-prev pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#007ea8] shadow-[0_8px_20px_rgba(0,61,84,0.12)] transition-colors hover:bg-sky-50 cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next before and after slide"
                className="before-after-next pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#007ea8] shadow-[0_8px_20px_rgba(0,61,84,0.12)] transition-colors hover:bg-sky-50 cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation={{
                prevEl: ".before-after-prev",
                nextEl: ".before-after-next",
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="[&_.swiper-pagination]:mt-6! [&_.swiper-pagination-bullet]:bg-[#007ea8]/35! [&_.swiper-pagination-bullet-active]:bg-[#007ea8]!"
            >
              {smileResults.map((result, i) => (
                <SwiperSlide key={i} className="pb-10">
                  <article className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-[0_12px_36px_rgba(0,61,84,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,122,168,0.16)]">
                    <div className="relative overflow-hidden rounded-[20px]">
                      <Image
                        src={result.image}
                        alt={result.alt}
                        width={1200}
                        height={900}
                        className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white">
                        Before
                      </span>
                      <span className="absolute left-3 bottom-3 rounded-full bg-[#007ea8]/90 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white">
                        After
                      </span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
