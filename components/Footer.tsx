import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.384 1.079 2.126 1.384.775.294 1.561.478 2.913.558 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.385 1.384-2.126.296-.765.478-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.914-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.478-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.846.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.378.895s.678.816.895 1.378c.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.847s-.015 3.585-.074 4.846c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.816.671-1.379.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.818-.9-1.379-.165-.42-.359-1.065-.42-2.236-.057-1.266-.07-1.646-.07-4.859 0-3.204.013-3.586.07-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.07 4.859-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.804-10.245a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const quickLinks = [
  { label: "About Us", href: "#about-us" },
  { label: "Specials", href: "#specials" },
  { label: "Our Doctor", href: "#our-doctor" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Review Us", href: "/review-us" },
  { label: "Financing", href: "/financing" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Blog", href: "/blog" },
] as const;

const serviceLinks = [
  { label: "Dental Implants", href: "/service" },
  { label: "Cosmetic Dentistry", href: "/service" },
  { label: "Invisalign", href: "/service" },
  { label: "Teeth Whitening", href: "/service" },
  { label: "Emergency Appointment", href: "/service" },
  { label: "Root Canal Treatment", href: "/service" },
  { label: "Orthodontics", href: "/service" },
  { label: "Crowns & Bridges", href: "/service" },
  { label: "Periodontics", href: "/service" },
  { label: "Laser Dentistry", href: "/service" },
  { label: "Dermal Fillers", href: "/service" },
  { label: "Botox® Cosmetics", href: "/service" },
] as const;

const social = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: IconFacebook },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: IconInstagram },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: IconYoutube },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10">
          {/* Brand + address */}
          <div className="max-w-sm">
            <Link href="#home" className="inline-block">
              <Image src="/logo.png" alt="Coral Springs Smiles" width={200} height={72} className="h-auto w-[min(100%,220px)]" />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              2929 North University Drive Suite 203, Coral Springs, Florida 33065
            </p>
            <Link
              href="/dental-warranty"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1a2e3d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243d52]"
            >
              Our Dental Warranty
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-muted"
                  >
                    <ChevronRight className="size-3.5 shrink-0 text-brand" aria-hidden />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Our Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-muted"
                  >
                    <ChevronRight className="size-3.5 shrink-0 text-brand" aria-hidden />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + phone + social */}
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <Link
              href="https://ib4.me/d6lF-HX"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a2e3d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243d52]"
            >
              <Calendar className="size-4 shrink-0" aria-hidden />
              Book Appointment
            </Link>
            <p className="mt-6 text-sm text-slate-600">
              Phone:{" "}
              <a href="tel:9542668755" className="font-semibold text-brand hover:text-brand-muted">
                (954) 266-8755
              </a>
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-[#1a2e3d] text-white transition-colors hover:bg-[#243d52]"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-600 sm:text-left">
            © {new Date().getFullYear()} coralspringssmiles.com All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
