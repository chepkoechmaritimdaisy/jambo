import { getPackageById } from '@/lib/db';
import { notFound } from 'next/navigation';
import { updatePackage } from '@/app/actions/packages';
import { redirect } from 'next/navigation';

export default async function EditPackagePage({ params }: { params: { id: string } }) {
  const pkg = await getPackageById(params.id);

  if (!pkg) {
    notFound();
  }

  async function handleSubmit(formData: FormData) {
    'use server';
    await updatePackage(params.id, formData);
    redirect('/admin/packages');
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Edit Package</h1>
      <form action={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Package Name</label>
          <input type="text" name="name" id="name" defaultValue={pkg.name} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
          <textarea name="description" id="description" rows={4} defaultValue={pkg.description} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-slate-300 mb-1">Price (KES)</label>
            <input type="number" name="price" id="price" defaultValue={pkg.price} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="sessions" className="block text-sm font-medium text-slate-300 mb-1">Sessions</label>
            <input type="number" name="sessions" id="sessions" defaultValue={pkg.sessions} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-1">Status</label>
          <select name="status" id="status" defaultValue={pkg.status} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label htmlFor="photos" className="block text-sm font-medium text-slate-300 mb-1">Photos</label>
          <input type="file" name="photos" id="photos" multiple className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"/>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
