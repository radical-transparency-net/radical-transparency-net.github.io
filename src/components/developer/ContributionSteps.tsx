import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const ContributionSteps: React.FC = () => {
  return (
    <section className="w-full">
      <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-surface-container-high/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Steps content (8 cols) - Lorem Ipsumified */}
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-secondary font-badge-caps text-badge-caps uppercase tracking-wider font-semibold">
                (DRAFT) Lorem Governance Protocol
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              (DRAFT) Lorem Ipsum: Contribution Guidelines
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque euismod venenatis. Mauris sit amet massa vitae tortor sodales tincidunt.
            </p>

            {/* Step Progression Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-sm">
              <div className="flex flex-col gap-1 p-space-md bg-surface-container-low rounded-lg border border-surface-container-high/30">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-code-sm text-label-code-sm flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Lorem Step 1
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                </p>
              </div>

              <div className="flex flex-col gap-1 p-space-md bg-surface-container-low rounded-lg border border-surface-container-high/30">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-code-sm text-label-code-sm flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Lorem Step 2
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>

              <div className="flex flex-col gap-1 p-space-md bg-surface-container-low rounded-lg border border-surface-container-high/30">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-code-sm text-label-code-sm flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Lorem Step 3
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.
                </p>
              </div>
            </div>
          </div>

          {/* PR Submission Card Callout (4 cols) */}
          <div className="lg:col-span-4 flex flex-col p-space-lg rounded-xl bg-surface-container-low gap-space-md border border-surface-container-high/40">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[28px] text-on-surface">
                commit
              </span>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Lorem Proposals
                </span>
                <span className="font-label-code-sm text-label-code-sm text-outline font-mono text-xs">
                  lorem-open-source/repo
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <div className="flex flex-col gap-2 pt-space-xs">
              <a
                className="w-full inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>Open Lorem Pull Request</span>
              </a>
              <a
                className="w-full inline-flex items-center justify-center gap-1 text-center font-body-sm text-body-sm text-secondary hover:underline py-1 font-medium"
                href={siteConfig.proposalsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read Lorem Guidelines</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
