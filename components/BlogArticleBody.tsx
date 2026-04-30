import { ArticleContent } from "@/components/ArticleContent";
import { AnimateInView } from "@/components/AnimateInView";
import type { ServiceContentBlock } from "@/data/service-page-types";
import NextImage from "next/image";
import Link from "next/link";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.384 1.079 2.126 1.384.775.294 1.561.478 2.913.558 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.385 1.384-2.126.296-.765.478-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.914-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.478-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.846.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.378.895s.678.816.895 1.378c.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.847s-.015 3.585-.074 4.846c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.816.671-1.379.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.818-.9-1.379-.165-.42-.359-1.065-.42-2.236-.057-1.266-.07-1.646-.07-4.859 0-3.204.013-3.586.07-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.07 4.859-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.804-10.245a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const authorSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/CoralSpringSmilesDentistryFlorida", Icon: IconFacebook },
  { label: "Instagram", href: "https://www.instagram.com/cssmiles.pa/", Icon: IconInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@coralspringssmiles", Icon: IconYoutube },
] as const;

function formatBlogDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogAuthorBio() {
  return (
    <AnimateInView delay={120}>
      <section
        aria-labelledby="blog-author-bio-heading"
        className="mt-14 overflow-hidden border border-slate-200 bg-slate-50 px-5 py-8 shadow-sm sm:mt-16 sm:px-8 lg:px-10"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(180px,260px)_minmax(0,1fr)] md:items-center lg:gap-12">
          <div className="mx-auto w-full max-w-[240px] md:max-w-none">
            <NextImage
              src="/payal-anand.webp"
              alt="Dr. Payal Anand"
              width={480}
              height={580}
              className="h-auto w-full object-contain object-bottom"
            />
          </div>

          <div className="text-center md:text-left">
            <h2
              id="blog-author-bio-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#005a78] sm:text-3xl"
            >
              Dr. Payal Anand
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Hi, I&apos;m <strong>Dr. Payal Anand</strong>, a dentist with
                over 16 years of experience. I&apos;ve written this article to
                help patients like you find clear and reliable information
                about dental care.
              </p>
              <p>
                I hold a Doctor of Dental Surgery (DDS) degree and specialize in
                treatments like Cosmetic Dentistry, Invisalign, Dental Implants,
                and laser gum therapy (LANAP&reg;). My goal is to provide the
                best dental care and guide you with proper dental insights and
                helpful tips, so you can make the best choices for your dental
                health.
              </p>
            </div>

            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              {authorSocialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-md bg-[#005a78] text-white shadow-sm transition-colors hover:bg-[#004a63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimateInView>
  );
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

      <BlogAuthorBio />
    </div>
  );
}
