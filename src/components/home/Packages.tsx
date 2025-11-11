import Link from 'next/link';

const Packages = () => {
  return (
    <section className="px-4 sm:px-8 py-10 md:py-16">
      <h2 className="text-text-primary text-center text-3xl font-bold leading-tight tracking-[-0.015em] mb-2">Our Packages</h2>
      <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">Choose a plan that works for you. All packages are tailored to your specific needs during your free consultation.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg text-text-primary">Small Tattoo Package</h3>
          <p className="text-text-secondary text-sm mt-1 mb-4 flex-grow">Ideal for tattoos up to 3x3 inches. Perfect for small symbols, names, or finger tattoos.</p>
          <Link href="#" className="text-primary font-bold text-sm hover:underline">Learn More →</Link>
        </div>
        <div className="flex flex-col rounded-xl border-2 border-primary p-6 bg-accent-light relative">
          <div className="absolute top-0 right-6 -mt-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
          <h3 className="font-bold text-lg text-text-primary">Full Sleeve Fading</h3>
          <p className="text-text-secondary text-sm mt-1 mb-4 flex-grow">Designed for larger pieces or full sleeves to lighten them for a cover-up or complete removal.</p>
          <Link href="#" className="text-primary font-bold text-sm hover:underline">Learn More →</Link>
        </div>
        <div className="flex flex-col rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg text-text-primary">Custom Session Plan</h3>
          <p className="text-text-secondary text-sm mt-1 mb-4 flex-grow">A fully customized plan for multiple tattoos, complex colors, or unique removal challenges.</p>
          <Link href="#" className="text-primary font-bold text-sm hover:underline">Learn More →</Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
