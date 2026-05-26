import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/data/blog-posts";
import { getServiceSlugs } from "@/data/service-pages";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://coralspringsmiles.com"
).replace(/\/$/, "");

const staticRoutes = [
  "/about-us",
  "/blog",
  "/contact-us",
  "/dental-insurance-coral-springs",
  "/dental-warranty",
  "/dentist-in-coconut-creek",
  "/dentist-in-parkland",
  "/dentist-in-tamarac",
  "/financing",
  "/invisalign-dentist-near-me",
  "/meet-the-team",
  "/office-hours",
  "/our-doctor",
  "/patient-gallery",
  "/periodontist-coral-springs",
  "/periodontist-in-coral-springs",
  "/privacy-policy",
  "/review-us",
  "/service",
  "/sitemap",
  "/smile-gallery",
  "/specials",
  "/testimonials",
  "/tour-our-office",
  "/your-first-visit",
];

function toPath(slug: string) {
  return `/${slug.replace(/^\/+|\/+$/g, "")}`;
}

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${path}`,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...getServiceSlugs().map(toPath),
    ...getBlogSlugs().map(toPath),
  ];

  const uniqueRoutes = Array.from(new Set(routes)).sort();

  return [entry("/", 1.0), ...uniqueRoutes.map((route) => entry(route, 0.8))];
}
