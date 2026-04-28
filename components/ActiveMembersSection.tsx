import Image from "next/image";
import { cn } from "@/lib/utils";

const BADGES_ALT =
  "Active members badges including ADA, Florida Dental Association, and Academy of General Dentistry";

export type ActiveMembersSectionProps = {
  className?: string;
  /**
   * `card` — muted slate panel (default).
   * `cta-card` — white elevated card on the teal CTA section.
   * `none` — content row only; use `className` for spacing or borders (e.g. tour page).
   */
  wrap?: "card" | "cta-card" | "none";
};

const wrapClass: Record<NonNullable<ActiveMembersSectionProps["wrap"]>, string> =
  {
    card: "rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-6 sm:px-8 sm:py-8",
    "cta-card":
      "rounded-[26px] border border-white/14 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,35,52,0.22)] sm:px-6",
    none: "",
  };

export default function ActiveMembersSection({
  className,
  wrap = "card",
}: ActiveMembersSectionProps) {
  return (
    <div className={cn(wrapClass[wrap], className, "max-w-5xl mx-auto")}>
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-center text-base font-semibold text-slate-900 sm:text-left sm:text-lg">
          Active members of:
        </p>
        <Image
          src="/images/active-members.webp"
          alt={BADGES_ALT}
          width={900}
          height={180}
          className={cn(
            "h-auto w-full max-w-[620px] object-contain",
            wrap !== "cta-card" && "mx-auto sm:mx-0",
          )}
        />
      </div>
    </div>
  );
}
