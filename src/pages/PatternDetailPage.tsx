import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAdjacentPatterns, getPatternById } from '../data/patterns';
import { PatternDiagramViewer } from '../components/patterns/PatternDiagramViewer';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { CodeBlock } from '../components/common/CodeBlock';

export const PatternDetailPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const pattern = getPatternById(id);

  if (!pattern) {
    return (
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
        <Card hoverEffect={false} className="max-w-2xl mx-auto text-center py-space-xl">
          <span className="material-symbols-outlined text-[40px] text-secondary mb-space-sm">
            search_off
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            Pattern Not Found
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
            No pattern matches identifier <code className="font-mono">{id || '(empty)'}</code>. Available patterns span RT-P01 through RT-P10.
          </p>
          <Link
            to="/patterns"
            className="inline-flex items-center gap-2 px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to Patterns Overview</span>
          </Link>
        </Card>
      </div>
    );
  }

  const { prev, next } = getAdjacentPatterns(pattern.id);

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Header Band */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            <Link to="/patterns" className="hover:text-on-surface hover:underline">
              Patterns
            </Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">{pattern.code}</span>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm mb-space-sm">
            <Badge variant="secondary">{pattern.code}</Badge>
            <Badge variant="teal">Declare Specification</Badge>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">
            {pattern.title}
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
            {pattern.shortSummary}
          </p>

          <div className="flex flex-wrap items-center gap-space-md">
            <a
              href={pattern.respecUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
            >
              <span>Open in ReSpec</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
            <a
              href={pattern.githubSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface border border-outline-variant/40 font-body-sm text-body-sm font-semibold hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>Source Markdown on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        {pattern.cautionNote && (
          <div className="rounded-xl bg-surface-container border border-secondary/30 p-space-lg flex items-start gap-space-md">
            <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">
              info
            </span>
            <div>
              <h2 className="font-title-md text-title-md text-on-surface font-bold mb-1">
                Scope &amp; Applicability Note
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pattern.cautionNote}
              </p>
            </div>
          </div>
        )}

        {/* Goal and Motivation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
          <Card hoverEffect={false}>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-on-tertiary-container">
              Pattern Goal
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-space-sm">
              What This Pattern Achieves
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {pattern.goal}
            </p>
          </Card>

          <Card hoverEffect={false}>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary">
              Architectural Motivation
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-space-sm">
              Why It Matters
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {pattern.motivation}
            </p>
          </Card>
        </div>

        {/* Diagram / Sketch */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-md">
            Architecture Sketch
          </h2>
          <PatternDiagramViewer
            svgPath={pattern.svgPath}
            textDiagram={pattern.textDiagram}
            alt={`${pattern.code} ${pattern.title} architecture diagram`}
            caption={`Diagram for ${pattern.code}: ${pattern.title}`}
          />
        </section>

        {/* Primary Encoding */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
            Primary Encoding
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            {pattern.encodingTitle}
          </p>
          <CodeBlock
            code={pattern.encodingSnippet}
            language={pattern.encodingLanguage}
            multiline
          />
        </section>

        {/* Relations, Standards, Related Patterns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
          <Card hoverEffect={false}>
            <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
              Link Relations Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {pattern.linkRelations.map((rel) => (
                <span
                  key={rel}
                  className="px-2.5 py-1 rounded bg-surface-container font-label-code-sm text-label-code-sm text-on-surface"
                >
                  {rel}
                </span>
              ))}
            </div>
          </Card>

          <Card hoverEffect={false}>
            <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
              Standards &amp; Specifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {pattern.standards.map((std) => (
                <Badge key={std} variant="outline">
                  {std}
                </Badge>
              ))}
            </div>
          </Card>

          <Card hoverEffect={false}>
            <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
              Related Patterns
            </h3>
            <div className="flex flex-wrap gap-2">
              {pattern.relatedPatternIds.map((relId) => {
                const related = getPatternById(relId);
                if (!related) return null;
                return (
                  <Link
                    key={relId}
                    to={`/patterns/${related.id}`}
                    className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary font-label-code-sm text-label-code-sm font-semibold transition-colors"
                  >
                    {related.code}: {related.title}
                  </Link>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Previous / Next Pattern Navigation */}
        <div className="pt-space-lg border-t border-surface-container-high/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
          {prev ? (
            <Link
              to={`/patterns/${prev.id}`}
              className="flex items-center gap-space-sm px-space-md py-3 rounded-lg bg-surface-container-lowest border border-surface-container-high/40 hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-secondary">arrow_back</span>
              <div>
                <div className="font-badge-caps text-badge-caps uppercase text-outline">Previous</div>
                <div className="font-title-md text-title-md text-on-surface font-semibold">
                  {prev.code} · {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/patterns/${next.id}`}
              className="flex items-center justify-end gap-space-sm px-space-md py-3 rounded-lg bg-surface-container-lowest border border-surface-container-high/40 hover:bg-surface-container transition-colors text-right"
            >
              <div>
                <div className="font-badge-caps text-badge-caps uppercase text-outline">Next</div>
                <div className="font-title-md text-title-md text-on-surface font-semibold">
                  {next.code} · {next.title}
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary">arrow_forward</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default PatternDetailPage;
