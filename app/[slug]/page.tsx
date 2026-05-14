import ActiveMembersSection from "@/components/ActiveMembersSection";
import BlogArticleBody from "@/components/BlogArticleBody";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ServicePageBody from "@/components/ServicePageBody";
import { getBlogPostBySlug, getBlogSlugs } from "@/data/blog-posts";
import { getServiceBySlug, getServiceSlugs } from "@/data/service-pages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const dynamicParams = false;

export function generateStaticParams() {
  const service = getServiceSlugs().map((slug) => ({ slug }));
  const blog = getBlogSlugs().map((slug) => ({ slug }));
  const seen = new Set<string>();
  const out: { slug: string }[] = [];
  for (const row of [...service, ...blog]) {
    if (seen.has(row.slug)) {
      throw new Error(`Duplicate [slug] static param: ${row.slug}`);
    }
    seen.add(row.slug);
    out.push(row);
  }
  return out;
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const serviceDoc = getServiceBySlug(slug);
  if (serviceDoc) {
    return {
      title: serviceDoc.meta.title,
      description: serviceDoc.meta.description,
    };
  }
  const blogDoc = getBlogPostBySlug(slug);
  if (blogDoc) {
    return {
      title: blogDoc.meta.title,
      description: blogDoc.meta.description,
    };
  }
  return {};
}

function ServiceCtaSection() {
  return (
    <section
      aria-labelledby="service-slug-cta-heading"
      className="relative isolate mt-16 overflow-hidden py-16 sm:mt-20"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#007ea8] via-[#0090c5] to-[#005a78]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/shap-bg.png"
          alt=""
          fill
          className="object-fill opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(255_255_255/0.12),transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-2 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-light sm:text-sm">
          Get In Touch
        </p>
        <h2
          id="service-slug-cta-heading"
          className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          To schedule your consultation today
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/service">All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default async function UnifiedSlugPage({ params }: PageParams) {
  const { slug } = await params;

  const serviceDoc = getServiceBySlug(slug);
  if (serviceDoc) {
    return (
      <>
        <Navbar />
        <PageBanner
          tagline={serviceDoc.tagline}
          title={serviceDoc.title}
          breadcrumbLabel={serviceDoc.title}
          titleClassName="normal-case tracking-tight"
        />
        <main className="relative z-0 bg-white pb-16">
          <ServicePageBody
            title={serviceDoc.title}
            tagline={serviceDoc.tagline}
            video={serviceDoc.video}
            content={serviceDoc.content}
            breadcrumbLabel={serviceDoc.title}
          />
          <ServiceCtaSection />
          <GoogleMapEmbed />
          <ActiveMembersSection
            wrap="none"
            className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
          />
        </main>
      </>
    );
  }

  const blogDoc = getBlogPostBySlug(slug);
  if (blogDoc) {
    return (
      <>
        <Navbar />
        <PageBanner
          tagline={new Date(blogDoc.publishedAt + "T12:00:00").toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" },
          )}
          title={"BLOG"}
          breadcrumbLabel="Blog"
          titleClassName="normal-case tracking-tight text-balance sm:text-4xl lg:text-5xl"
        />
        <main className="relative z-0 bg-white pb-16 pt-8 sm:pt-10">
          <BlogArticleBody
            title={blogDoc.title}
            publishedAt={blogDoc.publishedAt}
            heroImage={blogDoc.cardImage}
            content={blogDoc.content}
          />
          <ServiceCtaSection />
          <GoogleMapEmbed />
          <ActiveMembersSection
            wrap="none"
            className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
          />
        </main>
      </>
    );
  }

  notFound();
}
