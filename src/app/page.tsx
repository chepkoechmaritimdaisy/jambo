// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/how-it-works";
import { RealResults } from "@/components/real-results";
import { Packages } from "@/components/packages";
import { Ambassador } from "@/components/ambassador";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaWFswZGii0Pp32A8la2iZmEp_p8jUACpn2NFCRQBpmrRT6LzTyStE8sEVy_Ulo1FjpIUbkLONGamVtk8NJR4bDVwPfUNG0jctEZD0H56oQbqo-_DNyEsa95kgBI8lFdYg9Jg4Lq1pec8QQwvL9B7iA5QGDUrgrt7qIRoWmB44rA_XIIPHYwjfgJfgkMJImlW1Z7Nu_N6a091af8u6_Yza3hLOWhYJftXqrh5gCSPNr-DqbNlVs4od0xDvtR2w8XXNo5eysgg4F0w" // From Screen 12
          alt="Abstract image showing clean laser light patterns in a clinical setting"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-background-dark/70 z-10" />
        <div className="relative z-20 flex flex-col items-start justify-end h-full p-10 text-white">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black leading-tight tracking-tight">Your Clean Slate Awaits</h1>
            <p className="mt-4 text-lg text-gray-200">
              Experience safe, effective, and professional laser tattoo removal. Begin your journey to clear skin today.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/packages" className="rounded-full bg-primary px-6 py-3 text-base font-bold text-white transition-opacity hover:opacity-90">
                View Packages
              </Link>
              <Link href="/gallery" className="rounded-full bg-white/20 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                See Before & After
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <RealResults />
      <Packages />
      <Ambassador />
    </>
  );
}