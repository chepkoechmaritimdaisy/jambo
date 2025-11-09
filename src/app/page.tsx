import Image from "next/image";
import Link from "next/link";

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

      {/* "How It Works" Section */}
      <section className="bg-background-dark py-16">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
              <div className="rounded-full bg-primary/20 p-3 text-primary">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h3 className="text-lg font-bold leading-tight text-white">1. Consultation</h3>
              <p className="text-sm font-normal leading-normal text-text-muted-dark">
                We assess your tattoo and skin to create a personalized, safe removal plan.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
              <div className="rounded-full bg-primary/20 p-3 text-primary">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h3 className="text-lg font-bold leading-tight text-white">2. Treatment</h3>
              <p className="text-sm font-normal leading-normal text-text-muted-dark">
                Our advanced Picosecond laser technology safely breaks down the tattoo ink.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
              <div className="rounded-full bg-primary/20 p-3 text-primary">
                <span className="material-symbols-outlined text-3xl">healing</span>
              </div>
              <h3 className="text-lg font-bold leading-tight text-white">3. Aftercare</h3>
              <p className="text-sm font-normal leading-normal text-text-muted-dark">
                We provide comprehensive aftercare to ensure your skin heals perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
