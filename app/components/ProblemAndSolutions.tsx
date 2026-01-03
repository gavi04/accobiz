import { FileText, CreditCard, TrendingUp, Shield, AlertTriangle, Clock, Eye, Users } from 'lucide-react';

type Feature = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const problems: Feature[] = [
  { title: 'Scattered data', text: 'Data scattered across Excel, Tally, and files.', icon: <AlertTriangle className="text-red-500" size={24} /> },
  { title: 'Late GST returns', text: 'Late GST returns and tax errors.', icon: <Clock className="text-red-500" size={24} /> },
  { title: 'No real-time view', text: 'No real-time view of profit & cash flow.', icon: <Eye className="text-red-500" size={24} /> },
  { title: 'Dependence on accountants', text: 'Dependence on accountants for basic information.', icon: <Users className="text-red-500" size={24} /> },
];

const solutions: Feature[] = [
  { title: 'GST-ready invoicing', text: 'Create GST-ready sales & purchase invoices.', icon: <FileText className="text-orange-500" size={24} /> },
  { title: 'Track payments', text: 'Track payments, expenses, and dues.', icon: <CreditCard className="text-orange-500" size={24} /> },
  { title: 'Monitor cash flow', text: 'Monitor cash flow and profitability in real time.', icon: <TrendingUp className="text-orange-500" size={24} /> },
  { title: 'Compliance & reports', text: 'Generate financial statements and stay GST compliant.', icon: <Shield className="text-orange-500" size={24} /> },
];

function Block({ item, variant }: { item: Feature; variant: 'problem' | 'solution' }) {
  const bgClass = variant === 'problem' 
    ? 'bg-red-50 border-red-100' 
    : 'bg-orange-50 border-orange-100';
  
  return (
    <div className={`flex gap-4 rounded-xl border p-4 transition-all hover:shadow-md ${bgClass}`}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
        {item.icon}
      </div>
      <div>
        <h3 className="font-semibold text-zinc-900">{item.title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
      </div>
    </div>
  );
}

export default function ProblemsAndSolutions() {
  return (
    <section id="features" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Say goodbye to financial chaos and hello to clarity
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problems Column */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-semibold text-red-600">Without Accobiz</h3>
            </div>
            <div className="space-y-4">
              {problems.map((p) => (
                <Block key={p.title} item={p} variant="problem" />
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-orange-500"></div>
              <h3 className="text-lg font-semibold text-orange-600">With Accobiz</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((s) => (
                <Block key={s.title} item={s} variant="solution" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
