"use client";

import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export type PageBannerProps = {
  /** Optional small line above the title (e.g. tagline). */
  tagline?: string;
  /** Shown as the large hero line (styled in uppercase). */
  title: string;
  /** Current page label in the breadcrumb trail. */
  breadcrumbLabel: string;
  /** Link target for Home in breadcrumbs. */
  homeHref?: string;
  /** Optional image behind the gradient (kept low-contrast). */
  backgroundImageSrc?: string;
  /** Wave separator fill — use e.g. `bg-background` on teal body pages. */
  waveFillClassName?: string;
  /** Override default title typography (defaults to wide uppercase tracking). */
  titleClassName?: string;
  className?: string;
};

function WaveBottom({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      className={cn(
        "relative z-1 -mt-px block h-12 w-full text-white sm:h-14 md:h-16 lg:h-17",
        className,
      )}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,32 C180,6 360,58 540,34 C720,10 900,52 1080,36 C1260,20 1380,40 1440,28 L1440,72 L0,72 Z"
      />
    </svg>
  );
}

export default function PageBanner({
  tagline,
  title,
  breadcrumbLabel,
  homeHref = "/#home",
  backgroundImageSrc = "/images/visit-a-dentist.webp",
  waveFillClassName = "text-white",
  titleClassName,
  className,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden text-white",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            priority
            className="object-cover opacity-[0.14] mix-blend-luminosity"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-br from-[#003d54] via-[#005a78] to-[#007ea8]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgb(0_174_239/0.35),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,rgb(198_81_42/0.12),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 text-center sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
        {tagline ? (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-light sm:text-base">
            {tagline}
          </p>
        ) : null}
        <h1
          className={cn(
            "font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl",
            titleClassName ?? "uppercase tracking-[0.14em]",
            tagline ? "mt-3" : null,
          )}
        >
          {title}
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-white/95 sm:text-base"
        >
          <Link
            href={homeHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Home className="size-4 shrink-0 opacity-90" aria-hidden />
            <span className="uppercase tracking-wide">Home</span>
          </Link>
          <span className="text-white/50" aria-hidden>
            /
          </span>
          <span className="text-brand-light">{breadcrumbLabel}</span>
        </nav>
      </div>

      <WaveBottom className={waveFillClassName} />
    </section>
  );
}
