import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-5xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="inline-block bg-linear-to-r from-accent-light via-highlight to-brand-light bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-4xl text-base leading-8 text-secondary sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
