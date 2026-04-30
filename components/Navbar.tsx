"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenisRef } from "@/components/providers/SmoothScrollProvider";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
  sublinks?: Array<{
    label: string;
    href: string;
  }>;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    sublinks: [
      { label: "Tour Our Office", href: "/tour-our-office" },

    ],
  },
  {
    label: "Services",
    href: "/service",
    sublinks: [
      { label: "Your First Visit", href: "/your-first-visit" },
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Crowns & Bridges", href: "/crowns" },
      { label: "Dental Implant", href: "/dental-implant" },
      { label: "Root Canal Treatment", href: "/endodontics" },
      { label: "Orthodontics", href: "/orthodontics" },
      { label: "Tooth Extraction", href: "/tooth-extraction" },
      { label: "Teeth Whitening", href: "/teeth-whitening" },
      { label: "Invisalign", href: "/invisalign" },
      { label: "Dermal Fillers", href: "/dermal-fillers-coral-springs" },
      { label: "Botox® Cosmetics", href: "/botox-coral-springs" },
      { label: "Pediatric Dentistry", href: "/kids-dentist" },
      { label: "Veneers", href: "/veneers" },
      { label: "Periodontics", href: "/periodontics" },
      { label: "Gum Disease Treatment", href: "/gum-disease-treatment" },
      { label: "Deep Cleaning", href: "/deep-cleaning" },
      { label: "Scaling & Root Planing", href: "/scaling-root-planing" },
      { label: "Peri-Implantitis", href: "/peri-implantitis" },
      { label: "Emergency Appointment", href: "/emergency-dentist-coral-springs" },
      { label: "Laser Dentistry", href: "/laser-dentistry" },
      { label: "LANAP Gum Treatment", href: "/lanap" },
      { label: "PIPS", href: "/pips" },
      { label: "Periodontist", href: "/periodontist" },
    ],
  },
  {
    label: "Specials",
    href: "/specials",
    sublinks: [
      { label: "Dental Insurance", href: "/dental-insurance-coral-springs" },
    ],
  },
  {
    label: "Our Doctor",
    href: "/our-doctor",
    sublinks: [
      { label: "Meet the Team", href: "/meet-the-team" },
    ],
  },
  { label: "Location & Hours", href: "/office-hours" },
  { label: "Blog", href: "/blog" },
  {
    label: "Success Stories", href: "/testimonials", sublinks: [
      { label: "Smile Gallery", href: "/smile-gallery" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Patient Gallery", href: "/patient-gallery" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lenisCtx = useLenisRef();

  useEffect(() => {
    if (!mobileOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const lenis = lenisCtx?.lenisRef.current;
    lenis?.stop();
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      lenis?.start();
    };
  }, [mobileOpen, lenisCtx]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMobileItems({});
  };

  const toggleMobileMenu = () => {
    setMobileOpen((open) => {
      const nextOpen = !open;
      if (!nextOpen) {
        setExpandedMobileItems({});
      }
      return nextOpen;
    });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        mobileOpen &&
          "max-lg:flex max-lg:max-h-dvh max-lg:flex-col max-lg:overflow-hidden",
        scrolled
          ? "border-b border-white/[0.07] bg-linear-to-b from-[#003d54]/94 via-[#004f6a]/90 to-[#003545]/92 shadow-[0_24px_80px_rgba(0,35,52,0.45),0_0_60px_rgba(0,174,239,0.14),0_0_72px_rgba(198,81,42,0.11)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-linear-to-b from-[#003d54]/52 via-[#004a63]/18 to-transparent",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-sky-500/8 via-[rgb(198_81_42/0.08)] to-transparent opacity-0 transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-60",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(198,81,42,0.4),rgba(56,189,248,0.5),transparent)] transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-40",
        )}
        aria-hidden
      />

      <nav
        className={cn(
          "relative mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-2.5 max-lg:min-h-14",
          mobileOpen && "max-lg:shrink-0",
        )}
      >
        <Link
          href="#home"
          className="relative flex shrink-0 items-center justify-center rounded-2xl px-2 py-1 ring-offset-background transition-shadow hover:shadow-[0_0_36px_rgba(0,174,239,0.2),0_0_48px_rgba(198,81,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003d54]"
        >
          <Image
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="block h-11 w-auto max-w-21 object-contain object-center sm:h-12 sm:max-w-24 lg:size-[70px] xl:size-[100px]"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="relative flex items-center gap-1 text-sm font-medium text-white transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                {item.sublinks ? (
                  <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                ) : null}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-linear-to-r from-accent via-brand-light to-highlight opacity-95 shadow-[0_0_14px_rgba(198,81,42,0.42),0_0_10px_rgba(56,189,248,0.35)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>

              {item.sublinks ? (
                <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-60 max-h-[min(70vh,26rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-[#004a63]/98 via-[#003f56]/98 to-[#002b3a]/98 p-2 opacity-0 shadow-[0_20px_50px_rgba(0,35,52,0.45)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div
                    data-lenis-prevent-wheel
                    className="max-h-[min(calc(70vh-1rem),25rem)] touch-pan-y overflow-y-auto overscroll-contain pr-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
                    onWheel={(e) => e.stopPropagation()}
                  >
                    {item.sublinks.map((sublink) => (
                      <Link
                        key={`${item.label}-${sublink.label}`}
                        href={sublink.href}
                        className="block rounded-xl px-3 py-2 text-sm text-white/90 transition-all duration-200 hover:bg-white/8 hover:text-white"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            asChild
            size="default"
            className="ml-2 bg-linear-to-r from-brand-light via-brand to-brand-muted text-white shadow-[0_14px_40px_rgba(198,81,42,0.32),0_10px_34px_rgba(158,61,36,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#e8896f] hover:via-[#ce5c38] hover:to-[#a63d22] hover:shadow-[0_18px_48px_rgba(223,122,88,0.34),0_12px_40px_rgba(198,81,42,0.28)]"
          >
            <Link href="#contact-us">Book Appointment</Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="default"
            className="ml-1 border-0 bg-linear-to-b from-white/14 to-white/6 text-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.13),inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:from-white/18 hover:to-white/8 hover:shadow-[inset_0_0_0_1px_rgb(56_189_248/0.35),0_12px_32px_rgba(14,165,233,0.12),0_8px_28px_rgba(198,81,42,0.12)]"
          >
            <a href="tel:9542668755">
              <PhoneCall className="size-4 text-brand-light" />
              (954) 266-8755
            </a>
          </Button>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2.5 lg:hidden">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-11 rounded-2xl border-0 bg-linear-to-b from-white/8 to-white/2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1),inset_0_1px_0_rgb(255_255_255/0.06)] hover:from-white/12 hover:shadow-[inset_0_0_0_1px_rgb(56_189_248/0.28),inset_0_1px_0_rgb(255_255_255/0.08)]"
          >
            <a href="tel:9542668755" aria-label="Call the clinic">
              <PhoneCall className="size-5 text-brand-light" />
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={toggleMobileMenu}
            className="size-11 rounded-2xl border-0 bg-linear-to-b from-white/6 to-transparent shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] hover:from-[rgb(198_81_42/0.12)] hover:shadow-[inset_0_0_0_1px_rgb(198_81_42/0.38)]"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
            className="relative flex-1 min-h-0 touch-pan-y overflow-y-auto overscroll-contain border-t border-white/10 bg-linear-to-b from-[#004a63]/98 via-[#003d54]/98 to-[#002a38]/98 backdrop-blur-2xl lg:hidden"
            onWheel={(e) => e.stopPropagation()}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-linear-to-br from-sky-500/18 via-[rgb(198_81_42/0.14)] to-cyan-500/8 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-16 bottom-0 size-48 rounded-full bg-linear-to-tr from-brand/18 to-accent/10 blur-2xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <div key={item.label} className="rounded-2xl border-0 bg-linear-to-r from-white/4 via-white/2 to-transparent p-1 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block flex-1 rounded-xl px-3 py-2 text-sm text-white transition-all duration-300 hover:bg-[rgb(198_81_42/0.1)] hover:text-white"
                      >
                        {item.label}
                      </Link>
                      {item.sublinks ? (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} sublinks`}
                          aria-expanded={Boolean(expandedMobileItems[item.label])}
                          onClick={() =>
                            setExpandedMobileItems((prev) => ({
                              ...prev,
                              [item.label]: !prev[item.label],
                            }))
                          }
                          className="mr-1 inline-flex size-8 items-center justify-center rounded-lg text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200",
                              expandedMobileItems[item.label] ? "rotate-180" : "",
                            )}
                          />
                        </button>
                      ) : null}
                    </div>
                    {item.sublinks ? (
                      <div
                        className={cn(
                          "mt-1 grid gap-1 pl-3 transition-[max-height,opacity] duration-300 ease-out",
                          expandedMobileItems[item.label]
                            ? "max-h-[min(52vh,22rem)] overflow-y-auto overscroll-contain opacity-100 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20"
                            : "max-h-0 overflow-hidden opacity-0",
                        )}
                      >
                        {item.sublinks.map((sublink) => (
                          <Link
                            key={`${item.label}-${sublink.label}-mobile`}
                            href={sublink.href}
                            onClick={closeMobileMenu}
                            className="rounded-lg px-3 py-2 text-xs text-white/80 transition-colors duration-200 hover:bg-white/8 hover:text-white"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full border-none bg-linear-to-r from-brand-light via-brand to-brand-muted text-white shadow-[0_14px_36px_rgba(198,81,42,0.32),0_8px_30px_rgba(158,61,36,0.2)] hover:from-[#e8896f] hover:via-[#ce5c38] hover:to-[#a63d22]"
                >
                  <Link href="#contact-us" onClick={closeMobileMenu}>
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full border-0 bg-linear-to-b from-white/12 to-white/5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.11)] hover:shadow-[inset_0_0_0_1px_rgb(56_189_248/0.32)]"
                >
                  <a
                    href="tel:9542668755"
                    className="inline-flex w-full items-center justify-center gap-3 px-1"
                  >
                    <PhoneCall className="size-5 shrink-0 text-brand-light" />
                    <span className="text-center">(954) 266-8755</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
