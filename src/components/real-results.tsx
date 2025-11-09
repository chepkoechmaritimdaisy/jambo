// src/components/real-results.tsx

import Image from "next/image";
import Link from "next/link";

export function RealResults() {
  return (
    <section className="bg-background-dark py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-white mb-8">Real Results, Clear Skin</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative h-96 w-full">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675798939633-1405a324a3f4?q=80&w=800"
              alt="Before tattoo removal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1610812387864-5a3a093a5e84?q=80&w=800"
              alt="After tattoo removal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1593504104932-6a76d8b5a1b3?q=80&w=800"
              alt="Before tattoo removal on back"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1521223629598-3a13a2b1573c?q=80&w=800"
              alt="After tattoo removal on back"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="rounded-full bg-primary px-6 py-3 text-base font-bold text-white transition-opacity hover:opacity-90">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}