"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { parseInlineMarkup } from "@/lib/parse-inline-markup";
import { cn } from "@/lib/utils";

export function ContentFaq({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              id={`faq-trigger-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:px-5 sm:py-4"
            >
              <span className="min-w-0 flex-1 pr-2">
                {parseInlineMarkup(item.question)}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-brand transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="border-t border-slate-100 px-4 pb-4 pt-1 text-base leading-relaxed text-slate-600 sm:px-5 sm:pb-5 [&_a]:break-words"
              >
                {parseInlineMarkup(item.answer)}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
