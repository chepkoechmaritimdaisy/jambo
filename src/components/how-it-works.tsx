// src/components/how-it-works.tsx

import { ConsultationIcon } from "@/components/icons/consultation";
import { TreatmentIcon } from "@/components/icons/treatment";
import { AftercareIcon } from "@/components/icons/aftercare";

export function HowItWorks() {
  return (
    <section className="bg-background-dark py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
            <div className="rounded-full bg-primary/20 p-3 text-primary">
              <ConsultationIcon />
            </div>
            <h3 className="text-lg font-bold leading-tight text-white">1. Consultation</h3>
            <p className="text-sm font-normal leading-normal text-text-muted-dark">
              We assess your tattoo and skin to create a personalized, safe removal plan tailored just for you.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
            <div className="rounded-full bg-primary/20 p-3 text-primary">
              <TreatmentIcon />
            </div>
            <h3 className="text-lg font-bold leading-tight text-white">2. Treatment</h3>
            <p className="text-sm font-normal leading-normal text-text-muted-dark">
              Our advanced Picosecond laser technology safely and effectively breaks down the tattoo ink particles.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border-dark bg-container-dark p-6 text-center">
            <div className="rounded-full bg-primary/20 p-3 text-primary">
              <AftercareIcon />
            </div>
            <h3 className="text-lg font-bold leading-tight text-white">3. Aftercare</h3>
            <p className="text-sm font-normal leading-normal text-text-muted-dark">
              We provide comprehensive aftercare instructions and support to ensure your skin heals perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}