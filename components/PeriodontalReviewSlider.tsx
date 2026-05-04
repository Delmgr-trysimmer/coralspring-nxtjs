"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    name: "GLEN",
    quote:
      "Im very happy with my kids teeth after taking off the braces. They look all white and perfect now. Thank you DrAnand.",
  },
  {
    name: "BRUCE",
    quote:
      "I found the entire staff to be friendly and professional and will let Coral Springs Smiles take care of all my family's dental needs.",
  },
  {
    name: "MARTHA",
    quote:
      "Excellent dental office with caring staff, smooth appointments, and thoughtful treatment recommendations. The entire experience felt easy and comfortable.",
  },
  {
    name: "DANIEL",
    quote:
      "From consultation to treatment, Dr. Payal Anand and her team were attentive, patient, and genuinely invested in my long-term dental health.",
  },
];

export default function PeriodontalReviewSlider() {
  return (
    <div className="mx-auto max-w-2xl">
      <Quote className="mx-auto h-7 w-7 fill-white/25 text-white/25" />
      <h2 className="mt-7 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Patient Testimonials &amp; Success Stories
      </h2>

      <div className="relative mt-12 px-10">
        <button
          type="button"
          className="periodontal-review-prev absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          navigation={{
            prevEl: ".periodontal-review-prev",
            nextEl: ".periodontal-review-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          className="min-h-48 pb-12 [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination-bullet]:h-2! [&_.swiper-pagination-bullet]:w-2! [&_.swiper-pagination-bullet]:bg-white/35! [&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet-active]:w-5! [&_.swiper-pagination-bullet-active]:rounded-full! [&_.swiper-pagination-bullet-active]:bg-white!"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <blockquote className="text-base italic leading-relaxed text-white/90 sm:text-lg">
                &quot;{review.quote}&quot;
              </blockquote>
              <p className="mt-6 text-base font-bold italic tracking-wide text-white">
                - {review.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="periodontal-review-next absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
