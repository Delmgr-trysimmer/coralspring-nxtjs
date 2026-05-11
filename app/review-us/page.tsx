import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import ActiveMembersSection from "@/components/ActiveMembersSection";

export const metadata: Metadata = {
  title: "Review Us | Coral Springs Smiles | Dentist in Coral Springs",
  description:
    "Share your experience with Coral Springs Smiles. Leave a review & help us improve our services. Your feedback matters to us!",
};

export default function ReviewUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Review Us" breadcrumbLabel="Review Us" />
      <main className="bg-white px-4 pb-20 pt-10 text-slate-800 sm:pt-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-7 text-slate-600">
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-800">Review Us</h2>
              <p>It would mean a lot to us if you can find time to review us.</p>
              <p>
                We care about your opinion and value your feedback. Your review and feedback helps us to continue
                to improve our dental services.
              </p>
              <p>
                If you had a successful dental treatment at Coral Springs Smiles, please share your experience by
                clicking on your favorite review site below. If for any reason you were not completely satisfied,
                please call us directly at <a href="tel:9542668755" className="text-brand hover:text-brand-muted">(954) 266-8755</a>. Thank you for your business and we appreciate you
                taking the time to help us improve and grow.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-slate-800">Patient Reviews</h2>
              <p>Review us on Google</p>
            </section>
          </div>
          <Link href="/" className="mt-10 inline-block text-sm font-semibold text-brand hover:text-brand-muted">
            Back to home
          </Link>
        </div>
      </main>

      <ActiveMembersSection
        wrap="none"
        className=" px-4 py-12 sm:px-6 lg:px-8"
      />
    </>
  );
}
