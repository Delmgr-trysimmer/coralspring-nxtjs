import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import ActiveMembersSection from "@/components/ActiveMembersSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Coral Springs Smiles",
  description:
    "Read our Privacy Policy to understand how Coral Springs Smiles collects, uses, and protects your personal information. Trust us with your dental care.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Privacy Policy" breadcrumbLabel="Privacy Policy" />
      <main className="bg-white px-4 pb-20 pt-10 text-slate-800 sm:pt-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 leading-7 text-slate-600">
            <section className="space-y-4">
              <p>
                We know that the privacy of your personal information is important to you. We are committed to
                safeguarding the privacy of your information and want you to know the protective measures we take.
              </p>
              <p>This Website Privacy Policy concerns the information we collect when you view our website.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-slate-800">
                Non-Public Information We Collect
              </h2>
              <p>If you use our website, we collect the following types of information:</p>
              <p>
                <b>Cookies</b>: Cookies are a text file put on a user’s computer, if accepted by the computer, which
                provide to us such information as whether you are a new or returning visitor and which web pages
                you visit.
              </p>
              <p>
                <b>Transparent gifs</b>: Transparent gifs are an invisible image which gathers such information as where
                you came from to visit a particular web page or which of multiple links to the same page you used
                to access that page.
              </p>
              <p>
                <b>Log files</b>: Log files are text files on the server which gather such information as your internet
                protocol address, internet service provider and type of browser. We use this information to
                determine such things as the number of visitors and day and time of visit to our website.
              </p>
              <p>
                If you choose to submit your contact information to indicate an interest in a consultation, we
                receive from you your name, address, telephone number and e-mail address.
              </p>
              <p>
                We do not disclose information gained by use of cookies, transparent gifs or log files to
                affiliated or nonaffiliated third parties. This information is used internally to better design and
                manage our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-slate-800">
                Information Security
              </h2>
              <p>
                We maintain physical, electronic and procedural security measures that comply with applicable legal
                and regulatory standards to safeguard your non-public personal information. Access to such
                information is restricted to those employees who are trained in the proper handling of client
                information and have a legitimate business need to access that information.
              </p>
              <p>
                If you entered your contact information into our website to express an interest in being contacted,
                we use your information so that a Representative of ours may contact you to communicate about this
                opportunity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-slate-800">Our Commitment</h2>
              <p>
                This privacy policy applies to our current and former customers and has been in effect since
                October 1, 2016. Because privacy is important, we pledge to work with you to protect and safeguard
                the security of your personal customer information.
              </p>
              <p>
                If you have any questions about this privacy policy, you may contact us by mail at <b>Coral Springs
                Smiles</b>, 2929 North University Drive Suite 203 Coral Springs, Florida 33065.
              </p>
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
