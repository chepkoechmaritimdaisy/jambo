const HowItWorks = () => {
  return (
    <section className="px-4 sm:px-8 py-10 md:py-16">
      <h2 className="text-text-primary text-center text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 text-center items-center">
          <div className="text-primary bg-accent-light rounded-full p-3"><span className="material-symbols-outlined text-3xl">medical_services</span></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-text-primary text-lg font-bold leading-tight">1. Consultation</h3>
            <p className="text-text-secondary text-sm font-normal leading-normal">We assess your tattoo and skin to create a personalized, safe removal plan tailored just for you.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 text-center items-center">
          <div className="text-primary bg-accent-light rounded-full p-3"><span className="material-symbols-outlined text-3xl">bolt</span></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-text-primary text-lg font-bold leading-tight">2. Treatment</h3>
            <p className="text-text-secondary text-sm font-normal leading-normal">Our advanced Picosecond laser technology safely and effectively breaks down the tattoo ink particles.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-background-light p-6 text-center items-center">
          <div className="text-primary bg-accent-light rounded-full p-3"><span className="material-symbols-outlined text-3xl">healing</span></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-text-primary text-lg font-bold leading-tight">3. Aftercare</h3>
            <p className="text-text-secondary text-sm font-normal leading-normal">We provide comprehensive aftercare instructions and support to ensure your skin heals perfectly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
