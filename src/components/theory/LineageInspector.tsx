import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleLineageTurtle } from '../../data/theory';

export const LineageInspector: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const purl = 'https://purl.org/eosc/linksets/env-life-v2';

  const handleCopy = () => {
    navigator.clipboard.writeText(purl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-space-xl">
      {/* Live PURL Inspector */}
      <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high/40 flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[24px]">
              terminal
            </span>
            <h2 className="text-title-md font-title-md text-on-surface font-semibold">
              Inspect a Radically Transparent Linkset Declaration
            </h2>
          </div>
          <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-code-sm text-label-code-sm border border-outline-variant/30">
            RDF / Turtle Preview
          </span>
        </div>

        <div className="bg-primary-container p-space-md rounded-lg text-surface-container-lowest font-label-code-md text-label-code-md overflow-x-auto border border-outline/20">
          <pre className="leading-relaxed font-mono whitespace-pre text-sm">
            <code>{sampleLineageTurtle}</code>
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs text-body-sm font-body-sm text-outline">
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-1 text-on-tertiary-container font-medium">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              SHACL Shape Conforming
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">key</span>
              Signed: EOSC-CA-2025
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-space-sm py-1.5 rounded bg-surface-container-high text-on-surface hover:bg-surface-container font-label-code-sm text-label-code-sm transition-colors border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-[14px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'PURL Copied!' : 'Copy Resolvable PURL'}</span>
          </button>
        </div>
      </section>

      {/* Operationalize Next Steps Callouts */}
      <section className="flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-wider font-semibold">
            Continuous Path
          </span>
          <h2 className="text-headline-md font-headline-md text-on-surface font-bold">
            Operationalize Radical Transparency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
          {/* Callout 1 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high/40 flex flex-col justify-between gap-space-lg">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-badge-caps text-badge-caps uppercase">
                  Specification Guide
                </span>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  description
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                Conformity Profiles Architecture
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Read how <code className="font-label-code-sm text-secondary font-mono">conformity-profiles.md</code> formalizes syntactic and semantic invariants with executable SHACL test suites.
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-md border-t border-surface-container-high/30">
              <Link
                to="/developer"
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
              >
                <span>Read Conformity Profiles</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Callout 2 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high/40 flex flex-col justify-between gap-space-lg">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase font-semibold">
                  Developer SDK
                </span>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  terminal
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                Developer Hub & Tooling
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Integrate the EOSC CLI and GitHub Actions workflows to validate linksets on pull request and verify PURL resolution uptime automatically.
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-md border-t border-surface-container-high/30">
              <Link
                to="/developer"
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-secondary text-on-secondary font-body-sm text-body-sm font-semibold hover:bg-secondary-container transition-colors shadow-sm"
              >
                <span>Explore Developer Tooling</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
