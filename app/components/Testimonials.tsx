import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { quote: 'Simplified our GST process — saved 10+ hours every month.', author: 'Priya Sharma', role: 'Founder, TechStart' },
    { quote: 'Clear cash flow visibility helped us secure funding faster.', author: 'Raj Mehta', role: 'CFO, GrowthLabs' },
    { quote: 'Finally, an accounting tool that just works. No complexity.', author: 'Anil Verma', role: 'Owner, RetailPro' },
  ];

  return (
    <section id="about" className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Loved by Business Owners</h2>
          <p className="mt-4 text-zinc-400">See what our customers have to say</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl bg-zinc-800 p-6">
              <Quote className="mb-4 text-orange-500" size={32} />
              <p className="mb-6 text-lg text-zinc-300">&quot;{t.quote}&quot;</p>
              <div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
