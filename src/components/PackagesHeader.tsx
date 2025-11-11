// src/components/PackagesHeader.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PackagesHeader = () => {
  const pathname = usePathname();

  // This header is only for the packages page.
  if (pathname !== '/packages') {
    return null;
  }

  const navLinkClasses = "text-sm font-medium leading-normal hover:text-primary";
  const activeNavLinkClasses = "text-primary text-sm font-bold leading-normal";

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 py-4 bg-white dark:bg-card-dark rounded-xl">
      <div className="flex items-center gap-4 text-[#111618] dark:text-white">
        <div className="size-6 text-primary">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#111618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">InklessIsMore.ke</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-9">
          <Link href="/" className={`${navLinkClasses} dark:text-gray-300`}>Home</Link>
          <Link href="/about" className={`${navLinkClasses} dark:text-gray-300`}>About</Link>
          <Link href="/packages" className={activeNavLinkClasses}>Packages</Link>
          <Link href="/booking" className={`${navLinkClasses} dark:text-gray-300`}>Booking</Link>
          <Link href="/ambassador-program" className={`${navLinkClasses} dark:text-gray-300`}>Ambassador Program</Link>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Contact Us</span>
        </button>
      </div>
      <div className="md:hidden">
        <button className="text-[#111618] dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default PackagesHeader;
