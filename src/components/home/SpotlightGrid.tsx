import React from 'react';
import { proposalSpotlightsData } from '../../data/spotlight';
import { siteConfig } from '../../data/siteConfig';

export const SpotlightGrid: React.FC = () => {
  return (
    <div className="w-full bg-surface-container-low py-space-xl border-t border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline font-semibold">
              (DRAFT) Featured Specifications
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              (DRAFT) Quick Start Spotlight
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
            href={siteConfig.proposalsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>View full GitHub proposal tree</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {proposalSpotlightsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high/40 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-space-xs mb-space-md">
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-badge-caps text-badge-caps uppercase">
                    {item.category}
                  </span>
                  <span className="font-label-code-sm text-label-code-sm text-outline">
                    {item.fileType}
                  </span>
                </div>

                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    assignment
                  </span>
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  {item.description}
                </p>

                <div className="p-space-sm rounded bg-surface-container font-label-code-sm text-label-code-sm text-on-surface-variant mb-space-md font-mono">
                  <code>{item.uri}</code>
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-md border-t border-surface-container-high/30">
                <span className={`font-label-code-sm text-label-code-sm font-semibold ${item.statusColor || 'text-on-tertiary-container'}`}>
                  {item.status}
                </span>
                <a
                  className="inline-flex items-center gap-1 font-label-code-sm text-label-code-sm font-semibold text-secondary hover:underline"
                  href={item.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Read Doc</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
