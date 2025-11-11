// src/components/package/TestimonialAndCTA.tsx
import React from 'react';

const TestimonialAndCTA = () => {
  return (
    <>
      <div className="mt-16 bg-secondary-grey py-12 rounded-xl">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark">What Our Clients Say</h2>
          <div className="mt-8">
            <img alt="Photo of satisfied client John Doe" className="mx-auto h-20 w-20 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk9DlzaWdl9TlGlgAfCwc-fBSjVgctiC17fymXeiyN_xDZv9LhFoqILjTRta8sAsL3fz5u9glfCn9dv0mOhHADnjLbES9WyNyFlfrUBQuoQEcIInytrg7Yn2T2lxOy2AorIACfhFfSFQjvYJGs2OCyNccvKUaEpSpeaEo98-vKadf5BED2rjxmfoZYw0dXHDrkjxXzi-MuTaPLm1f0eVWf42LhiemRRdZK-MlkroyfctWgpaptGxn9LDgRg3bCdcGuf9gB3-kmGtE"/>
            <blockquote className="mt-6 text-lg leading-8 text-text-dark">
              <p>“I never thought I'd see my arm without that old tattoo again. The team at InklessIsMore was professional, the process was smoother than I expected, and the results are just incredible. Worth every shilling.”</p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-semibold text-text-dark">John D.</div>
              <div className="text-text-light">Full Sleeve Removal Client</div>
            </figcaption>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full rounded-xl bg-primary-navy px-6 py-12 text-center md:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">Not Ready to Commit?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">Let's talk. Book a free, no-obligation consultation with one of our specialists to discuss your goals and get a personalized plan.</p>
        <div className="mt-8 flex justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary-navy text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90">
            <span className="truncate">Book a Free Consultation</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialAndCTA;
