import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-brand-light via-brand to-brand-muted text-white shadow-[0_14px_34px_rgba(198,81,42,0.32),0_10px_28px_rgba(158,61,36,0.22)] hover:-translate-y-0.5 hover:from-[#e8896f] hover:via-[#ce5c38] hover:to-[#a63d22] hover:shadow-[0_18px_40px_rgba(223,122,88,0.34),0_12px_34px_rgba(198,81,42,0.28)]",
        outline:
          "border-0 bg-white/[0.02] text-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] hover:-translate-y-0.5 hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgb(198_81_42/0.4),0_12px_30px_rgba(158,61,36,0.16)]",
        ghost: "text-secondary hover:bg-white/[0.04] hover:text-foreground",
        secondary:
          "bg-white/[0.08] text-foreground hover:-translate-y-0.5 hover:bg-white/[0.12]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-[15px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
