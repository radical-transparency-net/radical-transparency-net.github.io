import React from 'react';
import { Link } from 'react-router-dom';
import {
  homeFoundationalStandards,
  homeLifecycleSteps,
  homePositionPaper,
  homeProblemStatement,
} from '../../data/home';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const OverviewNarrativeSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
      {/* Declare -> Verify -> Quantify */}
      <div>
        <div className="mb-space-lg">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-semibold">
            Measuring Interoperability Progress
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
            Three Sequential, Interdependent Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {homeLifecycleSteps.map((step) => (
            <Card key={step.number} hoverEffect={false}>
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-on-tertiary-container font-semibold">
                  Step {step.number}
                </span>
                <span className="font-label-code-sm text-label-code-sm text-outline">
                  {step.number === '01' ? 'Foundational Layer' : 'Downstream Layer'}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Problem Statement + Master Map Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
        <Card hoverEffect={false} className="lg:col-span-7 flex flex-col justify-between gap-space-md">
          <div>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-semibold">
              Context &amp; Problem Statement
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 mb-space-sm">
              From Assumed Compatibility to Maximum Boredom
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
              {homeProblemStatement.assumedCompatibility}
            </p>
            <div className="p-space-md rounded-lg bg-surface-container-low border-l-4 border-on-tertiary-container">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-on-tertiary-container block mb-1">
                Technical Definition · The Declare Step
              </span>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {homeProblemStatement.declareDefinition}
              </p>
            </div>
          </div>

          <div className="pt-space-md border-t border-surface-container-high/40 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {homePositionPaper.citation}
            </p>
            <a
              href={homePositionPaper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body-sm text-body-sm font-semibold text-secondary hover:underline shrink-0"
            >
              <span>Read Paper</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        </Card>

        <Card hoverEffect={false} className="lg:col-span-5 flex flex-col justify-between gap-space-md">
          <div>
            <div className="flex items-center justify-between gap-space-xs mb-space-sm">
              <Badge variant="teal">Master Map</Badge>
              <Link
                to="/patterns"
                className="font-label-code-sm text-label-code-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1"
              >
                <span>Inspect Interactive Overview</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            </div>
            <Link
              to="/patterns"
              className="block rounded-lg bg-surface-container-low p-space-sm border border-surface-container-high/40 hover:border-secondary/40 transition-colors"
            >
              <img
                src="./assets/patterns/rt-patterns-overview.svg"
                alt="Master Map of Radical Transparency Linkset Usage Patterns RT-P01 to RT-P10"
                className="w-full max-w-full h-auto mx-auto"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-space-sm">
            {homeFoundationalStandards.map((group) => (
              <div key={group.category}>
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline block mb-1">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.detail}
                      className="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high font-label-code-sm text-label-code-sm text-on-surface transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
