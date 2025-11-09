"use client";

import { useRouter } from 'next/navigation';

export default function NewPackagePage() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Here you would typically send the data to a server action or API endpoint
    console.log(data);

    // For now, just redirect back to the packages list
    router.push('/admin/packages');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Add New Package</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Package Name</label>
          <input type="text" name="name" id="name" className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
          <textarea name="description" id="description" rows={4} className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-slate-300 mb-1">Price (KES)</label>
            <input type="number" name="price" id="price" className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="sessions" className="block text-sm font-medium text-slate-300 mb-1">Sessions</label>
            <input type="number" name="sessions" id="sessions" className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-1">Status</label>
          <select name="status" id="status" className="w-full rounded-lg border-slate-700 bg-[#101c22] text-white focus:border-primary focus:ring-primary">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        {/* Basic file input for photos, will need more advanced handling */}
        <div>
          <label htmlFor="photos" className="block text-sm font-medium text-slate-300 mb-1">Photos</label>
          <input type="file" name="photos" id="photos" multiple className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"/>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
            Save Package
          </button>
        </div>
      </form>
    </div>
  );
}
