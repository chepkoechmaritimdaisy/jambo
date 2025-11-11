// src/components/package/DetailsAccordion.tsx
import React from 'react';

const accordionItems = [
  {
    title: "What's Included",
    content: "This package includes 10 laser sessions, a free initial consultation, and a complete aftercare kit with soothing balms and protective wraps to ensure optimal healing and best results."
  },
  {
    title: "The Technology",
    content: "We use the industry-leading PicoSure laser, which shatters ink particles with ultra-short pulses. This advanced technology allows for faster clearance of ink, fewer sessions, and is effective on stubborn colors like blues and greens."
  },
  {
    title: "Before & After Care",
    content: "Proper care is crucial for success. Before your session, avoid sun exposure. After, keep the area clean and apply the provided aftercare products. We provide a detailed guide during your consultation."
  },
  {
    title: "FAQs",
    content: "A full sleeve typically requires 8-12 sessions, spaced 6-8 weeks apart. While there is some discomfort, we use cooling methods to make it as tolerable as possible. Most clients describe it as a rubber band snap."
  }
];

const DetailsAccordion = () => {
  return (
    <div className="flex flex-col pt-4">
      {accordionItems.map((item, index) => (
        <details key={index} className="flex flex-col border-t border-t-secondary py-2 group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
            <p className="text-text-dark text-base font-semibold leading-normal">{item.title}</p>
            <div className="text-text-dark transition-transform duration-300 group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <p className="text-text-light text-sm font-normal leading-relaxed pb-2">{item.content}</p>
        </details>
      ))}
    </div>
  );
};

export default DetailsAccordion;
