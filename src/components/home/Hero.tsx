const Hero = () => {
  return (
    <div className="@container px-4 sm:px-8 py-10 md:py-20">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-10"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 46, 53, 0.2) 0%, rgba(26, 46, 53, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaWFswZGii0Pp32A8la2iZmEp_p8jUACpn2NFCRQBpmrRT6LzTyStE8sEVy_Ulo1FjpIUbkLONGamVtk8NJR4bDVwPfUNG0jctEZD0H56oQbqo-_DNyEsa95kgBI8lFdYg9Jg4Lq1pec8QQwvL9B7iA5QGDUrgrt7qIRoWmB44rA_XIIPHYwjfgJfgkMJImlW1Z7Nu_N6a091af8u6_Yza3hLOWhYJftXqrh5gCSPNr-DqbNlVs4od0xDvtR2w8XXNo5eysgg4F0w')`,
        }}
      >
        <div className="flex flex-col gap-3 text-left max-w-xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Your Clean Slate Awaits</h1>
          <h2 className="text-gray-200 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">Experience safe, effective, and professional laser tattoo removal. Begin your journey to clear skin today.</h2>
        </div>
        <div className="flex-wrap gap-3 flex">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 @[480px]:h-12 @[480px]:px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:opacity-90 transition-opacity">
            <span className="truncate">View Packages</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 @[480px]:h-12 @[480px]:px-6 bg-white/20 backdrop-blur-sm text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-white/30 transition-colors">
            <span className="truncate">See Before & After</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
