export default function AmbassadorProgramPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
          Partner with Us. Become an InklessIsMore Ambassador.
        </h1>
        <h2 className="mt-4 text-lg text-white/80 sm:text-xl">
          Unlock your earning potential while helping others on their journey to clear skin.
        </h2>
        <button className="mt-8 rounded-lg bg-primary px-5 h-12 text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
          Become an Ambassador
        </button>
      </div>

      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold leading-tight tracking-tight text-white">The Benefits of Joining</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">paid</span>
            <h3 className="text-xl font-bold text-white">Earn Commission</h3>
            <p className="text-sm text-white/70">Generous commission on every successful referral.</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">school</span>
            <h3 className="text-xl font-bold text-white">Get Trained</h3>
            <p className="text-sm text-white/70">Become an expert in our services.</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">diversity_3</span>
            <h3 className="text-xl font-bold text-white">Empower Clients</h3>
            <p className="text-sm text-white/70">Help people in your community gain confidence.</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">construction</span>
            <h3 className="text-xl font-bold text-white">Exclusive Tools</h3>
            <p className="text-sm text-white/70">Access marketing materials to help you succeed.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
