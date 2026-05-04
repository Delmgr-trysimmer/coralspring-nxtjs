"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Reveal } from "@/components/motion/Reveal";

const testimonials = [
  {
    name: "Helen Maldonado",
    source: "Google",
    avatar: "/images/blog-1.jpg",
    quote:
      "Excellent Staff, great beautiful location. Lismary did my routine dental cleaning & did a superb job removing my plaque etc. The Dr is a sweetheart & very professional & knowledgeable. Love this clinic.",
  },
  {
    name: "Noemi Castro",
    source: "Google",
    avatar: "/images/blog-2.jpg",
    quote:
      "It's an office with an outstanding team of professionals. From the doctor to her assistants and secretaries, they treat you like family, and their work is excellent. They are truly special people. If you go, you won't regret it; they will do an exceptional job.",
  },
  {
    name: "Kay “Kay” Smith",
    source: "Google",
    avatar: "/images/blog-3.jpg",
    quote:
      "My mom always have good experience when she goes",
  },
  {
    name: "Leford Hunt",
    source: "Google",
    avatar: "/images/blog-3.jpg",
    quote:
      "I had my dental work done including periodontal surgery, dental implants and crown and bridge work. It all came out very nice. I like her very much and are very professional. Her work is excellent. Everyone is super nice including Nicole. I highly recommend coming to coral springs smiles and come check it out.",
  },
  {
    name: "Vera Roundtree",
    source: "Google",
    avatar: "/images/blog-3.jpg",
    quote:
      "Had implants done four actually and they are excellent!! I highly recommend Dr Anand! she did such a great job! Thank you very, very much! Go and check her out!",
  },
  {
    name: "Herb Drake",
    source: "Google",
    avatar: "/images/blog-3.jpg",
    quote:
      "i like coming here all the times. Amazing service. I had my extraction and crowns done. all good, no pain. i give my thumbs up and highly recommend this place.",
  },
  {
    name: "Wisney Jean",
    source: "Google",
    avatar: "/images/blog-3.jpg",
    quote:
      "I had a great experience coming here at this office. The dr is very good, gentle and I had my emergency extractions done at a great price. The staff is great as well. They explained everything to me before starting the procedure and answered all my questions. I highly recommend this place.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="success-stories"
      className="relative overflow-hidden border-y border-white/10 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#004c73]/94 via-[#026ca6]/90 to-[#0086cc]/88" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xl font-semibold text-brand-light sm:text-2xl">
            Our Happy Patients
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Hear the Inspiring Stories of Coral Spring Smiles Patients
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-12">
            <div className="pointer-events-none absolute bottom-4 right-0 z-10 hidden items-center gap-3 sm:flex">
              <button
                type="button"
                aria-label="Previous testimonials"
                className="testimonials-prev pointer-events-auto inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_10px_28px_rgba(0,35,52,0.26)] transition-colors hover:bg-white/20"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                className="testimonials-next pointer-events-auto inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_10px_28px_rgba(0,35,52,0.26)] transition-colors hover:bg-white/20"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              navigation={{
                prevEl: ".testimonials-prev",
                nextEl: ".testimonials-next",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4200, disableOnInteraction: false }}
              slidesPerView={1}
              className="[&_.swiper-pagination]:mt-10! [&_.swiper-pagination-bullet]:bg-white/35! [&_.swiper-pagination-bullet-active]:bg-white!"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={`${item.name}-${index}`} className="pb-14">
                  <article className="mx-auto max-w-5xl rounded-4xl border border-white/12 bg-linear-to-br from-[#005e94]/45 to-[#0076b9]/28 px-7 py-10 shadow-[0_26px_60px_rgba(0,30,45,0.32)] backdrop-blur-sm sm:px-10 sm:py-12">
                    <div className="flex items-start gap-5">
                      <div className="rounded-2xl bg-white/8 p-3">
                        <Quote className="size-10 text-[#00aeef]" />
                      </div>
                      <p className="mt-1 flex-1 text-2xl leading-tight font-semibold text-white">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative size-14 overflow-hidden rounded-full border-2 border-white/30">
                        <Image
                          src={item.avatar}
                          alt={`${item.name} testimonial`}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-brand-light">
                          {item.name}
                        </p>
                        <p className="text-sm text-white/80">{item.source}</p>
                      </div>
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
