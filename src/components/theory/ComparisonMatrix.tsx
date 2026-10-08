import React from 'react';
import { comparisonMatrixData } from '../../data/theory';

export const ComparisonMatrix: React.FC = () => {
  const { closedCrosswalks, radicalTransparency } = comparisonMatrixData;

  return (
    <section className="flex flex-col gap-space-lg" id="matrix-breakdown">
      <div className="flex flex-col gap-space-xs">
        <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-wider font-semibold">
          (DRAFT) Comparative Architecture
        </span>
        <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold">
          (DRAFT) From Ambiguity to Clarity
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          (DRAFT) Observe how the Radical Transparency Model eliminates systematic points of failure inherent in conventional closed-source crosswalks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop items-stretch">
        {/* Left: Closed Crosswalks */}
        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm border border-surface-container-high/40 flex flex-col gap-space-md">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/40">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 rounded-full bg-error" />
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                {closedCrosswalks.title}
              </h3>
            </div>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-error font-badge-caps text-badge-caps uppercase">
              {closedCrosswalks.badge}
            </span>
          </div>

          <div className="flex flex-col gap-space-md text-body-md font-body-md">
            {closedCrosswalks.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-xs border border-surface-container-high/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="material-symbols-outlined text-error text-[20px]">
                    cancel
                  </span>
                </div>
                <p className="text-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-space-md bg-surface-container p-space-md rounded-lg">
            <span className="font-label-code-sm text-label-code-sm text-error uppercase block mb-1 font-semibold">
              {closedCrosswalks.impactLabel}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {closedCrosswalks.impactText}
            </p>
          </div>
        </div>

        {/* Right: Radical Transparency Model */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md ring-2 ring-secondary/30 border border-secondary/20">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/40">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 rounded-full bg-on-tertiary-container" />
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                {radicalTransparency.title}
              </h3>
            </div>
            <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase font-semibold">
              {radicalTransparency.badge}
            </span>
          </div>

          <div className="flex flex-col gap-space-md text-body-md font-body-md">
            {radicalTransparency.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs border border-surface-container-high/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    check_circle
                  </span>
                </div>
                <p className="text-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-space-md bg-surface-container-low p-space-md rounded-lg">
            <span className="font-label-code-sm text-label-code-sm text-secondary uppercase block mb-1 font-semibold">
              {radicalTransparency.impactLabel}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {radicalTransparency.impactText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
