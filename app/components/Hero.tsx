import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import Image from 'next/image';

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Hero({
  title = 'Smart, cloud-based accounting with real-time reports',
  subtitle = 'designed exclusively for Indian businesses. Save hours on bookkeeping and GST filings.',
}: Props) {
  return (
    <header className="w-full bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            

            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600 lg:text-xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/30"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-base font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50"
              >
                <Play size={18} />
                Watch Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview (real screenshot) */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-3xl"></div>
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-2 shadow-2xl">
              <div className="overflow-hidden rounded-xl bg-white">
                <Image
                  src="/DashboardSc.png"
                  alt="Dashboard screenshot"
                  width={900}
                  height={560}
                  className="block w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
