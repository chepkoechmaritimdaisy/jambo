import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 py-10 md:py-16 mt-10 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 text-text-primary mb-4">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path></svg>
            </div>
            <h2 className="text-lg font-bold">InklessIsMore.ke</h2>
          </div>
          <p className="text-text-secondary text-sm">Your journey to a clean slate starts here. Safe, professional laser tattoo removal in Kenya.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-text-primary mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">How it Works</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">Packages</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">Before & After</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">Ambassador Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-3">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">info@inkless.ke</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-primary">+254 700 123 456</Link></li>
              <li className="text-sm text-text-secondary">123 Westlands Rd, Nairobi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-text-secondary hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.26,10.54C3.54,10.52 2.87,10.31 2.3,10V10.03C2.3,12.11 3.81,13.85 5.79,14.24C5.45,14.33 5.08,14.38 4.7,14.38C4.44,14.38 4.19,14.36 3.94,14.31C4.49,16.03 6.13,17.26 8.09,17.3C6.59,18.45 4.74,19.12 2.76,19.12C2.4,19.12 2.05,19.1 1.7,19.04C3.68,20.29 5.96,21 8.38,21C16,21 20.4,14.47 20.4,8.79C20.4,8.58 20.4,8.37 20.39,8.16C21.23,7.55 21.93,6.82 22.46,6Z"></path></svg>
              </Link>
              <Link href="#" className="text-text-secondary hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.069,1.645,0.069,4.85s-0.012,3.584,-0.07,4.85c-0.148,3.227,-1.669,4.771,-4.919,4.919c-1.266,0.058,-1.644,0.07,-4.85,0.07s-3.584,-0.012,-4.85,-0.07c-3.252,-0.148,-4.771,-1.691,-4.919,-4.919c-0.058,-1.265,-0.069,-1.645,-0.069,-4.85s0.012,-3.584,0.07,-4.85c0.148,-3.227,1.669,-4.771,4.919,-4.919c1.266,-0.057,1.645,-0.069,4.85,-0.069Zm0,2.162c-3.141,0,-3.483,0.011,-4.707,0.066c-2.449,0.113,-3.84,1.505,-3.954,3.954c-0.056,1.224,-0.066,1.565,-0.066,4.707s0.01,3.483,0.066,4.707c0.113,2.449,1.505,3.84,3.954,3.954c1.224,0.056,1.565,0.066,4.707,0.066s3.483,-0.01,4.707,-0.066c2.449,-0.113,3.84,-1.505,3.954,-3.954c0.056,-1.224,0.066,-1.565,0.066,-4.707s-0.01,-3.483,-0.066,-4.707c-0.113,-2.449,-1.505,-3.84,-3.954,-3.954c-1.224,-0.056,-1.565,-0.066,-4.707,-0.066Zm0,4.688c-2.65,0,-4.809,2.159,-4.809,4.809s2.159,4.809,4.809,4.809,4.809,-2.159,4.809,-4.809S14.65,9.013,12,9.013Zm0,7.612c-1.549,0,-2.803,-1.254,-2.803,-2.803s1.254,-2.803,2.803,-2.803,2.803,1.254,2.803,2.803S13.549,16.625,12,16.625Zm4.965,-8.046c-0.627,0,-1.135,0.508,-1.135,1.135s0.508,1.135,1.135,1.135,1.135,-0.508,1.135,-1.135S17.592,8.579,16.965,8.579Z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-text-secondary text-sm mt-12 pt-6 border-t border-gray-200">
        © 2024 InklessIsMore.ke. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
