import type {
  ServiceContentBlock,
  ServiceVideo as ServiceVideoConfig,
} from "@/data/service-pages";
import { parseInlineMarkup } from "@/lib/parse-inline-markup";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

function ServiceVideo({
  video,
  title,
}: {
  video: ServiceVideoConfig;
  title: string;
}) {
  if (video.kind === "youtube") {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
        <div className="relative aspect-video w-full">
          <iframe
            title={`${title} — video`}
            src={`https://www.youtube.com/embed/${video.videoId}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (video.kind === "gif") {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
        <NextImage
          src={video.src}
          alt={video.alt || title}
          width={640}
          height={360}
          unoptimized
          className="aspect-video w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={video.poster}
        className="aspect-video w-full object-cover"
        aria-label={`Video: ${title}`}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
}

function ContentBlocks({ blocks }: { blocks: ServiceContentBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="text-base leading-relaxed text-slate-700 sm:text-lg [&_a]:break-words"
          >
            {parseInlineMarkup(block.text)}
          </p>
        );
      case "heading": {
        const className =
          "font-display text-xl font-semibold tracking-tight text-brand sm:text-2xl";
        if (block.level === 3) {
          return (
            <h3 key={index} className={className}>
              {parseInlineMarkup(block.text)}
            </h3>
          );
        }
        return (
          <h2 key={index} className={className}>
            {parseInlineMarkup(block.text)}
          </h2>
        );
      }
      case "list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag
            key={index}
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
        );
      }
      case "image": {
        const layout = block.layout ?? "inline";
        const w = block.width ?? 800;
        const h = block.height ?? 600;
        return (
          <figure
            key={index}
            className={cn(
              "overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm",
              layout === "aside" &&
                "mb-2 w-full lg:float-right lg:mb-4 lg:ml-8 lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)]",
              layout === "inline" && "mx-auto w-full max-w-3xl",
            )}
          >
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
        );
      }
      default:
        return null;
    }
  });
}

export default function ServicePageBody({
  title,
  breadcrumbLabel,
  video,
  content,
}: {
  title: string;
  video?: ServiceVideoConfig;
  content: ServiceContentBlock[];
  breadcrumbLabel: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand sm:text-base">
          Have A Perfect Smile!
        </p>
        <p className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-2xl lg:text-3xl">
          {breadcrumbLabel} in Coral Springs
        </p>
      </header>
      <article className="flow-root space-y-6">
        {video ? (
          <div
            className={cn(
              "mb-2 w-full lg:float-right lg:mb-4 lg:ml-8 lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)]",
            )}
          >
            {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Watch
            </p> */}
            <ServiceVideo video={video} title={title} />
          </div>
        ) : null}

        <ContentBlocks blocks={content} />
      </article>
    </div>
  );
}
