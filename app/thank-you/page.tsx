import ActiveMembersSection from "@/components/ActiveMembersSection";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, PhoneCall, MapPin, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Coral Springs Smiles",
  description: "Thank you for contacting Coral Springs Smiles. We have received your message and will reach out to you shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Thank You" breadcrumbLabel="Thank You" />
      <main className="relative z-0 bg-white pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Centered Success Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50/50 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.03)] sm:p-12 md:p-16">
            
            {/* Visual background details */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[#007ea8]/5 blur-2xl" />

            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 sm:h-20 sm:w-20">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </div>

            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Message Sent Successfully!
            </h1>
            
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Thank you for reaching out to Coral Springs Smiles. We appreciate you taking the time to write to us. A member of our team will contact you shortly to assist with your request.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
              <Link 
                href="tel:9542668755" 
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 h-12 px-6 text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm w-full sm:w-auto"
              >
                <PhoneCall className="h-4 w-4 text-[#007ea8]" />
                Call (954) 266-8755
              </Link>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007ea8]/10 text-[#007ea8]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#007ea8]">
                    Our Location
                  </h2>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    Coral Springs Smiles
                  </p>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-slate-600">
                    2929 North University Drive
                    <br />
                    Suite 203
                    <br />
                    Coral Springs, Florida 33065
                  </address>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Office Hours
                  </h2>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    Monday – Friday
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    9:00am – 5:00pm
                  </p>
                  <p className="mt-2 text-xs text-slate-500 italic">
                    Saturday: By Appointment Only | Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <GoogleMapEmbed className="px-4 sm:px-6 lg:px-8 mt-16" />
        <ActiveMembersSection
          wrap="none"
          className="mt-12 border-t border-slate-200 px-4 pt-12 sm:px-6 lg:px-8"
        />
      </main>
    </>
  );
}
