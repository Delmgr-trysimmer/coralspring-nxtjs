import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import SmileGalleryContent from "./SmileGalleryContent";
import type { Metadata } from "next";

const GALLERY_IMAGES = [
  "/images/smile-gallery-1.jpg",
  "/images/smile-gallery-2.jpg",
  "/images/smile-gallery-3.jpg",
  "/images/smile-gallery-4.jpg",
  "/images/smile-gallery-5.jpg",
  "/images/smile-gallery-6.png",
  "/images/smile-gallery-7.png",
  "/images/smile-gallery-8.jpg",
  "/images/smile-gallery-9.jpg",
  "/images/smile-gallery-10.jpg",
] as const;

export const metadata: Metadata = {
  title: "See Our Amazing Smile Transformations | Coral Springs Smiles",
  description:
    "Check out our smile gallery to see the remarkable before-and-after photos of our patients who have achieved beautiful, healthy smiles.",
};

export default function SmileGalleryPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Smile Gallery" breadcrumbLabel="Smile Gallery" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <SmileGalleryContent images={GALLERY_IMAGES}>
          <ActiveMembersSection
            wrap="none"
            className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
          />
        </SmileGalleryContent>
      </main>
    </>
  );
}
