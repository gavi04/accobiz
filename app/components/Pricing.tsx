import React from 'react';

export default function Pricing() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 border rounded-lg p-8 shadow-sm bg-white">
            <p className="text-sm text-zinc-500 mb-2">Yearly plan</p>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-extrabold">12,000</span>
              <span className="text-lg text-zinc-600">/ year</span>
            </div>

            <p className="mt-4 text-zinc-600">Billed annually. Cancel anytime.</p>

            <div className="mt-6">
              <a href="/pricing" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md">
                Choose yearly
              </a>
            </div>
          </div>

          <div className="flex-1 border rounded-lg p-8 shadow-sm bg-white">
            <p className="text-sm text-zinc-500 mb-2">Monthly plan</p>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-extrabold">1,500</span>
              <span className="text-lg text-zinc-600">/ month</span>
            </div>

            <p className="mt-4 text-zinc-600">Billed monthly. Cancel anytime.</p>

            <div className="mt-6">
              <a href="/pricing" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md">
                Choose monthly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}