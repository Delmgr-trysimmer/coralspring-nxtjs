import { ArticleContent } from "@/components/ArticleContent";
import { AnimateInView } from "@/components/AnimateInView";
import type {
  ServiceContentBlock,
  ServiceVideo as ServiceVideoConfig,
} from "@/data/service-pages";
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
      <AnimateInView>
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand sm:text-base">
            Have A Perfect Smile!
          </p>
          <p className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-2xl lg:text-3xl">
            {breadcrumbLabel} in Coral Springs
          </p>
        </header>
      </AnimateInView>
      <article className="flow-root space-y-6">
        {video ? (
          <AnimateInView
            className={cn(
              "mb-2 w-full lg:float-right lg:mb-4 lg:ml-8 lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)]",
            )}
            delay={100}
          >
            {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Watch
            </p> */}
            <ServiceVideo video={video} title={title} />
          </AnimateInView>
        ) : null}

        <ArticleContent blocks={content} />
      </article>
    </div>
  );
}
