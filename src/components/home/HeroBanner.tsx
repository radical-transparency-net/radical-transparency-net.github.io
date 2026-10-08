import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
      {/* Subtle ambient blur accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-on-tertiary-container/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Hero Header Section */}
        <div className="max-w-4xl">
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">
            {siteConfig.tagline}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </div>
    </section>
  );
};
