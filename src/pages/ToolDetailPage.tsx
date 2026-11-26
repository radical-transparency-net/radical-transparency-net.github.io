import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getToolById } from '../data/tools';
import { getPatternById } from '../data/patterns';
import { BetaNoticeBanner } from '../components/tools/BetaNoticeBanner';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { CodeBlock } from '../components/common/CodeBlock';

export const ToolDetailPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const tool = getToolById(id);

  if (!tool) {
    return (
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
        <Card hoverEffect={false} className="max-w-2xl mx-auto text-center py-space-xl">
          <span className="material-symbols-outlined text-[40px] text-secondary mb-space-sm">
            build_circle
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            Tool Not Found
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
            No tool matches identifier <code className="font-mono">{id || '(empty)'}</code>. Browse the beta tooling overview for webmap-ER, lod_docker_webserver, and wrx.
          </p>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to Tools Overview</span>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Header Band */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            <Link to="/tools" className="hover:text-on-surface hover:underline">
              Tools
            </Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">{tool.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm mb-space-sm">
            <Badge variant="secondary">{tool.category}</Badge>
            <Badge variant="outline">{tool.status}</Badge>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-xs">
            {tool.name}
          </h1>
          <p className="font-headline-sm text-headline-sm text-on-tertiary-container mb-space-md">
            {tool.tagline}
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
            {tool.summary}
          </p>

          <div className="flex flex-wrap items-center gap-space-md">
            {tool.liveUrl && (
              <a
                href={tool.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-secondary text-on-secondary font-body-sm text-body-sm font-semibold hover:bg-secondary-container transition-colors shadow-sm"
              >
                <span>Open Live Beta App</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            )}
            <a
              href={tool.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>View Repository on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        <BetaNoticeBanner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
          <Card hoverEffect={false}>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary">
              Architecture &amp; Role
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-space-sm">
              What {tool.name} Does
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {tool.description}
            </p>
          </Card>

          <Card hoverEffect={false}>
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-on-tertiary-container">
              Capabilities
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-space-sm">
              Key Features
            </h2>
            <ul className="flex flex-col gap-space-sm">
              {tool.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <section>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
            Quickstart
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            {tool.quickstartTitle}
          </p>
          <CodeBlock
            code={tool.quickstartSnippet}
            language={tool.quickstartLanguage}
            multiline
          />
        </section>

        <Card hoverEffect={false}>
          <h2 className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
            Related RT-Patterns
          </h2>
          <div className="flex flex-wrap gap-2">
            {tool.relatedPatternIds.map((pid) => {
              const pattern = getPatternById(pid);
              if (!pattern) return null;
              return (
                <Link
                  key={pid}
                  to={`/patterns/${pattern.id}`}
                  className="px-3 py-1.5 rounded bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary font-label-code-sm text-label-code-sm font-semibold transition-colors"
                >
                  {pattern.code}: {pattern.title}
                </Link>
              );
            })}
          </div>
        </Card>

        <div className="pt-space-md border-t border-surface-container-high/40">
          <Link
            to="/tools"
            className="inline-flex items-center gap-space-xs font-body-sm text-body-sm font-semibold text-secondary hover:underline"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>All Beta Tools</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
