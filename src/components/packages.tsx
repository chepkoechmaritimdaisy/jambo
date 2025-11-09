// src/components/packages.tsx

import Link from "next/link";

export function Packages() {
  return (
    <section className="bg-background-dark py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-white mb-2">Our Packages</h2>
        <p className="text-center text-text-muted-dark mb-8">
          Choose a plan that works for you. All packages are tailored to your specific needs during your free consultation.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border-dark bg-container-dark p-6">
            <h3 className="text-lg font-bold leading-tight text-white">Small Tattoo Package</h3>
            <p className="mt-2 text-sm font-normal leading-normal text-text-muted-dark">
              Ideal for tattoos up to 3x3 inches. Perfect for small symbols, names, or finger tattoos.
            </p>
            <Link href="/packages" className="mt-4 inline-block font-bold text-primary transition-opacity hover:opacity-90">
              Learn More &rarr;
            </Link>
          </div>
          <div className="relative rounded-xl border border-primary bg-container-dark p-6">
            <div className="absolute top-0 right-4 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
              Popular
            </div>
            <h3 className="text-lg font-bold leading-tight text-white">Full Sleeve Fading</h3>
            <p className="mt-2 text-sm font-normal leading-normal text-text-muted-dark">
              Designed for larger pieces or full sleeves to lighten them for a cover-up or complete removal.
            </p>
            <Link href="/packages" className="mt-4 inline-block font-bold text-primary transition-opacity hover:opacity-90">
              Learn More &rarr;
            </Link>
          </div>
          <div className="rounded-xl border border-border-dark bg-container-dark p-6">
            <h3 className="text-lg font-bold leading-tight text-white">Custom Session Plan</h3>
            <p className="mt-2 text-sm font-normal leading-normal text-text-muted-dark">
              A fully customized plan for multiple tattoos, complex colors, or unique removal challenges.
            </p>
            <Link href="/packages" className="mt-4 inline-block font-bold text-primary transition-opacity hover:opacity-90">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}