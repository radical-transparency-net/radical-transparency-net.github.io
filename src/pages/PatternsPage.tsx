import React from 'react';
import { patternsOverviewMeta, patternsData } from '../data/patterns';
import { PatternCard } from '../components/patterns/PatternCard';
import { PatternDiagramViewer } from '../components/patterns/PatternDiagramViewer';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';

export const PatternsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Hero Section */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <Badge variant="teal">Declare Layer Specification</Badge>
            <Badge variant="outline">RT-P01 to RT-P10</Badge>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md max-w-4xl">
            {patternsOverviewMeta.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
            {patternsOverviewMeta.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-space-md">
            <a
              href={patternsOverviewMeta.respecUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
            >
              <span>Read Normative ReSpec Document</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
            <a
              href={patternsOverviewMeta.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface border border-outline-variant/40 font-body-sm text-body-sm font-semibold hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>spec-linkset-usage-patterns on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        {/* Declare -> Verify -> Quantify Steps */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
            {patternsOverviewMeta.steps.map((item) => (
              <Card key={item.step} hoverEffect={false}>
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-semibold">
                  {item.step}
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-space-xs mb-space-xs">
                  {item.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Overview Architecture Diagram */}
        <section>
          <div className="mb-space-md">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline">
              Ecosystem Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              How the Ten Patterns Interlock
            </h2>
          </div>
          <PatternDiagramViewer
            svgPath={patternsOverviewMeta.overviewSvgPath}
            secondarySvgPath={patternsOverviewMeta.subjectsSvgPath}
            primaryLabel="RT-Patterns Overview"
            secondaryLabel="Resource vs. Representation Profiling"
            alt="Radical Transparency Linkset Usage Patterns architectural overview"
            caption="Conceptual landscape of RT-P01 to RT-P10 and scope distinction between resource-level and representation-level profiling."
          />
        </section>

        {/* Pattern Catalogue Grid */}
        <section>
          <div className="mb-space-lg">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline">
              Pattern Catalogue
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              All 10 Linkset Usage Patterns
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Select any pattern for its goal, motivation, architectural sketch, primary encoding, and links to the normative specification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
            {patternsData.map((pattern) => (
              <PatternCard key={pattern.id} pattern={pattern} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatternsPage;
