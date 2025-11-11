// src/components/PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  pricePer?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  isCustom?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  pricePer,
  description,
  features,
  isPopular,
  ctaText,
  isCustom
}) => {
  const popularBadge = isPopular ? (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
      <p className="text-white text-xs font-bold leading-normal tracking-[0.015em] rounded-full bg-primary px-4 py-1.5 text-center">Most Popular</p>
    </div>
  ) : null;

  const cardClasses = `flex flex-1 flex-col gap-6 rounded-xl border p-6 transition-shadow hover:shadow-lg dark:hover:shadow-primary/10
    ${isPopular ? 'border-2 border-solid border-primary bg-white dark:bg-card-dark' : 'border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-card-dark'}`;

  return (
    <div className={cardClasses}>
      {popularBadge}
      <div className="flex flex-col gap-4">
        <h3 className="text-[#111618] dark:text-white text-lg font-bold leading-tight">{name}</h3>
        <p className="flex items-baseline gap-1 text-[#111618] dark:text-white">
          <span className={isCustom ? "text-3xl font-black leading-tight tracking-[-0.033em]" : "text-4xl font-black leading-tight tracking-[-0.033em]"}>{price}</span>
          {pricePer && <span className="text-base font-bold leading-tight">{pricePer}</span>}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 text-sm font-normal leading-normal text-[#111618] dark:text-gray-300">
            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
            {feature}
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2 pt-4">
        <button className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors
          ${isCustom ? 'bg-gray-100 dark:bg-gray-800 text-[#111618] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'bg-primary text-white hover:bg-primary/90'}`}>
          <span className="truncate">{ctaText}</span>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
