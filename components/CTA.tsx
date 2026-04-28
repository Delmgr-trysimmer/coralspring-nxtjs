import { Clock3, MapPin, PhoneCall } from "lucide-react";
import ActiveMembersSection from "@/components/ActiveMembersSection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const detailCards = [
  {
    icon: MapPin,
    title: "Location",
    description:
      "Serving Coral Springs, Florida with a modern, comfort-focused dental studio experience.",
  },
  {
    icon: Clock3,
    title: "Hours",
    description:
      "Appointments available Monday through Friday, with same-day urgent care when possible.",
  },
  {
    icon: PhoneCall,
    title: "Contact",
    description:
      "Call (954) 266-8755 to reserve a visit for implants, cosmetic care, or routine dentistry.",
  },
];

export default function CTA() {
  return (
    <section
      id="contact-us"
      className="scroll-mt-28 border-t border-white/10 bg-[linear-gradient(180deg,#005f82_0%,#00506f_55%,#00445f_100%)] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(145deg,rgba(0,122,168,0.32),rgba(0,90,120,0.4),rgba(0,74,99,0.5))] px-6 py-10 shadow-[0_28px_100px_rgba(0,35,52,0.28)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16">
            <div className="absolute left-1/2 top-0 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[rgba(0,174,239,0.2)] blur-[100px]" />
            <div className="absolute right-0 bottom-0 -z-10 h-48 w-48 translate-x-1/4 translate-y-1/4 rounded-full bg-[rgba(198,81,42,0.12)] blur-[90px]" />
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(0,174,239,0.08),transparent_35%,rgba(198,81,42,0.05),transparent_60%,rgba(0,174,239,0.06))]" />

            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-block bg-linear-to-r from-accent-light via-highlight to-brand-light bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
                Reserve Your Visit
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
                Book Your Appointment Today
              </h2>
              <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
                Reserve a visit for implants, whitening, cosmetic upgrades, or
                ongoing family care in a calm boutique setting designed to make
                every appointment feel more reassuring.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="tel:9542668755">Book Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:9542668755">Call (954) 266-8755</a>
                </Button>
              </div>
            </div>

            <div
              id="location-hours"
              className="mt-10 grid scroll-mt-28 gap-4 md:grid-cols-3"
            >
              {detailCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-accent/12 to-brand/10 text-accent-light">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/85">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <ActiveMembersSection wrap="cta-card" className="mt-8" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
