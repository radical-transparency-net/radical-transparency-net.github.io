import React from 'react';
import { pulseStatsData } from '../../data/spotlight';

export const PulseStats: React.FC = () => {
  return (
    <div className="w-full bg-surface-container-lowest border-y border-surface-container-high/40 shadow-sm py-space-md">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter-desktop items-center">
          {pulseStatsData.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-space-md py-space-xs">
              <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${stat.color || 'text-on-surface'}`}>
                <span className="material-symbols-outlined text-[22px]">
                  {stat.icon}
                </span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-on-surface font-bold">
                  {stat.value}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
