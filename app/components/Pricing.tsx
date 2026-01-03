import React from 'react';
import { START_TRIAL_URL, CONTACT_SALES_URL } from '../lib/const';

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Pricing</h2>
        <p className="text-center text-zinc-500 mb-8">
          Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 items-start">
          {/* Starter */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <p className="text-sm text-zinc-500 mb-3">Starter</p>
            <h3 className="text-xl font-semibold mb-4">Perfect for freelancers and small businesses</h3>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl md:text-5xl font-extrabold">₹1500</span>
              <span className="text-lg text-zinc-600">/month</span>
            </div>

            <a
              href={START_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center border border-zinc-300 rounded-full px-4 py-3 text-zinc-700 mb-6"
            >
              Start Free Trial
            </a>

            <ul className="space-y-3 text-zinc-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Up to 500 transactions/month</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>GST invoicing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Basic reports</span>
              </li>
            </ul>
          </div>

          {/* Professional - highlighted */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="inline-flex items-center gap-2 bg-blue-800 text-white text-sm px-4 py-1.5 rounded-full shadow">⚡ Most Popular</span>
            </div>

            <div className="bg-white border-2 border-zinc-200 rounded-2xl p-8 shadow-md">
              <p className="text-sm text-zinc-500 mb-3">Professional</p>
              <h3 className="text-xl font-semibold mb-4">Ideal for growing businesses and CAs</h3>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-extrabold">₹1,000</span>
                <span className="text-lg text-zinc-600">/month</span>
              </div>

              <a
                href={START_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center bg-blue-800 text-white rounded-full px-6 py-4 text-sm font-semibold mb-6 shadow-lg"
              >
                Start Free Trial
              </a>

              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>GST & TDS compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Advanced reports & BI</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>5 user access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <p className="text-sm text-zinc-500 mb-3">Enterprise</p>
            <h3 className="text-xl font-semibold mb-4">For large organizations with complex needs</h3>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl md:text-4xl font-extrabold">Custom</span>
            </div>

            <a
              href={CONTACT_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center border border-zinc-300 rounded-full px-4 py-3 text-zinc-700 mb-6"
            >
              Contact Sales
            </a>

            <ul className="space-y-3 text-zinc-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Custom integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}