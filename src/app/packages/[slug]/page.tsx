// src/app/packages/[slug]/page.tsx
import React from 'react';
import Hero from '@/components/package/Hero';
import ImageCarousel from '@/components/package/ImageCarousel';
import DetailsAccordion from '@/components/package/DetailsAccordion';
import PricingCard from '@/components/package/PricingCard';
import TestimonialAndCTA from '@/components/package/TestimonialAndCTA';

type PackageDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  return (
    <div className="layout-content-container flex w-full max-w-4xl flex-col px-4 sm:px-6">
      <Hero />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12 mt-6">
        <div className="lg:col-span-2">
          <p className="text-text-light-blue text-base font-normal leading-relaxed pb-3 pt-1">
            This package is designed for the complete removal of large tattoos, such as full sleeves. Our state-of-the-art PicoSure laser technology ensures effective results with minimal discomfort, helping you regain your skin's natural appearance. It's the ideal solution for those committed to a clean slate.
          </p>
          <ImageCarousel />
          <DetailsAccordion />
        </div>
        <div className="lg:col-span-1">
          <PricingCard />
        </div>
      </div>
      <TestimonialAndCTA />
    </div>
  );
}
