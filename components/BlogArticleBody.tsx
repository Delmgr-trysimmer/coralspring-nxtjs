import { ArticleContent } from "@/components/ArticleContent";
import { AnimateInView } from "@/components/AnimateInView";
import type { ServiceContentBlock } from "@/data/service-page-types";
import NextImage from "next/image";

function formatBlogDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogArticleBody({
  title,
  publishedAt,
  heroImage,
  content,
}: {
  title: string;
  publishedAt: string;
  heroImage: { src: string; alt: string };
  content: ServiceContentBlock[];
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <AnimateInView>
        <header className="mb-10 text-center sm:mb-12">
          <time
            dateTime={publishedAt}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-brand sm:text-base"
          >
            {formatBlogDate(publishedAt)}
          </time>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
        </header>
      </AnimateInView>

      <AnimateInView delay={100}>
        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:mb-12">
          <NextImage
            src={heroImage.src}
            alt={heroImage.alt}
            width={800}
            height={600}
            className="object-cover w-full h-auto aspect-video"
            priority
          />
        </div>
      </AnimateInView>

      <article className="flow-root space-y-6">
        <ArticleContent blocks={content} />
      </article>
    </div>
  );
}
