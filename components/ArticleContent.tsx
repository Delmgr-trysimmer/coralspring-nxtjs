import type { ServiceContentBlock } from "@/data/service-page-types";
import { ContentFaq } from "@/components/ContentFaq";
import { parseInlineMarkup } from "@/lib/parse-inline-markup";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { AnimateInView } from "@/components/AnimateInView";

export function ArticleContent({ blocks }: { blocks: ServiceContentBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <AnimateInView key={index}>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg [&_a]:break-words">
              {parseInlineMarkup(block.text)}
            </p>
          </AnimateInView>
        );
      case "heading": {
        const className =
          "font-display text-xl font-semibold tracking-tight text-brand sm:text-2xl";
        if (block.level === 3) {
          return (
            <AnimateInView key={index}>
              <h3 className={className}>{parseInlineMarkup(block.text)}</h3>
            </AnimateInView>
          );
        }
        return (
          <AnimateInView key={index}>
            <h2 className={className}>{parseInlineMarkup(block.text)}</h2>
          </AnimateInView>
        );
      }
      case "list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <AnimateInView key={index}>
            <ListTag
              className={cn(
                "list-inside space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg",
                block.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {block.items.map((item, i) => (
                <li key={i} className="marker:text-brand">
                  {parseInlineMarkup(item)}
                </li>
              ))}
            </ListTag>
          </AnimateInView>
        );
      }
      case "faq":
        return (
          <AnimateInView key={index}>
            <ContentFaq items={block.items} />
          </AnimateInView>
        );
      case "image": {
        const layout = block.layout ?? "inline";
        const w = block.width ?? 800;
        const h = block.height ?? 600;
        return (
          <AnimateInView
            key={index}
            className={cn(
              layout === "aside" &&
                "mb-2 w-full lg:float-right lg:mb-4 lg:ml-8 lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)]",
              layout === "inline" && "mx-auto w-full max-w-3xl",
            )}
          >
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <NextImage
                src={block.src}
                alt={block.alt}
                width={w}
                height={h}
                className="h-auto w-full object-contain"
                sizes={
                  layout === "aside"
                    ? "(min-width: 1280px) 26rem, (min-width: 1024px) 22rem, 100vw"
                    : "(min-width: 1024px) 48rem, 100vw"
                }
              />
              {block.caption ? (
                <figcaption className="border-t border-slate-200 px-3 py-2 text-center text-sm text-slate-600">
                  {parseInlineMarkup(block.caption)}
                </figcaption>
              ) : null}
            </figure>
          </AnimateInView>
        );
      }
      default:
        return null;
    }
  });
}
