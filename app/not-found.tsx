import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="font-semibold uppercase tracking-[0.2em] text-slate-500">404 Error</p>
      <h1 className="mt-4 font-sora text-4xl font-bold text-slate-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        The page you are looking for may have been moved, renamed, or no longer
        exists.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#1a2e3d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243d52]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
