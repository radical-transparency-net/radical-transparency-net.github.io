import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeReadingPaths } from '../../data/home';
import { getPatternById } from '../../data/patterns';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';

export const ReadingPathsSection: React.FC = () => {
  const [activePathId, setActivePathId] = useState<string>(homeReadingPaths[0].id);
  const activePath =
    homeReadingPaths.find((p) => p.id === activePathId) || homeReadingPaths[0];

  return (
    <section className="w-full bg-surface-container-low py-space-xl border-y border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-semibold">
              Reading Paths &amp; Adoption Guide
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              Recommended Traversal Paths by Role
            </h2>
          </div>
          <Link
            to="/patterns"
            className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
          >
            <span>View all 10 patterns</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Path Selector Tabs */}
        <div className="flex flex-wrap items-center gap-space-xs">
          {homeReadingPaths.map((pathItem) => {
            const isActive = pathItem.id === activePath.id;
            return (
              <button
                key={pathItem.id}
                type="button"
                onClick={() => setActivePathId(pathItem.id)}
                className={`px-space-md py-2 rounded-lg font-body-sm text-body-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant border border-surface-container-high/40 hover:bg-surface-container'
                }`}
              >
                {pathItem.code} · {pathItem.focus}
              </button>
            );
          })}
        </div>

        <Card hoverEffect={false} className="flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/40">
            <div>
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-on-tertiary-container">
                {activePath.code} · {activePath.focus}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                {activePath.audience}
              </h3>
            </div>
            <Badge variant="outline">{activePath.steps.length} Patterns</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {activePath.steps.map((step, index) => {
              const pattern = getPatternById(step.patternId);
              if (!pattern) return null;
              return (
                <Link
                  key={`${activePath.id}-${step.patternId}`}
                  to={`/patterns/${pattern.id}`}
                  className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container border border-surface-container-high/40 flex flex-col justify-between gap-space-sm transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                      <Badge variant="secondary">{pattern.code}</Badge>
                      <span className="font-label-code-sm text-label-code-sm text-outline">
                        0{index + 1}
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-secondary transition-colors mb-1">
                      {pattern.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-code-sm text-label-code-sm font-semibold text-secondary">
                    <span>Open {pattern.code}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};
