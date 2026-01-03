import { FileText, CreditCard, TrendingUp, Shield, AlertTriangle, Clock, Eye, Users } from 'lucide-react';

type Feature = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const problems: Feature[] = [
  { title: 'Scattered data', text: 'Data scattered across Excel, Tally, and files.', icon: <AlertTriangle size={24} /> },
  { title: 'Late GST returns', text: 'Late GST returns and tax errors.', icon: <Clock size={24} /> },
  { title: 'No real-time view', text: 'No real-time view of profit & cash flow.', icon: <Eye size={24} /> },
  { title: 'Dependence on accountants', text: 'Dependence on accountants for basic information.', icon: <Users size={24} /> },
];

const solutions: Feature[] = [
  { title: 'GST-ready invoicing', text: 'Create GST-ready sales & purchase invoices.', icon: <FileText size={24} /> },
  { title: 'Track payments', text: 'Track payments, expenses, and dues.', icon: <CreditCard size={24} /> },
  { title: 'Monitor cash flow', text: 'Monitor cash flow and profitability in real time.', icon: <TrendingUp size={24} /> },
  { title: 'Compliance & reports', text: 'Generate financial statements and stay GST compliant.', icon: <Shield size={24} /> },
];

function Block({ item, variant }: { item: Feature; variant: 'problem' | 'solution' }) {
  const isProblem = variant === 'problem';
  
  return (
    <div 
      className="flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ 
        backgroundColor: isProblem ? '#F5F6FA' : '#FEF6EE',
        border: `1px solid ${isProblem ? '#D0D2DE' : '#F98513'}20`
      }}
    >
      <div 
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
        style={{ 
          backgroundColor: '#FFFFFF',
          color: isProblem ? '#223382' : '#F98513',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        {item.icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 
          className="font-bold text-base"
          style={{ color: '#223382' }}
        >
          {item.title}
        </h3>
        <p 
          className="mt-1 text-sm"
          style={{ color: '#223382', opacity: 0.7 }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default function ProblemsAndSolutions() {
  return (
    <section id="features" className="w-full py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 
            className="text-3xl text-black font-bold sm:text-4xl lg:text-5xl"
            
          >
            Problems We Solve
          </h2>
          <p 
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: '#223382', opacity: 0.7 }}
          >
            Say goodbye to financial chaos and hello to clarity
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Problems Column */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div 
                className="h-1 w-10 rounded-full"
                style={{ backgroundColor: '#223382' }}
              />
              <h3 
                className="text-lg font-bold"
                style={{ color: '#223382' }}
              >
                Without Accobiz
              </h3>
            </div>
            <div className="space-y-4">
              {problems.map((p) => (
                <Block key={p.title} item={p} variant="problem" />
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div 
                className="h-1 w-10 rounded-full"
                style={{ backgroundColor: '#F98513' }}
              />
              <h3 
                className="text-lg font-bold"
                style={{ color: '#F98513' }}
              >
                With Accobiz
              </h3>
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
