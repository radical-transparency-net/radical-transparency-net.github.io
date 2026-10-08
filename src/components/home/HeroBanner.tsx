import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-surface-container-low pb-space-xl border-b border-surface-container-high/40">
      {/* Subtle ambient blur accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-on-tertiary-container/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-margin pt-space-xl">
        {/* Institutional Context Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
          <div className="flex items-center gap-space-xs font-label-code-sm text-label-code-sm text-on-surface-variant">
            <span className="px-space-xs py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-semibold border border-outline-variant/30">
              RT-NET
            </span>
            <span>/</span>
            <span className="text-secondary font-semibold">EOSC-SI TF</span>
            <span>/</span>
            <span className="font-label-code-sm text-outline">{siteConfig.version}</span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-lowest text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider shadow-sm border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              {siteConfig.specStatus}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-code-sm text-label-code-sm shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[15px] text-outline">verified_user</span>
              {siteConfig.license}
            </span>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="max-w-4xl mb-space-xl">
          <div className="inline-flex items-center gap-space-xs mb-space-sm px-space-sm py-1 rounded bg-surface-container text-secondary font-badge-caps text-badge-caps uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">device_hub</span>
            INTEROPERABILITY ARCHITECTURE PORTAL
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">
            {siteConfig.tagline}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </div>
    </div>
  );
};
