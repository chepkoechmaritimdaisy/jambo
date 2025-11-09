import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-10">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-6 text-primary">
            {/* SVG Logo Placeholder */}
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">InklessIsMore.ke</h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-white">Home</Link>
          <Link href="/services" className="text-sm font-medium text-white/80 transition-colors hover:text-white">Services</Link>
          <Link href="/packages" className="text-sm font-medium text-white/80 transition-colors hover:text-white">Packages</Link>
          <Link href="/ambassador-program" className="text-sm font-bold text-primary transition-colors hover:text-primary/80">Ambassador Program</Link>
        </nav>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 h-10 text-sm font-bold leading-normal tracking-[0.015em] text-background-dark transition-colors hover:bg-primary/90">
          <span className="truncate">Book Now</span>
        </button>
      </div>
    </header>
  );
}
