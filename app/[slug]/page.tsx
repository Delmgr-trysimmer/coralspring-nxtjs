import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ServicePageBody from "@/components/ServicePageBody";
import { getServiceBySlug, getServiceSlugs } from "@/data/service-pages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const doc = getServiceBySlug(slug);
  if (!doc) {
    return {};
  }
  return {
    title: doc.meta.title,
    description: doc.meta.description,
  };
}

export default async function ServiceSlugPage({ params }: PageParams) {
  const { slug } = await params;
  const doc = getServiceBySlug(slug);
  if (!doc) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageBanner
        tagline={doc.tagline}
        title={doc.title}
        breadcrumbLabel={doc.breadcrumbLabel ?? doc.title}
        titleClassName="normal-case tracking-tight"
      />
      <main className="relative z-0 bg-white pb-16">
        <ServicePageBody
          title={doc.title}
          video={doc.video}
          content={doc.content}
          breadcrumbLabel={doc.breadcrumbLabel ?? doc.title}
        />

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

        <GoogleMapEmbed />

        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
