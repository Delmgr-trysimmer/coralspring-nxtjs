import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
  {
    variants: {
      variant: {
        default:
          "border border-white/12 bg-linear-to-br from-accent/14 to-brand/14 text-accent-light shadow-[0_10px_28px_rgba(14,165,233,0.12),0_8px_22px_rgba(198,81,42,0.12)]",
        outline:
          "border-0 bg-white/[0.03] text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.11),0_10px_28px_rgb(0_35_52/0.18)]",
        subtle: "border-border bg-card text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
