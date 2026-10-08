import React from 'react';
import { playbookTracksData } from '../../data/community';

export const PlaybookTracks: React.FC = () => {
  return (
    <section className="flex flex-col gap-space-lg w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm border-b border-surface-container-high/40">
        <div>
          <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-widest font-semibold">
            (DRAFT) Track 01 • Capacity Building
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            (DRAFT) Educational & Community Enablement
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
            (DRAFT) Structured, role-tailored tooling to bridge high-level policy with machine-actionable FAIR execution.
          </p>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="px-space-sm py-1 rounded bg-surface-container text-on-surface font-label-code-sm text-label-code-sm border border-outline-variant/30 font-medium">
            Role-Specific Tracks: 3
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
        {playbookTracksData.map((track) => (
          <div
            key={track.id}
            className="relative flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high/40 hover:shadow-md transition-shadow"
          >
            <div className="h-44 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container relative">
              <img
                className="w-full h-full object-cover"
                alt={track.imageAlt}
                src={track.imageUrl}
              />
            </div>

            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className={`px-space-xs py-0.5 rounded bg-surface-container-high ${track.badgeColor || 'text-secondary'} font-badge-caps text-badge-caps uppercase font-semibold`}>
                {track.badge}
              </span>
              <span className="font-label-code-sm text-label-code-sm text-outline">
                {track.trackCode}
              </span>
            </div>

            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
              {track.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              {track.description}
            </p>

            <ul className="flex flex-col gap-space-xs mb-space-lg flex-1">
              {track.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-space-xs p-space-xs rounded hover:bg-surface-container-low transition-colors"
                >
                  <span className={`material-symbols-outlined ${track.badgeColor || 'text-secondary'} text-[20px] shrink-0 mt-0.5`}>
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      {item.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-space-md border-t border-surface-container-high/30">
              <button
                onClick={() => alert(`Accessing ${track.title}`)}
                className="w-full flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
              >
                <span>{track.ctaText}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
