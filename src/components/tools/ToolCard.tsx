import React from 'react';
import { Link } from 'react-router-dom';
import { ToolItem } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface ToolCardProps {
  tool: ToolItem;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-sm">
          <Badge variant="secondary">{tool.category}</Badge>
          <Badge variant="outline">{tool.status}</Badge>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
          {tool.name}
        </h3>
        <p className="font-label-code-sm text-label-code-sm text-on-tertiary-container mb-space-sm">
          {tool.tagline}
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
          {tool.summary}
        </p>
      </div>

      <div className="pt-space-md border-t border-surface-container-high/30 flex flex-wrap items-center justify-between gap-space-sm">
        <Link
          to={`/tools/${tool.id}`}
          className="inline-flex items-center gap-1 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
        >
          <span>View Tool Details</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>

        <div className="flex items-center gap-space-sm">
          {tool.liveUrl && (
            <a
              href={tool.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-label-code-sm text-label-code-sm text-on-tertiary-container hover:underline"
            >
              <span>Live Beta</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          )}
          <a
            href={tool.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-label-code-sm text-label-code-sm text-outline hover:text-on-surface"
          >
            <span>GitHub</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>
    </Card>
  );
};
