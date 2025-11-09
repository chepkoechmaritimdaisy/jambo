import Image from "next/image";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqOS2uiY_YsGT1f_OvfFnYL-1ZzGpr7a3S6wbslLUvjCpvK3C_19YEWn09wcLhZSfE1SYoXrJ_Ow-zG-e_fP9l4o8cUh6tz7p9qdGPlXULTTxiuTzzM2qkj2QDu8UaTR-02AzvDhflvyAcp3gBattjy7Mb-OPkrHnTKL-ZZo5VGfx9heeS5pg9_4KMuhfRIa6wmeHg8F4xsjG_qkTzdOJSxxbLxpj4HXnHcwVvzLQFlSynZDcZTQveOsq5KVUNJ3lD_wbjgpRILdY",
    alt: "Before and after of a tattoo removal after 6 sessions",
    title: "6 Sessions",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhrMmhmVJIhE5Id0OUWs8OmP7-l7Hh_Nv2JbNDgDpBu2GFdDfKZar14sMCNeC_IbfBFmtioBNAcSmtwb_zQi1rTcLajwiMNnLtZZKfm7t_fEiU574WnsSCCZFc7RbFw-bMAJj13vRh4RbgL3tJD9qpa_OlVQxjsktUKjm8ALHVhZ0GdGEknqAtrOVv5LihJDE4xJFf76W-vlAcYnn2xrUd_CfCR-7mD1kHKO1KtLqCHM6S0r5biYbNioeTj4uu4LE3uHDMAXie9YU",
    alt: "Before and after of a tattoo removal after 8 sessions",
    title: "8 Sessions",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmY_RIGyDQleYbyLCwCHPA9W1ML5Cw7badVyP8VYI1EAJ2zLFbGw7c8VZsUlFlUo-mv9o1wGT6AaCfAeJIbsZqAwWLQWmPo27jrJVct-zlWx1kboFHLLUAs5kLAjdkCCrKVwZJpGYvv7st3rpTC0Ee4BmfV3y6C3HZSU0BDwGge4OWCBjibeVivM-cFlavACecX-Ls8Nu5MrPIWa7Qkpes1ZiT3-uBZQ7C0fljJ3Y0qMdR60AJ_oF_rb7nfXgIdtpN9LZwuH3WKK8",
    alt: "Complete removal of a full color tattoo",
    title: "Full Color Removal",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbuXtdUeCwvkF5MBU2tJtP8yZQt05m2gYY_p38fz7tl2nq6NhniD14Ns5ihyoNZSAvgtxsHN037jC5Kw7or9JLGwXjr4liWV-kUBJSGAuLMr7xcwh6TSSv_DuKg6hf0FAesxscop7wWBuJvibJDPLIFTmTOYhQN8BXPcw7l-0KXvSpKkHQrDZ8TLO2XVJns3ENAb0tsayZQGu4oComvMujnqqKgFdah1hBNjyZ1L48ZYOur43xhJne3bW9pZyVnpOtuXzaVyaP0_8",
    alt: "Fading of an old tattoo for a new cover-up",
    title: "Fading for Cover-up",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
          Real Clients, Real Results.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted-dark">
          See the transformations we've achieved. Your journey to clear skin starts here.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg aspect-[3/4]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-base font-bold leading-tight text-white">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
