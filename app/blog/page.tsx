import ActiveMembersSection from "@/components/ActiveMembersSection";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import PageBanner from "@/components/PageBanner";
import { getAllBlogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coral Springs Smiles | Dental Blog | Latest Dental News & Tips",
  description:
    "Stay up-to-date with our latest dental blogs. Visit the Coral Springs Smiles blog for informative articles on dental care.",
};

function formatBlogDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Navbar />
      <PageBanner
        tagline="Tips & news"
        title="Our Blog"
        breadcrumbLabel="Blog"
        titleClassName="normal-case tracking-tight"
        waveFillClassName="text-white"
      />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical guides on restorative care, surgery, and implants-written
              for patients in Coral Springs and nearby communities.
            </p>
          </header>

          <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {posts.map((post, index) => (
              <li key={post.slug} className="flex">
                <Reveal
                  delay={Math.min(0.08 * index, 0.32)}
                  className="flex w-full min-w-0"
                >
                  <Link
                    href={`/${post.slug}`}
                    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-300 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div className="relative aspect-video shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={post.cardImage.src}
                        alt={post.cardImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col bg-linear-to-b from-white to-slate-50/90 p-5 sm:p-6">
                      <time
                        dateTime={post.publishedAt}
                        className="text-sm font-medium text-brand"
                      >
                        {formatBlogDate(post.publishedAt)}
                      </time>
                      <h2 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-xl transition-colors group-hover:text-brand line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                        Read More
                        <span aria-hidden>»</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <GoogleMapEmbed className="mt-16 px-4 sm:px-6 lg:px-8" />
        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
