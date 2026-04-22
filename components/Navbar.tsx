"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about-us",
    sublinks: [
      { label: "Who We Are", href: "#about-us" },
      { label: "Our Mission", href: "#about-us" },
      { label: "Why Families Choose Us", href: "#about-us" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    sublinks: [
      { label: "Preventive Dentistry", href: "#services" },
      { label: "Restorative Care", href: "#services" },
      { label: "Cosmetic Treatments", href: "#services" },
    ],
  },
  { label: "Specials", href: "#specials" },
  {
    label: "Our Doctor",
    href: "#our-doctor",
    sublinks: [
      { label: "Meet Dr. Lin", href: "#our-doctor" },
      { label: "Credentials", href: "#our-doctor" },
      { label: "Philosophy of Care", href: "#our-doctor" },
    ],
  },
  { label: "Location & Hours", href: "#location-hours" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
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

      <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between px-4">
        <Link
          href="#home"
          className="relative flex items-center gap-3 rounded-2xl p-2 ring-offset-background transition-shadow hover:shadow-[0_0_36px_rgba(0,174,239,0.2),0_0_48px_rgba(198,81,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003d54]"
        >
          <Image src="/logo.webp" alt="Logo" width={100} height={100} />
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
                <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-linear-to-b from-[#004a63]/98 via-[#003f56]/98 to-[#002b3a]/98 p-2 opacity-0 shadow-[0_20px_50px_rgba(0,35,52,0.45)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
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

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-2xl border-0 bg-linear-to-b from-white/8 to-white/2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1),inset_0_1px_0_rgb(255_255_255/0.06)] hover:from-white/12 hover:shadow-[inset_0_0_0_1px_rgb(56_189_248/0.28),inset_0_1px_0_rgb(255_255_255/0.08)]"
          >
            <a href="tel:9542668755" aria-label="Call the clinic">
              <PhoneCall className="size-4 text-brand-light" />
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-2xl border-0 bg-linear-to-b from-white/6 to-transparent shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] hover:from-[rgb(198_81_42/0.12)] hover:shadow-[inset_0_0_0_1px_rgb(198_81_42/0.38)]"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
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
            className="relative overflow-hidden border-t border-white/10 bg-linear-to-b from-[#004a63]/98 via-[#003d54]/98 to-[#002a38]/98 backdrop-blur-2xl lg:hidden"
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
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-white transition-all duration-300 hover:bg-[rgb(198_81_42/0.1)] hover:text-white"
                    >
                      {item.label}
                    </Link>
                    {item.sublinks ? (
                      <div className="mt-1 grid gap-1 pl-3">
                        {item.sublinks.map((sublink) => (
                          <Link
                            key={`${item.label}-${sublink.label}-mobile`}
                            href={sublink.href}
                            onClick={() => setMobileOpen(false)}
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
                  <Link href="#contact-us" onClick={() => setMobileOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full border-0 bg-linear-to-b from-white/12 to-white/5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.11)] hover:shadow-[inset_0_0_0_1px_rgb(56_189_248/0.32)]"
                >
                  <a href="tel:9542668755">
                    <PhoneCall className="size-4 text-brand-light" />
                    (954) 266-8755
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
