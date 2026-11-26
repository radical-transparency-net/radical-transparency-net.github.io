import React from 'react';
import { toolsBetaNotice } from '../../data/tools';

export const BetaNoticeBanner: React.FC = () => {
  return (
    <div className="rounded-xl bg-surface-container border border-secondary/30 p-space-lg flex items-start gap-space-md">
      <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">
        construction
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-space-xs mb-1">
          <span className="px-space-xs py-0.5 rounded bg-secondary text-on-secondary font-badge-caps text-badge-caps uppercase tracking-wider">
            {toolsBetaNotice.label}
          </span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">
            {toolsBetaNotice.title}
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {toolsBetaNotice.message}
        </p>
      </div>
    </div>
  );
};
