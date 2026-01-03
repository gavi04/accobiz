import { START_TRIAL_URL, CONTACT_SALES_URL } from "../lib/const";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Ready to simplify your finances?</h2>
        <p className="mt-4 text-lg text-zinc-600">Join 500+ businesses already using Accobiz to streamline their accounting</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={START_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600"
          >
            Start Your Free Trial
          </a>
          <a
            href={CONTACT_SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-8 py-4 text-lg font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
