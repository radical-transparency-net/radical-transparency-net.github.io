import React, { useState } from 'react';
import { CodeBlock } from '../common/CodeBlock';

interface PatternDiagramViewerProps {
  svgPath?: string;
  secondarySvgPath?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  textDiagram?: string;
  alt: string;
  caption?: string;
}

export const PatternDiagramViewer: React.FC<PatternDiagramViewerProps> = ({
  svgPath,
  secondarySvgPath,
  primaryLabel = 'Pattern Landscape',
  secondaryLabel = 'Resource vs. Representation',
  textDiagram,
  alt,
  caption,
}) => {
  const [activeView, setActiveView] = useState<'primary' | 'secondary'>('primary');
  const activeSrc = activeView === 'secondary' && secondarySvgPath ? secondarySvgPath : svgPath;

  return (
    <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high/40">
      {secondarySvgPath && (
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md pb-space-sm border-b border-surface-container-high/40">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline">
            Architecture Diagrams
          </span>
          <div className="flex items-center gap-space-xs">
            <button
              type="button"
              onClick={() => setActiveView('primary')}
              className={`px-space-sm py-1 rounded text-body-sm font-semibold transition-colors ${
                activeView === 'primary'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              onClick={() => setActiveView('secondary')}
              className={`px-space-sm py-1 rounded text-body-sm font-semibold transition-colors ${
                activeView === 'secondary'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      )}

      {activeSrc ? (
        <div className="w-full rounded-lg bg-surface-container-low p-space-md overflow-x-auto flex items-center justify-center">
          <img
            src={activeSrc}
            alt={alt}
            className="max-w-full h-auto mx-auto"
          />
        </div>
      ) : textDiagram ? (
        <CodeBlock code={textDiagram} language="text" multiline />
      ) : null}

      {caption && (
        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant text-center">
          {caption}
        </p>
      )}
    </div>
  );
};
