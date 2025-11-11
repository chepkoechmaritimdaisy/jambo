import { getPackages } from '@/lib/db';
import Link from 'next/link';
import { deletePackage } from '@/app/actions/packages';

export const dynamic = 'force-dynamic';

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Packages</h1>
        <Link href="/admin/packages/new" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
          Add New Package
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Package Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Price</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-slate-300">Sessions</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-t border-t-slate-800">
                <td className="h-[72px] px-4 py-2 text-sm font-medium text-slate-200">{pkg.name}</td>
                <td className="h-[72px] px-4 py-2 text-sm text-slate-400">{pkg.price}</td>
                <td className="h-[72px] px-4 py-2 text-center text-sm text-slate-400">{pkg.sessions}</td>
                <td className="h-[72px] px-4 py-2 text-sm">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    pkg.status === 'active' ? 'bg-green-900/50 text-green-300' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="h-[72px] px-4 py-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/packages/edit/${pkg.id}`} className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </Link>
                    <form action={deletePackage.bind(null, pkg.id)}>
                      <button className="flex size-8 items-center justify-center rounded-lg text-red-400 hover:bg-red-900/50">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
