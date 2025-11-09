// src/components/footer.tsx

import Link from "next/link";
import { TwitterIcon } from "@/components/icons/twitter";
import { InstagramIcon } from "@/components/icons/instagram";

export function Footer() {
  return (
    <footer className="bg-background-dark text-white">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">InklessIsMore.ke</h3>
            <p className="mt-4 text-sm text-text-muted-dark">
              Your journey to a clean slate starts here. Safe, professional laser tattoo removal in Kenya.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#how-it-works" className="text-text-muted-dark hover:text-white">How It Works</Link></li>
              <li><Link href="/packages" className="text-text-muted-dark hover:text-white">Packages</Link></li>
              <li><Link href="/gallery" className="text-text-muted-dark hover:text-white">Before & After</Link></li>
              <li><Link href="/ambassador-program" className="text-text-muted-dark hover:text-white">Ambassador Program</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted-dark">
              <li>info@inklessismore.ke</li>
              <li>+254 700 123 456</li>
              <li>123 Westlands Rd, Nairobi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-text-muted-dark hover:text-white"><TwitterIcon /></Link>
              <Link href="#" className="text-text-muted-dark hover:text-white"><InstagramIcon /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border-dark pt-8 text-center text-sm text-text-muted-dark">
          &copy; {new Date().getFullYear()} InklessIsMore.ke. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}