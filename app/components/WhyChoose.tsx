import { Globe, Zap, BarChart3, Shield } from 'lucide-react';

export default function WhyChoose() {
  const items = [
    { icon: <Globe className="text-orange-500" size={28} />, title: '100% Cloud-Based', desc: 'Access from anywhere, anytime' },
    { icon: <Zap className="text-orange-500" size={28} />, title: 'Real-Time User Management', desc: 'Manage users and permissions' },
    { icon: <BarChart3 className="text-orange-500" size={28} />, title: 'Real-Time Insights', desc: 'Live financial dashboards' },
    { icon: <Shield className="text-orange-500" size={28} />, title: 'GST Compliant', desc: 'Built for Indian tax laws' },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-orange-40 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Why Choose Accobiz?</h2>
          <p className="mt-4 text-lg text-zinc-600">Everything you need to run your business finances efficiently</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-zinc-100 bg-white p-6 text-center transition-all hover:border-orange-200 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 transition-colors group-hover:bg-orange-100">
                {item.icon}
              </div>
              <h3 className="mb-2 font-semibold text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
