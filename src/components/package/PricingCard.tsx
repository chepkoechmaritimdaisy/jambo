// src/components/package/PricingCard.tsx
import React from 'react';

const PricingCard = () => {
  return (
    <div className="sticky top-24 rounded-xl border border-secondary bg-white p-6 shadow-sm">
      <div className="flex items-baseline justify-between">
        <p className="text-4xl font-extrabold text-text-dark">Ksh 150,000</p>
        <span className="rounded-full bg-accent-coral/20 px-3 py-1 text-xs font-bold text-accent-coral">SAVE 15%</span>
      </div>
      <p className="mt-1 text-sm text-text-light">Full package price</p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary-navy/10 text-primary-navy">
            <span className="material-symbols-outlined text-base">check</span>
          </div>
          <span className="text-text-dark font-medium">10 PicoSure Laser Sessions</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary-navy/10 text-primary-navy">
            <span className="material-symbols-outlined text-base">check</span>
          </div>
          <span className="text-text-dark font-medium">Initial Expert Consultation</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary-navy/10 text-primary-navy">
            <span className="material-symbols-outlined text-base">check</span>
          </div>
          <span className="text-text-dark font-medium">Premium Aftercare Kit</span>
        </li>
      </ul>
      <button className="mt-8 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-coral text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90">
        <span className="truncate">Purchase Package</span>
      </button>
      <p className="mt-4 text-center text-xs text-text-light">Secure payment processing. Schedule your first session after checkout.</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <img alt="Visa logo" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkgKQjeNZqEI1jn4Nnd0mXrsITCluGyvH25q5VYAlxUL8LQrkEOvLN3Yl8W_wu762sjdGpPF3tTKoI0bUStvws6y-R3TAV7QYvkqd7tc-sFbDY3MUe2EnoBFjfTygBR_a9fhwM-rDQhyh_jEkr5eiTxEXoGQdy5PbgDXBm0UC71qgd9hhA1mNf6SHqrvLcYlgpn0U0MKhs4h1-5ABHntxSJKvtx8orWrC4RE_YivuSZvlYR6DOmt3DwuwrohVop1Z4rHO9KT9q6Y0"/>
        <img alt="M-Pesa logo" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DIgApUbYCUvYiFCIOlqMqkraXBGcIwd8LByl77mNYxaURhg_kERLr-pOz660uG8x61wELqB5etqkZM7msMgCNfm__sky74IlpC0MANEJBX15pAtFBZDdL78npRSEfu4aDLWwIQSligVjZnz1chRX0083PEX3j4DUc1ML6TB__vdcTS_m2nv0Lp1qythNnq9Rfi1DLvFzcKcbomjhuuCNDKajJT-2961OAuRWZ0J7ARpRrzobR9Vyzon7Svw7aJCgd3jwIKiGOcg"/>
        <img alt="Mastercard logo" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEW7iT2kLoovLeZNvPgYWoVq_zD-vS9EDQFlFOv0GtrqEZgXjNLoFJMHhBlOTyJd-x2XbycxT83eIdCP6yuLo7TDQQzRQXBrqQ8t1OV6eIucvIefhTVCgkY6jPkbeA3u29mztR-JF7Tx1v2YPphgQemAXMrgagMq09EvtBG9F65rs5xuhnjka1-vaGk4EkNMv6UIdIaKc_6da4jmfJrfjyvq8zjt-y29EXBp_-hMy8s2ncu09DCJwWcqdFeML12mNFzhqn_LrEYe0"/>
      </div>
    </div>
  );
};

export default PricingCard;
