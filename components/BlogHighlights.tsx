import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const blogPosts = [
  {
    title: "How to Fix Crooked Teeth Without Braces - Invisalign Options in Coral Springs",
    image: "/images/blog-1.jpg",
    excerpt:
      "Learn modern clear aligner options that straighten teeth discreetly and comfortably, plus how to know if Invisalign is right for your smile.",
    href: "/blog",
  },
  {
    title: "Apicoectomy in Coral Springs: When You Need This Advanced Root-End Surgery",
    image: "/images/blog-2.jpg",
    excerpt:
      "Understand when an apicoectomy is recommended, how the treatment works, and what recovery looks like after this precision procedure.",
    href: "/blog",
  },
  {
    title: "How to Fix Missing Teeth Permanently: Dental Implants in Coral Springs",
    image: "/images/blog-3.jpg",
    excerpt:
      "Explore implant benefits, candidacy, and what to expect from consultation to restoration for long-term confidence and oral function.",
    href: "/blog",
  },
];

export default function BlogHighlights() {
  return (
    <section className="border-y border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_58%,#f7fbfe_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Read Our Blog"
            title="Helpful Dental Tips and Insights"
            description="Expert guidance from our team to help you protect your smile, understand treatment options, and make confident oral health decisions."
            align="center"
            className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={0.06 * index}>
              <article className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_34px_rgba(2,44,64,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,122,168,0.14)]">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={280}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-18 bg-linear-to-t from-black/35 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007ea8]">
                    Coral Springs Smiles
                  </p>
                  <h3
                    className="text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 line-clamp-3"
                   
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-base leading-7 text-slate-700 line-clamp-4"
                    
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#007ea8] transition-colors hover:text-brand"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
