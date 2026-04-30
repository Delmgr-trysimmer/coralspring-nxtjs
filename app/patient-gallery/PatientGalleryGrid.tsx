"use client";

import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";

type PatientGalleryGridProps = {
  images: readonly string[];
};

export default function PatientGalleryGrid({
  images,
}: PatientGalleryGridProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <li key={src} className="h-full">
            <Reveal delay={index * 0.07} className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                <Image
                  src={src}
                  alt={`Patient gallery photo ${index + 1} of ${images.length} at Coral Springs Smiles`}
                  width={1200}
                  height={800}
                  className="aspect-3/2 h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                  priority={index < 3}
                />
                <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-white/90 p-1 shadow-sm ring-1 ring-black/5">
                  <Image
                    src="/logo.webp"
                    alt=""
                    width={72}
                    height={24}
                    className="h-5 w-auto object-contain object-left"
                  />
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
