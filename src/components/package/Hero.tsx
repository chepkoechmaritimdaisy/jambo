// src/components/package/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full @container">
      <div className="@[480px]:px-0 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-96"
          style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYXMxOQ_yJNKZxakneEMJccwV2CwZuS0EROiF9t4CtCwetQ3OVOdpKywDQTaXaJU8FzS04EbXzPs1LlugCaOf7xDHNwaQ8N1AouK4c_k1W9SBZ884K0r27v3Y8xTfkpEb7qYkVJNNhGdqaNals5NXdqPXlg6zPSgjUnPxQvpyzn1Q1atbOJOiqVb4SFBnDl2LovjuVXoYIa5wnO5kBSulVr1jDkQxHyKjiPsxe-7p-X25UtIOp-IytJP2Ko7zESFvALWyROqBh_ZY")'}}
        >
          <div className="flex flex-col p-6 sm:p-8">
            <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Full Sleeve Removal Package</h1>
            <p className="text-white/90 mt-2 max-w-lg text-lg">Complete removal for large tattoos using state-of-the-art PicoSure laser technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
