import Link from "next/link";

export default function ReviewUsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 text-slate-800">
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Review Us</h1>
        <p className="mt-4 leading-7 text-slate-600">
          Thank you for choosing Coral Springs Smiles. A link to leave a review will appear here
          soon.
        </p>
        <Link href="/" className="mt-10 inline-block text-sm font-semibold text-brand hover:text-brand-muted">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
