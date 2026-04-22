"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 22,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const offset =
    direction === "left"
      ? { x: -amount, y: 0 }
      : direction === "right"
        ? { x: amount, y: 0 }
        : { x: 0, y: amount };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? {} : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay,
            }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
