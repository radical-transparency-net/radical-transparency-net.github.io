import React from 'react';
import { toolsData } from '../data/tools';
import { BetaNoticeBanner } from '../components/tools/BetaNoticeBanner';
import { ToolCard } from '../components/tools/ToolCard';
import { Badge } from '../components/common/Badge';

export const ToolsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <Badge variant="secondary">Ecosystem Tooling</Badge>
            <Badge variant="outline">Beta — Not Fully Released</Badge>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md max-w-4xl">
            Radical Transparency Tooling (Beta)
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            Interactive diagnostic, testbed, and extraction tools supporting the RT-Patterns lifecycle. Each tool is currently in beta development and has its own detail page with technical capabilities, quickstart commands, and repository links.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        <BetaNoticeBanner />

        <section>
          <div className="mb-space-lg">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline">
              Active Beta Repositories
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              Tools Overview
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
            {toolsData.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolsPage;
