// src/components/ambassador.tsx

import Image from "next/image";
import Link from "next/link";

export function Ambassador() {
  return (
    <section className="bg-background-dark py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">Become an Ambassador</h2>
            <p className="mt-4 text-text-muted-dark">
              Love your results? Share your journey and earn rewards. Our Ambassador Program offers exclusive discounts and credits for every successful referral.
            </p>
            <div className="mt-8">
              <Link href="/ambassador-program" className="rounded-full bg-primary px-6 py-3 text-base font-bold text-white transition-opacity hover:opacity-90">
                Join the Program
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800"
              alt="A diverse group of professionals looking at a tablet"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}