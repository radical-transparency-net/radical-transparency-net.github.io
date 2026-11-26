import React from 'react';
import { Link } from 'react-router-dom';
import { PatternItem } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface PatternCardProps {
  pattern: PatternItem;
}

export const PatternCard: React.FC<PatternCardProps> = ({ pattern }) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-space-xs mb-space-sm">
          <Badge variant="secondary">{pattern.code}</Badge>
          <span className="font-label-code-sm text-label-code-sm text-outline">
            {pattern.svgPath ? 'SVG + Spec' : 'Client-Side Spec'}
          </span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
          {pattern.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
          {pattern.shortSummary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-space-md">
          {pattern.linkRelations.slice(0, 3).map((rel) => (
            <span
              key={rel}
              className="px-2 py-0.5 rounded bg-surface-container font-label-code-sm text-label-code-sm text-on-surface-variant"
            >
              {rel}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-space-md border-t border-surface-container-high/30 flex items-center justify-between gap-space-sm">
        <Link
          to={`/patterns/${pattern.id}`}
          className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
        >
          <span>View Pattern Details</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
        <a
          href={pattern.respecUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-label-code-sm text-label-code-sm text-outline hover:text-on-surface"
          title="Open normative section in ReSpec"
        >
          <span>ReSpec</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>
    </Card>
  );
};
