import React from 'react';
import { specCardsData } from '../../data/tooling';

export const SpecsGrid: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
        <div className="flex flex-col">
          <span className="font-label-code-sm text-label-code-sm text-secondary uppercase tracking-wider font-semibold">
            Standards & Blueprints
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Core Technical Specifications
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Formal constraints for crosswalk assertions, linkset packaging, and regression test suites aligned with EOSC Core Interoperability Framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {specCardsData.map((spec) => (
          <div
            key={spec.id}
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">
                    {spec.icon}
                  </span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
                  {spec.badge}
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold group-hover:text-secondary transition-colors">
                {spec.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                {spec.description}
              </p>

              <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md font-label-code-sm text-label-code-sm text-on-surface-variant flex flex-col gap-1 border border-surface-container-high/30">
                <span className="text-outline uppercase text-[10px] font-semibold">Active Profile Target</span>
                <span className="text-on-surface font-semibold truncate font-mono">
                  {spec.targetUri}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-sm border-t border-surface-container-high/30">
              <a
                className="font-body-sm text-body-sm font-semibold text-secondary hover:underline flex items-center gap-1"
                href={spec.specUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Raw Schema Spec</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
              <span className="font-badge-caps text-badge-caps uppercase text-outline">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
