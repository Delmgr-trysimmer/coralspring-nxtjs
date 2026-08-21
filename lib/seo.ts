import type { Metadata } from "next";

export const SITE_URL = "https://coralspringsmiles.com";
export const SITE_NAME = "Coral Springs Smiles";
export const DEFAULT_SOCIAL_IMAGE = "/banner.webp";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalPath,
      images: [{ url: image, alt: title }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#dentist`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`,
  telephone: "+1-954-266-8755",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2929 North University Drive, Suite 203",
    addressLocality: "Coral Springs",
    addressRegion: "FL",
    postalCode: "33065",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/CoralSpringSmilesDentistryFlorida/",
    "https://www.instagram.com/cssmiles.pa/",
    "https://www.youtube.com/@coralspringssmiles",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export function breadcrumbJsonLd(path: string, label: string) {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
