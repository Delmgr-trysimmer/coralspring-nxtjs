import ActiveMembersSection from "@/components/ActiveMembersSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Warranty in Coral Springs",
  description: "Learn about dental warranty options and long-term protection for restorative and cosmetic dental treatments. Call (954) 266-8755 today.",
};

export default function DentalWarrantyPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Dental Warranty" breadcrumbLabel="Dental Warranty" />
      <main className="relative z-0 bg-white pb-16 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="mx-auto max-w-4xl text-center mb-12">
             <h2 className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-brand sm:text-xl">
               Maintain Your Smile with Confidence
             </h2>
          </header>

          <div className="mx-auto max-w-4xl">
            {/* Quick Summary */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-8 mb-12 px-6 sm:px-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Warranty Overview</h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Root Canals:</span>
                  <span>2 year warranty on re-treatment/ replacement</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Crowns & Bridges:</span>
                  <span>5 year warranty</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Composite Fillings:</span>
                  <span>2 year warranty</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Sealants:</span>
                  <span>1 year warranty</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Dentures & Partials:</span>
                  <span>2 year warranty</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold sm:w-48 shrink-0">Implants:</span>
                  <span>5 year warranty, if care is maintained</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-brand/5 rounded-lg border border-brand/20">
                <p className="text-brand font-semibold">Conditions Apply:</p>
                <p className="text-slate-700 mt-1">
                  Warranty valid only with regular check-ups and cleaning as recommended
                </p>
              </div>

              <div className="mt-8">
                <p className="text-slate-700 font-medium text-lg">
                  Learn More: Call <a href="tel:954-266-8755" className="text-brand hover:text-brand-muted hover:underline">(954) 266-8755</a> or read full details below.
                </p>
              </div>
            </div>

            {/* Detailed Content */}
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 mb-12">
              <p className="lead text-xl text-slate-600 font-medium mb-12">
                Many problems in dentistry can be prevented if caught at an early stage. Therefore, our warranty is valid ONLY if the recommended preventative care appointments are maintained. This includes keeping recommended semi-annual dental cleanings with the hygienist, exams with your dentist, and yearly bite-wing x-rays.
              </p>

              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">ENDODONTIC THERAPY (ROOT CANALS):</h3>
                  <p>
                    Approximately 95% of endodontic treatments are successful (Am. Assn of Endodontists 08/23/2017). In the case of a failed root canal that was performed in our office we will evaluate whether re-treatment is necessary and by whom. If it is within 2 years of the original root canal, we will re-treat at no charge or provide a credit of the original fee to an endodontist who performs the re-treatment procedure. If problems necessitate extraction within 2 years of the original root canal, credit of the original fee will be applied toward tooth replacement in our office. There are rare instances where a patient will be informed that we cannot provide a warranty on a tooth with a poor prognosis. In these few cases, we will make patients aware at the time of initial procedure.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">CROWNS AND BRIDGES</h3>
                  <p>
                    We provide a full replacement or repair warranty for crowns and bridges for 5 years after placement. A credit of 2/3 the original value of the crown or bridge will be given if it is between 3 and 4 years old. A credit of 1/3 the original value will be given if the crown or bridge is between 4 and 5 years old. This does not include crown or bridges where decay has reoccurred due to poor oral hygiene or diet, or when the crown or bridge is damaged due to accidents or abuse that could also break normal healthy teeth. Examples would include biting on objects such as popcorn, ice, bone, or using the teeth as tools when opening things. Crowns and bridges that are not recommended by our doctors are not covered by this warranty.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">COMPOSITE RESIN FILLINGS</h3>
                  <p>
                    When a tooth has a cavity, the dentist removes the decay and replaces it with a composite filling. Ideally, this is no more than 50% of the tooth. The tooth is what supports the filling. If a composite tooth colored restoration is the recommended treatment, we will replace or repair it in the event of failure for a period of 2 years.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">SEALANTS</h3>
                  <p>
                    Sealants will be repaired or replaced for a period of 1 year after placement.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">DENTURE AND PARTIAL DENTURES</h3>
                  <p>
                    Dentures and partial dentures will be warrantied for a period of 2 years for a chipped or broken tooth or broken flange if the problem occurs during normal use. Full upper and lower denture patients must be seen at least once every 12 months and patients with partial dentures must be seen at the recommended preventative care intervals.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">IMPLANTS</h3>
                  <p>
                    Implants that are placed in our office are warrantied for 5 years if patient maintains scheduled preventative care intervals.
                  </p>
                </section>
              </div>

              <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-100 text-center">
                <p className="font-bold text-red-900 uppercase tracking-wide">
                  THE WARRANTIES LISTED ABOVE ARE NULL AND VOID IF THE PATIENT DOES NOT MAINTAIN HIS/HER REGULAR CLEANING AND CHECK-UP APPOINTMENTS AS DIRECTED BY THE DOCTORS OR THE HYGIENISTS.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center border-t border-slate-200 pt-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">To schedule your consultation today</p>
              
              <div className="flex flex-col gap-4 justify-center items-center">
                <Link 
                  href="/contact-us" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-lg text-white bg-brand hover:bg-brand-muted shadow-sm transition-colors w-full sm:w-auto"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ActiveMembersSection
          wrap="none"
          className="mt-16 border-t border-slate-200 px-4 pt-14 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
