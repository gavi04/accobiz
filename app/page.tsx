import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProblemsAndSolutions from './components/ProblemAndSolutions';
import Pricing from './components/Pricing';
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <TrustBar />

        <WhyChoose />

        <ProblemsAndSolutions />

        <Pricing />

        <Testimonials />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
