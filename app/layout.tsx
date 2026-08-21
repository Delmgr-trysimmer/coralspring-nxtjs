import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import {
  createPageMetadata,
  dentistJsonLd,
  safeJsonLd,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: "Dentist in Coral Springs, FL | Coral Springs Smiles",
    description:
      "Comprehensive dental care in Coral Springs, FL, including preventive, cosmetic, implant, emergency and periodontal services. Request an appointment today.",
    path: "/",
  }),
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ornc0HF4lkPPuNmdkYGa8KswABIYFd8q9XJiGwQbBwI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(dentistJsonLd) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVCR8RT');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVCR8RT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
