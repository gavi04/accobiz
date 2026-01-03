export default function TrustBar() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-sm font-medium text-zinc-500">
          TRUSTED BY 500+ BUSINESSES ACROSS INDIA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
          {['TechStart', 'FinanceHub', 'RetailPro', 'BuildCorp', 'GrowthLabs'].map((name) => (
            <div key={name} className="text-lg font-bold text-zinc-400">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
