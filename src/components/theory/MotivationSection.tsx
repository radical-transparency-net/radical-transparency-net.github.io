import React from 'react';

export const MotivationSection: React.FC = () => {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-surface-container-high/40 flex flex-col gap-space-lg">
      <div className="flex flex-col gap-space-xs">
        <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-wider font-semibold">
          Strategic Directive
        </span>
        <h2 className="text-headline-lg font-headline-lg text-on-surface font-bold">
          The EOSC Connection & Motivation
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Extracted and synthesized from the official <code className="font-label-code-md text-label-code-md text-secondary">motivation.md</code> specifications of the European Open Science Cloud Semantic Interoperability Task Force.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {/* Item 1 */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl border border-surface-container-high/40">
          <div className="flex items-center gap-space-sm text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[28px]">biotech</span>
            <h3 className="text-title-md font-title-md text-on-surface font-semibold">
              Cross-Disciplinary Synthesis
            </h3>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Major societal challenges—from climate impact on pandemics to renewable battery chemistry—require uniting disparate datasets from ESFRI clusters. Without radical semantic openness, cross-domain queries hit semantic dead ends.
          </p>
          <div className="mt-auto pt-space-sm">
            <span className="font-label-code-sm text-label-code-sm text-outline">
              Cluster Impact: Life Sci + Enviro
            </span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl border border-surface-container-high/40">
          <div className="flex items-center gap-space-sm text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[28px]">account_balance</span>
            <h3 className="text-title-md font-title-md text-on-surface font-semibold">
              EIF Regulatory Compliance
            </h3>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            The European Interoperability Framework requires clear specification of data formats, semantic representations, and automated conformance tests. Radical Transparency transforms abstract guidance into machine-executed governance.
          </p>
          <div className="mt-auto pt-space-sm">
            <span className="font-label-code-sm text-label-code-sm text-outline">
              Target: EIF Semantic Layer
            </span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl border border-surface-container-high/40">
          <div className="flex items-center gap-space-sm text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
            <h3 className="text-title-md font-title-md text-on-surface font-semibold">
              Autonomous AI/FAIR Integration
            </h3>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Autonomous scientific agents and Large Knowledge Models cannot rely on subjective human mediation. They require unambiguous, self-describing provenance trees to reliably execute federated SPARQL queries.
          </p>
          <div className="mt-auto pt-space-sm">
            <span className="font-label-code-sm text-label-code-sm text-outline">
              Readiness: FAIR Principle I3 & R1.3
            </span>
          </div>
        </div>
      </div>

      {/* Motivation Highlight Box */}
      <div className="bg-surface-container p-space-lg rounded-xl flex flex-col md:flex-row items-center gap-space-lg border border-surface-container-high/40">
        <div className="w-16 h-16 rounded-lg bg-primary-container text-secondary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[32px]">format_quote</span>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-code-sm text-label-code-sm text-on-surface font-bold uppercase tracking-wider">
            FROM THE CHARTER MANIFESTO:
          </span>
          <p className="text-body-md font-body-md text-on-surface-variant italic leading-relaxed">
            “Interoperability cannot be achieved through decree alone; it requires a living ecosystem of machine-actionable declarations that allow any scientist or automated workflow to trace every semantic transformation down to its origin.”
          </p>
        </div>
      </div>
    </section>
  );
};
