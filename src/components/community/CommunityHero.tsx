import React from 'react';

export const CommunityHero: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Main Hero Copy (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container text-secondary font-label-code-sm text-label-code-sm w-fit border border-outline-variant/30 font-semibold">
              <span className="material-symbols-outlined text-[15px]">campaign</span>
              <span>(DRAFT) STRATEGIC FRAMEWORK 2026-2027</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight font-bold">
              (DRAFT) Community Empowerment & Strategic Communication Plan
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              (DRAFT) Equipping research organizations, data stewards, and working groups with educational resources, while executing a transparent, milestone-driven outreach campaign.
            </p>
          </div>

          {/* Badges / Metrics Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/40 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-code-sm text-label-code-sm text-outline uppercase tracking-wider text-xs">
                  Active Cohorts
                </span>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  1,480+
                </span>
              </div>
              <div className="h-10 w-px bg-surface-container-high" />
              <div className="flex flex-col">
                <span className="font-label-code-sm text-label-code-sm text-outline uppercase tracking-wider text-xs">
                  Roadmap Status
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-code-md text-label-code-md text-on-tertiary-container font-semibold">
                  <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse" />
                  Phase 2 In-Flight
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
