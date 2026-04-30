import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PatientGalleryGrid from "./PatientGalleryGrid";
import type { Metadata } from "next";

const PATIENT_GALLERY_IMAGES = [
  "/patient-gallery-1.jpg",
  "/patient-gallery-2.jpg",
  "/patient-gallery-3.jpg",
  "/patient-gallery-4.jpg",
  "/patient-gallery-5.jpg",
  "/patient-gallery-6.jpg",
] as const;

export const metadata: Metadata = {
  title: "Patient gallery - Coral Springs Smiles",
  description:
    "Explore our patient gallery for stunning smile transformations and see the results achieved at Coral Springs Smiles",
};

export default function PatientGalleryPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Patient Gallery: Transforming Smiles at Coral Springs Smiles"
        breadcrumbLabel="Patient Gallery"
        titleClassName="max-w-5xl mx-auto text-balance font-semibold normal-case tracking-tight leading-snug"
      />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <PatientGalleryGrid images={PATIENT_GALLERY_IMAGES} />
      </main>
    </>
  );
}
