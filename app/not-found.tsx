import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a5a77] via-[#11779a] to-[#1ca6cf]">
      <Navbar />

      <main className="relative mx-auto flex min-h-[75vh] w-full max-w-6xl items-center justify-center px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="absolute left-8 top-28 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-16 right-10 h-52 w-52 rounded-full bg-cyan-200/20 blur-3xl" />

        <section className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-12">
          <p className="font-semibold uppercase tracking-[0.2em] text-white/80">
            404 Error
          </p>
          <h1 className="mt-4 font-sora text-4xl font-bold text-white sm:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            The page you are looking for may have been moved, renamed, or no
            longer exists. Let us get you back to the right place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#1a2e3d] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243d52]"
            >
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
