import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Financing Options | Coral Springs Smiles | Dental Financing",
  description:
    "At Coral Springs Smiles, we offer insurance & financing options to make dental care affordable for everyone. Learn more about our financing options today.",
};

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Insurance and Financing"
        breadcrumbLabel="Insurance and Financing"
      />
      <main className="bg-white px-4 pb-20 pt-10 text-slate-800 sm:pt-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-7 text-slate-600">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-800">
            Insurance and Financing Options
          </h2>
          <p>
            Coral Springs Smiles does everything it can to help make your trip to the dentist one that is a great
            experience. Part of the way Coral Springs Smiles does that is by making it easy to pay for services.
          </p>
          <p>We accept most PPO insurances.</p>
          <p>
            Dr. Payal Anand, DDS offers flexible payment options that fit into your budget, and her fees are
            thousands less than some other leading dental offices.
          </p>
          <p>Call us today if you have any questions!</p>
        </div>
      </main>

      <ActiveMembersSection
            wrap="none"
            className=" px-4 py-12 sm:px-6 lg:px-8"
          />
    </>
  );
}
