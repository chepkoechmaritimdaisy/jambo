import { getPackageById } from '@/lib/db';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createCheckoutSession } from '@/app/actions/stripe';

export default async function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = await getPackageById(params.slug);

  if (!pkg) {
    notFound();
  }

  const handlePurchase = createCheckoutSession.bind(null, pkg.id, pkg.name, pkg.price);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          {/* Placeholder for image gallery */}
          <div className="aspect-square relative rounded-xl overflow-hidden">
            <Image
              src={pkg.photos?.[0] || "https://lh3.googleusercontent.com/aida-public/AB6AXuCYXMxOQ_yJNKZxakneEMJccwV2CwZuS0EROiF9t4CtCwetQ3OVOdpKywDQTaXaJU8FzS04EbXzPs1LlugCaOf7xDHNwaQ8N1AouK4c_k1W9SBZ884K0r27v3Y8xTfkpEb7qYkVJNNhGdqaNals5NXdqPXlg6zPSgjUnPxQvpyzn1Q1atbOJOiqVb4SFBnDl2LovjuVXoYIa5wnO5kBSulVr1jDkQxHyKjiPsxe-7p-X25UtIOp-IytJP2Ko7zESFvALWyROqBh_ZY"}
              alt={pkg.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-white">{pkg.name}</h1>
          <p className="mt-4 text-lg text-text-muted-dark">{pkg.description}</p>

          <div className="mt-8">
            <p className="text-4xl font-extrabold text-white">Ksh {pkg.price.toLocaleString()}</p>
            <p className="mt-1 text-sm text-text-muted-dark">Full package price</p>
          </div>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-medium text-white">{pkg.sessions} PicoSure Laser Sessions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-medium text-white">Initial Expert Consultation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-medium text-white">Premium Aftercare Kit</span>
            </li>
          </ul>
          <form action={handlePurchase}>
            <button type="submit" className="mt-8 w-full rounded-lg bg-primary h-12 px-6 text-base font-bold text-white transition-opacity hover:opacity-90">
              Purchase Package
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
