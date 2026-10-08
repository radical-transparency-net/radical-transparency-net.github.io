import React from 'react';

export const TheoryHero: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Main Hero Copy (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high w-fit text-secondary font-label-code-sm text-label-code-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>EOSC SEMANTIC INTEROPERABILITY FRAMEWORK</span>
            </div>
            <h1 className="text-display-hero font-display-hero text-on-surface tracking-tight leading-tight">
              The Paradigm of Radical Transparency
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              True semantic interoperability fails when cross-walks operate within closed black boxes. The <strong className="text-on-surface font-semibold">Radical Transparency</strong> paradigm replaces opaque schema translations with completely auditable, machine-verifiable, and community-curated data lineages, ensuring European Open Science Cloud (EOSC) assets are permanently reliable across autonomous nodes.
            </p>
          </div>

          {/* Pillars at a Glance Card (4 cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high/40 flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high/30">
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Pillars at a Glance
              </span>
              <span className="material-symbols-outlined text-secondary text-[20px]">
                verified
              </span>
            </div>

            <div className="flex flex-col gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-space-sm rounded">
                <span>Cryptographic Signatures</span>
                <span className="font-label-code-sm text-label-code-sm text-on-tertiary-container font-semibold">
                  Ed25519 Linked
                </span>
              </div>
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-space-sm rounded">
                <span>Automated Continuous CI</span>
                <span className="font-label-code-sm text-label-code-sm text-secondary font-semibold">
                  SHACL / SPARQL
                </span>
              </div>
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-space-sm rounded">
                <span>FAIR Actionability</span>
                <span className="font-label-code-sm text-label-code-sm text-on-surface font-semibold">
                  100% Machine-First
                </span>
              </div>
            </div>

            <a
              href="#matrix-breakdown"
              className="inline-flex items-center justify-center gap-1.5 px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm mt-1"
            >
              <span>Explore Comparison Matrix</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
