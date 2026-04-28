import ActiveMembersSection from "@/components/ActiveMembersSection";
import ContactUsForm from "@/components/ContactUsForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for Expert Dental Care in Coral Springs, FL",
  description:
    "Schedule an appointment, ask a question, or give us your feedback. Our compassionate and knowledgeable team is ready to assist you.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Contact Us" breadcrumbLabel="Contact Us" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand sm:text-3xl lg:text-4xl">
              Schedule your Visit!
            </h2>
            <p className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
              Send us a message below for us to contact you
            </p>
          </header>

          <div className="mt-10 sm:mt-12">
            <ContactUsForm />
          </div>
        </div>

        <GoogleMapEmbed className="px-4 sm:px-6 lg:px-8" />
        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
