import { getPackages } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function PackagesPage() {
  const packages = await getPackages();
  const activePackages = packages.filter(p => p.status === 'active');

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
          Choose Your Path to Clear Skin
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted-dark">
          Find the perfect package designed for your tattoo size and removal goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activePackages.map((pkg) => (
          <div key={pkg.id} className="flex flex-col gap-6 rounded-xl border border-solid border-gray-800 bg-card-dark p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold leading-tight text-white">{pkg.name}</h3>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-4xl font-black leading-tight tracking-tight">KES {pkg.price.toLocaleString()}</span>
              </p>
              <p className="text-sm text-gray-400">{pkg.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 text-sm font-normal text-gray-300">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                {pkg.sessions} Sessions
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link href={`/packages/${pkg.id}`} className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-colors hover:bg-primary/90">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
