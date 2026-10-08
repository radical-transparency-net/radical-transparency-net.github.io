import React from 'react';
import { tenetsData } from '../../data/theory';

export const PillarsGrid: React.FC = () => {
  return (
    <section className="flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-wider font-semibold">
            (DRAFT) Foundations
          </span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold">
            (DRAFT) Core Tenets & Pillars
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md">
          (DRAFT) Four operational requirements defining compliance with semantic interoperability frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
        {tenetsData.map((tenet, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high/40 flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  {tenet.icon}
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-code-sm text-label-code-sm text-outline">
                  {tenet.number}
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                  {tenet.title}
                </h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                {tenet.description}
              </p>
            </div>

            <div className="mt-space-lg pt-space-sm bg-surface-container-low px-space-sm py-2 rounded flex items-center justify-between text-label-code-sm font-label-code-sm text-on-surface">
              <span>{tenet.specLabel}</span>
              <span className="text-on-tertiary-container font-semibold">
                {tenet.specValue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
