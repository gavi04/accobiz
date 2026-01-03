export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5 md:pr-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold">A</div>
              <span className="text-xl font-bold text-zinc-900">Accobiz</span>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Next-generation cloud accounting for modern Indian businesses.</p>
            <div className="mt-6 text-zinc-700 md:max-w-md">
              <div className="text-xl md:text-2xl font-semibold text-zinc-900">
                <a href="mailto:novatechbusinesssolution@gmail.com" className="text-emerald-600 hover:underline">novatechbusinesssolution@gmail.com</a>
              </div>
              <div className="mt-3 text-lg md:text-xl font-semibold text-zinc-900">
                Contact: <a href="tel:+918427390415" className="text-emerald-600 hover:underline">8427390415</a>
              </div>
              <address className="mt-4 not-italic text-sm md:text-base leading-relaxed text-zinc-600">
                Harbans Singh Charitable Hospital, above Mangi Munish and Company, near Panth Ratan Baba, Fatehgarh Sahib, Punjab 140407
              </address>
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="mb-4 text-lg font-semibold text-zinc-900">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900">Features</a></li>
              <li><a href="#" className="hover:text-zinc-900">Pricing</a></li>
              <li><a href="#" className="hover:text-zinc-900">Integrations</a></li>
            </ul>
          </div>
          {/* Company column removed per request */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-lg font-semibold text-zinc-900">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-zinc-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">© 2026 Novatech Business Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
}
