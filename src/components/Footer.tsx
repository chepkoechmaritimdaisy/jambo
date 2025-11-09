export default function Footer() {
  return (
    <footer className="mt-auto border-t border-solid border-white/10 bg-background-dark py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-bold text-white">InklessIsMore.ke</h2>
            <p className="mt-2 text-sm text-white/60">Your journey to clear skin starts here.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-white/60 hover:text-white" href="#">Home</a></li>
              <li><a className="text-white/60 hover:text-white" href="#">Services</a></li>
              <li><a className="text-white/60 hover:text-white" href="#">Packages</a></li>
              <li><a className="text-white/60 hover:text-white" href="#">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-white/60 hover:text-white" href="#">About Us</a></li>
              <li><a className="text-white/60 hover:text-white" href="#">Ambassador Program</a></li>
              <li><a className="text-white/60 hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Connect</h3>
            {/* Social media icons can be added here */}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2024 InklessIsMore.ke. All rights reserved. | <a className="hover:text-white" href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
