import React from 'react';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="flex h-screen bg-background-dark">
      <aside className="w-64 flex-col border-r border-slate-200/10 bg-black/10 p-4">
        <div className="flex items-center gap-3 px-2">
          {/* Logo and Admin title can go here */}
          <h1 className="text-white text-base font-semibold">Admin Panel</h1>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          <a href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-xl !fill-1">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </a>
          <a href="/admin/packages" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-white/5">
            <span className="material-symbols-outlined text-xl">inventory_2</span>
            <p className="text-sm font-medium">Packages</p>
          </a>
          {/* More admin links can be added here */}
        </nav>
      </aside>
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
