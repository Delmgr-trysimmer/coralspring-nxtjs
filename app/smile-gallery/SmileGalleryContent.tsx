"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

type SmileGalleryContentProps = {
  images: readonly string[];
  children: ReactNode;
};

export default function SmileGalleryContent({
  images,
  children,
}: SmileGalleryContentProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => {
            const isLast = index === images.length - 1;
            return (
              <li
                key={src}
                className={cn(
                  isLast &&
                    "sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:col-start-2 lg:max-w-none",
                )}
              >
                <Reveal delay={index * 0.07} className="h-full">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                    <Image
                      src={src}
                      alt={`Smile transformation gallery photo ${index + 1} of ${images.length}`}
                      width={1080}
                      height={1080}
                      className="aspect-square h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                      priority={index < 3}
                    />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      <Reveal delay={0.12} className="block">
        {children}
      </Reveal>
    </>
  );
}
