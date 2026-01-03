import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-4xl w-full px-6">
          <h1 className="text-4xl font-bold mb-6">Pricing</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Yearly */}
            <div className="flex-1 border rounded-lg p-8 shadow-sm">
              <p className="text-sm text-zinc-500 mb-2">Yearly plan</p>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold">12,000</span>
                <span className="text-lg text-zinc-600">/ year</span>
              </div>

              <p className="mt-4 text-zinc-600">Billed annually. Cancel anytime.</p>

              <div className="mt-6">
                <a href="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md">
                  Get started
                </a>
              </div>
            </div>

            {/* Monthly */}
            <div className="flex-1 border rounded-lg p-8 shadow-sm">
              <p className="text-sm text-zinc-500 mb-2">Monthly plan</p>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold">1,500</span>
                <span className="text-lg text-zinc-600">/ month</span>
              </div>

              <p className="mt-4 text-zinc-600">Billed monthly. Cancel anytime.</p>

              <div className="mt-6">
                <a href="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}