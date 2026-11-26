import React from 'react';
import { SemanticAsset } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';

interface SemanticAssetCardProps {
  asset: SemanticAsset;
}

export const SemanticAssetCard: React.FC<SemanticAssetCardProps> = ({ asset }) => {
  return (
    <Card hoverEffect={false} className="flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md pb-space-md border-b border-surface-container-high/40">
        <div>
          <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
            <Badge variant="secondary">{asset.prefix}:</Badge>
            <Badge variant="teal">{asset.status}</Badge>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
            {asset.name}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm shrink-0">
          <a
            href={asset.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors"
          >
            <span>Vocabulary Webpage</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
          <a
            href={asset.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>Source Files</span>
          </a>
        </div>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {asset.description}
      </p>

      <div>
        <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline block mb-1">
          Canonical Namespace URI
        </span>
        <CodeBlock code={asset.namespaceUri} language="uri" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
        <div className="p-space-md rounded-lg bg-surface-container-low">
          <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
            Defined Classes
          </h3>
          <div className="flex flex-wrap gap-2">
            {asset.terms.classes.map((cls) => (
              <code
                key={cls}
                className="px-2.5 py-1 rounded bg-surface-container-lowest border border-outline-variant/40 font-label-code-sm text-label-code-sm text-on-surface"
              >
                {cls}
              </code>
            ))}
          </div>
        </div>

        <div className="p-space-md rounded-lg bg-surface-container-low">
          <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
            Defined Properties
          </h3>
          <div className="flex flex-wrap gap-2">
            {asset.terms.properties.map((prop) => (
              <code
                key={prop}
                className="px-2.5 py-1 rounded bg-surface-container-lowest border border-outline-variant/40 font-label-code-sm text-label-code-sm text-on-surface"
              >
                {prop}
              </code>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
          Published Representations (RT-P03 Variant Menu)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
          {asset.representations.map((rep) => (
            <a
              key={rep.url}
              href={rep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between gap-space-xs border border-surface-container-high/40"
            >
              <div>
                <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                  {rep.label}
                </div>
                <div className="font-label-code-sm text-label-code-sm text-outline">
                  {rep.format}
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary text-[18px]">
                open_in_new
              </span>
            </a>
          ))}
        </div>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-surface-container-high/30 pt-space-md">
        {asset.notes}
      </p>
    </Card>
  );
};
