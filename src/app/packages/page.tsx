// src/app/packages/page.tsx
import React from 'react';
import PricingCard from '@/components/PricingCard';

export default function PackagesPage() {
  const packages = [
    {
      name: "Micro Package",
      price: "KES 5,000",
      pricePer: "/ session",
      description: "For very small tattoos like single letters or symbols.",
      features: ["For single letters or symbols", "1 Session", "Includes aftercare advice"],
      ctaText: "Buy Now",
    },
    {
      name: "Small Area Package",
      price: "KES 15,000",
      pricePer: "/ package",
      description: "Ideal for tattoos up to the size of a business card.",
      features: ["Up to business card size", "3 Sessions", "Includes aftercare advice"],
      isPopular: true,
      ctaText: "Buy Now",
    },
    {
      name: "Medium Area Package",
      price: "KES 30,000",
      pricePer: "/ package",
      description: "Best for forearm, bicep, or calf pieces.",
      features: ["Forearm or bicep pieces", "6 Sessions", "Best value savings"],
      ctaText: "Buy Now",
    },
    {
      name: "Large Area / Custom",
      price: "Custom Price",
      description: "For back pieces, sleeves, or other large-scale work.",
      features: ["For sleeves or back pieces", "Custom sessions", "Free consultation included"],
      ctaText: "Book a Consultation",
      isCustom: true,
    },
  ];

  return (
    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
      <main className="mt-10 md:mt-16">
        <div className="flex flex-wrap justify-center text-center gap-3 p-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-[#111618] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Choose Your Path to Clear Skin</h1>
            <p className="text-[#617c89] dark:text-gray-400 text-base md:text-lg font-normal leading-normal">
              Find the perfect package designed for your tattoo size and removal goals. All packages include a professional consultation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <h4 className="text-[#617c89] dark:text-gray-400 text-sm font-bold leading-normal tracking-[0.015em] px-4 py-2 text-center">TRUSTED BY PROFESSIONALS</h4>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap p-4 mt-4">
            <img className="h-8 md:h-10 opacity-60 dark:invert dark:opacity-80" alt="PicoSure Laser Technology Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoKhYst6ChGFIqtZrrRQdoLlxAdKk6HN2BI17-1EHtsjc8t7N7Q2fIJhTipfiWF2aEW5XZANDP5cTr6dwxJ3j6E2CveCl0QmQqLThiKZOxeJY5Jdsjq48LV6ViwKphxMjPm4txiFua7yx2b9rHzJ82bWrIqdHqUBUyblgJSmSk-VLsU29HM62HiPvGjo77O1-XE6BXo6rzjXFcV5cO2rZfzhuAgJCP6aXhPdPTYF_xoRUlesigJEy67jAvOC13EGSfzmRSSApYjNk" />
            <img className="h-8 md:h-10 opacity-60 dark:invert dark:opacity-80" alt="Cynosure Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH7qBhKg1-jkBBUQjW2FgQuI9sR1X71rhcZYYAW5YS90zOncPNqlUVDk-Wqh8OfnRS85vMgMHOJWxv8IShgWUtJ71cQsL4IoBO8lCVHfRkNiE4kPYPKo9-suF9Gan1EWCqGk1wW-88L01y0H4hPcNKZOxRj7WMPigAIE7cdCUxmGKFhLqSc5FkzJdALX_WPGY1w1TcPSMZC6yiP6B2WwWIgNzgTvXLXZvEsW8TXSqSWtxIbQsuJWH-MZp3Sdsx8sOLv-CysWclhr0" />
            <img className="h-8 md:h-10 opacity-60 dark:invert dark:opacity-80" alt="Quanta System Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1rihW8M6TtEYgakeBia0bI3LZZNYbxqaQHzHgi-BLi4vbw5HFrASocAy0ayoqSZeoYgln9N4_sBDzXtHaYX-M-mq_1dwVxSDQNXj0mCcLSzjABacauhACXWtHprBupam3uCiZl8ym830-gmtuxiMQ4pWYaApV0ZR4loAIcO2HhGC4xAvNjuQkg6OnZtZID34uPlnt1EN2hWGgw6kZVTqGwHze9hmAXun--_ixCtsH5WmaxjkvEo_mU7dVWJUPt3_uv7SbSISMKBo" />
            <img className="h-8 md:h-10 opacity-60 dark:invert dark:opacity-80" alt="Astanza Laser Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Sftt_3Ct0q_jS97YNGFWU6pmRhYFABVL_wV5wml4UAL9qBPA1EU6FuUYto-HOIx7FShV3ooUPrTKZv9oodyNAPM1gYSuKz5ZeCLqNmVBeBu7_75arFUAjsj00v7RjqRR369oZGmN96ZNsS4T_YjQV9XzWXk6mkBzDQA76KDgNowltGhV-su-TN2qHNMAML0bEaSZUh_8ieELlzJB-WXsqWeh1Wf3oSIh74H3vHtgioxyOVhOii0hjuSMN7FNqpjS3dOu1-r-43U" />
          </div>
        </div>
      </main>
    </div>
  );
}
